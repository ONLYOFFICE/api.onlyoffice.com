---
sidebar_position: 2
---

# Common errors and solutions

## Overview

This guide covers the most common errors encountered during ONLYOFFICE plugin development and their solutions.

## Plugin initialization errors

### Plugin not appearing in menu

**Symptoms:** Plugin installed but not visible; no errors in console; config file present.

:::danger[Wrong]
```json
{ "guid": "{12345678-ABCD}" }
```
```json
{ "name": "My Plugin", "version": "1.0.0",  }
```
```json
{ "variations": [{ "url": "plugin.html" }] }
```
:::

:::tip[Correct]
```json
{ "guid": "asc.{12345678-1234-1234-1234-123456789ABC}" }
```
```json
{ "name": "My Plugin", "version": "1.0.0" }
```
```json
{ "variations": [{ "url": "index.html" }] }
```
:::

Verification:
```bash
cat config.json | python -m json.tool
ls index.html
# Verify GUID format starts with "asc."
# Restart ONLYOFFICE completely
```

### Plugin initializes but shows blank screen

:::tip[Correct]
```javascript
window.Asc.plugin.init = function(data) {
  const element = document.getElementById('output');
  if (!element) { console.error('Element not found'); return; }
  element.textContent = data || 'No data';
};
```
:::

## API method errors

### executeMethod not working

:::tip[Correct]
```javascript
window.Asc.plugin.executeMethod("GetSelectedText", [], function(text) {
  console.log('Selected text:', text);
  if (text) { processText(text); } else { showMessage('No text selected'); }
});
```
:::

### callCommand fails silently

:::tip[Correct]
```javascript
window.Asc.plugin.callCommand(function() {
  try {
    const doc = Api.GetDocument();
    if (!doc) { throw new Error('Document not available'); }
    const paragraphs = doc.GetAllParagraphs();
    return paragraphs.length;
  } catch (error) {
    console.error('callCommand error:', error);
    return null;
  }
}, false);
```
:::

## Configuration errors

### Icons not displaying

:::tip[Correct]
```json
{ "variations": [{ "icons": "resources/%theme-type%(light|dark)/icon%scale%(default).%extension%(png)" }] }
```
File structure:
```
my-plugin/
├── config.json
├── index.html
└── resources/
    ├── light/
    │   └── icon.png
    └── dark/
        └── icon.png
```
:::

### Modal/panel configuration issues

:::tip[Correct]
For modal dialog:

```json
{ "type": "window", "buttons": [{"text": "OK", "primary": true}, {"text": "Cancel"}] }
```

For side panel:

```json
{ "type": "panel" }
```
:::

## Event handling errors

### Events not firing

:::tip[Correct]
```javascript
window.Asc.plugin.attachEditorEvent("onDocumentContentReady", function() {
  console.log('Document ready');
  loadInitialData();
});
```
:::

For selection-aware plugins, set `"initOnSelectionChanged": true` in `config.json` - the `init` function then receives the selected data on every selection change instead of only on plugin open.

### Button handler not responding

:::tip[Correct]
```javascript
window.Asc.plugin.button = function(id) {
  if (id === 0) { handleOK(); }
  else if (id === 1) { handleCancel(); }
  else if (id === -1) { window.Asc.plugin.executeCommand("close", ""); }
};
```
:::

## Data handling errors

### JSON parse errors

:::tip[Correct]
```javascript
fetch('/api/data')
  .then(response => {
    if (!response.ok) { throw new Error(`HTTP ${response.status}`); }
    return response.text();
  })
  .then(text => {
    try {
      const data = JSON.parse(text);
      processData(data);
    } catch (error) {
      console.error('Invalid JSON:', text);
      showError('Server returned invalid data');
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
    showError('Failed to load data');
  });
```
:::

### LocalStorage quota exceeded

:::tip[Correct]
```javascript
function safeSave(key, data) {
  try {
    const serialized = JSON.stringify(data);
    const sizeMB = new Blob([serialized]).size / (1024 * 1024);
    if (sizeMB > 5) { console.warn(`Data too large: ${sizeMB.toFixed(2)}MB`); return false; }
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    if (error.name === 'QuotaExceededError') {
      console.error('Storage quota exceeded');
      clearOldData();
    }
    return false;
  }
}
```
:::

## Network errors

### CORS errors

Error in console:
```
Access to fetch at 'https://api.example.com/data' from origin 'http://localhost:3000' has been blocked by CORS policy
```

:::tip[Correct]
```javascript
// Route requests through your own backend proxy
fetch('/api/proxy?url=' + encodeURIComponent('https://external-api.com/data'))
  .then(response => response.json());
// Server must include: Access-Control-Allow-Origin: *
```
:::

### Timeout errors

:::tip[Correct]
```javascript
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') { throw new Error('Request timeout'); }
    throw error;
  }
}
```
:::

## UI/UX errors

### Elements not found

:::tip[Correct]
```javascript
window.Asc.plugin.init = function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupUI);
  } else {
    setupUI();
  }
};
function setupUI() {
  const btn = document.getElementById('myButton');
  if (btn) { btn.addEventListener('click', handleClick); }
  else { console.error('Button not found in DOM'); }
}
```
:::

## Conclusion

Understanding common errors and their solutions accelerates plugin development. Check the console first, validate your configuration, and handle errors gracefully.
