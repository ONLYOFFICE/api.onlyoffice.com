import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search Users by Status

This example demonstrates how to search for users in ONLYOFFICE DocSpace based on their status (e.g., active, pending, disabled) using the API. Additional filters such as query text, department, or custom fields can be applied.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set your DocSpace portal URL and access token
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  const HEADERS = { Authorization: API_KEY };

  // Step 1: Search users by status with optional filters
  async function searchUsersByStatus({ status = 'active', query = null, filterBy = null, filterValue = null } = {}) {
    const params = new URLSearchParams();
    if (query) params.set('query', query);
    if (filterBy) params.set('filterBy', filterBy);
    if (filterValue) params.set('filterValue', filterValue);

    const url = `${API_HOST}/api/2.0/people/status/${encodeURIComponent(status)}/search${params.toString() ? `?${params.toString()}` : ''}`;

    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to search users: ${text}`);
    }

    const data = await res.json();
    const users = data?.response || [];
    console.log(`Found ${users.length} user(s) with status: ${status}`);
    for (const user of users) {
      console.log(`- ${user.displayName} | Email: ${user.email} | ID: ${user.id}`);
    }
    return users;
  }

  // Example usage
  (async () => {
    try {
      await searchUsersByStatus({
        status: '1',            // Active status code
        query: '*',
        filterBy: 'department',
        filterValue: 'Sales',
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

  # Set your DocSpace portal URL and access token
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  HEADERS = {
    'Authorization': API_KEY
  }

  # Step 1: Search users by status with optional filters
  def search_users_by_status(status='active', query=None, filter_by=None, filter_value=None):
    params = {}
    if query:
      params['query'] = query
    if filter_by:
      params['filterBy'] = filter_by
    if filter_value:
      params['filterValue'] = filter_value

    response = requests.get(
      f'{API_HOST}/api/2.0/people/status/{status}/search',
      headers=HEADERS,
      params=params
    )

    if response.status_code == 200:
      users = response.json().get('response', [])
      print(f'Found {len(users)} user(s) with status: {status}')
      for user in users:
        print(f'- {user.get('displayName')} | Email: {user.get('email')} | ID: {user.get('id')}')
      return users
    else:
      raise Exception(f'Failed to search users: {response.text}')

  # Example usage
  if __name__ == '__main__':
    search_users_by_status(
      status='1',  # Active status code
      query='*',
      filter_by='department',
      filter_value='Sales'
    )
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/people/status/:status/search](/docspace/api-backend/usage-api/search-users-by-status) with:

Path parameter:

- `status`: "1" (Active), "2" (Pending), "3" (Disabled)

Optional query parameters:

- `query`: Search term (supports wildcard `*`)
- `filterBy`: Field to filter by (e.g., "department")
- `filterValue`: Value to match in the specified field