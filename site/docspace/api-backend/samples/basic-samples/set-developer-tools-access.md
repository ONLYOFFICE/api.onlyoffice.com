# Set Developer Tools access

This example demonstrates how to configure Developer Tools access settings in ONLYOFFICE DocSpace. You can allow full access or limit it for regular users.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

# Set your DocSpace portal URL and token
BASE_URL = 'https://yourportal.onlyoffice.com'
AUTH_TOKEN = 'your_access_token'

HEADERS = {'Authorization': AUTH_TOKEN}

# Step 1: Set Developer Tools access
def set_devtools_access(limited=True):
    url = f'{BASE_URL}/api/2.0/settings/devtoolsaccess'
    payload = { 'limitedAccessForUsers': limited }

    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
        data = response.json().get('response', {})
        print('Developer Tools access settings updated:')
        print(f'• Limited for users: {data.get('limitedAccessForUsers')}')
        print(f'• Last Modified: {data.get('lastModified')}')
        return data
    else:
        raise Exception(f'Failed to update access settings: {response.text}')

# Example usage
if __name__ == '__main__':
    print('Setting Developer Tools access...')
    set_devtools_access(limited=False)  # True = limit for users, False = allow full access
```

</details>

## How it works

A POST request is sent to [/api/2.0/settings/devtoolsaccess](/docspace/api-backend/usage-api/set-tenant-dev-tools-access-settings) with:

limitedAccessForUsers:

- `true` — restrict Developer Tools for regular users
- `false` — allow all users full access