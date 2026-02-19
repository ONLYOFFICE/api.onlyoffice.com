import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove members from a group

This example demonstrates how to remove one or more members from a group in ONLYOFFICE DocSpace using the API.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/remove-members-from-group.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/remove-members-from-group.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set your DocSpace portal URL and API key
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with API key
  const HEADERS = {
    Authorization: API_KEY,
    'Content-Type': 'application/json',
  };

  // Step 1: Remove members from a group
  async function removeGroupMembers(groupId, members) {
    const url = `${API_HOST}/api/2.0/group/${groupId}/members`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify({ members }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Remove members failed. Status code: ${res.status}, Message: ${text}`);
      return;
    }

    console.log(`Members removed from group ${groupId}: ${JSON.stringify(members)}`);
  }

  // Run the method
  (async () => {
    try {
      console.log('Removing members from the group...');
      await removeGroupMembers(
        'c652dba3-210e-436d-b264-df5ceda0a48e', // Replace with your group ID
        ['4c65a238-ca50-4374-b904-0d51d4c1822b'] // Replace with member IDs to remove
      );
    } catch (err) {
      console.log(`Remove members error: ${err.message}`);
    }
  })();
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

  # Step 1: Remove members from a group
  def remove_group_members(group_id, members):
    url = f'{API_HOST}/api/2.0/group/{group_id}/members'
    data = { 'members': members }

    response = requests.delete(url, json=data, headers=headers)

    if response.status_code == 200:
      print(f'Members removed from group {group_id}: {members}')
    else:
      print(f'Remove members failed. Status code: {response.status_code}, Message: {response.text}')

  # Run the method
  if __name__ == '__main__':
    print('Removing members from the group...')
    remove_group_members(
      'c652dba3-210e-436d-b264-df5ceda0a48e',  # Replace with your group ID
      ['4c65a238-ca50-4374-b904-0d51d4c1822b']  # Replace with member IDs to remove
    )
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A DELETE request is sent to [/api/2.0/group/:id/members](/docspace/api-backend/usage-api/remove-members-from) with the following payload:

- `members`: An array of user UUIDs to remove from the group.

If successful, the API confirms removal (HTTP `200`). Depending on configuration, the response may include updated group information or a boolean `response: true`.