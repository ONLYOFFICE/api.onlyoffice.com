# Invite DocSpace user from Asana task

This integration automatically retrieves the email of the assignee from an Asana task and invites them to ONLYOFFICE DocSpace. It helps ensure that project contributors are granted access to collaborative workspaces without manual steps.

## How it works

- Get assignee email - Fetch the assigned user’s email from a specific Asana task.
- Send DocSpace invitation - Use the email to invite the user to DocSpace with full workspace access.

<details>
  <summary>Full example</summary>

```py
import requests

# ONLYOFFICE DocSpace configuration
ONLYOFFICE_API_HOST = "your-docspace.onlyoffice.com"
ONLYOFFICE_API_KEY = "your_docspace_api_key"

# Asana configuration
ASANA_TOKEN = "your_asana_token"
ASANA_TASK_GID = "your_asana_task_gid"

ONLYOFFICE_HEADERS = {
    "Authorization": f"Bearer {ONLYOFFICE_API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json"
}

# Step 1: Get the email of the assignee from Asana task
def get_asana_assignee_email(task_gid):
    url = f"https://app.asana.com/api/1.0/tasks/{task_gid}?opt_fields=assignee.email"
    headers = {"Authorization": f"Bearer {ASANA_TOKEN}"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        assignee = response.json().get("data", {}).get("assignee", {})
        return assignee.get("email")
    else:
        print(f"Asana task fetch error: {response.status_code}")
        return None

# Step 2: Invite user to DocSpace by email
def invite_user_to_docspace(email):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/people/invite"
    payload = {
        "invitations": [
            {"email": email, "type": "All"}
        ]
    }
    response = requests.post(url, headers=ONLYOFFICE_HEADERS, json=payload)
    if response.status_code == 200:
        print(f"User invited to DocSpace: {email}")
        return True
    else:
        print(f"DocSpace invitation error: {response.status_code}, {response.text}")
        return False

# Run integration
if __name__ == "__main__":
    email = get_asana_assignee_email(ASANA_TASK_GID)
    if email:
        invite_user_to_docspace(email)
    else:
        print("Could not retrieve assignee email from Asana task.")
```

</details>

## Before you start

1. Replace `your-docspace.onlyoffice.com` and `your_onlyoffice_api_key` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Personal access token](https://developers.asana.com/docs/personal-access-token) in your Asana developer settings. This token will be used to authenticate API requests. Make sure the token has access to the necessary projects and tasks in your Asana workspace.
4. Replace `your_asana_token` and `your_asana_task_gid` with your actual Asana token and task ID.

## Step 1: Retrieve the task assignee email from Asana

Use an Asana API [`GET /api/1.0/tasks/{task_gid}`](https://developers.asana.com/reference/gettask) request and the `opt_fields=assignee.email` parameter to extract the email address of the assigned user for a given task.

```py
# Step 1: Get the email of the assignee from Asana task
def get_asana_assignee_email(task_gid):
    url = f"https://app.asana.com/api/1.0/tasks/{task_gid}?opt_fields=assignee.email"
    headers = {"Authorization": f"Bearer {ASANA_TOKEN}"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        assignee = response.json().get("data", {}).get("assignee", {})
        return assignee.get("email")
    else:
        print(f"Asana task fetch error: {response.status_code}")
        return None
```

## Step 2: Send an invitation to DocSpace

Use [`POST /api/2.0/people/invite`](/docspace/api-backend/usage-api/invite-users) to invite the user using their email address.

``` py
# Step 2: Invite user to DocSpace by email
def invite_user_to_docspace(email):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/people/invite"
    payload = {
        "invitations": [
            {"email": email, "type": "All"}
        ]
    }
    response = requests.post(url, headers=ONLYOFFICE_HEADERS, json=payload)
    if response.status_code == 200:
        print(f"User invited to DocSpace: {email}")
        return True
    else:
        print(f"DocSpace invitation error: {response.status_code}, {response.text}")
        return False
```
