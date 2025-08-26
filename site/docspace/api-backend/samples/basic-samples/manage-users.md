import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage users

This example demonstrates how to manage user accounts in ONLYOFFICE DocSpace using the API. It covers creating, retrieving, terminating, and deleting users, following a structured administrative workflow.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
  };

  // Step 1: Create a new user
  async function createUser(firstName, lastName, email) {
    const url = `https://${API_HOST}/api/2.0/people`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ firstName, lastName, email }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to create user: ${res.status} - ${t}`);
      return null;
    }
    const json = await res.json();
    const userId = json?.response?.id;
    console.log(`User created successfully: ${userId}`);
    return userId;
  }

  // Step 2: Retrieve a user by ID
  async function getUser(userId) {
    const url = `https://${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to retrieve user: ${res.status} - ${t}`);
      return null;
    }
    const userData = await res.json();
    console.log('User retrieved:', userData);
    return userData;
  }

  // Step 3: Terminate a user
  async function terminateUser(userId) {
    const url = `https://${API_HOST}/api/2.0/people/status/Terminated`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ userIds: [userId], resendAll: false }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to terminate user: ${res.status} - ${t}`);
      return;
    }
    console.log(`User ${userId} terminated successfully`);
  }

  // Step 4: Delete user profile
  async function deleteUser(userId) {
    const url = `https://${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, { method: 'DELETE', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to delete user: ${res.status} - ${t}`);
      return;
    }
    console.log(`User ${userId} deleted successfully`);
  }

  // Run
  (async () => {
    const userId = await createUser('John', 'Doe', 'john.doe@example.com');
    if (userId) {
      await getUser(userId);
      await terminateUser(userId);
      await deleteUser(userId);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
 
  # Set API base URL
  API_HOST = 'yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'
 
  # Headers with API key for authentication
  HEADERS = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }
 
  # Step 1: Create a new user
  def create_user(first_name, last_name, email):
    url = f'https://{API_HOST}/api/2.0/people'
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
      print(f'Failed to create user: {response.status_code} - {response.text}')
      return None
 
  # Step 2: Retrieve a user by ID
  def get_user(user_id):
    url = f'https://{API_HOST}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      user_data = response.json()
      print(f'User retrieved: {user_data}')
      return user_data
    else:
      print(f'Failed to retrieve user: {response.status_code} - {response.text}')
      return None
  
  # Step 3: Terminate a user
  def terminate_user(user_id):
    url = f'https://{API_HOST}/api/2.0/people/status/Terminated'
    data = {'userIds': [user_id], 'resendAll': False}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f'User {user_id} terminated successfully')
    else:
      print('Failed to terminate user:', response.status_code, response.text)
 
  # Step 4: Delete user profile
  def delete_user(user_id):
    url = f'https://{API_HOST}/api/2.0/people/{user_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print(f'User {user_id} deleted successfully')
    else:
      print('Failed to delete user:', response.status_code, response.text)
 
  if __name__ == "__main__":
    # Step 1: Create a new user
    user_id = create_user("John", "Doe", "john.doe@example.com")
 
    if user_id:
      # Step 2: Retrieve user information
      get_user(user_id)

      # Step 3: Terminate the user
      terminate_user(user_id)
 
      # Step 4: Delete user profile
      delete_user(user_id)
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
    const url = `https://${API_HOST}/api/2.0/people`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ firstName, lastName, email }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to create user: ${res.status} - ${t}`);
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
    url = f'https://{API_HOST}/api/2.0/people'
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
      print(f'Failed to create user: {response.status_code} - {response.text}')
      return None

  if __name__ == "__main__":
    # Step 1: Create a new user
    user_id = create_user("John", "Doe", "john.doe@example.com")
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
    const url = `https://${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to retrieve user: ${res.status} - ${t}`);
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
    url = f'https://{API_HOST}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      user_data = response.json()
      print(f'User retrieved: {user_data}')
      return user_data
    else:
      print(f'Failed to retrieve user: {response.status_code} - {response.text}')
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Terminate a user

A PUT request is sent to [/api/2.0/people/status/Terminated](/docspace/api-backend/usage-api/update-user-status).

The request includes:

- `userIds`: A list of user IDs to be terminated.
- `resendAll`: False — Do not send notifications.

The API marks the user as terminated, meaning they cannot log in but are still present in the system.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function terminateUser(userId) {
    const url = `https://${API_HOST}/api/2.0/people/status/Terminated`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ userIds: [userId], resendAll: false }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to terminate user: ${res.status} - ${t}`);
      return;
    }
    console.log(`User ${userId} terminated successfully`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def terminate_user(user_id):
    url = f'https://{API_HOST}/api/2.0/people/status/Terminated'
    data = {'userIds': [user_id], 'resendAll': False}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f'User {user_id} terminated successfully')
    else:
      print('Failed to terminate user:', response.status_code, response.text)
  ```

  </TabItem>
</Tabs>

## Step 4: Delete a user profile 

A DELETE request is sent to [/api/2.0/people/:userId](/docspace/api-backend/usage-api/delete-member).

The API removes the user permanently, making them unrecoverable.

This step is essential for offboarding employees or cleaning up unused accounts.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function deleteUser(userId) {
    const url = `https://${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, { method: 'DELETE', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to delete user: ${res.status} - ${t}`);
      return;
    }
    console.log(`User ${userId} deleted successfully`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_user(user_id):
    url = f'https://{API_HOST}/api/2.0/people/{user_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print(f'User {user_id} deleted successfully')
    else:
      print('Failed to delete user:', response.status_code, response.text)
  ```

  </TabItem>
</Tabs>
