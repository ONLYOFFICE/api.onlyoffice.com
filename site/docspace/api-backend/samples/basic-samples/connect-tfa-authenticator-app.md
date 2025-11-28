import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect a TFA authenticator app

This example demonstrates how to link an authenticator application (such as Google Authenticator or Authy) to a user account in ONLYOFFICE DocSpace using the API.
The flow consists of two phases: generating a setup payload with a QR code and manual key, and validating the first TFA code from the app.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
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

  // Step 1: Get TFA setup data (QR code, manual key, account label)
  async function getTfaSetup() {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp/setup`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }

  // Step 2: Validate TFA code from authenticator app
  async function validateTfaCode(code: string) {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp/validate`;
    const payload = { code };

    const response = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return false;
    }

    const body = await response.json();
    const valid = body.response ?? body;
    return Boolean(valid);
  }

  // Example usage
  (async () => {
    // Step 1: request setup data for the current user
    const setup = await getTfaSetup();
    if (!setup) return;

    // setup.account            - account label for the authenticator
    // setup.manualEntryKey     - key for manual entry into the authenticator app
    // setup.qrCodeSetupImageUrl - URL of QR image to show in the UI

    // In a real UI, you would display setup.qrCodeSetupImageUrl and ask the user
    // to scan it and enter the first code from their authenticator app.

    const userProvidedCode = '123456'; // replace with the code entered by the user

    // Step 2: validate the code entered by the user
    const isValid = await validateTfaCode(userProvidedCode);
    if (!isValid) {
      // Handle invalid code in your application logic
      return;
    }

    // The authenticator app is now linked to the user account
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Configure API endpoint and access token
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Common headers with authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  # Step 1: Get TFA setup data (QR code, manual key, account label)
  def get_tfa_setup():
    url = f"{BASE_URL}/api/2.0/settings/tfaapp/setup"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  # Step 2: Validate TFA code from authenticator app
  def validate_tfa_code(code: str) -> bool:
    url = f"{BASE_URL}/api/2.0/settings/tfaapp/validate"
    payload = {"code": code}

    response = requests.post(url, headers=HEADERS, json=payload)

    if not response.ok:
      return False

    raw = response.json()
    valid = raw.get("response", raw)
    return bool(valid)

  if __name__ == "__main__":
    # Step 1: request setup data for the current user
    setup = get_tfa_setup()
    if not setup:
      raise SystemExit(1)

    # setup["account"]             - account label for the authenticator
    # setup["manualEntryKey"]      - key for manual entry into the authenticator app
    # setup["qrCodeSetupImageUrl"] - URL of QR image to show in the UI

    # In a real UI, you would display setup["qrCodeSetupImageUrl"]
    # and ask the user to scan it and enter the first code.

    user_provided_code = "123456"  # replace with the code entered by the user

    # Step 2: validate the code entered by the user
    is_valid = validate_tfa_code(user_provided_code)

    # At this point:
    # - if is_valid is True, the authenticator app is successfully linked
    # - if is_valid is False, you should show an error and let the user try again
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Generate TFA setup payload

A GET request is sent to [/api/2.0/settings/tfaapp/setup](/docspace/api-backend/usage-api/tfa-app-generate-setup-code) to generate TFA setup data for the current user.

The response contains fields such as:

- `account`: the label to display in the authenticator app.
- `manualEntryKey`: secret key for manual entry.
- `qrCodeSetupImageUrl`: URL of a QR code image that can be shown in the UI.

This data is used to let the user connect their authenticator app.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
    async function getTfaSetup() {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp/setup`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
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
  def get_tfa_setup():
    url = f"{BASE_URL}/api/2.0/settings/tfaapp/setup"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>

## Step 2: Validate the TFA code from the authenticator app

A POST request is sent to [/api/2.0/settings/tfaapp/validate](/docspace/api-backend/usage-api/tfa-validate-auth-code) with:

- `code`: the one-time verification code provided by the user.

If the response is `true`, the code is valid and the authenticator app is successfully linked to the user account. If the code is invalid, the UI should prompt the user to try again.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function validateTfaCode(code: string) {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp/validate`;
    const payload = { code };

    const response = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return false;
    }

    const body = await response.json();
    const valid = body.response ?? body;
    return Boolean(valid);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def validate_tfa_code(code: str) -> bool:
    url = f"{BASE_URL}/api/2.0/settings/tfaapp/validate"
    payload = {"code": code}

    response = requests.post(url, headers=HEADERS, json=payload)

    if not response.ok:
      return False

    raw = response.json()
    valid = raw.get("response", raw)
    return bool(valid)
  ```

  </TabItem>
</Tabs>