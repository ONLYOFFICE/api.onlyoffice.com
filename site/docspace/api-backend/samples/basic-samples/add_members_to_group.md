import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add members to a group

This example demonstrates how to add one or more members to an existing group in ONLYOFFICE DocSpace using the API. Optionally, you can rename the group and assign a new manager in the same request.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const BASE_URL = 'https://yourportal.onlyoffice.com';

  // User credentials for authentication
  const USER_CREDENTIALS = {
    userName: 'your-user-name',
    password: 'your-password',
  };

  // Step 1: Authenticate with your login and password
  function authenticate() {
    return fetch(`${BASE_URL}/api/2.0/authentication`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(USER_CREDENTIALS),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return null;
      })
      .then((data) => {
        if (!data) return null;
        const authToken = data?.response?.token;
        return authToken || null;
      })
      .catch(() => null);
  }

  // Step 2: Check authentication with a token you received
  function checkAuthentication(token) {
    return fetch(`${BASE_URL}/api/2.0/authentication`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(`User is authenticated with token ${token}.`);
        } else {
          console.log('User is not authenticated or token is invalid.');
        }
      })
      .catch(() => {
        console.log('User is not authenticated or token is invalid.');
      });
  }

  // Run
  authenticate().then((token) => {
    if (token) {
      checkAuthentication(token);
    }
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set your DocSpace portal URL and API key
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with API key
  headers = {
    'Authorization': API_KEY,
    'Content-Type': 'application/json'
  }

  # Step 1: Add members to a group (optionally rename and/or change manager)
  def add_members_to_group(group_id, members, new_name=None, new_manager=None):
    url = f"{API_HOST}/api/2.0/group/{group_id}"
    data = {
        'membersToAdd': members
    }
    if new_name:
      data['groupName'] = new_name
    if new_manager:
      data['groupManager'] = new_manager

    response = requests.put(url, json=data, headers=headers)
    if response.status_code == 200:
      print(f"Members added to group {group_id}: {members}")
      if new_name:
        print(f"Group renamed to: {new_name}")
      if new_manager:
        print(f"New manager assigned: {new_manager}")
    else:
        raise Exception(f"Failed to update group: {response.status_code} {response.text}")

# Run the method
if __name__ == '__main__':
  add_members_to_group(
    'c652dba3-210e-436d-b264-df5ceda0a48e',  # Replace with your group ID
    ['d9be1cab-3ab4-4012-ad60-48218b2713dc', '4c65a238-ca50-4374-b904-0d51d4c1822b'],  # Member UUIDs
    new_name="Project Alpha Team",
    new_manager='c652dba3-210e-436d-b264-df5ceda0a48e'
  )
```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/add-members-to) with the following payload:

- `membersToAdd`: Array of user UUIDs to add to the group.
- `groupName` (optional): New display name for the group.
- `groupManager` (optional): UUID of the new manager.

If the request is successful, the API returns the updated group details and applies all provided changes in a single operation.