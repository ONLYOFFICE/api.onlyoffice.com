import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Move members between groups

This example demonstrates how to move all members from one group to another in ONLYOFFICE DocSpace using the API.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/move-members-between-groups.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/move-members-between-groups.py)

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

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };

  // Step 1: Move members from one group to another
  async function moveGroupMembers(fromGroupId, toGroupId) {
    const url = `${API_HOST}/api/2.0/group/${fromGroupId}/members/${toGroupId}`;
    const res = await fetch(url, { method: 'PUT', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Move members failed. Status code: ${res.status}, Message: ${text}`);
      return;
    }

    console.log(`Members moved from group ${fromGroupId} to group ${toGroupId}`);
  }

  // Run
  (async () => {
    try {
      await moveGroupMembers(
        '08e455dc-98c4-4390-b36f-54757080149c', // Replace with source group ID
        '258efd0c-b5b7-4bc9-87ab-e39b2c2eb09c'  // Replace with destination group ID
      );
    } catch (err) {
      console.log(`Move members error: ${err.message}`);
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

  # Headers with API key for authentication
  HEADERS = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}'
  }

  # Step 1: Move members from one group to another
  def move_group_members(from_group_id, to_group_id):
    url = f'{API_HOST}/api/2.0/group/{from_group_id}/members/{to_group_id}'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
      print(f'Members moved from group {from_group_id} to group {to_group_id}')
    else:
      print(f'Move members failed. Status code: {response.status_code}, Message: {response.text}')


  if __name__ == '__main__':
    move_group_members(
      '08e455dc-98c4-4390-b36f-54757080149c',  # Replace with source group ID
      '258efd0c-b5b7-4bc9-87ab-e39b2c2eb09c'   # Replace with destination group ID
    )
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to the [/api/2.0/group/:fromGroupId/members/:toGroupId](/docspace/api-backend/usage-api/move-members-to) endpoint, which moves all members from the source group to the target group.

If successful, the API returns status code 200 and the console output confirms the migration.

A POST request is sent to  with:

- `email`: The guest's email address (must match an existing share invitation).

On success, the API returns the guest's details including their `id`, which will be used for deletion.

