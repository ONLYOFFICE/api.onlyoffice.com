import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update user culture

This example demonstrates how to update a user’s culture (language and regional settings) in ONLYOFFICE DocSpace using the API.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Update user culture (language and locale settings)
  async function updateMemberCulture(userId, cultureCode) {
    const url = `${API_HOST}/api/2.0/people/${userId}/culture`;
    const payload = { culture: cultureCode };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const json = await res.json();
      const info = json.response || json;
      console.log('User culture updated successfully:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    const userId = '4c65a238-ca50-4374-b904-0d51d4c1822b'; // Replace with actual user ID
    const culture = 'en-US'; // Example culture code (e.g., "fr-FR", "de-DE", "es-ES")
    await updateMemberCulture(userId, culture);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  # Update user culture (language and locale settings)
  def update_member_culture(user_id: str, culture_code: str):
    url = f"{API_HOST}/api/2.0/people/{user_id}/culture"
    payload = {"culture": culture_code}

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("User culture updated successfully:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

  if __name__ == "__main__":
    user_id = "4c65a238-ca50-4374-b904-0d51d4c1822b"  # Replace with actual user ID
    culture = "en-US"  # Example culture code (e.g., "fr-FR", "de-DE", "es-ES")
    update_member_culture(user_id, culture)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to [/api/2.0/people/{userId}/culture](/docspace/api-backend/usage-api/update-member-culture) to change the user’s language and regional settings.

Payload parameters:

- `culture` — Language and region in ll-CC format (e.g., en-US, fr-FR, de-DE).