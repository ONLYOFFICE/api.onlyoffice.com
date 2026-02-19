import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update user role

This example demonstrates how to automate user onboarding in ONLYOFFICE DocSpace using the API. It covers creating a user, retrieving their profile, and updating their role.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/update-user-role.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/update-user-role.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Create a new user
  async function createUser(firstName, lastName, email) {
    const url = `${API_HOST}/api/2.0/people`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ firstName, lastName, email }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.log(`User creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    const userId = json?.response?.id;
    console.log(`User created successfully: ${userId}`);
    return userId;
  }

  // Step 2: Retrieve a user by ID
  async function getUser(userId) {
    const url = `${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const t = await res.text();
      console.log(`User retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const userData = await res.json();
    console.log('User retrieved:', userData);
    return userData;
  }

  // Step 3: Update user role
  async function updateUserRole(userId, role) {
    const url = `${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ role }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.log(`User role update failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    console.log(`User ${userId} role updated to ${role}`);
  }

  // Run
  (async () => {
    const userId = await createUser('John', 'Doe', 'john.doe@example.com');

    if (userId) {
      await getUser(userId);
      await updateUserRole(userId, 'Manager');
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
 
  # Set API base URL
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'
 
  # Headers with API key for authentication
  HEADERS = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }
 
  # Step 1: Create a new user
  def create_user(first_name, last_name, email):
    url = f'{API_HOST}/api/2.0/people'
    data = {
      'firstName': first_name,
      'lastName': last_name,
      'email': email
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      user_id = response.json()['response']['id']
      print(f'User created successfully: {user_id}')
      return user_id
    else:
      print(f"User creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None
 
  # Step 2: Retrieve a user by ID
  def get_user(user_id):
    url = f'{API_HOST}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      user_data = response.json()
      print(f'User retrieved: {user_data}')
      return user_data
    else:
      print(f"User retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  
  # Step 3: Update user role
  def update_user_role(user_id, role):
    url = f'{API_HOST}/api/2.0/people/{user_id}'
    data = {'role': role}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f'User {user_id} role updated to {role}')
    else:
      print(f"User role update failed. Status code: {response.status_code}, Message: {response.text}")

  if __name__ == "__main__":
    # Step 1: Create a new user
    user_id = create_user("John", "Doe", "john.doe@example.com")
 
    if user_id:
      # Step 2: Retrieve user information
      get_user(user_id)

      # Step 3: Update user role
      update_user_role(user_id, "Manager")
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a user

A POST request is sent to [/api/2.0/people](/docspace/api-backend/usage-api/add-member) with:

- `firstName`: The user's first name.
- `lastName`: The user's last name.
- `email`: The user's email address.

The API returns a user ID, which is required for further operations.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createUser(firstName, lastName, email) {
    const url = `${API_HOST}/api/2.0/people`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ firstName, lastName, email }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.log(`User creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    const userId = json?.response?.id;
    console.log(`User created successfully: ${userId}`);
    return userId;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_user(first_name, last_name, email):
    url = f'{API_HOST}/api/2.0/people'
    data = {
      'firstName': first_name,
      'lastName': last_name,
      'email': email
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      user_id = response.json()['response']['id']
      print(f'User created successfully: {user_id}')
      return user_id
    else:
      print(f"User creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve a user by ID

A GET request is sent to [/api/2.0/people/:userId](/docspace/api-backend/usage-api/get-profile-by-user-id) to fetch user details.

The response includes the user's profile information such as `name`, `email`, and `assigned roles`.

This step ensures that the user exists before making any updates or deletions.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getUser(userId) {
    const url = `${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const t = await res.text();
      console.log(`User retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const userData = await res.json();
    console.log('User retrieved:', userData);
    return userData;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_user(user_id):
    url = f'{API_HOST}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      user_data = response.json()
      print(f'User retrieved: {user_data}')
      return user_data
    else:
      print(f"User retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Update user role

A PUT request is sent to [/api/2.0/people/:userid](/docspace/api-backend/usage-api/update-member).

The request updates the user's profile, applying the new role or permissions.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function updateUserRole(userId, role) {
    const url = `${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ role }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.log(`User role update failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    console.log(`User ${userId} role updated to ${role}`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_user_role(user_id, role):
    url = f'{API_HOST}/api/2.0/people/{user_id}'
    data = {'role': role}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f'User {user_id} role updated to {role}')
    else:
      print(f"User role update failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>
