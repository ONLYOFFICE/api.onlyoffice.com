# Add Notion users to DocSpace

This script automates the process of retrieving Notion users and adding them to the DocSpace. It ensures that all Notion team members are onboarded into DocSpace.

## How it works

- Retrieve Notion users - Fetches a list of users with their names and emails.
- Check DocSpace users - For each Notion user, verifies if they already exist in DocSpace by email.
- Create missing DocSpace users - If a Notion user is missing in DocSpace, creates their account with a default password.

<details>
  <summary>Full example</summary>

```py
import requests

# Notion API credentials
NOTION_TOKEN = "your-notion-token"
NOTION_HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
}

# DocSpace API credentials
ONLYOFFICE_API_HOST = "your-docspace.onlyoffice.com"
ONLYOFFICE_API_KEY = "your_onlyoffice_api_key"

# Headers for the DocSpace authentication
ONLYOFFICE_HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {ONLYOFFICE_API_KEY}",
    "Content-Type": "application/json"
}

# Step 1: Get all users from Notion
def get_notion_users():
    url = "https://api.notion.com/v1/users"
    response = requests.get(url, headers=NOTION_HEADERS)
    if response.status_code == 200:
        return response.json()["results"]
    else:
        print("Failed to fetch Notion users:", response.text)
        return []

# Step 2: Check if user exists in DocSpace by email
def check_docspace_user(email):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/people/email?email={email}"
    response = requests.get(url, headers=ONLYOFFICE_HEADERS)
    return response.status_code == 200

# Step 3: Add missing users to DocSpace
def add_docspace_user(first_name, last_name, email):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/people"
    data = {
        "password": "defaultpassword123",
        "firstName": first_name,
        "lastName": last_name,
        "email": email
    }
    response = requests.post(url, json=data, headers=ONLYOFFICE_HEADERS)
    if response.status_code == 200:
        print(f"User {email} added to DocSpace!")
    else:
        print(f"Failed to add {email}: {response.text}")

# Main execution loop
if __name__ == "__main__":
    notion_users = get_notion_users()
    for user in notion_users:
        if user["type"] == "person":
            name = user["name"]
            email = user.get("person", {}).get("email")

            if email:
                if not check_docspace_user(email):
                    if " " in name:
                        first_name, last_name = name.split(" ", 1)
                    else:
                        first_name, last_name = name, "-"
                    add_docspace_user(first_name, last_name, email)
```

</details>

## Before you start

1. Replace `your-docspace.onlyoffice.com` and `your_onlyoffice_api_key` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a new [Notion integration](https://www.notion.so/profile/integrations) to obtain an API token and replace `your-notion-token` with it. After submitting, you'll see an `Internal Integration Token`. Verify that the `Read content` and `Read user information` capabilities are checked.

## Step 1: Retrieve Notion users

Use a Notion API [`GET api.notion.com/v1/users`](https://developers.notion.com/reference/get-users) request to get users from Notion. Filter for entries where the type is `person` to get name and email for each user.

```py
# Step 1: Get all users from Notion
def get_notion_users():
    url = "https://api.notion.com/v1/users"
    response = requests.get(url, headers=NOTION_HEADERS)
    if response.status_code == 200:
        return response.json()["results"]
    else:
        print("Failed to fetch Notion users:", response.text)
        return []

if __name__ == "__main__":
    notion_users = get_notion_users()
    for user in notion_users:
        if user["type"] == "person":
            name = user["name"]
            email = user.get("person", {}).get("email")
```

## Step 2: Check if a user exists in DocSpace

Use a [`GET /api/2.0/people/email?email={email}`](/docspace/api-backend/usage-api/get-profile-by-email) request to check if the user exists in DocSpace.

``` py
# Step 2: Check if user exists in DocSpace by email
def check_docspace_user(email):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/people/email?email={email}"
    response = requests.get(url, headers=ONLYOFFICE_HEADERS)
    return response.status_code == 200

# Main execution loop
if __name__ == "__main__":
    notion_users = get_notion_users()
    for user in notion_users:
        if user["type"] == "person":
            name = user["name"]
            email = user.get("person", {}).get("email")

            if email:
                if not check_docspace_user(email):
                    # if user is missing in DocSpace
                    pass
```

## Step 3: Add missing users to DocSpace

Use a [`POST /api/2.0/people`](/docspace/api-backend/usage-api/add-member) request to add missing users to DocSpace using Notion data.

``` py
# Step 3: Add missing users to DocSpace
def add_docspace_user(first_name, last_name, email):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/people"
    data = {
        "password": "defaultpassword123", # Replace with any temporary password or generate unique
        "firstName": first_name,
        "lastName": last_name,
        "email": email
    }
    response = requests.post(url, json=data, headers=ONLYOFFICE_HEADERS)
    if response.status_code == 200:
        print(f"User {email} added to DocSpace!")
    else:
        print(f"Failed to add {email}: {response.text}")

# Main execution loop
if __name__ == "__main__":
    notion_users = get_notion_users()
    for user in notion_users:
        if user["type"] == "person":
            name = user["name"]
            email = user.get("person", {}).get("email")

            if email:
                if not check_docspace_user(email):
                    if " " in name:
                        first_name, last_name = name.split(" ", 1)
                    else:
                        first_name, last_name = name, "-"
                    add_docspace_user(first_name, last_name, email)
```
