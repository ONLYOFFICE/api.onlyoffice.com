# Reassign a user’s content to another user

This example demonstrates how to reassign a user’s data to another user in ONLYOFFICE DocSpace via the API: check if reassignment is required, start the reassignment, monitor progress, and optionally terminate the task.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests
import time

API_HOST = 'https://yourportal.onlyoffice.com'
API_KEY = 'your_api_key'

HEADERS = {'Authorization': API_KEY}

# Step 1: Check if reassignment is necessary
def check_reassignment_needed(user_id, target_type='User'):
    params = {'UserId': user_id, 'Type': target_type}
    r = requests.get(f'{API_HOST}/api/2.0/people/reassign/necessary', headers=HEADERS, params=params)
    if r.status_code == 200:
        necessary = r.json().get('response', False)
        print(f"Reassignment required: {necessary}")
        return necessary
    raise Exception(f"Failed to check necessity: {r.text}")

# Step 2: Start reassignment process
def start_reassignment(from_user_id, to_user_id, delete_profile=False):
    payload = {"fromUserId": from_user_id, "toUserId": to_user_id, "deleteProfile": delete_profile}
    r = requests.post(f'{API_HOST}/api/2.0/people/reassign/start', headers=HEADERS, json=payload)
    if r.status_code == 200:
        print("Reassignment started.")
    else:
        raise Exception(f"Failed to start reassignment: {r.text}")

# Step 3: Monitor progress
def get_progress(user_id):
    while True:
        r = requests.get(f'{API_HOST}/api/2.0/people/reassign/progress/{user_id}', headers=HEADERS)
        if r.status_code == 200:
            data = r.json().get('response', {})
            print(f"Progress: {data.get('percentage')}%")
            if data.get('isCompleted'):
                print("Reassignment completed.")
                break
            time.sleep(2)
        else:
            raise Exception(f"Failed to fetch progress: {r.text}")

# Step 4: terminate the reassignment
def terminate_reassignment(user_id):
    payload = {'userId': user_id}
    r = requests.put(f'{API_HOST}/api/2.0/people/reassign/terminate', headers=HEADERS, json=payload)
    if r.status_code == 200:
        print("Reassignment terminated.")
    else:
        raise Exception(f"Failed to terminate reassignment: {r.text}")

if __name__ == '__main__':
    from_user_id = 'SOURCE-USER-ID'
    to_user_id = 'TARGET-USER-ID'

    # Step 1: check necessity
    if check_reassignment_needed(from_user_id):
        # Step 2: start reassignment
        start_reassignment(from_user_id, to_user_id, delete_profile=True)
        # Step 3: track progress
        get_progress(from_user_id)
        # Step 4: terminate the reassignment
        terminate_reassignment(from_user_id)
```

</details>

## Step 1: Check if reassignment is necessary

A GET request is sent to [/api/2.0/people/reassign/necessary](/docspace/api-backend/usage-api/necessary-reassign) with query parameters:

`UserId` — UUID of the source user.
`Type` — target entity type (e.g., User).

If successful, the API returns a boolean in response indicating whether reassignment is required.

``` py
def check_reassignment_needed(user_id, target_type='User'):
    params = {'UserId': user_id, 'Type': target_type}
    r = requests.get(f'{API_HOST}/api/2.0/people/reassign/necessary', headers=HEADERS, params=params)
    if r.status_code == 200:
        necessary = r.json().get('response', False)
        print(f"Reassignment required: {necessary}")
        return necessary
    raise Exception(f"Failed to check necessity: {r.text}")
```

## Step 2: Start reassignment

A POST request is sent to [/api/2.0/people/reassign/start](/docspace/api-backend/usage-api/start-reassign) with the payload:

- `fromUserId` — UUID of the source user.
- `toUserId` — UUID of the destination user.
- `deleteProfile` — whether to delete the source user profile after reassignment.

``` py
def start_reassignment(from_user_id, to_user_id, delete_profile=False):
    payload = {"fromUserId": from_user_id, "toUserId": to_user_id, "deleteProfile": delete_profile}
    r = requests.post(f'{API_HOST}/api/2.0/people/reassign/start', headers=HEADERS, json=payload)
    if r.status_code == 200:
        print("Reassignment started.")
    else:
        raise Exception(f"Failed to start reassignment: {r.text}")
```

## Step 3: Get reassignment progress

A GET request is sent to [/api/2.0/people/reassign/progress/:userId](/docspace/api-backend/usage-api/get-reassign-progress) where :userId is the source user ID.

The API response typically includes:

`percentage` — completion percentage.
`isCompleted` — whether the task has finished.

``` py
def get_progress(user_id):
    while True:
        r = requests.get(f'{API_HOST}/api/2.0/people/reassign/progress/{user_id}', headers=HEADERS)
        if r.status_code == 200:
            data = r.json().get('response', {})
            print(f"Progress: {data.get('percentage')}%")
            if data.get('isCompleted'):
                print("Reassignment completed.")
                break
            time.sleep(2)
        else:
            raise Exception(f"Failed to fetch progress: {r.text}")
```

## Step 4: Terminate reassignment

A PUT request is sent to [/api/2.0/people/reassign/terminate](/docspace/api-backend/usage-api/terminate-reassign) with the payload:

`userId` — UUID of the source user whose reassignment task should be terminated.

``` py
def terminate_reassignment(user_id):
    payload = {'userId': user_id}
    r = requests.put(f'{API_HOST}/api/2.0/people/reassign/terminate', headers=HEADERS, json=payload)
    if r.status_code == 200:
        print("Reassignment terminated.")
    else:
        raise Exception(f"Failed to terminate reassignment: {r.text}")
```