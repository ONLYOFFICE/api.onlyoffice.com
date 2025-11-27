import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure wallet auto top-up for a tenant

This example demonstrates how to read and update wallet auto top-up settings in ONLYOFFICE DocSpace. You can use it to build an admin settings page where administrators enable auto top-up, configure the minimum and maximum balance thresholds, and review the current configuration.

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

  // Step 1: Retrieve current auto top-up settings
  async function getAutoTopupSettings() {
    const url = `${BASE_URL}/api/2.0/portal/payment/topupsettings`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const settings = data.response || data;
      console.log('Current wallet auto top-up settings:');
      console.log(settings);
      return settings;
    }

    const text = await res.text();
    console.log('Failed to get auto top-up settings:', res.status, text);
    return null;
  }

  // Step 2: Set wallet auto top-up settings
  async function setAutoTopupSettings(enabled, minBalance, upToBalance, currency = null) {
    const url = `${BASE_URL}/api/2.0/portal/payment/topupsettings`;

    const settings = {
      enabled,
      minBalance,
      upToBalance,
    };

    if (currency !== null) {
      settings.currency = currency;
    }

    const body = { settings };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        ...HEADERS,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('Auto top-up settings updated successfully.');
      console.log('Server response:', result);
      return true;
    }

    const text = await res.text();
    console.log('Failed to set auto top-up settings:', res.status, text);
    return false;
  }

  // Example flow: read current settings, update, read again
  async function demoConfigureAutoTopup() {
    console.log('--- Current auto top-up configuration ---');
    await getAutoTopupSettings();

    // Example values – replace with those from your admin UI
    const enabled = true;
    // Trigger auto top-up when balance is below this minimum (5–1000)
    const minBalance = 50;
    // Top-up until the balance reaches this value (6–5000)
    const upToBalance = 200;
    const currency = 'USD'; // Optional, three-character ISO 4217 code

    console.log('\n--- Updating auto top-up configuration ---');
    const updated = await setAutoTopupSettings(
      enabled,
      minBalance,
      upToBalance,
      currency
    );

    if (updated) {
      console.log('\n--- Updated auto top-up configuration ---');
      await getAutoTopupSettings();
    }
  }

  // Run example
  (async () => {
    await demoConfigureAutoTopup();
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

  # Step 1: Retrieve current auto top-up settings
  def get_auto_topup_settings():
    url = f"{BASE_URL}/api/2.0/portal/payment/topupsettings"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Current wallet auto top-up settings:")
      print(settings)
      return settings

    print("Failed to get auto top-up settings:", response.status_code, response.text)
    return None

  # Step 2: Set wallet auto top-up settings
  def set_auto_topup_settings(enabled, min_balance, up_to_balance, currency=None):
    url = f"{BASE_URL}/api/2.0/portal/payment/topupsettings"

    settings = {
      "enabled": enabled,
      "minBalance": min_balance,
      "upToBalance": up_to_balance,
    }
    if currency is not None:
      settings["currency"] = currency

    data = {
      "settings": settings
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Auto top-up settings updated successfully.")
      print("Server response:", result)
      return True

    print("Failed to set auto top-up settings:", response.status_code, response.text)
    return False

  # Example flow: read current settings, update, read again
  def demo_configure_auto_topup():
    print("--- Current auto top-up configuration ---")
    get_auto_topup_settings()

    # Example values – replace with those from your admin UI
    enabled = True
    # Trigger auto top-up when balance is below this minimum (5–1000)
    min_balance = 50
    # Top-up until the balance reaches this value (6–5000)
    up_to_balance = 200
    currency = "USD"  # Optional, three-character ISO 4217 code

    print("\n--- Updating auto top-up configuration ---")
    updated = set_auto_topup_settings(
      enabled=enabled,
      min_balance=min_balance,
      up_to_balance=up_to_balance,
      currency=currency,
    )

    if updated:
      print("\n--- Updated auto top-up configuration ---")
      get_auto_topup_settings()

  if __name__ == "__main__":
    demo_configure_auto_topup()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve current auto top-up settings

A GET request is sent to [/api/2.0/portal/payment/topupsettings](/docspace/api-backend/usage-api/get-tenant-wallet-settings) to retrieve the current wallet auto top-up settings for the tenant.

The response contains the settings object with fields such as:

- `enabled`: whether automatic top-up is enabled.
- `minBalance`: minimum wallet balance at which automatic top-up will be triggered (5–1000).
- `upToBalance`: maximum wallet balance up to which automatic top-up will refill (6–5000).
- `currency`: three-character ISO 4217 currency symbol.
- `lastModified`: date and time when the settings were last modified.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getAutoTopupSettings() {
    const url = `${BASE_URL}/api/2.0/portal/payment/topupsettings`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const settings = data.response || data;
      console.log('Current wallet auto top-up settings:');
      console.log(settings);
      return settings;
    }

    const text = await res.text();
    console.log('Failed to get auto top-up settings:', res.status, text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_auto_topup_settings():
    url = f"{BASE_URL}/api/2.0/portal/payment/topupsettings"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Current wallet auto top-up settings:")
      print(settings)
      return settings

    print("Failed to get auto top-up settings:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Update auto top-up settings

A POST request is sent to [/api/2.0/portal/payment/topupsettings](/docspace/api-backend/usage-api/set-tenant-wallet-settings) to set the wallet auto top-up settings.

The request body includes a settings object:

- `enabled`: enable or disable automatic top-up.
- `minBalance`: minimum balance that triggers auto top-up (between 5 and 1000).
- `upToBalance`: target balance to reach with auto top-up (between 6 and 5000).
- `currency`: three-character ISO 4217 currency symbol.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  def set_auto_topup_settings(enabled, min_balance, up_to_balance, currency=None):
    url = f"{BASE_URL}/api/2.0/portal/payment/topupsettings"

    settings = {
      "enabled": enabled,
      "minBalance": min_balance,
      "upToBalance": up_to_balance,
    }
    if currency is not None:
      settings["currency"] = currency

    data = {
      "settings": settings
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Auto top-up settings updated successfully.")
      print("Server response:", result)
      return True

    print("Failed to set auto top-up settings:", response.status_code, response.text)
    return False
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def set_auto_topup_settings(enabled, min_balance, up_to_balance, currency=None):
    url = f"{BASE_URL}/api/2.0/portal/payment/topupsettings"

    settings = {
      "enabled": enabled,
      "minBalance": min_balance,
      "upToBalance": up_to_balance,
    }
    if currency is not None:
      settings["currency"] = currency

    data = {
      "settings": settings
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Auto top-up settings updated successfully.")
      print("Server response:", result)
      return True

    print("Failed to set auto top-up settings:", response.status_code, response.text)
    return False
  ```

  </TabItem>
</Tabs>