import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update group manager

This example demonstrates how to update group manager in ONLYOFFICE DocSpace.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/update-group-manager.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/update-group-manager.py)

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

  // Step 1: Create a new group and add members
  async function createGroup(groupName, managerId, memberIds) {
    const url = `${API_HOST}/api/2.0/group`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        groupName: groupName,
        groupManager: managerId,
        members: memberIds,
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.log(`Group creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    const groupId = json?.response?.id;
    console.log('Group created successfully:', groupId);
    return groupId;
  }

  // Step 2: Reassign group ownership
  async function reassignGroupManager(groupId, newManagerId) {
    const url = `${API_HOST}/api/2.0/group/${groupId}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ groupManager: newManagerId }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.log(`Group manager reassignment failed. Status code: ${res.status}, Message: ${t}`);
      return;
    }

    console.log(`Group ${groupId} manager reassigned successfully to ${newManagerId}`);
  }

  // Run
  (async () => {
    const manager_user_id = '10001';
    const user_id = '10002';

    // Step 1: Create a new group
    const group_id = await createGroup('Development Team', manager_user_id, [manager_user_id, user_id]);

    if (group_id) {
      // Step 2: Reassign group ownership to user
      await reassignGroupManager(group_id, user_id);
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

  # Step 1: Create a new group and add members
  def create_group(group_name, manager_id, member_ids):
    url = f'{API_HOST}/api/2.0/group'
    data = {
      'groupName': group_name,
      'groupManager': manager_id,
      'members': member_ids
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      group_id = response.json()['response']['id']
      print('Group created successfully:', group_id)
      return group_id
    else:
      print(f"Group creation failed. Status code: {response.status_code}, Message: {response.text}")
 
  # Step 2: Reassign group ownership
  def reassign_group_manager(group_id, new_manager_id):
    url = f'{API_HOST}/api/2.0/group/{group_id}'
    data = {'groupManager': new_manager_id}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f'Group {group_id} manager reassigned successfully to {new_manager_id}')
    else:
      print(f"Group manager reassignment failed. Status code: {response.status_code}, Message: {response.text}")
    
  if __name__ == "__main__":
    manager_user_id = "10001"
    user_id = "10002"

    # Step 1: Create a new group
    group_id = create_group("Development Team", manager_user_id, [manager_user_id, user_id])

    if group_id:
      # Step 2: Reassign group ownership to user
      reassign_group_manager(group_id, user_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a group

A POST request is sent to [/api/2.0/group](/docspace/api-backend/usage-api/add-group) with:

- `groupName`: A new group name.
- `groupManager`: The user ID of the group manager.
- `members`: A list of user IDs to be added to the group.

The API returns a group ID, which is required for further operations.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createGroup(groupName, managerId, memberIds) {
    const url = `${API_HOST}/api/2.0/group`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        groupName: groupName,
        groupManager: managerId,
        members: memberIds,
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.log(`Group creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    const groupId = json?.response?.id;
    console.log('Group created successfully:', groupId);
    return groupId;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_group(group_name, manager_id, member_ids):
    url = f'{API_HOST}/api/2.0/group'
    data = {
      'groupName': group_name,
      'groupManager': manager_id,
      'members': member_ids
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      group_id = response.json()['response']['id']
      print('Group created successfully:', group_id)
      return group_id
    else:
      print(f"Group creation failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>

## Step 2: Reassign group ownership

A PUT request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/update-group) with:

- `group_id`: The group ID.
- `groupManager`: The user ID of the new group manager.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function reassignGroupManager(groupId, newManagerId) {
    const url = `${API_HOST}/api/2.0/group/${groupId}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ groupManager: newManagerId }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.log(`Group manager reassignment failed. Status code: ${res.status}, Message: ${t}`);
      return;
    }

    console.log(`Group ${groupId} manager reassigned successfully to ${newManagerId}`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def reassign_group_manager(group_id, new_manager_id):
    url = f'{API_HOST}/api/2.0/group/{group_id}'
    data = {'groupManager': new_manager_id}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f'Group {group_id} manager reassigned successfully to {new_manager_id}')
    else:
      print(f"Group manager reassignment failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>
