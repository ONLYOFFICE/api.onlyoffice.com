import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add and delete a web plugin

This example shows how to upload a web plugin package to ONLYOFFICE DocSpace and how to delete a plugin by its name. A web plugin is uploaded as a `.zip` file using `multipart/form-data` where the plugin file is passed in the `file` field.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to manage web plugins.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  import fs from 'fs';
  import FormData from 'form-data';

  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
  };

  // Step 1. Upload a web plugin
  async function addWebPlugin(filePath: string, system = false) {
    const url = `${BASE_URL}/api/2.0/settings/webplugins`;
    const params = new URLSearchParams({ system: String(system).toLowerCase() });

    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath)); // plugin package file

    const res = await fetch(`${url}?${params.toString()}`, {
      method: 'POST',
      headers: HEADERS,      // only custom headers; form-data will add its own
      body: formData,        // form-data will set the Content-Type header
    });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const plugin = json.response || json;

    console.log('Web plugin added:');
    console.log(JSON.stringify(plugin, null, 2));
    return plugin;
  }

  // Step 2. Delete a web plugin by name
  async function deleteWebPlugin(name: string) {
    const url = `${BASE_URL}/api/2.0/settings/webplugins/${name}`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (res.ok) {
      console.log('Web plugin deleted.');
      return true;
    }

    console.log(`Request failed: ${res.status}`);
    console.log(await res.text());
    return false;
  }

  // Example usage
  (async () => {
    const plugin = await addWebPlugin('plugin.zip', false);
    if (!plugin) return;

    const pluginName = plugin.name;

    // await deleteWebPlugin(pluginName);
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


  # Step 1. Upload a web plugin
  def add_web_plugin(file_path: str, system: bool = False):
    url = f"{BASE_URL}/api/2.0/settings/webplugins"
    params = {"system": str(system).lower()}

    with open(file_path, "rb") as f:
      files = {"file": f}  # plugin package file

      response = requests.post(
        url,
        headers=HEADERS,
        params=params,
        files=files,
      )

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    raw = response.json()
    plugin = raw.get("response", raw)

    print("Web plugin added:")
    print(json.dumps(plugin, indent=2))
    return plugin


  # Step 2. Delete a web plugin by name
  def delete_web_plugin(name: str):
    url = f"{BASE_URL}/api/2.0/settings/webplugins/{name}"
    response = requests.delete(url, headers=HEADERS)

    if response.ok:
      print("Web plugin deleted.")
      return True

    print(f"Request failed: {response.status_code}")
    print(response.text)
    return False


  if __name__ == "__main__":
    # Step 1: Upload a plugin package
    plugin = add_web_plugin("plugin.zip", system=False)
    plugin_name = plugin.get("name")

    # Step 2: Delete the plugin (if needed)
    # delete_web_plugin(plugin_name)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Upload a web plugin

A POST request is sent to [/api/2.0/settings/webplugins](/docspace/api-backend/usage-api/add-web-plugin-from-file) with `multipart/form-data` containing the plugin package file in the file field.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function addWebPlugin(filePath: string, system = false) {
    const url = `${BASE_URL}/api/2.0/settings/webplugins`;
    const params = new URLSearchParams({ system: String(system).toLowerCase() });

    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath)); // plugin package file

    const res = await fetch(`${url}?${params.toString()}`, {
      method: 'POST',
      headers: HEADERS,      // only custom headers; form-data will add its own
      body: formData,        // form-data will set the Content-Type header
    });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const plugin = json.response || json;

    console.log('Web plugin added:');
    console.log(JSON.stringify(plugin, null, 2));
    return plugin;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def add_web_plugin(file_path: str, system: bool = False):
    url = f"{BASE_URL}/api/2.0/settings/webplugins"
    params = {"system": str(system).lower()}

    with open(file_path, "rb") as f:
      files = {"file": f}  # plugin package file

      response = requests.post(
        url,
        headers=HEADERS,
        params=params,
        files=files,
      )

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    raw = response.json()
    plugin = raw.get("response", raw)

    print("Web plugin added:")
    print(json.dumps(plugin, indent=2))
    return plugin
  ```

  </TabItem>
</Tabs>

## Step 2: Delete a web plugin

A DELETE request is sent to [/api/2.0/settings/webplugins/:name](/docspace/api-backend/usage-api/delete-web-plugin) where `{name}` is the web plugin name returned when the plugin was added.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function deleteWebPlugin(name: string) {
    const url = `${BASE_URL}/api/2.0/settings/webplugins/${name}`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (res.ok) {
      console.log('Web plugin deleted.');
      return true;
    }

    console.log(`Request failed: ${res.status}`);
    console.log(await res.text());
    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_web_plugin(name: str):
    url = f"{BASE_URL}/api/2.0/settings/webplugins/{name}"
    response = requests.delete(url, headers=HEADERS)

    if response.ok:
      print("Web plugin deleted.")
      return True

    print(f"Request failed: {response.status_code}")
    print(response.text)
    return False
  ```

  </TabItem>
</Tabs>