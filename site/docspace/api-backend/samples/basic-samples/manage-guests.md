import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage a Guest User

This example demonstrates how to manage a guest user in ONLYOFFICE DocSpace using the API. The script includes two main operations:

- Approving a guest who was invited via sharing.
- Deleting the guest by their unique ID.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set your DocSpace portal URL, access token, and guest email
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';
  const EMAIL = 'guest@example.com';

  // Headers with authorization token
  const HEADERS = {
    Authorization: API_KEY,
    'Content-Type': 'application/json',
  };

  // Step 1: Approve a guest invited via share
  async function approveGuest(email) {
    const url = `${API_HOST}/api/2.0/people/guests/share/approve`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ email }),
    });

    const raw = await res.text();
    console.log('Status Code:', res.status);
    console.log('Raw Response:', raw);

    if (!res.ok) {
      throw new Error('Failed to approve guest — verify that the guest was invited via share.');
    }

    const data = JSON.parse(raw);
    const guest = data?.response ?? {};
    console.log(`Approved guest: ${guest.displayName} (${guest.email})`);
    return String(guest.id);
  }

  // Step 2: Delete a guest by ID
  async function deleteGuest(userId) {
    const url = `${API_HOST}/api/2.0/people/guests`;
    const payload = { userIds: [userId], resendAll: false };

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    const raw = await res.text();
    console.log('Status Code (delete):', res.status);
    console.log('Raw Response (delete):', raw);

    if (!res.ok) {
      throw new Error(`Failed to delete guest: ${raw}`);
    }

    console.log(`Guest with ID ${userId} deleted successfully.`);
  }

  // Run the guest management flow
  (async () => {
    try {
      console.log('Approving guest...');
      const guestId = await approveGuest(EMAIL);

      console.log('\nDeleting guest...');
      await deleteGuest(guestId);
    } catch (err) {
      console.error(err.message);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set your DocSpace portal URL, access token, and guest email
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'
  EMAIL = 'guest@example.com'

  # Headers with authorization token
  HEADERS = {
    'Authorization': API_KEY,
    'Content-Type': 'application/json'
  }

  # Step 1: Approve a guest invited via share
  def approve_guest(email: str) -> str:
    url = f'{API_HOST}/api/2.0/people/guests/share/approve'
    resp = requests.post(url, headers=HEADERS, json={'email': email})

    print('Status Code:', resp.status_code)
    print('Raw Response:', resp.text)

    if resp.status_code == 200:
      guest = resp.json().get('response', {})
      print(f'Approved guest: {guest.get('displayName')} ({guest.get('email')})')
      return str(guest.get('id'))
    else:
      raise Exception('Failed to approve guest — verify that the guest was invited via share.')

  # Step 2: Delete a guest by ID
  def delete_guest(user_id: str) -> None:
    url = f'{API_HOST}/api/2.0/people/guests'
    payload = {'userIds': [user_id], 'resendAll': False}
    resp = requests.delete(url, headers=HEADERS, json=payload)

    print('Status Code (delete):', resp.status_code)
    print('Raw Response (delete):', resp.text)

    if resp.status_code == 200:
      print(f'Guest with ID {user_id} deleted successfully.')
    else:
      raise Exception(f'Failed to delete guest: {resp.text}')

  # Run the guest management flow
  if __name__ == '__main__':
    print('Approving guest...')
    guest_id = approve_guest(EMAIL)

    print('\nDeleting guest...')
    delete_guest(guest_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Approve a guest

A POST request is sent to [/api/2.0/people/guests/share/approve](/docspace/api-backend/usage-api/approve-guest-share-link) with:

- `email`: The guest's email address (must match an existing share invitation).

On success, the API returns the guest's details including their `id`, which will be used for deletion.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function approveGuest(email) {
    const url = `${API_HOST}/api/2.0/people/guests/share/approve`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ email }),
    });

    const raw = await res.text();
    console.log('Status Code:', res.status);
    console.log('Raw Response:', raw);

    if (!res.ok) {
      throw new Error('Failed to approve guest — verify that the guest was invited via share.');
    }

    const data = JSON.parse(raw);
    const guest = data?.response ?? {};
    console.log(`Approved guest: ${guest.displayName} (${guest.email})`);
    return String(guest.id);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def approve_guest(email: str) -> str:
    url = f'{API_HOST}/api/2.0/people/guests/share/approve'
    resp = requests.post(url, headers=HEADERS, json={'email': email})

    print('Status Code:', resp.status_code)
    print('Raw Response:', resp.text)

    if resp.status_code == 200:
      guest = resp.json().get('response', {})
      print(f'Approved guest: {guest.get('displayName')} ({guest.get('email')})')
      return str(guest.get('id'))
    else:
      raise Exception('Failed to approve guest — verify that the guest was invited via share.')
  ```

  </TabItem>
</Tabs>

## Step 2: Delete a guest

A DELETE request is sent to [/api/2.0/people/guests](/docspace/api-backend/usage-api/delete-guests) with:

- `userIds`: List of guest user IDs to delete.
- `resendAll`: Set to false to avoid sending additional notifications.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function deleteGuest(userId) {
    const url = `${API_HOST}/api/2.0/people/guests`;
    const payload = { userIds: [userId], resendAll: false };

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    const raw = await res.text();
    console.log('Status Code (delete):', res.status);
    console.log('Raw Response (delete):', raw);

    if (!res.ok) {
      throw new Error(`Failed to delete guest: ${raw}`);
    }

    console.log(`Guest with ID ${userId} deleted successfully.`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_guest(user_id: str) -> None:
    url = f'{API_HOST}/api/2.0/people/guests'
    payload = {'userIds': [user_id], 'resendAll': False}
    resp = requests.delete(url, headers=HEADERS, json=payload)

    print('Status Code (delete):', resp.status_code)
    print('Raw Response (delete):', resp.text)

    if resp.status_code == 200:
      print(f'Guest with ID {user_id} deleted successfully.')
    else:
      raise Exception(f'Failed to delete guest: {resp.text}')
  ```

  </TabItem>
</Tabs>