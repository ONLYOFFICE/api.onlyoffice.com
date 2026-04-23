---
sidebar_position: -4
---

# How to customize themes

Plugins can detect and react to the current editor theme to keep their appearance consistent with the interface. Theme information is provided through the `onThemeChanged` event, which is triggered when the plugin loads and whenever the user switches themes.

## Responding to theme changes

To react to theme changes and get the current theme information, use the `onThemeChanged` event. This event is called both during plugin initialization (to provide the current theme) and whenever users switch themes.

### Setting up the event handler

Define a custom handler function that will be called whenever the theme changes:

```ts
function onThemeChanged(theme) {
  // Call the base implementation first
  window.Asc.plugin.onThemeChangedBase(theme);

  // Add your custom theme handling logic
  updateBodyThemeClasses(theme.type, theme.name);
  updateThemeVariables(theme);
}
```

### Attaching the event

There are two ways to attach the theme change event:

**Option 1: Using attachEvent method**

```ts
window.Asc.plugin.attachEvent("onThemeChanged", onThemeChanged);
```

**Option 2: Direct assignment**

```ts
window.Asc.plugin.onThemeChanged = onThemeChanged;
```

### Important: Call onThemeChangedBase

Always call `window.Asc.plugin.onThemeChangedBase(theme)` at the beginning of your custom handler. This ensures the plugin's internal theme handling is executed correctly before your custom logic runs.

### Complete example

```ts
function updateBodyThemeClasses(type, name) {
  document.body.className = "";
  document.body.classList.add(`theme-type-${type}`);
  document.body.classList.add(`theme-${name}`);
}

function updateThemeVariables(theme) {
  const root = document.documentElement;
  root.style.setProperty("--background-color", theme["--background-normal"]);
  root.style.setProperty("--text-color", theme["--text-normal"]);
}

function onThemeChanged(theme) {
  // Always call the base implementation first
  window.Asc.plugin.onThemeChangedBase(theme);

  // Update theme-specific classes
  updateBodyThemeClasses(theme.type, theme.name);

  // Update CSS variables
  updateThemeVariables(theme);
}

// Attach the event handler
window.Asc.plugin.onThemeChanged = onThemeChanged;
window.Asc.plugin.attachEvent("onThemeChanged", onThemeChanged);
```

### Applying CSS for different themes

You can apply different CSS styles depending on the active theme. Store the theme information when `onThemeChanged` is called, then use it to apply appropriate styles:

```ts
let currentTheme = null;

function onThemeChanged(theme) {
  window.Asc.plugin.onThemeChangedBase(theme);

  // Store the current theme
  currentTheme = theme;

  // Apply theme-specific classes
  if (theme.type === "dark" || theme.type === "contrast-dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

window.Asc.plugin.onThemeChanged = onThemeChanged;
window.Asc.plugin.attachEvent("onThemeChanged", onThemeChanged);
```

Then define your CSS rules:

```css
.dark-theme button {
  background-color: #333;
  color: #fff;
}

button {
  background-color: #f0f0f0;
  color: #000;
}
```

### Theme object properties

The `theme` object passed to the handler contains:

- `type` - The theme type (e.g., "light", "dark", "contrast-dark")
- `name` - The theme name (e.g., "classic", "dark")
- CSS variable values - All available theme colors and properties as CSS custom properties (e.g., `--background-normal`, `--text-normal`)

This approach ensures your plugin seamlessly adapts to theme changes, providing a consistent user experience across all editor themes.
