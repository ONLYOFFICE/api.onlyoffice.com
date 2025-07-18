# Manage login settings

This example demonstrates how to configure login security settings, including failed login attempt limits, account blocking duration, and login monitoring periods using API requests. Managing these settings ensures better protection against brute-force attacks and unauthorized access.

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

# Step 1: Update login settings
def update_login_settings(attemptCount, blockTime, checkPeriod):
    url = f'https://{API_HOST}/api/2.0/settings/security/loginsettings'
    data = {
        'attemptCount': attemptCount,
        'blockTime': blockTime,
        'checkPeriod': checkPeriod
    }
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print('Login settings updated successfully.')
    else:
        print(f'Failed to update login settings: {response.status_code} - {response.text}')
 
# Step 2: Retrieve current login settings
def get_login_settings():
    url = f'https://{API_HOST}/api/2.0/settings/security/loginsettings'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        settings = response.json()
        print(f'Login settings retrieved: {settings}')
        return settings
    else:
        print(f'Failed to retrieve login settings: {response.status_code} - {response.text}')
        return None
 
# Step 3: Reset login settings to default
def reset_login_settings():
    url = f'https://{API_HOST}/api/2.0/settings/security/loginsettings'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
        print('Login settings reset to default successfully.')
    else:
        print(f'Failed to reset login settings: {response.status_code} - {response.text}')
 
if __name__ == "__main__":
    # Step 1: Update login settings
    update_login_settings(attemptCount=10, blockTime=30, checkPeriod=100)
    
    # Step 2: Retrieve current login settings
    get_login_settings() # Verify that the settings have been updated
 
    # Step 3: Reset login settings to default
    reset_login_settings()
    get_login_settings() # Verify that the settings have been reset
```

</details>

## Step 1: Update login settings

A PUT request is sent to [/api/2.0/settings/security/loginsettings](/docspace/api-backend/usage-api/update-login-settings) with:

- `attemptCount`: The number of failed login attempts before an account is temporarily blocked.
- `blockTime`: The duration (in minutes) that an account remains blocked after exceeding the failed login limit.
- `checkPeriod`: The time frame (in minutes) within which failed attempts are counted before resetting.

Modifies the security settings, such as the number of failed attempts before blocking an account.

``` py
def update_login_settings(attemptCount, blockTime, checkPeriod):
    url = f'https://{API_HOST}/api/2.0/settings/security/loginsettings'
    data = {
        'attemptCount': attemptCount,
        'blockTime': blockTime,
        'checkPeriod': checkPeriod
    }
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print('Login settings updated successfully.')
    else:
        print(f'Failed to update login settings: {response.status_code} - {response.text}')

if __name__ == "__main__":
    # Step 1: Update login settings
    update_login_settings(attemptCount=10, blockTime=30, checkPeriod=100)
```

## Step 2: Retrieve login settings

A GET request is sent to [/api/2.0/settings/security/loginsettings](/docspace/api-backend/usage-api/get-login-settings).

The API response includes:

- Current failed login attempt limits.
- Block duration settings.
- Login monitoring time frames.

This step ensures that security policies are correctly configured and applied.

``` py
def get_login_settings():
    url = f'https://{API_HOST}/api/2.0/settings/security/loginsettings'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        settings = response.json()
        print(f'Login settings retrieved: {settings}')
        return settings
    else:
        print(f'Failed to retrieve login settings: {response.status_code} - {response.text}')
        return None
 
if __name__ == "__main__":
    update_login_settings(attemptCount=10, blockTime=30, checkPeriod=100)
    
    # Step 2: Retrieve current login settings
    get_login_settings() # Verify that the settings have been updated
```

## Step 3: Reset login security settings to default

A DELETE request is sent to [/api/2.0/settings/security/loginsettings](/docspace/api-backend/usage-api/set-default-login-settings).

The API resets the login security settings to the default configuration.

A GET request is sent to [/api/2.0/settings/security/loginsettings](/docspace/api-backend/usage-api/get-login-settings) again to verify that the settings have been reset.

``` py
def reset_login_settings():
    url = f'https://{API_HOST}/api/2.0/settings/security/loginsettings'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
        print('Login settings reset to default successfully.')
    else:
        print(f'Failed to reset login settings: {response.status_code} - {response.text}')
 
if __name__ == "__main__":
    update_login_settings(attemptCount=10, blockTime=30, checkPeriod=100)
    get_login_settings()

    # Step 3: Reset login settings to default
    reset_login_settings()
    get_login_settings() # Verify that the settings have been reset
```
