import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search users by extended filter

This example demonstrates how to retrieve a list of users in ONLYOFFICE DocSpace with optional extended filter parameters such as group ID, employee type, administrator status, and result limit.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Config
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  const HEADERS = {
    Authorization: API_KEY,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Step 1: Search users with extended filters
  async function filterUsers({ groupId = null, employeeType = null, isAdmin = true, count = 10 } = {}) {
    const params = new URLSearchParams();
    params.set('count', String(count));
    if (groupId) params.set('groupId', groupId);
    if (employeeType) params.set('employeeType', employeeType);
    if (typeof isAdmin === 'boolean') params.set('isAdministrator', String(isAdmin).toLowerCase());

    const url = `${API_HOST}/api/2.0/people/filter?${params.toString()}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to retrieve users: ${text}`);
    }

    const data = await res.json();
    const users = data?.response || [];
    console.log(`Found ${users.length} user(s) with filters:`);
    for (const user of users) {
      console.log(`- ${user.displayName} | Dept: ${user.department} | Admin: ${user.isAdmin}`);
    }
    return users;
  }

  // Run
  (async () => {
    try {
      await filterUsers({
        groupId: 'e02a91ef-542f-11ee-8c99-0242ac120002',
        employeeType: 'User',
        isAdmin: true,
        count: 5,
      });
    } catch (err) {
      console.error(err.message);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  HEADERS = {
    'Authorization': API_KEY
  }

  # Step 1: Search users with extended filters
  def filter_users(group_id=None, employee_type=None, is_admin=True, count=10):
    params = {
      'count': count
    }
    if group_id:
      params['groupId'] = group_id
    if employee_type:
      params['employeeType'] = employee_type
    if is_admin is not None:
      params['isAdministrator'] = str(is_admin).lower()

    response = requests.get(f'{API_HOST}/api/2.0/people/filter', headers=HEADERS, params=params)

    if response.status_code == 200:
      users = response.json().get('response', [])
      print(f'Found {len(users)} user(s) with filters:')
      for user in users:
        print(f'- {user.get('displayName')} | Dept: {user.get('department')} | Admin: {user.get('isAdmin')}')
      return users
    else:
      raise Exception(f'Failed to retrieve users: {response.text}')

  if __name__ == '__main__':
    filter_users(
      group_id='e02a91ef-542f-11ee-8c99-0242ac120002',
      employee_type='User',
      is_admin=True,
      count=5
    )
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/people/filter](/docspace/api-backend/usage-api/search-users-by-extended-filter) with the following optional query parameters:

- `groupId`: UUID of the group to filter by.
- `employeeType`: "User" or "Visitor".
- `isAdministrator`: Boolean (`true` / `false`) to filter by admin status.
- `count`: Maximum number of results.

The API responds with a list of user objects matching the criteria, including fields like display name, department, and admin status.