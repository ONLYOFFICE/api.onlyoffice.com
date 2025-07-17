# Manage active portal connections

This example shows how to manage active user sessions in ONLYOFFICE DocSpace. You can retrieve active sessions, log out all users except the current one, terminate a specific session, or revoke all sessions for a particular user.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

# Set API base URL
API_HOST = 'yourportal.onlyoffice.com'
API_KEY = 'your_api_key'

# Headers with API key for authentication
HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

# Step 1: Retrieve all active portal connections
def get_all_active_connections():
    url = f'https://{API_HOST}/api/2.0/security/activeconnections'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        active_connections = response.json()
        print(f"Active connections retrieved successfully: {active_connections}")
        return active_connections
    else:
        print(f"Failed to retrieve active connections: {response.status_code} - {response.text}")
        return None

# Step 2: Log out all sessions except the current one
def log_out_all_except_current():
    url = f'https://{API_HOST}/api/2.0/security/activeconnections/logoutallexceptthis'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
        result = response.json()
        print(f"Logged out all connections except the current one: {result}")
        return result
    else:
        print(f"Failed to log out all connections except the current one: {response.status_code} - {response.text}")
        return None

# Step 3: Log out a specific session by its login event ID
def log_out_active_connection(login_event_id):
    url = f'https://{API_HOST}/api/2.0/security/activeconnections/logout/{login_event_id}'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
        result = response.json()
        print(f"Logged out connection {login_event_id}: {result}")
        return result
    else:
        print(f"Failed to log out connection {login_event_id}: {response.status_code} - {response.text}")
        return None

# Step 4: Log out all sessions for a specific user
def log_out_all_active_connections_for_user(user_id):
    url = f'https://{API_HOST}/api/2.0/security/activeconnections/logoutall/{user_id}'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
        result = response.json()
        print(f"Logged out all connections for user {user_id}: {result}")
        return result
    else:
        print(f"Failed to log out all connections for user {user_id}: {response.status_code} - {response.text}")
        return None

# Example usage
if __name__ == '__main__':
    print("\nRetrieving all active connections:")
    active_data = get_all_active_connections()

    if not active_data:
        print("No active connections found.")
        exit()

    items = active_data.get('response', {}).get('items', [])
    if not items:
        print("Active connections list is empty.")
        exit()

    print("\nLogging out all connections except the current one:")
    log_out_all_except_current()

    first_connection_id = items[0].get('id')
    print(f"\nLogging out the connection with ID {first_connection_id}:")
    log_out_active_connection(first_connection_id)

    user_id = items[0].get('userId')
    print(f"\nLogging out all connections for user ID {user_id}:")
    log_out_all_active_connections_for_user(user_id)
```

</details>

## Step 1: Retrieve all active connections

Sends a GET request to [/api/2.0/security/activeconnections](/docspace/api-backend/usage-api/get-all-active-connections).

It returns a list of active sessions on the portal.

``` py
def get_all_active_connections():
    url = f'https://{API_HOST}/api/2.0/security/activeconnections'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        active_connections = response.json()
        print(f"Active connections retrieved successfully: {active_connections}")
        return active_connections
    else:
        print(f"Failed to retrieve active connections: {response.status_code} - {response.text}")
        return None
```

## Step 2: Log out all sessions except the current one

Sends a PUT request to [/api/2.0/security/activeconnections/logoutallexceptthis](/docspace/api-backend/usage-api/log-out-all-except-this-connection).

It terminates all sessions except the current API session.

``` py
def log_out_all_except_current():
    url = f'https://{API_HOST}/api/2.0/security/activeconnections/logoutallexceptthis'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
        result = response.json()
        print(f"Logged out all connections except the current one: {result}")
        return result
    else:
        print(f"Failed to log out all connections except the current one: {response.status_code} - {response.text}")
        return None
```

## Step 3: Log out a specific session

Sends a PUT request to [/api/2.0/security/activeconnections/logout/:loginEventId](/docspace/api-backend/usage-api/log-out-active-connection).

It logs out a session by its login event ID.

``` py
def log_out_active_connection(login_event_id):
    url = f'https://{API_HOST}/api/2.0/security/activeconnections/logout/{login_event_id}'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
        result = response.json()
        print(f"Logged out connection {login_event_id}: {result}")
        return result
    else:
        print(f"Failed to log out connection {login_event_id}: {response.status_code} - {response.text}")
        return None
```

## Step 4: Log out all sessions for a specific user

Sends a PUT request to [/api/2.0/security/activeconnections/logoutall/:userId](/docspace/api-backend/usage-api/log-out-all-active-connections-for-user).

It logs out all active sessions for the provided user ID.

``` py
def log_out_all_active_connections_for_user(user_id):
    url = f'https://{API_HOST}/api/2.0/security/activeconnections/logoutall/{user_id}'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
        result = response.json()
        print(f"Logged out all connections for user {user_id}: {result}")
        return result
    else:
        print(f"Failed to log out all connections for user {user_id}: {response.status_code} - {response.text}")
        return None
```
