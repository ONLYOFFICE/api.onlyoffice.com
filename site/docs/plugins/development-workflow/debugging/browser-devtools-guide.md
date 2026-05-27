---
sidebar_position: 1
---

# Browser DevTools guide

Browser DevTools are essential for debugging ONLYOFFICE plugins. This guide covers how to access, use, and master debugging tools to quickly identify and fix issues in your plugins.

## Accessing DevTools

### In ONLYOFFICE Desktop Editors

Desktop Editors must be launched with the `--ascdesktop-support-debug-info` flag to enable DevTools access. See the [debug mode guides](/docs/desktop-editors/usage-api/debugging/debugging) for platform-specific launch instructions (Windows, macOS, and Linux).

Once Desktop Editors is running in debug mode:
1. Right-click inside the plugin panel.
2. Select **Inspect Element** to open DevTools for that plugin iframe.

### In ONLYOFFICE web editors

**All browsers:**
```
Press F12 or Ctrl+Shift+I (Cmd+Option+I on Mac)
```

**Right-click method:**
1. Right-click on plugin area
2. Select "Inspect" or "Inspect Element"

## DevTools panels overview

### Console panel

**Basic console methods:**
```javascript
console.log('Plugin initialized');
console.log('User data:', userData);
console.warn('API key missing');
console.error('Failed to load data:', error);
console.table([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
console.group('API Calls');
console.log('Call 1: Success');
console.log('Call 2: Failed');
console.groupEnd();
console.time('data-processing');
processData();
console.timeEnd('data-processing');
```

### Sources panel

**Setting breakpoints:**
```javascript
function processSelection(text) {
  const words = text.split(' ');
  const count = words.length;
  return count;
}
```

**Conditional breakpoints:**
```javascript
function processItem(item) {
  // Break only when item.id === 5
  const result = transform(item);
  return result;
}
```

### Network panel

Filtering: XHR (API calls), JS, CSS, Img

### Elements panel

Live CSS editing:
```css
.button {
  background: #2196f3;
  padding: 10px 20px;
}
```

## Debugging techniques

### Using breakpoints

:::warning[Wrong]
```javascript
function calculateTotal(items) {
  console.log('items:', items);
  const total = items.reduce((sum, item) => {
    console.log('item:', item);
    return sum + item.price;
  }, 0);
  console.log('total:', total);
  return total;
}
```
:::

:::tip[Correct]
```javascript
function calculateTotal(items) {
  const total = items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  return total;
}
```
:::

### Watch expressions

```javascript
// In DevTools Watch panel, add expressions:
items.length
currentItem.price
total
items[0].name
```

### Call stack analysis

```javascript
function level3() {
  debugger;
  // Check Call Stack panel to see: level3, level2, level1
}
```

## Common debugging scenarios

### Debugging API calls

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
}
```

### Debugging event handlers

:::tip[Correct]
```javascript
document.getElementById('btn').addEventListener('click', function(event) {
  console.log('Button clicked', event);
  debugger;
  processClick();
});
```
:::

### Debugging ONLYOFFICE API calls

```javascript
window.Asc.plugin.executeMethod("GetSelectedText", [], function(text) {
  console.log('Selected text:', text);
  if (!text) {
    console.warn('No text selected');
    return;
  }
  processText(text);
});
```

## Advanced debugging

### Using debugger statement

```javascript
function complexFunction(data) {
  debugger;
  const processed = processData(data);
  return processed;
}
```

### Debugging async code

```javascript
async function loadUserData() {
  try {
    const user = await fetchUser();
    const profile = await fetchProfile(user.id);
    return { user, profile };
  } catch (error) {
    console.error('Load failed:', error);
  }
}
```

### Performance profiling

```
1. Open Performance tab
2. Click Record (red circle)
3. Perform actions in plugin
4. Click Stop
5. Analyze timeline
```

What to look for: Long tasks (yellow blocks), layout thrashing, memory spikes, script execution time.

### Memory profiling

```
1. Open Memory tab
2. Take heap snapshot
3. Use plugin for a while
4. Take another snapshot
5. Compare snapshots
```

Common leak sources:
```javascript
// Fix: Remove listeners when no longer needed
function cleanup() {
  leakedHandlers.forEach(handler => {
    document.removeEventListener('click', handler);
  });
  leakedHandlers = [];
}
```

## DevTools tips and tricks

### Quick commands

```javascript
// $_ = last result
2 + 2
$_ // Returns 4

// $ = querySelector
$('#myElement')

// $$ = querySelectorAll
$$('.button')

clear()
copy(myObject)
```

### Preserve log

```
Console → Settings (gear icon) → ✓ Preserve log
```

### Filter console messages

```
Console → Filter box:
- /error/i
- -warning
- method:POST
```

### Live expressions

```
Console → Create live expression → Enter: myVariable
```

## Best practices

### Strategic logging

```javascript
window.Asc.plugin.init = function(data) {
  console.log('Plugin initialized', data);
};
window.Asc.plugin.button = function(id) {
  console.log('Button clicked:', id);
};
console.error('Critical error:', error);
console.warn('Deprecated method used');
```

### Clean up debug code before release

:::tip[Correct]
```javascript
const DEBUG = window.location.hostname === 'localhost';
if (DEBUG) {
  console.log('Debug: Processing data');
  console.table(debugData);
}
```
:::
