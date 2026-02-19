import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage groups

This example demonstrates how to manage groups in ONLYOFFICE DocSpace using the API. It covers creating, retrieving, updating, and deleting groups through API requests. The script follows a logical sequence to demonstrate how to interact with the group management system in a real-world scenario.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/manage-groups.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/manage-groups.py)

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

  // Step 1: Create a new group
  async function createGroup(groupName, managerId, memberIds) {
    const url = `${API_HOST}/api/2.0/group`;
    const data = { groupName, groupManager: managerId, members: memberIds };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(data) });
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

  // Step 2: Retrieve group by ID
  async function getGroupById(groupId) {
    const url = `${API_HOST}/api/2.0/group/${groupId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Group retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
    const json = await res.json();
    console.log(json);
    return json;
  }

  // Step 3: Update an existing group
  async function updateGroup(groupId, newGroupName) {
    const url = `${API_HOST}/api/2.0/group/${groupId}`;
    const data = { groupName: newGroupName };

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body: JSON.stringify(data) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Group update failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
    const json = await res.json();
    const id = json?.response?.id;
    console.log('Group updated successfully:', id);
    return id;
  }

  // Step 4: Delete a group
  async function deleteGroup(groupId) {
    const url = `${API_HOST}/api/2.0/group/${groupId}`;
    const res = await fetch(url, { method: 'DELETE', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Group deletion failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
    console.log(res.status);
    return res.status;
  }

  // Run sequence
  (async () => {
    try {
      const group_name = 'New Group'; // Replace with actual group name
      const manager_id = '10001';     // Replace with actual manager ID
      const member_ids = ['10001', '10002']; // Replace with actual member IDs

      const groupId = await createGroup(group_name, manager_id, member_ids);
      await getGroupById(groupId);
      await updateGroup(groupId, 'Updated Group Name');
      await deleteGroup(groupId);
    } catch (err) {
      console.error(err.message);
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

  # Step 1: Create a new group
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
 
  # Step 2: Retrieve group by ID
  def get_group_by_id(group_id):
    url = f'{API_HOST}/api/2.0/group/{group_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      group = response.json()
      print(group)
      return group
    else:
      print(f"Group retrieval failed. Status code: {response.status_code}, Message: {response.text}")
 
  # Step 3: Update an existing group
  def update_group(group_id, new_group_name):
    url = f'{API_HOST}/api/2.0/group/{group_id}'
    data = {
      'groupName': new_group_name
    }
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      group_id = response.json()['response']['id']
      print('Group updated successfully:', group_id)
      return group_id
    else:
      print(f"Group update failed. Status code: {response.status_code}, Message: {response.text}")
 
  # Step 4: Delete a group
  def delete_group(group_id):
    url = f'{API_HOST}/api/2.0/group/{group_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print(f"Group {group_id} deleted successfully.")
    else:
      print(f"Group deletion failed. Status code: {response.status_code}, Message: {response.text}")

 
  if __name__ == "__main__":
    group_name = "New Group" # Replace with actual group name
    manager_id = "10001"  # Replace with actual manager ID
    member_ids = ["10001", "10002"]  # Replace with actual member IDs
    # Step 1: Create a new group
    group_id = create_group(group_name, manager_id, member_ids)
 
    # Step 2: Retrieve group details by ID
    get_group_by_id(group_id)
 
    # Step 3: Update the newly created group
    update_group(group_id, "Updated Group Name")
    
    # Step 4: Delete the newly created group
    delete_group(group_id)
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
    const data = { groupName, groupManager: managerId, members: memberIds };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(data) });
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

## Step 2: Retrieve a group by ID

A GET request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/get-group) to fetch group details.

The response includes the group's information.

This step ensures that the group exists before making any updates or deletions.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getGroupById(groupId) {
    const url = `${API_HOST}/api/2.0/group/${groupId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Group retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
    const json = await res.json();
    console.log(json);
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
    def get_group_by_id(group_id):
      url = f'{API_HOST}/api/2.0/group/{group_id}'
      response = requests.get(url, headers=HEADERS)
      if response.status_code == 200:
        group = response.json()
        print(group)
        return group
      else:
        print(f"Group retrieval failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>

## Step 3: Update a group

A PUT request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/update-group).

The request updates the group details and returns a confirmation if successful.

This step simulates renaming or modifying the existing group's properties.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function updateGroup(groupId, newGroupName) {
    const url = `${API_HOST}/api/2.0/group/${groupId}`;
    const data = { groupName: newGroupName };

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body: JSON.stringify(data) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Group update failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
    const json = await res.json();
    const id = json?.response?.id;
    console.log('Group updated successfully:', id);
    return id;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_group(group_id, new_group_name):
    url = f'{API_HOST}/api/2.0/group/{group_id}'
    data = {
      'groupName': new_group_name
    }
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      group_id = response.json()['response']['id']
      print('Group updated successfully:', group_id)
      return group_id
    else:
      print(f"Group update failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>

## Step 4: Delete a group

A DELETE request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/delete-group).

The response confirms the deletion, ensuring that the group no longer appears in the list of groups.

This step is crucial for cleaning up unused or test data.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function deleteGroup(groupId) {
    const url = `${API_HOST}/api/2.0/group/${groupId}`;
    const res = await fetch(url, { method: 'DELETE', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Group deletion failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
    console.log(res.status);
    return res.status;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_group(group_id):
    url = f'{API_HOST}/api/2.0/group/{group_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print(f"Group {group_id} deleted successfully.")
    else:
      print(f"Group deletion failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>
