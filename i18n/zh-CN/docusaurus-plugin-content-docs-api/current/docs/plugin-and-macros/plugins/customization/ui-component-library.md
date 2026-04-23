---
sidebar_position: 7
---

# UI component library

The ONLYOFFICE UI component library is a collection of ready-to-use interface components designed specifically for plugins. These components are:

- **Pre-styled** - Match the ONLYOFFICE design language
- **Theme-aware** - Automatically adapt to light and dark modes
- **Accessible** - Follow web accessibility standards
- **Responsive** - Work across different screen sizes
- **Customizable** - Can be styled to fit your needs

## Available components

### Context menu

Create right-click context menus within your plugin interface.

**Use cases:**

- Custom actions on selected items
- Quick access to common operations
- Contextual options based on user interaction

**Example:**

```javascript
window.Asc.plugin.contextMenuShow({
  items: [
    { id: "copy", text: "Copy", icon: "copy.png" },
    { id: "paste", text: "Paste", icon: "paste.png" },
    { separator: true },
    { id: "delete", text: "Delete", icon: "delete.png" },
  ],
  x: 100,
  y: 150,
});

window.Asc.plugin.onContextMenuClick = function (id) {
  if (id === "copy") {
    // Handle copy action
  }
};
```

### Toolbar buttons

Add custom buttons to plugin toolbars for quick actions.

**Use cases:**

- Main plugin actions
- Mode switching
- Tool selection
- Quick settings access

**Example:**

```html
<div class="toolbar">
  <button class="toolbar-button" id="boldBtn">
    <img src="icons/bold.svg" alt="Bold" />
    <span>Bold</span>
  </button>
  <button class="toolbar-button active" id="italicBtn">
    <img src="icons/italic.svg" alt="Italic" />
    <span>Italic</span>
  </button>
</div>
```

```css
.toolbar-button {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
}

.toolbar-button:hover {
  background: #f5f5f5;
}

.toolbar-button.active {
  background: #e3f2fd;
  border-color: #2196f3;
}
```

### Windows and panels

Create modal dialogs and side panels for plugin content.

**Modal window example:**

```json
{
  "isModal": true,
  "isVisual": true,
  "size": [400, 300],
  "buttons": [
    { "text": "OK", "primary": true },
    { "text": "Cancel", "primary": false }
  ]
}
```

**Side panel example:**

```json
{
  "isModal": false,
  "isInsideMode": true,
  "type": "panel",
  "size": [350, 600]
}
```

**Key features:**

- Resizable windows
- Draggable dialogs
- Persistent panel state
- Theme-aware styling

### Input helper

Form input components with validation and styling.

**Text input:**

```html
<div class="input-group">
  <label for="username">Username:</label>
  <input
    type="text"
    id="username"
    class="input-field"
    placeholder="Enter username"
  />
  <span class="input-hint">Must be 3-20 characters</span>
</div>
```

**Checkbox:**

```html
<label class="checkbox-label">
  <input type="checkbox" id="rememberMe" />
  <span>Remember me</span>
</label>
```

**Select dropdown:**

```html
<div class="input-group">
  <label for="language">Language:</label>
  <select id="language" class="select-field">
    <option value="en">English</option>
    <option value="ru">Русский</option>
    <option value="de">Deutsch</option>
  </select>
</div>
```

**Styling:**

```css
.input-group {
  margin-bottom: 16px;
}

.input-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 14px;
}

.input-field,
.select-field {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.input-field:focus,
.select-field:focus {
  outline: none;
  border-color: #2196f3;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
}

.input-hint {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #666;
}
```

### Custom buttons

Create styled buttons that match ONLYOFFICE design patterns.

**Primary button:**

```html
<button class="btn btn-primary">Save Changes</button>
```

**Secondary button:**

```html
<button class="btn btn-secondary">Cancel</button>
```

**Danger button:**

```html
<button class="btn btn-danger">Delete</button>
```

**Icon button:**

```html
<button class="btn btn-icon">
  <img src="icons/settings.svg" alt="Settings" />
</button>
```

**Styling:**

```css
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #2196f3;
  color: white;
}

.btn-primary:hover {
  background: #1976d2;
}

.btn-secondary {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
}

.btn-secondary:hover {
  background: #e0e0e0;
}

.btn-danger {
  background: #f44336;
  color: white;
}

.btn-danger:hover {
  background: #d32f2f;
}

.btn-icon {
  padding: 8px;
  background: transparent;
  border: 1px solid transparent;
}

.btn-icon:hover {
  background: #f5f5f5;
  border-color: #ddd;
}
```

### Content control buttons

Special buttons for content insertion and manipulation.

**Use cases:**

- Insert pre-formatted content
- Apply templates
- Add structured data
- Create content blocks

**Example:**

```html
<div class="content-controls">
  <button class="content-btn" data-type="table">
    <img src="icons/table.svg" alt="Insert Table" />
    <span>Insert Table</span>
  </button>
  <button class="content-btn" data-type="image">
    <img src="icons/image.svg" alt="Insert Image" />
    <span>Insert Image</span>
  </button>
  <button class="content-btn" data-type="list">
    <img src="icons/list.svg" alt="Insert List" />
    <span>Insert List</span>
  </button>
</div>
```

