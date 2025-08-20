# Invite user with welcome message

This example demonstrates how to invite a user to ONLYOFFICE DocSpace using the API, check their registration status, and send them a welcome message after successful activation.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

API_HOST = 'https://yourportal.onlyoffice.com'
API_KEY = 'YOUR_TOKEN'
HEADERS = {'Authorization': API_KEY}

# Step 1: Get invitation link for a specific employee type
def get_invite_link(employee_type='Guest'):
    url = f'{API_HOST}/api/2.0/portal/users/invite/{employee_type}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        invite_url = response.json().get('response')
        print(f"Invite link for {employee_type}: {invite_url}")
        return invite_url
    raise Exception(f"Failed to get invite link: {response.text}")

# Step 2: Check if the user is active
def check_user_status(user_id):
    url = f'{API_HOST}/api/2.0/portal/users/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        user = response.json().get('response', {})
        print("User Info:")
        print(f"• Name: {user.get('firstName')} {user.get('lastName')}")
        print(f"• Email: {user.get('email')}")
        print(f"• Active: {user.get('isActive')}")
        print(f"• Created: {user.get('createDate')}")
        return user
    raise Exception(f"Failed to get user info: {response.text}")

# Step 3: Send welcome message
def send_congratulations(user_id, key='welcome_guest'):
    url = f'{API_HOST}/api/2.0/portal/sendcongratulations'
    params = {'Userid': user_id, 'Key': key}
    response = requests.post(url, headers=HEADERS, params=params)
    if response.status_code == 200:
        print("Congratulations message sent successfully.")
    else:
        raise Exception(f"Failed to send congratulations: {response.text}")

if __name__ == '__main__':
    print("Step 1: Generate invitation link...")
    link = get_invite_link('Guest')  # Can also be: 'User', 'RoomAdmin', etc.

    # Simulate that user registers via this link...

    print("\nStep 2: Check user registration status...")
    test_user_id = 'REPLACE-WITH-REAL-USER-ID'
    user = check_user_status(test_user_id)

    if user.get('isActive'):
        print("\nStep 3: Send welcome message...")
        send_congratulations(test_user_id)
```

</details>

## Step 1: Generate an invitation link

A GET request is sent to [/api/2.0/portal/users/invite/{employeeType}](/docspace/api-backend/usage-api/get-invitation-link) to generate a unique registration link for the specified employee type:

`employeeType` — e.g. "Guest", "User", "RoomAdmin".

``` py
def get_invite_link(employee_type='Guest'):
    url = f'{API_HOST}/api/2.0/portal/users/invite/{employee_type}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        invite_url = response.json().get('response')
        print(f"Invite link for {employee_type}: {invite_url}")
        return invite_url
    raise Exception(f"Failed to get invite link: {response.text}")
```

## Step 2: Check user registration status

After the user registers, a GET request is sent to [/api/2.0/portal/users/{userId}](/docspace/api-backend/usage-api/get-user-by-id) to confirm that the `isActive` flag is set to `true`.

``` py
def check_user_status(user_id):
    url = f'{API_HOST}/api/2.0/portal/users/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        user = response.json().get('response', {})
        print("User Info:")
        print(f"• Name: {user.get('firstName')} {user.get('lastName')}")
        print(f"• Email: {user.get('email')}")
        print(f"• Active: {user.get('isActive')}")
        print(f"• Created: {user.get('createDate')}")
        return user
    raise Exception(f"Failed to get user info: {response.text}")
```

## Step 3: Send a welcome message

If the user is active, a POST request is sent to [/api/2.0/portal/sendcongratulations](/docspace/api-backend/usage-api/send-congratulations) with:

`Userid` — ID of the invited user.
`Key` — message template key (e.g. "welcome_guest").

``` py
def send_congratulations(user_id, key='welcome_guest'):
    url = f'{API_HOST}/api/2.0/portal/sendcongratulations'
    params = {'Userid': user_id, 'Key': key}
    response = requests.post(url, headers=HEADERS, params=params)
    if response.status_code == 200:
        print("Congratulations message sent successfully.")
    else:
        raise Exception(f"Failed to send congratulations: {response.text}")
```