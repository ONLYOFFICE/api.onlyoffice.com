---
sidebar_position: 2
title: Hello world 插件
---
# Hello world 插件

构建最简单的插件 — 一个将"Hello World"插入文档的按钮。

**时间：** 5 分钟 | **技能等级：** 初级

## 第 1 步：创建插件结构

创建一个名为 `hello-world-plugin` 的文件夹，包含以下文件：

### `config.json` — 插件配置

此文件告知 ONLYOFFICE 您的插件信息：

```json
{
  "name": "Hello World",
  "guid": "asc.{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}",
  "version": "1.0.0",
  "variations": [
    {
      "url": "index.html",
      "icons": ["icon.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"]
    }
  ]
}
```

:::tip 生成 GUID
使用终端生成唯一标识符：

```bash
# macOS/Linux
uuidgen

# Windows (PowerShell)
New-Guid
```

然后格式化为 `asc.{您生成的GUID}`。
:::

**关键字段说明：**

- `name` — 插件菜单中显示的名称
- `guid` — 唯一标识符（每个插件必须不同）
- `url` — 入口点 HTML 文件
- `EditorsSupport` — 支持此插件的编辑器（`word`/`cell`/`slide`）

### `index.html` — 插件界面与逻辑

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World Plugin</title>
    <script src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            text-align: center;
        }
        button {
            background: #FF6F3D;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background: #E55A2B;
        }
    </style>
</head>
<body>
    <h2>Hello World Plugin</h2>
    <button onclick="insertText()">Insert Hello World</button>

    <script>
        function insertText() {
            window.Asc.plugin.executeMethod("PasteText", ["Hello World!"]);
        }
    </script>
</body>
</html>
```

## 第 2 步：添加图标（可选）

在同一文件夹中创建或下载一个 48x48 PNG 图标，命名为 `icon.png`。它将显示在插件菜单中。

## 第 3 步：安装插件

根据您的环境选择：

### ONLYOFFICE 桌面编辑器

1. 打开 ONLYOFFICE 桌面版。
2. 前往**插件 → 设置 → 添加插件**。
3. 浏览到您的 `hello-world-plugin` 文件夹。
4. 点击**确定**。

[桌面版安装详细指南](../../plugins/development-workflow/installing-and-testing/desktop-editors-installation.md)

### ONLYOFFICE Docs（本地部署）

1. 将插件文件夹复制到服务器插件目录：
   - Linux: `/var/www/onlyoffice/documentserver/sdkjs-plugins/`
   - Windows: `C:\Program Files\ONLYOFFICE\DocumentServer\sdkjs-plugins\`
2. 重启 Document Server。
3. 刷新浏览器。

[Docs 安装详细指南](../../plugins/development-workflow/installing-and-testing/docs-on-premises-installation.md)

## 第 4 步：测试插件

1. 在 ONLYOFFICE 中打开文档。
2. 点击工具栏中的**插件**。
3. 选择 **Hello World**。
4. 点击**Insert Hello World** 按钮。
5. "Hello World!" 出现在您的文档中。

## 第 5 步：扩展插件

插件运行成功后，尝试以下增强功能：

### 添加输入框

```html
<input type="text" id="customText" placeholder="Enter your text">
<button onclick="insertCustomText()">Insert Custom Text</button>

<script>
    function insertCustomText() {
        const text = document.getElementById('customText').value;
        window.Asc.plugin.executeMethod("PasteText", [text]);
    }
</script>
```

### 插入格式化内容

```javascript
function insertFormattedText() {
    window.Asc.plugin.executeMethod("PasteHtml", [
        "<p style='color: blue; font-weight: bold;'>Formatted Hello World!</p>"
    ]);
}
```

### 添加多个按钮

```html
<button onclick="insertHeading()">Insert Heading</button>
<button onclick="insertList()">Insert List</button>

<script>
    function insertHeading() {
        window.Asc.plugin.executeMethod("PasteHtml", ["<h2>My Heading</h2>"]);
    }

    function insertList() {
        window.Asc.plugin.executeMethod("PasteHtml", [
            "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"
        ]);
    }
</script>
```

## 下一步

**深入学习：**

- [插件结构与配置](../../plugins/fundamentals/configuration/config-json.md)
- [完整 API 参考](../../plugins/interacting-with-editors/overview/overview.md)
- [UI 自定义选项](../../plugins/customization/toolbar.md)

**浏览示例：**

- [YouTube 插件](../../samples/plugins/youtube.md) — 嵌入视频
- [Translator 插件](../../samples/plugins/translator.md) — 多语言支持
- [更多示例](/samples/?doctype=docs&text=plugin)

**需要帮助？**

- [开发者论坛](https://forum.onlyoffice.com/) — 社区支持
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) — 报告错误
- [常见问题](../../more-information/faq.md) — 常见问题解答
