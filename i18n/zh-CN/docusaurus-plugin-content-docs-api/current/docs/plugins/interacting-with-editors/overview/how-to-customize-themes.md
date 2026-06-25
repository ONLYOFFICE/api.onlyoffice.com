---
sidebar_position: -4
---

# 如何自定义主题

插件可以检测当前编辑器主题并做出响应，以保持其外观与界面保持一致。主题信息通过 `onThemeChanged` 事件提供，该事件在插件加载时以及用户切换主题时触发。

## 响应主题变更

要响应主题变更并获取当前主题信息，请使用 `onThemeChanged` 事件。该事件在插件初始化期间（提供当前主题）以及用户切换主题时均会被调用。

### 设置事件处理程序

定义一个自定义处理函数，每当主题发生变更时该函数将被调用：

```ts
function onThemeChanged(theme) {
  // Call the base implementation first
  window.Asc.plugin.onThemeChangedBase(theme);

  // Add your custom theme handling logic
  updateBodyThemeClasses(theme.type, theme.name);
  updateThemeVariables(theme);
}
```

### 附加事件

附加主题变更事件有两种方式：

**选项 1：使用 attachEditorEvent 方法**

```ts
window.Asc.plugin.attachEditorEvent("onThemeChanged", onThemeChanged);
```

**选项 2：直接赋值**

```ts
window.Asc.plugin.onThemeChanged = onThemeChanged;
```

### 重要提示：调用 onThemeChangedBase

始终在自定义处理程序的开头调用 `window.Asc.plugin.onThemeChangedBase(theme)`。这可确保在运行自定义逻辑之前正确执行插件的内部主题处理。

### 完整示例

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
window.Asc.plugin.attachEditorEvent("onThemeChanged", onThemeChanged);
```

### 为不同主题应用 CSS

您可以根据当前活动主题应用不同的 CSS 样式。在 `onThemeChanged` 被调用时保存主题信息，然后使用它来应用相应的样式：

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
window.Asc.plugin.attachEditorEvent("onThemeChanged", onThemeChanged);
```

然后定义您的 CSS 规则：

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

### 主题对象属性

传递给处理程序的 `theme` 对象包含以下内容：

- `type` - 主题类型（例如，"light"、"dark"、"contrast-dark"）
- `name` - 主题名称（例如，"classic"、"dark"）
- CSS 变量值 - 所有可用的主题颜色和属性，作为 CSS 自定义属性（例如，`--background-normal`、`--text-normal`）

此方法可确保您的插件无缝适应主题变更，在所有编辑器主题中提供一致的用户体验。
