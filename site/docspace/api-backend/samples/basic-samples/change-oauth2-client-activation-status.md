import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change OAuth2 client activation status

This example demonstrates how to enable or disable an OAuth2 client in ONLYOFFICE DocSpace.

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
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Step: Change activation status of an OAuth2 client
  async function changeClientActivation(clientId, active) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}/activation`;
    const payload = { active };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    console.log(`Status: ${res.status}`);

    if (res.status === 200) {
      const json = await res.json();
      const data = json.response || json;
      console.log('Client activation status changed successfully:');
      console.log(JSON.stringify(data, null, 2));
      return data;
    } else if (res.status === 404) {
      console.log('Client not found (404).');
    } else if (res.status === 403) {
      console.log("Forbidden (403). You do not have permission to change activation status.");
    } else if (res.status === 400) {
      console.log('Bad request (400). Check the client ID or payload.');
    } else {
      const text = await res.text();
      console.log(`Unexpected error (${res.status}):`);
      console.log(text);
    }

    return null;
  }

  // Example usage
  (async () => {
    const clientId = 'your-client-id'; // Replace with your actual OAuth2 client ID

    // Enable the client
    await changeClientActivation(clientId, true);

    // Disable the client (optional)
    // await changeClientActivation(clientId, false);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  # Step: Change activation status of an OAuth2 client
  def change_client_activation(client_id: str, active: bool):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}/activation"
    payload = {"active": active}

    response = requests.put(url, headers=HEADERS, json=payload)

    print(f"Status: {response.status_code}")
    if response.status_code == 200:
      data = response.json().get("response", response.json())
      print("Client activation status changed successfully:")
      print(json.dumps(data, indent=2))
      return data
    elif response.status_code == 404:
      print("Client not found (404).")
    elif response.status_code == 403:
      print("Forbidden (403). You don't have permission to change activation status.")
    elif response.status_code == 400:
      print("Bad request (400). Check the client ID or payload.")
    else:
      print(f"Unexpected error ({response.status_code}):")
      print(response.text)
    return None

  if __name__ == "__main__":
    client_id = "your-client-id"  # Replace with your actual OAuth2 client ID

    # Enable the client
    change_client_activation(client_id, True)

    # Disable the client (optional)
    # change_client_activation(client_id, False)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PATCH request is sent to [/api/2.0/clients/:clientId/activation](/docspace/api-backend/usage-api/change-activation) with a JSON body specifying the new state (e.g., {"isActive": true}) to activate or deactivate the client. When deactivated, the client cannot request new tokens; existing tokens remain valid until they expire.