import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage portal license

This example demonstrates how to manage an ONLYOFFICE DocSpace license using the API.
You can check whether a license is required, upload a license file, activate it, and refresh the current license state after changes.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to manage web plugins.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  import fs from 'node:fs';
  import FormData from 'form-data';

  // Configure API endpoint and access token
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Common headers with authentication for JSON requests
  const JSON_HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
  };

  // Step 1: Check if a license is required
  async function isLicenseRequired(): Promise<boolean | null> {
    const url = `${BASE_URL}/api/2.0/settings/license/required`;

    const response = await fetch(url, {
      method: 'GET',
      headers: JSON_HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const required = body.response ?? body;
    return Boolean(required);
  }

  // Step 2: Upload a license file
  async function uploadLicense(filePath: string): Promise<string | null> {
    const url = `${BASE_URL}/api/2.0/settings/license`;

    const form = new FormData();
    // "Files" is the field name expected by the API
    form.append('Files', fs.createReadStream(filePath));

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json',
        ...form.getHeaders(),
      },
      body: form as any,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const message = body.response ?? body;
    return String(message);
  }

  // Step 3: Activate and refresh the license
  async function activateLicense(): Promise<string | null> {
    const url = `${BASE_URL}/api/2.0/settings/license/accept`;

    const response = await fetch(url, {
      method: 'POST',
      headers: JSON_HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const message = body.response ?? body;
    return String(message);
  }

  async function refreshLicense(): Promise<boolean | null> {
    const url = `${BASE_URL}/api/2.0/settings/license/refresh`;

    const response = await fetch(url, {
      method: 'GET',
      headers: JSON_HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const ok = body.response ?? body;
    return Boolean(ok);
  }

  // Example usage
  (async () => {
    const required = await isLicenseRequired();

    if (required) {
      const uploadResult = await uploadLicense('/path/to/license.lic');
      const activationResult = await activateLicense();
      const refreshed = await refreshLicense();

      // Use uploadResult, activationResult, and refreshed in your UI if needed
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from typing import Optional

  # Configure API endpoint and access token
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Common headers with authentication for JSON requests
  JSON_HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
  }

  # Step 1: Check if a license is required
  def is_license_required():
    url = f"{BASE_URL}/api/2.0/settings/license/required"
    response = requests.get(url, headers=JSON_HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    required = raw.get("response", raw)
    return bool(required)

  # Step 2: Upload a license file
  def upload_license(file_path: str):
    url = f"{BASE_URL}/api/2.0/settings/license"

    with open(file_path, "rb") as f:
      files = {
        "Files": f,  # "Files" is the field name expected by the API
      }
      headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Accept": "application/json",
      }
      response = requests.post(url, headers=headers, files=files)

    if not response.ok:
      return None

    raw = response.json()
    message = raw.get("response", raw)
    return str(message)

  # Step 3: Activate and refresh the license
  def activate_license():
    url = f"{BASE_URL}/api/2.0/settings/license/accept"
    response = requests.post(url, headers=JSON_HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    message = raw.get("response", raw)
    return str(message)

  def refresh_license():
    url = f"{BASE_URL}/api/2.0/settings/license/refresh"
    response = requests.get(url, headers=JSON_HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    ok = raw.get("response", raw)
    return bool(ok)

  if __name__ == "__main__":
    required = is_license_required()

    if required:
      upload_result = upload_license("/path/to/license.lic")
      activation_result = activate_license()
      refreshed = refresh_license()
      # Use upload_result, activation_result, and refreshed in your UI if needed
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Check if a license is required

A GET request is sent to [/api/2.0/settings/license/required](/docspace/api-backend/usage-api/get-is-license-required).

The response contains a boolean value:

- `true`: the portal requires a license (for example, no valid license installed).
- `false`: a valid license is already present.

Use this to decide whether to show an upload/activation flow.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function isLicenseRequired(): Promise<boolean | null> {
    const url = `${BASE_URL}/api/2.0/settings/license/required`;

    const response = await fetch(url, {
      method: 'GET',
      headers: JSON_HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const required = body.response ?? body;
    return Boolean(required);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def is_license_required():
    url = f"{BASE_URL}/api/2.0/settings/license/required"
    response = requests.get(url, headers=JSON_HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    required = raw.get("response", raw)
    return bool(required)
  ```

  </TabItem>
</Tabs>

## Step 2: Upload a license file

A POST request is sent to [/api/2.0/settings/license](/docspace/api-backend/usage-api/upload-license) with a multipart/form-data body:

- `Files`: license file to be uploaded.

The response includes a message about the license upload result. At this point the license file is stored on the portal but may still need activation.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function uploadLicense(filePath: string): Promise<string | null> {
    const url = `${BASE_URL}/api/2.0/settings/license`;

    const form = new FormData();
    // "Files" is the field name expected by the API
    form.append('Files', fs.createReadStream(filePath));

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json',
        ...form.getHeaders(),
      },
      body: form as any,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const message = body.response ?? body;
    return String(message);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def upload_license(file_path: str):
    url = f"{BASE_URL}/api/2.0/settings/license"

    with open(file_path, "rb") as f:
      files = {
        "Files": f,  # "Files" is the field name expected by the API
      }
      headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Accept": "application/json",
      }
      response = requests.post(url, headers=headers, files=files)

    if not response.ok:
      return None

    raw = response.json()
    message = raw.get("response", raw)
    return str(message)
  ```

  </TabItem>
</Tabs>

## Step 3: Activate and refresh the license

To activate the uploaded license, a POST request is sent to [/api/2.0/settings/license/accept](/docspace/api-backend/usage-api/accept-license).
The response contains a message about the activation result.

To synchronize license state, a GET request is sent to [/api/2.0/settings/license/refresh](/docspace/api-backend/usage-api/refresh-license).
The response contains a boolean value that indicates whether the refresh operation completed successfully.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function activateLicense(): Promise<string | null> {
    const url = `${BASE_URL}/api/2.0/settings/license/accept`;

    const response = await fetch(url, {
      method: 'POST',
      headers: JSON_HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const message = body.response ?? body;
    return String(message);
  }

  async function refreshLicense(): Promise<boolean | null> {
    const url = `${BASE_URL}/api/2.0/settings/license/refresh`;

    const response = await fetch(url, {
      method: 'GET',
      headers: JSON_HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const ok = body.response ?? body;
    return Boolean(ok);
  }

  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def activate_license():
    url = f"{BASE_URL}/api/2.0/settings/license/accept"
    response = requests.post(url, headers=JSON_HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    message = raw.get("response", raw)
    return str(message)

  def refresh_license():
    url = f"{BASE_URL}/api/2.0/settings/license/refresh"
    response = requests.get(url, headers=JSON_HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    ok = raw.get("response", raw)
    return bool(ok)
  ```

  </TabItem>
</Tabs>