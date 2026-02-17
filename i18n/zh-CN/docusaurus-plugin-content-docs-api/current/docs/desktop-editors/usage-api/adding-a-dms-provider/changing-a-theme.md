---
sidebar_position: -3
---

# 更改主题

从 7.5 版本开始，您可以更改桌面编辑器标签页的主题。为此，请使用 [execCommand](./execcommand.md) 方法的 *portal:uitheme* 命令。

```ts
window.AscDesktopEditor.execCommand("portal:uitheme", editorTheme);
```

## editorTheme

定义编辑器主题设置。它可以通过两种方式进行设置：

- **主题 ID** - 用户通过主题的 ID 来设置主题参数（**theme-light**、**theme-classic-light**、**theme-dark**、**theme-contrast-dark**）；
- **默认主题** - 将设置默认的深色或浅色主题值（**default-dark**、**default-light**）。默认的浅色主题是 **theme-classic-light**。

第一种方式具有更高的优先级。

除了现有的编辑器主题外，用户还可以为应用程序界面自定义自己的 [颜色主题](https://helpcenter.onlyoffice.com/installation/docs-developer-change-theme.aspx)。

类型：字符串

示例："theme-dark"

## 示例

```ts
window.AscDesktopEditor.execCommand("portal:uitheme", "theme-dark");
```

当发送 *portal:uitheme* 命令时，编辑器主题将更改为方法参数中指定的主题。
