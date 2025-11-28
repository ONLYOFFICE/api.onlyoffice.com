import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure external file sharing settings

This example demonstrates how to retrieve and update external sharing settings in ONLYOFFICE DocSpace.
You can enable or disable external sharing globally, allow publication to social media, and optionally set a password for a specific shared link.


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

  // Step 1: Get consolidated Files settings
  async function getFilesSettings() {
    const url = `${BASE_URL}/api/2.0/files/settings`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET files/settings] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }

  // Step 2: Enable/disable external sharing
  async function setExternalShare(enabled) {
    const url = `${BASE_URL}/api/2.0/files/settings/external`;
    const payload = { displayValue: enabled };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    console.log(`[PUT files/settings/external] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }

  // Step 3: Enable/disable sharing to social media
  async function setExternalShareSocialMedia(enabled) {
    const url = `${BASE_URL}/api/2.0/files/settings/externalsocialmedia`;
    const payload = { displayValue: enabled };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    console.log(`[PUT files/settings/externalsocialmedia] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }

  // Step 4 (optional): Apply a password to a specific shared link
  async function applyExternalSharePassword(shareKey, password) {
    const url = `${BASE_URL}/api/2.0/files/share/${shareKey}/password`;
    const payload = { password };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    console.log(`[POST files/share/${shareKey}/password] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    // Step 1 — Retrieve current settings
    await getFilesSettings();

    // Step 2 — Enable external sharing
    await setExternalShare(true);

    // Step 3 — Enable social media sharing
    await setExternalShareSocialMedia(true);

    // Step 4 — (Optional) Protect a specific external link with a password
    await applyExternalSharePassword('KEY_FROM_URL', 'Secret123!');
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

  # Step 1: Get consolidated Files settings
  def get_files_settings():
    url = f"{BASE_URL}/api/2.0/files/settings"
    response = requests.get(url, headers=HEADERS)
    print(f"[GET files/settings] Status: {response.status_code}")

    if response.ok:
      data = response.json().get("response", response.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(response.text)
    return None


  # Step 2: Enable/disable external sharing
  def set_external_share(enabled: bool):
    url = f"{BASE_URL}/api/2.0/files/settings/external"
    payload = {"displayValue": enabled}
    response = requests.put(url, headers=HEADERS, json=payload)
    print(f"[PUT files/settings/external] Status: {response.status_code}")

    if response.ok:
      data = response.json().get("response", response.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(response.text)
    return None


  # Step 3: Enable/disable sharing to social media
  def set_external_share_social_media(enabled: bool):
    url = f"{BASE_URL}/api/2.0/files/settings/externalsocialmedia"
    payload = {"displayValue": enabled}
    response = requests.put(url, headers=HEADERS, json=payload)
    print(f"[PUT files/settings/externalsocialmedia] Status: {response.status_code}")

    if response.ok:
      data = response.json().get("response", response.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(response.text)
    return None


  # Step 4 (optional): Apply a password to a specific shared link
  def apply_external_share_password(share_key: str, password: str):
    url = f"{BASE_URL}/api/2.0/files/share/{share_key}/password"
    payload = {"password": password}
    response = requests.post(url, headers=HEADERS, json=payload)
    print(f"[POST files/share/{share_key}/password] Status: {response.status_code}")

    if response.ok:
      data = response.json().get("response", response.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(response.text)
    return None


  if __name__ == "__main__":
    # Step 1 — Retrieve current settings
    get_files_settings()

    # Step 2 — Enable external sharing
    set_external_share(True)

    # Step 3 — Enable social media sharing
    set_external_share_social_media(True)

    # Step 4 — (Optional) Protect a specific external link with a password
    apply_external_share_password("KEY_FROM_URL", "Secret123!")
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve file sharing configuration

A GET request is sent to [/api/2.0/files/settings](/docspace/api-backend/usage-api/get-files-settings).
This endpoint returns all file module configuration flags, including external sharing and social media publishing status.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getFilesSettings() {
    const url = `${BASE_URL}/api/2.0/files/settings`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET files/settings] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_files_settings():
    url = f"{BASE_URL}/api/2.0/files/settings"
    response = requests.get(url, headers=HEADERS)
    print(f"[GET files/settings] Status: {response.status_code}")

    if response.ok:
      data = response.json().get("response", response.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Enable or disable external sharing

A PUT request is sent to [/api/2.0/files/settings/external](/docspace/api-backend/usage-api/external-share).

Payload parameters include:

- `displayValue`: enables or disables external sharing.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function setExternalShare(enabled) {
    const url = `${BASE_URL}/api/2.0/files/settings/external`;
    const payload = { displayValue: enabled };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    console.log(`[PUT files/settings/external] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def set_external_share(enabled: bool):
    url = f"{BASE_URL}/api/2.0/files/settings/external"
    payload = {"displayValue": enabled}
    response = requests.put(url, headers=HEADERS, json=payload)
    print(f"[PUT files/settings/external] Status: {response.status_code}")

    if response.ok:
      data = response.json().get("response", response.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 3: Enable or disable social media publication

A PUT request is sent to [/api/2.0/files/settings/externalsocialmedia](/docspace/api-backend/usage-api/external-share-social-media).

Payload parameters include:

- `displayValue`: enables or disables social media sharing.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function setExternalShareSocialMedia(enabled) {
    const url = `${BASE_URL}/api/2.0/files/settings/externalsocialmedia`;
    const payload = { displayValue: enabled };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    console.log(`[PUT files/settings/externalsocialmedia] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_client_info(client_id):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}/info"
    r = requests.get(url, headers=HEADERS)
    print(f"[GET client info {client_id}] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 4: Set a password for a public share link

A POST request is sent to [/api/2.0/files/share/:share_key/password](/docspace/api-backend/usage-api/apply-external-share-password).

Payload parameters include:

- `password`: password to protect the external shared link.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function applyExternalSharePassword(shareKey, password) {
    const url = `${BASE_URL}/api/2.0/files/share/${shareKey}/password`;
    const payload = { password };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    console.log(`[POST files/share/${shareKey}/password] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def apply_external_share_password(share_key: str, password: str):
    url = f"{BASE_URL}/api/2.0/files/share/{share_key}/password"
    payload = {"password": password}
    response = requests.post(url, headers=HEADERS, json=payload)
    print(f"[POST files/share/{share_key}/password] Status: {response.status_code}")

    if response.ok:
      data = response.json().get("response", response.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(response.text)
    return None
  ```

  </TabItem>
</Tabs>