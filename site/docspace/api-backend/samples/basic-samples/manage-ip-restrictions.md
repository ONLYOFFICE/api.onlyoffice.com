# Manage IP restrictions

This example demonstrates how to retrieve and update IP restriction settings in ONLYOFFICE DocSpace using API requests. IP restrictions enhance security by controlling which IP addresses are allowed access, ensuring that only authorized users can log in from designated networks.

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

# Step 1: Update IP restrictions settings
def save_restrictions(ip_restrictions, enable=True):
    url = f'https://{API_HOST}/api/2.0/settings/iprestrictions'
    data = {
        'enable': enable,
        'ipRestrictions': ip_restrictions
    }
    
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        settings = response.json()
        print('IP restrictions updated successfully.')
        return settings
    else:
        print(f'Failed to update IP restrictions: {response.status_code} - {response.text}')
        return None
 
# Step 2: Retrieve current IP restrictions settings
def get_restrictions():
    url = f'https://{API_HOST}/api/2.0/settings/iprestrictions'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        settings = response.json()
        print(f'IP restrictions settings retrieved: {settings}')
        return settings
    else:
        print(f'Failed to retrieve IP restrictions settings: {response.status_code} - {response.text}')
        return None
 
if __name__ == "__main__":
    # Step 1: Update IP restrictions settings
    save_restrictions([
        { "ip": "192.168.1.1", "forAdmin": True }
    ])
 
    # Step 2: Retrieve current IP restrictions settings
    get_restrictions()
```

</details>

## Step 1: Update IP restrictions

A PUT request is sent to [/api/2.0/settings/iprestrictions](/docspace/api-backend/usage-api/save-ip-restrictions) with:

- `enable`: Whether to enable or disable restrictions.
- `ipRestrictions`: A list of allowed IP addresses.

``` py
def save_restrictions(ip_restrictions, enable=True):
    url = f'https://{API_HOST}/api/2.0/settings/iprestrictions'
    data = {
        'enable': enable,
        'ipRestrictions': ip_restrictions
    }
    
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        settings = response.json()
        print('IP restrictions updated successfully.')
        return settings
    else:
        print(f'Failed to update IP restrictions: {response.status_code} - {response.text}')
        return None

if __name__ == "__main__":
    # Step 1: Update IP restrictions settings
    save_restrictions([
        { "ip": "192.168.1.1", "forAdmin": True }
    ])
```

## Step 2: Retrieve IP restrictions

A GET request is sent to [/api/2.0/settings/iprestrictions](/docspace/api-backend/usage-api/get-ip-restrictions).

Fetches the current security policy to verify allowed addresses.

``` py
def get_restrictions():
    url = f'https://{API_HOST}/api/2.0/settings/iprestrictions'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        settings = response.json()
        print(f'IP restrictions settings retrieved: {settings}')
        return settings
    else:
        print(f'Failed to retrieve IP restrictions settings: {response.status_code} - {response.text}')
        return None
 
if __name__ == "__main__":
    save_restrictions([
        { "ip": "192.168.1.1", "forAdmin": True }
    ])
 
    # Step 2: Retrieve current IP restrictions settings
    get_restrictions()
```