```javascript
document.querySelectorAll(".content-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const type = this.dataset.type;
    insertContent(type);
  });
});

function insertContent(type) {
  if (type === "table") {
    window.Asc.plugin.executeMethod("InsertTable", [3, 3]);
  } else if (type === "image") {
    // Handle image insertion
  } else if (type === "list") {
    window.Asc.plugin.executeMethod("PasteHtml", [
      "<ul><li>Item 1</li><li>Item 2</li></ul>",
    ]);
  }
}
```

## Using the component library

### Installation

The component library is available through the ONLYOFFICE plugin SDK:

```html
<script src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
<script src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js"></script>
```

### Basic setup

Include the UI library in your plugin's `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>My Plugin</title>
    <link
      rel="stylesheet"
      href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.css"
    />
    <script src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
    <script src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js"></script>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Your plugin UI here -->
    <script src="code.js"></script>
  </body>
</html>
```

### Theme support

The component library automatically adapts to ONLYOFFICE themes:

```javascript
window.Asc.plugin.onThemeChanged = function (theme) {
  // Apply theme-specific styles
  document.body.classList.toggle("dark-mode", theme.type === "dark");

  // Update component colors
  if (theme.type === "dark") {
    document.documentElement.style.setProperty("--bg-color", "#1e1e1e");
    document.documentElement.style.setProperty("--text-color", "#e0e0e0");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#ffffff");
    document.documentElement.style.setProperty("--text-color", "#333333");
  }
};
```

## Best practices

### Consistency

- **Use standard components** - Prefer library components over custom ones
- **Follow naming conventions** - Use consistent class names and IDs
- **Maintain spacing** - Use standard padding and margins (4px, 8px, 12px, 16px)

### Accessibility

- **Keyboard navigation** - Ensure all interactive elements are keyboard accessible
- **ARIA labels** - Add appropriate ARIA attributes for screen readers
- **Focus indicators** - Provide clear visual focus states
- **Color contrast** - Ensure sufficient contrast ratios (WCAG AA minimum)

**Example:**

```html
<button class="btn btn-primary" aria-label="Save document" tabindex="0">
  Save
</button>
```

### Responsive design

Make components work across different plugin sizes:

```css
.plugin-container {
  padding: 16px;
}

@media (max-width: 350px) {
  .plugin-container {
    padding: 12px;
  }

  .btn {
    width: 100%;
    margin-bottom: 8px;
  }
}

@media (min-width: 600px) {
  .toolbar-button span {
    display: inline; /* Show button labels on larger screens */
  }
}
```

### Performance

- **Minimize DOM operations** - Batch updates when possible
- **Use event delegation** - Attach listeners to parent elements
- **Lazy load resources** - Load heavy components only when needed
- **Cache DOM references** - Store frequently accessed elements

**Example:**

:::warning[Wrong]
```javascript
document.getElementById('container').querySelector('.btn').addEventListener('click', ...);
document.getElementById('container').querySelector('.btn').classList.add('active');
```
:::

:::tip[Correct]
```javascript
// Cache DOM references
const container = document.getElementById('container');
const buttons = container.querySelectorAll('.btn');

// Use event delegation
container.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn')) {
    handleButtonClick(e.target);
  }
});
```
:::

## Component examples

### Complete form example

```html
<div class="plugin-container">
  <h2>Settings</h2>

  <div class="input-group">
    <label for="apiKey">API Key:</label>
    <input
      type="text"
      id="apiKey"
      class="input-field"
      placeholder="Enter your API key"
    />
    <span class="input-hint">Required for external service integration</span>
  </div>

  <div class="input-group">
    <label for="language">Language:</label>
    <select id="language" class="select-field">
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="de">Deutsch</option>
    </select>
  </div>

  <label class="checkbox-label">
    <input type="checkbox" id="autoSync" />
    <span>Enable automatic synchronization</span>
  </label>

  <div class="button-group">
    <button class="btn btn-primary" onclick="saveSettings()">Save</button>
    <button class="btn btn-secondary" onclick="resetSettings()">Reset</button>
  </div>
</div>
```

### Toolbar with actions

```html
<div class="toolbar">
  <div class="toolbar-group">
    <button class="toolbar-button" title="Bold" data-action="bold">
      <img src="icons/bold.svg" alt="Bold" />
    </button>
    <button class="toolbar-button" title="Italic" data-action="italic">
      <img src="icons/italic.svg" alt="Italic" />
    </button>
    <button class="toolbar-button" title="Underline" data-action="underline">
      <img src="icons/underline.svg" alt="Underline" />
    </button>
  </div>

  <div class="toolbar-separator"></div>

  <div class="toolbar-group">
    <button class="toolbar-button" title="Insert Link" data-action="link">
      <img src="icons/link.svg" alt="Link" />
    </button>
    <button class="toolbar-button" title="Insert Image" data-action="image">
      <img src="icons/image.svg" alt="Image" />
    </button>
  </div>
</div>
```

## Additional resources

- **ONLYOFFICE Plugin SDK**: [https://github.com/ONLYOFFICE/sdkjs-plugins](https://github.com/ONLYOFFICE/sdkjs-plugins)
- **UI Component Examples**: [https://onlyoffice.github.io/sdkjs-plugins/](https://onlyoffice.github.io/sdkjs-plugins/)
- **Plugin Marketplace**: [https://www.onlyoffice.com/app-directory](https://www.onlyoffice.com/app-directory)

