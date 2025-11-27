import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Send account deletion instructions to the current user

This example demonstrates how to send account deletion instructions to the currently authenticated user in ONLYOFFICE DocSpace using the API. It is useful for implementing a self-service “Delete my account” option in the user profile, allowing users to receive official deletion instructions by email or in-app notification without administrator involvement.

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

  // Send account deletion instructions to the current user
  async function sendAccountDeletionInstructions() {
    const url = `${BASE_URL}/api/2.0/people/self/delete`;

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      console.log('Account deletion instructions sent successfully.');
      console.log('Response:', json);
      return json;
    }

    const text = await res.text();
    console.log(
      'Failed to send account deletion instructions:',
      res.status,
      text
    );
    return null;
  }

  // Example usage
  (async () => {
    await sendAccountDeletionInstructions();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
  }

  # Send account deletion instructions to the current user
  def send_account_deletion_instructions():
    url = f"{BASE_URL}/api/2.0/people/self/delete"
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
      print("Account deletion instructions sent successfully.")
      print("Response:", response.json())
    else:
      print(
        "Failed to send account deletion instructions:",
        response.status_code,
        response.text,
      )

  if __name__ == "__main__":
    send_account_deletion_instructions()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to [/api/2.0/people/self/delete](/docspace/api-backend/usage-api/send-instructions-to-delete) to request deletion of the current user account.