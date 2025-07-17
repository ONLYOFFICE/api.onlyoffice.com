# Get login history

This example automates the retrieval of the last login events in ONLYOFFICE DocSpace. It extracts unique user IDs from the latest login records, ensuring that duplicate entries are removed.

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
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

def get_last_login_users():
    url = f'https://{API_HOST}/api/2.0/security/audit/login/last'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        res = response.json()
        user_ids = list(set(map(lambda user: user["userId"], res["response"])))
        print(f'Last login users: {user_ids}')
        return user_ids
    else:
        print(f'Failed to retrieve last login users: {response.status_code} - {response.text}')
        return None
 
if __name__ == "__main__":
    user_ids = get_last_login_users()
    print(user_ids)
```

</details>

## How it works

- Fetch last login events - The script sends a GET request to [/api/2.0/security/audit/login/last](/docspace/api-backend/usage-api/get-last-login-events).
- Extract user IDs - It processes the response to collect all user IDs from the login events.
- Remove duplicates - The script ensures that only unique user IDs are stored using `set()`.
