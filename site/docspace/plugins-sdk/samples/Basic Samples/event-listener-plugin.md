# Creating an Event Listener Plugin

This guide walks you through creating a plugin for DocSpace that listens for file-related events (such as file creation) and performs custom actions like triggering an API call.

## Before you start
Make sure you have a DocSpace server running and install DocSpace Plugin SDK globally `npm i -g @onlyoffice/docspace-plugin-sdk`

## Step 1: Creating the Plugin

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
Use the arrow keys to highlight `Profile menu`, press `space` to select it, then press `enter` to confirm and generate the plugin template.

## Step 2: Confirm Plugin Configuration

Ensure `package.json` includes all necessary fields. Most importantly, make sure it includes:

```json
"scopes": ["EventListener"]
```

Also verify that the `scripts/createZip.js` file is present. This script will:
- Compile your plugin.
- Package everything into `dist/plugin.zip`.

## Step 3: Review and Extend Plugin Code

By default, the plugin template includes a basic implementation inside the `src/index.ts` file. It defines a class that registers and manages profile menu items using the Plugin SDK:

```js
import { IPlugin, PluginStatus, IEventListenerPlugin, Events, IEventListenerItem } from '@onlyoffice/docspace-plugin-sdk'

class Eventlisteneritem implements IPlugin, IEventListenerPlugin {
  status: PluginStatus = PluginStatus.active;
  eventListenerItems: Map<string, IEventListenerItem> = new Map();
  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => {
    this.status = status;
  };

  getStatus = () => {
    return this.status;
  };

  setOnLoadCallback = (callback: () => Promise<void>) => {
    this.onLoadCallback = callback;
  };

  addEventListenerItem = (item: IEventListenerItem): void => {
    this.eventListenerItems.set(item.key, item);
  };

  getEventListenerItems = (): Map<string, IEventListenerItem> => {
    return this.eventListenerItems;
  };
}

const plugin = new Eventlisteneritem();

declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Eventlisteneritem = plugin || {};
export default plugin;
```

## Step 4: Add Your Event Listener
Append the following after the class definition to register an event handler:

```js
const eventItem: IEventListenerItem = {
  key: "event-listener-item",
  eventType: Events.CREATE,
  eventHandler: () => {
    fetch("{PORTAL_SRC}/api/2.0/files/file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer sk-xxx`, // Use your secure API token
      },
      body: JSON.stringify({
        folderId: "8", // Replace with your actual folder ID
        title: `event-log.txt`,
      }),
    });

    return {};
  },
};

plugin.addEventListenerItem(eventItem);
```

For reference:  
[EventListenerPlugin Docs](../../../usage-sdk/coding-plugin/plugin-types/eventlistenerplugin)  
[EventListenerItem Docs](../../../usage-sdk/coding-plugin/plugin-items/eventlisteneritem)

## Step 5: Build the Plugin

From the root of your plugin:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js` and runs `scripts/createZip.js` to bundle everything into `dist/plugin.zip`.

## Step 6: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if not already active.

## Step 7: Test It

1. Go to any Room in DocSpace.
2. Create a new file using the "New Document" button.
3. Open the browser console and check that the plugin has triggered the fetch request.
4. Verify that the file `event-log.txt` is created in folder ID 8 (as defined in the plugin).

## Notes

You can use `Events.CREATE`, `Events.UPDATE`, `Events.DELETE`, etc.
Each listener must have a unique `key`.
You can register multiple listeners via `addEventListenerItem(...)`.
