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
