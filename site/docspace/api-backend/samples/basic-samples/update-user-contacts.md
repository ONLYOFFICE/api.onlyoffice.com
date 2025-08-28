import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update user contacts

This example demonstrates how to create and retrieve user contacts in ONLYOFFICE DocSpace using API requests. Managing user contacts is crucial for maintaining accurate and up-to-date communication details within the system.

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

  // Step 1: Create or update user contacts
  async function setUserContacts(userId, contacts) {
    const url = `${API_HOST}/api/2.0/people/${userId}/contacts`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ contacts }),
    });

    if (res.ok) {
      console.log(`Contacts updated successfully for user ${userId}`);
    } else {
      const text = await res.text();
      console.log(`Failed to update contacts: ${res.status} - ${text}`);
    }
  }

  // Step 2: Retrieve user contacts
  async function getUserContacts(userId) {
    const url = `${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Failed to retrieve user contacts: ${res.status} - ${text}`);
      return null;
    }

    const userData = await res.json();
    const userContacts = userData?.response?.contacts;

    if (userContacts && userContacts.length) {
      console.log(userContacts);
      return userContacts;
    } else {
      console.log(`No contact found for user ${userId}`);
      return null;
    }
  }

  // Run
  (async () => {
    const user_id = '10001';

    // Step 1: Create or update user contacts
    const contacts = [{ type: 'GTalk', value: 'my@gmail.com' }];
    await setUserContacts(user_id, contacts);

    // Step 2: Retrieve user contacts
    await getUserContacts(user_id);
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
 
  # Step 1: Create or update user contacts
  def set_user_contacts(user_id, contacts):
    url = f'{API_HOST}/api/2.0/people/{user_id}/contacts'
    data = {'contacts': contacts}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f'Contacts updated successfully for user {user_id}')
    else:
      print(f'Failed to update contacts: {response.status_code} - {response.text}')
 
  # Step 2: Retrieve user contacts
  def get_user_contacts(user_id):
    url = f'{API_HOST}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      user_data = response.json()
      try:
        user_contacts = user_data['response']['contacts']
        print(user_contacts)
        return user_contacts
      except:
        print(f'No contact found for user {user_id}')
    else:
      print(f'Failed to retrieve user contacts: {response.status_code} - {response.text}')
      return None
 
  if __name__ == "__main__":
    user_id = "10001"
 
    # Step 1: Create or update user contacts
    contacts = [{'type': 'GTalk', 'value': 'my@gmail.com'}]
    set_user_contacts(user_id, contacts)
    
    # Step 2: Retrieve user contacts
    get_user_contacts(user_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create or update contacts

A PUT request is sent to [/api/2.0/people/:userid/contacts](/docspace/api-backend/usage-api/update-member-contacts) with:

- `contacts`: A list of contacts (e.g., email, phone).

If the contact already exists, it updates the value. Otherwise, it creates a new contact.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function setUserContacts(userId, contacts) {
    const url = `${API_HOST}/api/2.0/people/${userId}/contacts`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ contacts }),
    });

    if (res.ok) {
      console.log(`Contacts updated successfully for user ${userId}`);
    } else {
      const text = await res.text();
      console.log(`Failed to update contacts: ${res.status} - ${text}`);
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def set_user_contacts(user_id, contacts):
    url = f'{API_HOST}/api/2.0/people/{user_id}/contacts'
    data = {'contacts': contacts}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f'Contacts updated successfully for user {user_id}')
    else:
      print(f'Failed to update contacts: {response.status_code} - {response.text}') 'my@gmail.com'}]
    set_user_contacts(user_id, contacts)
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve user contacts

A GET request is sent to [/api/2.0/people/:userId](/docspace/api-backend/usage-api/get-profile-by-user-id) to fetch user details.

The response includes all the contact details associated with the user.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getUserContacts(userId) {
    const url = `${API_HOST}/api/2.0/people/${userId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Failed to retrieve user contacts: ${res.status} - ${text}`);
      return null;
    }

    const userData = await res.json();
    const userContacts = userData?.response?.contacts;

    if (userContacts && userContacts.length) {
      console.log(userContacts);
      return userContacts;
    } else {
      console.log(`No contact found for user ${userId}`);
      return null;
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_user_contacts(user_id):
    url = f'{API_HOST}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      user_data = response.json()
      try:
        user_contacts = user_data['response']['contacts']
        print(user_contacts)
        return user_contacts
      except:
        print(f'No contact found for user {user_id}')
    else:
      print(f'Failed to retrieve user contacts: {response.status_code} - {response.text}')
      return None
  ```

  </TabItem>
</Tabs>
