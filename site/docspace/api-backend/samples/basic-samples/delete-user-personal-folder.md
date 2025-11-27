import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Delete a user's personal folder

This example demonstrates how to start deleting a user's personal folder in ONLYOFFICE DocSpace and check the deletion progress. This operation is commonly used in offboarding workflows to clean up personal storage of users who have left the organization.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };

  // Step 1: Start deletion of the personal folder
  async function startPersonalFolderDeletion(userId) {
    const url = `${BASE_URL}/api/2.0/people/delete/personal/start`;
    const body = { userId };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        ...HEADERS,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      console.log('Personal folder deletion started for user:', userId);
      return true;
    }

    const text = await res.text();
    console.log('Failed to start personal folder deletion:', res.status, text);
    return false;
  }

  // Step 2: Check deletion progress
  async function getPersonalFolderDeletionProgress() {
    const url = `${BASE_URL}/api/2.0/people/delete/personal/progress`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const progress = await res.json();
      console.log('Current personal folder deletion progress:', progress);
      return progress;
    }

    const text = await res.text();
    console.log('Failed to get personal folder deletion progress:', res.status, text);
    return null;
  }

  // Example usage: start and monitor
  (async () => {
    const offboardedUserId = '123456'; // Replace with a real user ID

    if (await startPersonalFolderDeletion(offboardedUserId)) {
      const intervalSeconds = 10;
      const maxChecks = 5;

      for (let attempt = 1; attempt <= maxChecks; attempt++) {
        console.log(`\nProgress check ${attempt}/${maxChecks}`);
        await getPersonalFolderDeletionProgress();

        if (attempt < maxChecks) {
          await new Promise((resolve) => setTimeout(resolve, intervalSeconds * 1000));
        }
      }
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import time
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
  }

  # Step 1: Start deletion of the personal folder
  def start_personal_folder_deletion(user_id):
    url = f"{BASE_URL}/api/2.0/people/delete/personal/start"
    data = {"userId": user_id}

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      print("Personal folder deletion started for user:", user_id)
      return True

    print(
      "Failed to start personal folder deletion:",
      response.status_code,
      response.text,
    )
    return False

  # Step 2: Check deletion progress
  def get_personal_folder_deletion_progress():
    url = f"{BASE_URL}/api/2.0/people/delete/personal/progress"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      progress = response.json()
      print("Current personal folder deletion progress:", progress)
      return progress

    print(
      "Failed to get personal folder deletion progress:",
      response.status_code,
      response.text,
    )
    return None

  # Example usage: start and monitor
  if __name__ == "__main__":
    offboarded_user_id = "123456"  # Replace with a real user ID

    if start_personal_folder_deletion(offboarded_user_id):
      # Optional: simple polling loop
      interval_seconds = 10
      max_checks = 5

      for attempt in range(1, max_checks + 1):
        print(f"\nProgress check {attempt}/{max_checks}")
        progress = get_personal_folder_deletion_progress()
        if attempt < max_checks:
          time.sleep(interval_seconds)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Start deletion of the personal folder

A POST request is sent to [/api/2.0/people/delete/personal/start](/docspace/api-backend/usage-api/start-delete-personal-folder) to start deleting the user's personal folder.

The request body includes:

- `userId`: The identifier of the user whose personal folder should be deleted.

If the request is successful, the server starts deleting the personal folder in the background.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function startPersonalFolderDeletion(userId) {
    const url = `${BASE_URL}/api/2.0/people/delete/personal/start`;
    const body = { userId };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        ...HEADERS,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      console.log('Personal folder deletion started for user:', userId);
      return true;
    }

    const text = await res.text();
    console.log('Failed to start personal folder deletion:', res.status, text);
    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def start_personal_folder_deletion(user_id):
    url = f"{BASE_URL}/api/2.0/people/delete/personal/start"
    data = {"userId": user_id}

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      print("Personal folder deletion started for user:", user_id)
      return True

    print(
      "Failed to start personal folder deletion:",
      response.status_code,
      response.text,
    )
    return False
  ```

  </TabItem>
</Tabs>

## Step 2: Check deletion progress

A GET request is sent to [/api/2.0/people/delete/personal/progress](/docspace/api-backend/usage-api/get-delete-personal-folder-progress) to return the current progress of deleting the personal folder.

The response contains information about the deletion status. You can call this endpoint periodically to monitor the process until it is completed.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getPersonalFolderDeletionProgress() {
    const url = `${BASE_URL}/api/2.0/people/delete/personal/progress`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const progress = await res.json();
      console.log('Current personal folder deletion progress:', progress);
      return progress;
    }

    const text = await res.text();
    console.log('Failed to get personal folder deletion progress:', res.status, text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_personal_folder_deletion_progress():
    url = f"{BASE_URL}/api/2.0/people/delete/personal/progress"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      progress = response.json()
      print("Current personal folder deletion progress:", progress)
      return progress

    print(
      "Failed to get personal folder deletion progress:",
      response.status_code,
      response.text,
    )
    return None
  ```

  </TabItem>
</Tabs>