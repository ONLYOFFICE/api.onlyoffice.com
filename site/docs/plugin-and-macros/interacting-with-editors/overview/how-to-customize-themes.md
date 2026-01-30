---
sidebar_position: -4
---

# How to customize themes

Plugins can detect and react to the current editor theme to keep their appearance consistent with the interface.
Use the following API to retrieve the current theme settings:

```ts
const theme = window.Asc.plugin.getTheme();
console.log(theme); // Returns object with theme colors and properties
```

## Applying CSS for different themes

You can apply different CSS styles depending on the active theme. To do this, check the theme id and switch CSS variables or classes accordingly:

```ts
const currentTheme = window.Asc.plugin.getTheme().type;

if (currentTheme === "dark" || currentTheme === "contrast-dark") {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}
```

Then define your CSS rules:

```css
.dark-theme button {
  background-color: #333;
  color: #fff;
}
```

This ensures your plugin automatically adapts its styling when users switch between light and dark themes.

## Responding to theme changes

To react to theme changes in real-time, use the `onThemeChanged` event. This allows your plugin to update its appearance dynamically when users switch themes without requiring a plugin reload.

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

### Theme object properties

The `theme` object passed to the handler contains:

- `type` - The theme type (e.g., "light", "dark", "contrast-dark")
- `name` - The theme name (e.g., "classic", "dark")
- CSS variable values - All available theme colors and properties as CSS custom properties (e.g., `--background-normal`, `--text-normal`)

This approach ensures your plugin seamlessly adapts to theme changes, providing a consistent user experience across all editor themes.
