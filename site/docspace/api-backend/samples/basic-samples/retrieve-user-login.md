import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve user login audit events

This example demonstrates how to retrieve user login audit activities in ONLYOFFICE DocSpace. You can either fetch the most recent login records or apply filters such as user ID, action type, and time period.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/retrieve-user-login.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/retrieve-user-login.py)

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
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Retrieve the most recent login audit events
  async function getLastLoginEvents() {
    const url = `${API_HOST}/api/2.0/security/audit/login/last`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Login events retrieval failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }

    const loginEvents = await res.json();
    console.log('Last login events retrieved successfully:', loginEvents);
    return loginEvents;
  }

  // Step 2: Retrieve login events using filters
  async function getLoginEventsByFilter({ userId = null, action = null, startDate = null, endDate = null } = {}) {
    const params = new URLSearchParams();
    if (userId) params.set('userId', userId);
    if (action !== null && action !== undefined) params.set('action', String(action)); // 0=login, 1=logout
    if (startDate) params.set('from', startDate);
    if (endDate) params.set('to', endDate);

    const url = `${API_HOST}/api/2.0/security/audit/login/filter${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Filtered login events retrieval failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }

    const filteredEvents = await res.json();
    console.log('Filtered login events retrieved successfully:', filteredEvents);
    return filteredEvents;
  }

  // Example usage
  (async () => {
    console.log('\nRetrieving the most recent login events:');
    await getLastLoginEvents();

    const user_id = 'user_id_here'; // Replace with actual user ID
    const action = 0;               // 0 = login, 1 = logout
    const start_date = '2025-01-01';
    const end_date = '2025-12-31';

    console.log(`\nRetrieving login events for user ID ${user_id} from ${start_date} to ${end_date}:`);
    await getLoginEventsByFilter({
      userId: user_id,
      action,
      startDate: start_date,
      endDate: end_date,
    });
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
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Retrieve the most recent login audit events
  def get_last_login_events():
    url = f'{API_HOST}/api/2.0/security/audit/login/last'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      login_events = response.json()
      print(f"Last login events retrieved successfully: {login_events}")
      return login_events
    else:
      print(f"Login events retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Step 2: Retrieve login events using filters
  def get_login_events_by_filter(user_id=None, action=None, start_date=None, end_date=None):
    url = f'{API_HOST}/api/2.0/security/audit/login/filter'
    params = {
      'userId': user_id,
      'action': action,
      'from': start_date,
      'to': end_date
    }
    params = {k: v for k, v in params.items() if v is not None}

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      filtered_events = response.json()
      print(f"Filtered login events retrieved successfully: {filtered_events}")
      return filtered_events
    else:
      print(f"Filtered login events retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Example usage
  if __name__ == '__main__':
    print("\nRetrieving the most recent login events:")
    get_last_login_events()

    user_id = 'user_id_here'  # Replace with actual user ID
    action = 0  # 0 = login, 1 = logout
    start_date = '2025-01-01'
    end_date = '2025-12-31'

    print(f"\nRetrieving login events for user ID {user_id} from {start_date} to {end_date}:")
    get_login_events_by_filter(user_id=user_id, action=action, start_date=start_date, end_date=end_date)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get recent login audit events

A GET request is sent to [/api/2.0/security/audit/login/last](/docspace/api-backend/usage-api/get-last-login-events).

This returns the most recent login activities across the DocSpace portal.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getLastLoginEvents() {
    const url = `${API_HOST}/api/2.0/security/audit/login/last`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Login events retrieval failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }

    const loginEvents = await res.json();
    console.log('Last login events retrieved successfully:', loginEvents);
    return loginEvents;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_last_login_events():
    url = f'{API_HOST}/api/2.0/security/audit/login/last'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      login_events = response.json()
      print(f"Last login events retrieved successfully: {login_events}")
      return login_events
    else:
      print(f"Login events retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Filter login events by user, action or date

A GET request is sent to [/api/2.0/security/audit/login/filter](/docspace/api-backend/usage-api/get-login-events-by-filter).

You can apply filters such as:

- `userId`: The user ID.
- `action`: The login-related action (0 = login, 1 = logout).
- `from`: The starting date and time in `YYYY-MM-DD` format.
- `to`: The ending date and time in `YYYY-MM-DD` format.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getLoginEventsByFilter({ userId = null, action = null, startDate = null, endDate = null } = {}) {
    const params = new URLSearchParams();
    if (userId) params.set('userId', userId);
    if (action !== null && action !== undefined) params.set('action', String(action)); // 0=login, 1=logout
    if (startDate) params.set('from', startDate);
    if (endDate) params.set('to', endDate);

    const url = `${API_HOST}/api/2.0/security/audit/login/filter${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Filtered login events retrieval failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }

    const filteredEvents = await res.json();
    console.log('Filtered login events retrieved successfully:', filteredEvents);
    return filteredEvents;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_login_events_by_filter(user_id=None, action=None, start_date=None, end_date=None):
    url = f'{API_HOST}/api/2.0/security/audit/login/filter'
    params = {
      'userId': user_id,
      'action': action,
      'from': start_date,
      'to': end_date
    }
    params = {k: v for k, v in params.items() if v is not None}

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      filtered_events = response.json()
      print(f"Filtered login events retrieved successfully: {filtered_events}")
      return filtered_events
    else:
      print(f"Filtered login events retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>
