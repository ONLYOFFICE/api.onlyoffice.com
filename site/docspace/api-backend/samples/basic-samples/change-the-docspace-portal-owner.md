import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change the DocSpace portal owner

This example demonstrates how to change the DocSpace portal owner using the API.
The process includes two actions:

1. Sending owner-change instructions to the selected user.
2. Applying the owner update after the confirmation flow is completed.

Use this scenario when ownership must be transferred to another administrator (for example, staff changes or a new main administrator).

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to manage web plugins.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Configure API endpoint and access token
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Common headers with authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Step 1: Send owner change instructions
  async function sendOwnerChangeInstructions(ownerId) {
    const url = `${BASE_URL}/api/2.0/settings/owner`;

    const payload = { ownerId };

    const response = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }

  // Step 2: Update the portal owner
  async function updatePortalOwner(ownerId) {
    const url = `${BASE_URL}/api/2.0/settings/owner`;

    const payload = { ownerId };

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return false;
    }

    return true;
  }

  // Example usage
  (async () => {
    const newOwnerId = '75a5f745-f697-4418-b38d-0fe0d277e258'; // replace with valid user ID

    // Step 1: send instructions
    const instructions = await sendOwnerChangeInstructions(newOwnerId);

    // Step 2: apply change after confirmation
    const applied = await updatePortalOwner(newOwnerId);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Configure API endpoint and access token
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  # Step 1: Send owner change instructions
  def send_owner_change_instructions(owner_id: str):
    url = f"{BASE_URL}/api/2.0/settings/owner"
    payload = {"ownerId": owner_id}

    response = requests.post(url, headers=HEADERS, json=payload)
    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  # Step 2: Update the portal owner
  def update_portal_owner(owner_id: str) -> bool:
    url = f"{BASE_URL}/api/2.0/settings/owner"
    payload = {"ownerId": owner_id}

    response = requests.put(url, headers=HEADERS, json=payload)
    if not response.ok:
      return False

    return True

  if __name__ == "__main__":
    new_owner_id = "75a5f745-f697-4418-b38d-0fe0d277e258"  # replace with valid user ID

    instructions = send_owner_change_instructions(new_owner_id)
    applied = update_portal_owner(new_owner_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Send owner change instructions

A POST request is sent to [/api/2.0/settings/owner](/docspace/api-backend/usage-api/send-owner-change-instructions).

Request body:

- `ownerId`: ID of the user who should become the new portal owner.

Response:

- An object containing:
 - `status`: numeric operation status
 - `message`: instruction or result message

This step triggers instruction delivery so the target user can confirm ownership change.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function sendOwnerChangeInstructions(ownerId) {
    const url = `${BASE_URL}/api/2.0/settings/owner`;

    const payload = { ownerId };

    const response = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def send_owner_change_instructions(owner_id: str):
    url = f"{BASE_URL}/api/2.0/settings/owner"
    payload = {"ownerId": owner_id}

    response = requests.post(url, headers=HEADERS, json=payload)
    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>

## Step 2: Update the portal owner

A PUT request is sent to [/api/2.0/settings/owner](/docspace/api-backend/usage-api/update-portal-owner).

Request body:

- `ownerId`: ID of the new owner (same as used in step 1)

If the request returns `200 OK`, the portal owner is updated.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function updatePortalOwner(ownerId) {
    const url = `${BASE_URL}/api/2.0/settings/owner`;

    const payload = { ownerId };

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return false;
    }

    return true;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_portal_owner(owner_id: str) -> bool:
    url = f"{BASE_URL}/api/2.0/settings/owner"
    payload = {"ownerId": owner_id}

    response = requests.put(url, headers=HEADERS, json=payload)
    if not response.ok:
      return False

    return True

  ```

  </TabItem>
</Tabs>