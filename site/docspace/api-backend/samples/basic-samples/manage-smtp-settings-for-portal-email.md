import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage SMTP settings for portal email

This example demonstrates how to read, update, reset, and test SMTP settings in ONLYOFFICE DocSpace using the API. You can use it to build an admin page where administrators configure outgoing email (notifications, invitations, password reset) and verify that the SMTP server works correctly.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Set API base URL
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`, // if API_KEY is a JWT
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Step 1: Get current SMTP settings
  async function getSmtpSettings() {
    const url = `${BASE_URL}/api/2.0/smtpsettings/smtp`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Get SMTP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('Current SMTP settings:', settings);
    return settings;
  }

  // Step 2: Save (update) SMTP settings
  async function saveSmtpSettings() {
    const url = `${BASE_URL}/api/2.0/smtpsettings/smtp`;

    const body = {
      host: 'mail.example.com',
      port: 587,
      senderAddress: 'notify@example.com',
      senderDisplayName: 'DocSpace Notifications',
      credentialsUserName: 'notify@example.com',
      credentialsUserPassword: 'your-password',
      enableSSL: true,
      enableAuth: true,
      useNtlm: false,
      isDefaultSettings: false,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Save SMTP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('Updated SMTP settings:', settings);
    return settings;
  }

  // Step 3: Test SMTP settings (send test message)
  async function testSmtpSettings() {
    const url = `${BASE_URL}/api/2.0/smtpsettings/smtp/test`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Test SMTP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const status = json.response ?? json;
    console.log('SMTP test status:', status);
    return status;
  }

  // Step 4: Reset SMTP settings to default
  async function resetSmtpSettings() {
    const url = `${BASE_URL}/api/2.0/smtpsettings/smtp`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Reset SMTP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('SMTP settings after reset:', settings);
    return settings;
  }

  // Example usage
  (async () => {
    // Step 1: Read current settings
    await getSmtpSettings();

    // Step 2: Save new SMTP settings
    await saveSmtpSettings();

    // Step 3: Test SMTP configuration
    await testSmtpSettings();

    // Step 4: Reset to default SMTP settings (optional)
    // await resetSmtpSettings();
  })().catch((e) => {
    console.error(e);
  });
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
    "Content-Type": "application/json",
  }

  # Step 1: Get current SMTP settings
  def get_smtp_settings():
    url = f"{BASE_URL}/api/2.0/smtpsettings/smtp"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Current SMTP settings:")
      print(settings)
      return settings

    print("Failed to get SMTP settings:", response.status_code, response.text)
    return None

  # Step 2: Save (update) SMTP settings
  def save_smtp_settings():
    url = f"{BASE_URL}/api/2.0/smtpsettings/smtp"

    payload = {
      "host": "mail.example.com",
      "port": 587,
      "senderAddress": "notify@example.com",
      "senderDisplayName": "DocSpace Notifications",
      "credentialsUserName": "notify@example.com",
      "credentialsUserPassword": "your-password",
      "enableSSL": True,
      "enableAuth": True,
      "useNtlm": False,
      "isDefaultSettings": False,
    }

    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Updated SMTP settings:")
      print(settings)
      return settings

    print("Failed to save SMTP settings:", response.status_code, response.text)
    return None

  # Step 3: Test SMTP settings (send test message)
  def test_smtp_settings():
    url = f"{BASE_URL}/api/2.0/smtpsettings/smtp/test"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      status = data.get("response", data)
      print("SMTP test status:")
      print(status)
      return status

    print("Failed to test SMTP settings:", response.status_code, response.text)
    return None

  # Step 4: Reset SMTP settings to default
  def reset_smtp_settings():
    url = f"{BASE_URL}/api/2.0/smtpsettings/smtp"
    response = requests.delete(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("SMTP settings after reset:")
      print(settings)
      return settings

    print("Failed to reset SMTP settings:", response.status_code, response.text)
    return None

  if __name__ == "__main__":
    # Step 1: Read current SMTP configuration
    get_smtp_settings()

    # Step 2: Save new SMTP configuration
    save_smtp_settings()

    # Step 3: Test SMTP settings
    test_smtp_settings()

    # Step 4 (optional): Reset to default settings
    # reset_smtp_settings()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get current SMTP settings

A GET request is sent to [/api/2.0/smtpsettings/smtp](/docspace/api-backend/usage-api/get-smtp-settings) to retrieve the current portal SMTP configuration.

The response includes fields such as:

`host`: SMTP server host (for example, mail.example.com).
`port`: SMTP port (for example, 25, 465, or 587).
`senderAddress`: email used as the sender address.
`senderDisplayName`: display name shown in the recipient's inbox.
`credentialsUserName`, `credentialsUserPassword`: authentication credentials (if enableAuth is true).
`enableSSL`, `enableAuth`, `useNtlm`, `isDefaultSettings`: flags controlling protocol and authentication behavior.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getSmtpSettings() {
    const url = `${BASE_URL}/api/2.0/smtpsettings/smtp`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Get SMTP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('Current SMTP settings:', settings);
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_smtp_settings():
    url = f"{BASE_URL}/api/2.0/smtpsettings/smtp"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Current SMTP settings:")
      print(settings)
      return settings

    print("Failed to get SMTP settings:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Save SMTP settings

A POST request is sent to [/api/2.0/smtpsettings/smtp](/docspace/api-backend/usage-api/save-smtp-settings) to save new SMTP settings for the portal.

Typical fields in the request body:

- `host`, `port`: SMTP server endpoint.
- `senderAddress`, `senderDisplayName`: “From” address and name.
- `credentialsUserName`, `credentialsUserPassword`: redentials for authentication.
- `enableSSL`: whether to use SSL/TLS.
- `enableAuth`: whether authentication is required.
- `useNtlm`: whether to use NTLM authentication.
- `isDefaultSettings`: indicates whether these settings override default ones.

The API returns the resulting SMTP configuration.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function saveSmtpSettings() {
    const url = `${BASE_URL}/api/2.0/smtpsettings/smtp`;

    const body = {
      host: 'mail.example.com',
      port: 587,
      senderAddress: 'notify@example.com',
      senderDisplayName: 'DocSpace Notifications',
      credentialsUserName: 'notify@example.com',
      credentialsUserPassword: 'your-password',
      enableSSL: true,
      enableAuth: true,
      useNtlm: false,
      isDefaultSettings: false,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Save SMTP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('Updated SMTP settings:', settings);
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def save_smtp_settings():
    url = f"{BASE_URL}/api/2.0/smtpsettings/smtp"

    payload = {
      "host": "mail.example.com",
      "port": 587,
      "senderAddress": "notify@example.com",
      "senderDisplayName": "DocSpace Notifications",
      "credentialsUserName": "notify@example.com",
      "credentialsUserPassword": "your-password",
      "enableSSL": True,
      "enableAuth": True,
      "useNtlm": False,
      "isDefaultSettings": False,
    }

    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Updated SMTP settings:")
      print(settings)
      return settings

    print("Failed to save SMTP settings:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 3: Test SMTP settings

A GET request is sent to [/api/2.0/smtpsettings/smtp/test](/docspace/api-backend/usage-api/test-smtp-settings) to send a test email to the current user and check if the SMTP settings work.

The response contains a status object with:

- `completed`: whether the SMTP test operation is completed.
- `id`: operation ID (can be used to track).
- `status`, error, percents: state and progress information.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function testSmtpSettings() {
    const url = `${BASE_URL}/api/2.0/smtpsettings/smtp/test`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Test SMTP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const status = json.response ?? json;
    console.log('SMTP test status:', status);
    return status;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def test_smtp_settings():
    url = f"{BASE_URL}/api/2.0/smtpsettings/smtp/test"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      status = data.get("response", data)
      print("SMTP test status:")
      print(status)
      return status

    print("Failed to test SMTP settings:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 4: Reset SMTP settings

A DELETE request is sent to [/api/2.0/smtpsettings/smtp](/docspace/api-backend/usage-api/reset-smtp-settings) to reset SMTP configuration back to default values for the portal.

The response returns the resulting (default) SMTP settings, which you can display in the UI or store for diagnostic purposes.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function resetSmtpSettings() {
    const url = `${BASE_URL}/api/2.0/smtpsettings/smtp`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Reset SMTP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('SMTP settings after reset:', settings);
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def reset_smtp_settings():
    url = f"{BASE_URL}/api/2.0/smtpsettings/smtp"
    response = requests.delete(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("SMTP settings after reset:")
      print(settings)
      return settings

    print("Failed to reset SMTP settings:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>