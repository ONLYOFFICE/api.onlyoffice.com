# Creating an API Plugin

This guide walks you through creating a DocSpace plugin that uses platform API connection parameters (`origin`, `proxy`, and `prefix`) to make authorized requests, such as creating rooms via REST API.

## Before you start
Make sure you have a DocSpace server running and install DocSpace Plugin SDK globally `npm i -g @onlyoffice/docspace-plugin-sdk`

## Step 1: Create the Plugin

First, initialize your plugin using the CLI:

```bash
npx create-docspace-plugin
```

You'll be prompted to fill out basic metadata:
- Plugin name
- Version
- Author
- Description
- Logo
- License
- Homepage

Then, you'll be shown a list of available scopes.  
Use the arrow keys to highlight `API`, press `space` to select it, then press `enter` to confirm and generate the plugin template.

## Step 2: Confirm Plugin Configuration

Ensure `package.json` includes all necessary fields. Most importantly, make sure it includes:

```json
"scopes": ["Api"]
```

Also verify that the `scripts/createZip.js` file is present. This script will:
- Compile your plugin.
- Package everything into `dist/plugin.zip`.

## Step 3: Review and Extend Plugin Code

By default, the plugin template includes a basic implementation inside the `src/index.ts` file. It defines a class that registers and manages profile menu items using the Plugin SDK:

```js
import { IPlugin, PluginStatus, IApiPlugin } from '@onlyoffice/docspace-plugin-sdk';

class Apiplugin implements IPlugin, IApiPlugin {
  status: PluginStatus = PluginStatus.active;
  origin = '';
  proxy = '';
  prefix = '';
  apiURL = '';

  createAPIUrl = () => {
    const api = this.getAPI();
    this.apiURL = api.origin.replace(/\/+$/, '');
    const parts = [api.proxy, api.prefix];

    parts.forEach((part) => {
      if (!part) return;
      const trimmed = part.trim().replace(/^\/+/, '');
      this.apiURL += this.apiURL.endsWith('/') ? trimmed : `/${trimmed}`;
    });
  };

  createRoom = async () => {
    const url = `${this.apiURL}/files/rooms`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.DocSpacePluginToken}`
        },
        body: JSON.stringify({
          title: 'Plugin-created Room',
          roomType: 2
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Room created:', result);
    } catch (error) {
      console.error('Failed to create room:', error);
    }
  };

  onLoadCallback = async () => {
    this.createAPIUrl();
    await this.createRoom();
  };

  updateStatus = (status: PluginStatus) => {
    this.status = status;
  };

  getStatus = () => this.status;

  setOnLoadCallback = (callback: () => Promise<void>) => {
    this.onLoadCallback = callback;
  };

  setOrigin = (origin: string) => { this.origin = origin };
  getOrigin = () => this.origin;

  setProxy = (proxy: string) => { this.proxy = proxy };
  getProxy = () => this.proxy;

  setPrefix = (prefix: string) => { this.prefix = prefix };
  getPrefix = () => this.prefix;

  setAPI = (origin: string, proxy: string, prefix: string) => {
    this.origin = origin;
    this.proxy = proxy;
    this.prefix = prefix;
  };

  getAPI = () => ({
    origin: this.origin,
    proxy: this.proxy,
    prefix: this.prefix
  });
}

const plugin = new Apiplugin();

declare global {
  interface Window {
    Plugins: Record<string, IPlugin>;
    DocSpacePluginToken: string;
  }
}

window.Plugins = window.Plugins || {};
window.Plugins.Apiplugin = plugin;

export default plugin;
```

For reference:  
[API plugin Docs](../../../usage-sdk/coding-plugin/plugin-types/apiplugin)

## Step 4: Build the Plugin

From the root of your plugin:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`.

## Step 5: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if not already active.

## Step 6: Test It

1. Upload and enable the plugin
2. Reload the DocSpace interface
3. The plugin will automatically trigger `onLoadCallback()`
4. A new room titled `"Plugin-created Room"` should be created automatically
5. Open the browser console to confirm the plugin sent a request and received a response

## Notes

- You can access:
    - `origin`: base URL of the portal
    - `proxy`: proxy segment if used (e.g. /ds)
    - `prefix`: API prefix (usually /api/2.0)
- You can expand this plugin to support context menus, main buttons, or settings by updating the scope