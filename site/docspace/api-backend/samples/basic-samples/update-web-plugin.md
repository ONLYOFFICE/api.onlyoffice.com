import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update a web plugin

This example shows how to enable or disable a web plugin and update its `settings` value.

The `settings` field is a short string (up to 255 characters) used by the plugin to store configuration.  
A common pattern is to save a JSON object as a string (for example, `{"theme":"dark"}`), but some system plugins may use a token or another internal identifier.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Enable or disable a plugin and update its settings string
  async function updateWebPlugin(
    name: string,
    enabled: boolean,
    settingsObject: Record<string, unknown>,
  ) {
    const url = `${BASE_URL}/api/2.0/settings/webplugins/${name}`;

    // Convert settings object to JSON string
    const settingsStr = JSON.stringify(settingsObject);

    const payload = {
      enabled,
      settings: settingsStr,
    };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      console.log('Web plugin updated.');
      return true;
    }

    console.log(`Request failed: ${res.status}`);
    console.log(await res.text());
    return false;
  }

  // Example usage
  (async () => {
    const pluginName = 'speech-to-text';

    const settings = {
      provider: 'default',
      language: 'en-US',
      autoStart: false,
    };

    await updateWebPlugin(pluginName, true, settings);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  # Enable or disable a plugin and update its settings string.
  def update_web_plugin(name: str, enabled: bool, settings_object: dict):
    url = f"{BASE_URL}/api/2.0/settings/webplugins/{name}"

    # Convert settings object to JSON string
    settings_str = json.dumps(settings_object)

    payload = {
      "enabled": enabled,
      "settings": settings_str,
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.ok:
      print("Web plugin updated.")
      return True

    print(f"Request failed: {response.status_code}")
    print(response.text)
    return False


  if __name__ == "__main__":
    # Example: enable speech-to-text and save simple JSON settings
    plugin_name = "speech-to-text"

    settings = {
      "provider": "default",
      "language": "en-US",
      "autoStart": False,
    }

    update_web_plugin(plugin_name, enabled=True, settings_object=settings)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to [/api/2.0/settings/webplugins/{name}](/docspace/api-backend/usage-api/update-web-plugin) where `{name}` is the web plugin name.

You can:

- Enable or disable the plugin using the `enabled` flag.
- Pass a configuration string in the `settings` field (for example, a JSON string with plugin options like provider, language, or feature flags).