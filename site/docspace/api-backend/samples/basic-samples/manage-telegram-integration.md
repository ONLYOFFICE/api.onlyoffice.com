import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage Telegram integration

This example demonstrates how to check, link, and unlink a Telegram account for the current user in ONLYOFFICE DocSpace using the API.

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

  // Step 1: Check if Telegram is linked
  async function checkTelegram() {
    const url = `${BASE_URL}/api/2.0/settings/telegram/check`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Telegram link status:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);

    return null;
  }

  // Step 2: Get Telegram linking URL
  async function getTelegramLink() {
    const url = `${BASE_URL}/api/2.0/settings/telegram/link`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      let link = data.response || data;

      if (link && typeof link === 'object') {
        link = link.link || link.url;
      }

      console.log('Telegram linking URL:');
      console.log(link);
      return link;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);

    return null;
  }

  // Step 3: Unlink Telegram account
  async function unlinkTelegram() {
    const url = `${BASE_URL}/api/2.0/settings/telegram/link`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (res.status === 200) {
      console.log('Telegram account unlinked successfully.');
      return true;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);

    return false;
  }

  // Example usage
  (async () => {
    await checkTelegram();
    await getTelegramLink();
    await unlinkTelegram();
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

  # Step 1: Check if Telegram is linked
  def check_telegram():
    url = f"{BASE_URL}/api/2.0/settings/telegram/check"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Telegram link status:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
    return None

  # Step 2: Get Telegram linking URL
  def get_telegram_link():
    url = f"{BASE_URL}/api/2.0/settings/telegram/link"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      data = response.json()
      link = data.get("response", data)
      if isinstance(link, dict):
        link = link.get("link") or link.get("url")
      print("Telegram linking URL:")
      print(link)
      return link
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
    return None

  # Step 3: Unlink Telegram account
  def unlink_telegram():
    url = f"{BASE_URL}/api/2.0/settings/telegram/link"
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print("Telegram account unlinked successfully.")
      return True
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
    return False

  def main():
    check_telegram()
    get_telegram_link()
    unlink_telegram()

  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Check if Telegram is linked

A GET request is sent to [/api/2.0/settings/telegram/check](/docspace/api-backend/usage-api/check-telegram) to retrieve the current Telegram linking status for the user.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function checkTelegram() {
    const url = `${BASE_URL}/api/2.0/settings/telegram/check`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Telegram link status:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);

    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def check_telegram():
    url = f"{BASE_URL}/api/2.0/settings/telegram/check"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Telegram link status:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Link Telegram account

A GET request is sent to [/api/2.0/settings/telegram/link](/docspace/api-backend/usage-api/link-telegram) to link a Telegram account. The request body must include the verification data from your Telegram bot.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getTelegramLink() {
    const url = `${BASE_URL}/api/2.0/settings/telegram/link`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      let link = data.response || data;

      if (link && typeof link === 'object') {
        link = link.link || link.url;
      }

      console.log('Telegram linking URL:');
      console.log(link);
      return link;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);

    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_telegram_link():
    url = f"{BASE_URL}/api/2.0/settings/telegram/link"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      data = response.json()
      link = data.get("response", data)
      if isinstance(link, dict):
        link = link.get("link") or link.get("url")
      print("Telegram linking URL:")
      print(link)
      return link
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 3: Unlink Telegram account

A DELETE request is sent to [/api/2.0/settings/telegram/unlink](/docspace/api-backend/usage-api/unlink-telegram) to unlink the Telegram account from the current user.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function unlinkTelegram() {
    const url = `${BASE_URL}/api/2.0/settings/telegram/link`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (res.status === 200) {
      console.log('Telegram account unlinked successfully.');
      return true;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);

    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def unlink_telegram():
    url = f"{BASE_URL}/api/2.0/settings/telegram/link"
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print("Telegram account unlinked successfully.")
      return True
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
    return False
  ```

  </TabItem>
</Tabs>