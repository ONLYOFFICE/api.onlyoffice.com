import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get web plugins

This example shows how to get the list of web plugins and view details for a single plugin in ONLYOFFICE DocSpace.

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
  };

  // Get all web plugins (optionally filter by enabled flag)
  async function getWebPlugins(enabled?: boolean) {
    const params = new URLSearchParams();

    if (typeof enabled === 'boolean') {
      params.set('enabled', String(enabled).toLowerCase());
    }

    const url = `${BASE_URL}/api/2.0/settings/webplugins${
      params.toString() ? `?${params.toString()}` : ''
    }`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const plugins = json.response || json;

    console.log(`Total plugins: ${plugins.length}`);
    plugins.forEach((plugin: any) => {
      console.log('Name    :', plugin.name);
      console.log('Enabled :', plugin.enabled);
      console.log('Settings:', plugin.settings);
    });

    return plugins;
  }

  // Get a single web plugin by name
  async function getWebPlugin(name: string) {
    const url = `${BASE_URL}/api/2.0/settings/webplugins/${name}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const plugin = json.response || json;

    console.log(JSON.stringify(plugin, null, 2));
    return plugin;
  }

  // Example usage
  (async () => {
    // 1. Get all web plugins
    await getWebPlugins();

    // 2. Get details for a specific plugin by name
    await getWebPlugin('speech-to-text');
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
  }

  # Step 1: Get all web plugins
  def get_web_plugins(enabled: bool | None = None):
    params: dict[str, str] = {}
    if enabled is not None:
      params["enabled"] = str(enabled).lower()

    url = f"{BASE_URL}/api/2.0/settings/webplugins"
    response = requests.get(url, headers=HEADERS, params=params)

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    raw = response.json()
    plugins = raw.get("response", raw)

    print(f"Total plugins: {len(plugins)}")
    for plugin in plugins:
      print("-" * 40)
      print("Name    :", plugin.get("name"))
      print("Enabled :", plugin.get("enabled"))
      print("Settings:", plugin.get("settings"))
    return plugins

  # Step 2: Get details for a specific plugin by name
  def get_web_plugin(name: str):
    url = f"{BASE_URL}/api/2.0/settings/webplugins/{name}"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    raw = response.json()
    plugin = raw.get("response", raw)
    print(json.dumps(plugin, indent=2, ensure_ascii=False))
    return plugin


  if __name__ == "__main__":
    # 1. Get all web plugins
    get_web_plugins()

    # 2. Get details for a specific plugin by name
    get_web_plugin("speech-to-text")
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get all web plugins

A GET request is sent to [/api/2.0/settings/webplugins](/docspace/api-backend/usage-api/get-web-plugins).
You can optionally filter by the `enabled` flag to return only active or inactive plugins.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getWebPlugins(enabled?: boolean) {
    const params = new URLSearchParams();

    if (typeof enabled === 'boolean') {
      params.set('enabled', String(enabled).toLowerCase());
    }

    const url = `${BASE_URL}/api/2.0/settings/webplugins${
      params.toString() ? `?${params.toString()}` : ''
    }`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const plugins = json.response || json;

    console.log(`Total plugins: ${plugins.length}`);
    plugins.forEach((plugin: any) => {
      console.log('Name    :', plugin.name);
      console.log('Enabled :', plugin.enabled);
      console.log('Settings:', plugin.settings);
    });

    return plugins;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_web_plugins(enabled: bool | None = None):
    params: dict[str, str] = {}
    if enabled is not None:
      params["enabled"] = str(enabled).lower()

    url = f"{BASE_URL}/api/2.0/settings/webplugins"
    response = requests.get(url, headers=HEADERS, params=params)

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    raw = response.json()
    plugins = raw.get("response", raw)

    print(f"Total plugins: {len(plugins)}")
    for plugin in plugins:
      print("-" * 40)
      print("Name    :", plugin.get("name"))
      print("Enabled :", plugin.get("enabled"))
      print("Settings:", plugin.get("settings"))
    return plugins
  ```

  </TabItem>
</Tabs>

## Step 2: Get a web plugin by name

A GET request is sent to [/api/2.0/settings/webplugins/:name](/docspace/api-backend/usage-api/get-web-plugin) to retrieve full metadata of a single web plugin.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getWebPlugin(name: string) {
    const url = `${BASE_URL}/api/2.0/settings/webplugins/${name}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const plugin = json.response || json;

    console.log(JSON.stringify(plugin, null, 2));
    return plugin;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_web_plugin(name: str):
    url = f"{BASE_URL}/api/2.0/settings/webplugins/{name}"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    raw = response.json()
    plugin = raw.get("response", raw)
    print(json.dumps(plugin, indent=2, ensure_ascii=False))
    return plugin
  ```

  </TabItem>
</Tabs>