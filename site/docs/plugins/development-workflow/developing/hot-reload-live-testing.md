---
sidebar_position: 3
---

# Hot reload and live testing

Traditional plugin development requires repackaging and reinstalling after every change (2–3 minutes per iteration). With hot reload, that drops to 2–3 seconds.

## Method 1: VS Code Live Server

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.
2. Open your plugin folder in VS Code.
3. Click **Go Live** in the status bar — your plugin is served at `http://localhost:5500`.
4. The browser reloads automatically when you save a file.

## Method 2: Node.js development server with auto-reload

Install dependencies:

```bash
npm install express ws chokidar
```

Create `dev-server.js`:

```javascript
const express = require('express');
const WebSocket = require('ws');
const chokidar = require('chokidar');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve plugin files with CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static('.'));

const server = app.listen(PORT, () => {
  console.log(`Plugin server running at http://localhost:${PORT}`);
});

// WebSocket for live reload
const wss = new WebSocket.Server({ server });

// Watch for file changes
chokidar.watch('.', { ignored: /node_modules/ }).on('change', (filePath) => {
  console.log(`Changed: ${filePath}`);
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'reload', file: filePath }));
    }
  });
});
```

Add the reload listener to your `index.html`:

```html
<script>
  const ws = new WebSocket('ws://localhost:8080');
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.type === 'reload') {
      // Reload CSS without full refresh when possible
      if (msg.file.endsWith('.css')) {
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
          link.href = link.href.split('?')[0] + '?t=' + Date.now();
        });
      } else {
        location.reload();
      }
    }
  };
</script>
```

Run: `node dev-server.js`

## Method 3: Symbolic links

Create a symbolic link from the ONLYOFFICE plugin directory to your development folder so edits take effect without copying files:

```bash
# Windows (run as Administrator)
mklink /D "%LOCALAPPDATA%\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\{YOUR-GUID}" "C:\path\to\your\plugin"

# macOS
ln -s /path/to/your/plugin ~/Library/Application\ Support/asc.onlyoffice.ONLYOFFICE/data/sdkjs-plugins/{YOUR-GUID}

# Linux
ln -s /path/to/your/plugin ~/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/{YOUR-GUID}
```

:::note
Symbolic links still require reloading the plugin in ONLYOFFICE to pick up changes, but they eliminate the repackaging step.
:::

## Multi-device testing

To test on other devices on the same network, find your local IP address and use it instead of `localhost`:

```bash
# macOS/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

Then use `http://192.168.x.x:8080/config.json` to install the plugin on other devices.

## Troubleshooting

| Problem | Solution |
|---------|---------|
| CORS error when loading plugin | Add `--cors` flag to http-server or set `Access-Control-Allow-Origin: *` header |
| WebSocket connection fails | Check firewall allows port 8080; verify URL in reload script matches server port |
| Config URL mismatch | Ensure the URL entered in Plugin Manager exactly matches where your server is running |
| Plugin not reloading after changes | Manually remove and re-add the plugin; check WebSocket connection in DevTools console |

## Additional resources

- [For web editors](./for-web-editors.md)
- [For desktop editors](./for-desktop-editors.md)
- [Browser DevTools guide](../debugging/browser-devtools-guide.md)
