---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Private distribution

Distribute your plugin within your organization without publishing to the public marketplace.

## Distribution methods

| Method | Best for | Requires server |
|--------|---------|----------------|
| Archive file (`.plugin`) | Small teams, one-time installs | No |
| Folder copy | IT-managed deployments | No |
| Self-hosted URL | Automatic updates, multiple users | Yes |
| On-premises admin panel | Enterprise org-wide deployment | Yes (on-premises Docs) |

## Method 1: Archive distribution

Package all plugin files into a `.zip` archive and rename the extension to `.plugin`.

**Important:** All files must be at the archive root - not inside a subfolder:

```
✓ Correct archive structure:
  config.json
  index.html
  icon.png

✗ Wrong archive structure:
  my-plugin/
    config.json
    index.html
    icon.png
```

Share the `.plugin` file directly. Users install it via **Plugins → Plugin Manager → Install plugin manually**.

## Method 2: Folder copy

Administrators place the plugin folder directly in the `sdkjs-plugins` directory. Use the plugin GUID from `config.json` as the folder name. Restart ONLYOFFICE after placing the folder.

<Tabs>
  <TabItem value="win" label="Windows">
      ```
      %ProgramFiles%\ONLYOFFICE\DesktopEditors\editors\sdkjs-plugins\{PLUGIN-GUID}\
      ```
  </TabItem>
  <TabItem value="mac" label="macOS">
      ```
      /Applications/ONLYOFFICE.app/Contents/Resources/editors/sdkjs-plugins/{PLUGIN-GUID}/
      ```
  </TabItem>
  <TabItem value="lin" label="Linux">
      ```
      /opt/onlyoffice/desktopeditors/editors/sdkjs-plugins/{PLUGIN-GUID}/
      ```
  </TabItem>
</Tabs>

## Method 3: Self-hosted URL

Host your plugin on an internal or public web server and distribute the `config.json` URL.

1. Upload all plugin files to a web server.
2. Set `baseUrl` in `config.json` to the hosted location:
   ```json
   { "baseUrl": "https://plugins.yourcompany.com/my-plugin/" }
   ```
3. Share the URL `https://plugins.yourcompany.com/my-plugin/config.json` with users.
4. Users install via **Plugins → Plugin Manager → Add plugin from URL**.

Updates are picked up automatically when users reload - no reinstallation required.

## Method 4: On-premises admin panel

For ONLYOFFICE Docs on-premises, administrators can deploy a plugin organization-wide:

1. Host the plugin on an accessible server (see Method 3).
2. Open the ONLYOFFICE Docs admin panel.
3. Go to **Plugins** settings.
4. Add the `config.json` URL.
5. Save - the plugin is immediately available to all users.

## Security considerations

- Distribute only plugins you have reviewed and trust
- Use HTTPS for all hosted plugin URLs
- Restrict installation sources via the admin panel in enterprise deployments
- Audit plugin code before rolling out to the entire organization

## Next steps

- [Versioning and updates](./versioning-and-updates.md)
- [Marketplace submission](./submit-to-marketplace.md)
