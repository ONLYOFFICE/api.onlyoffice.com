import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search Users

This example demonstrates how to search for users in ONLYOFFICE DocSpace by a text query, with optional filters for specific fields such as type, department, or role.

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

  // Step 1: Search users by query and optional filters
  async function searchUsers(query, filterBy = null, filterValue = null) {
    const params = new URLSearchParams();
    if (filterBy && filterValue) {
      params.set('filterBy', filterBy);
      params.set('filterValue', filterValue);
    }

    const qs = params.toString();
    const url = `${API_HOST}/api/2.0/people/@search/${encodeURIComponent(query)}${qs ? `?${qs}` : ''}`;

    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to search users: ${text}`);
    }

    const data = await res.json();
    const users = data?.response || [];
    console.log(`Found ${users.length} user(s) for query: '${query}'`);
    for (const user of users) {
      const role = user.isVisitor ? 'Visitor' : 'User';
      console.log(`- ${user.displayName} | ${user.email} | Role: ${role}`);
    }
    return users;
  }

  // Run examples
  (async () => {
    try {
      await searchUsers('john');
      await searchUsers('guest', 'type', 'Visitor');
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

  HEADERS = {'Authorization': API_KEY}

  # Step 1: Search users by query and optional filters
  def search_users(query, filter_by=None, filter_value=None):
    params = {}
    if filter_by and filter_value:
      params['filterBy'] = filter_by
      params['filterValue'] = filter_value

    response = requests.get(
      f'{API_HOST}/api/2.0/people/@search/{query}',
      headers=HEADERS,
      params=params
    )

    if response.status_code == 200:
      users = response.json().get('response', [])
      print(f'Found {len(users)} user(s) for query: '{query}'')
      for user in users:
        role = 'Visitor' if user.get('isVisitor') else 'User'
        print(f'- {user.get('displayName')} | {user.get('email')} | Role: {role}')
      return users
    else:
      raise Exception(f'Failed to search users: {response.text}')

  # Run examples
  if __name__ == '__main__':
    search_users('john')
    search_users('guest', filter_by='type', filter_value='Visitor')
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/people/@search/:query](/docspace/api-backend/usage-api/get-search) with:

Path parameter:

- `query`: Search term (e.g., 'john', 'guest')

Optional query parameters:

- `filterBy`: Field to filter by (e.g., 'type')
- `filterValue`: Value for the filter (e.g., 'Visitor')

The API returns a list of matching users with their display names, email addresses, and roles.