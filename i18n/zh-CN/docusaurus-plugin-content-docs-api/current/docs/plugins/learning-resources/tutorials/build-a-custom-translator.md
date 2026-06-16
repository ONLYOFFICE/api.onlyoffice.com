---
sidebar_position: 2
---

# 构建自定义翻译器

了解如何从文档中读取选中文本、将其发送到外部翻译 API 并将结果插入回文档——所有操作都在 ONLYOFFICE 插件面板中完成。

**您将构建的内容：** 一个驻留在侧面板中的插件，监听文本选择变化，将选中的文本发送到翻译服务，显示翻译结果，并允许用户一键粘贴或替换文档中的文本。

## 前提条件

- 已搭建好的 ONLYOFFICE 插件开发环境——参见[开发](/docs/plugins/development-workflow/developing/for-web-editors.md)。
- 熟悉 `config.json`、`index.html` 和插件 JS 文件的基本知识——参见[插件结构](/docs/plugins/configuration/configuration.md)。
- 官方翻译器插件使用 Google 翻译小部件。如果您想使用其他提供商（DeepL、Azure、LibreTranslate），则需要 API 密钥。

## 第 1 步 - 搭建插件骨架

创建插件文件夹：

```
translator/
├── config.json
├── index.html
├── index_widget.html
└── scripts/
    └── translate.js
```

翻译器是一个**侧面板插件**（`type: "panel"`），每当用户更改文本选择时都会重新触发（`initOnSelectionChanged: true`）。将 `initDataType` 设置为 `"text"`，编辑器会自动将原始选中文本传递给 `init` 函数。

```json
{
  "name": "Translator",
  "guid": "asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}",
  "version": "1.0.8",
  "variations": [
    {
      "description": "Translate the selected text into other languages with Google Translate.",
      "url": "index.html",
      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": true,
      "EditorsSupport": ["word", "cell", "slide", "pdf"],
      "isVisual": true,
      "type": "panel",
      "initDataType": "text",
      "initOnSelectionChanged": true
    }
  ]
}
```

需要注意的关键设置：

| 设置 | 值 | 原因 |
|---|---|---|
| `initDataType` | `"text"` | 编辑器将当前选中内容作为 `text` 参数传递给 `init()` |
| `initOnSelectionChanged` | `true` | 每次用户更改选择时都会再次调用 `init` |
| `type` | `"panel"` | 插件在侧面板中渲染，而不是浮动窗口 |
| `EditorsSupport` | `["word", "cell", "slide", "pdf"]` | 支持所有编辑器类型，包括 PDF |

## 第 2 步 - 构建面板 UI

`index.html` 包含翻译小部件 iframe 的容器和两个操作按钮——**复制**和**插入**：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Translator</title>
  </head>
  <body>
    <div id="iframe_parent" style="width:100%; height:100%;"></div>
    <script src="scripts/translate.js"></script>
  </body>
</html>
```

实际的翻译器通过 iframe 在 `index_widget.html` 中加载 Google 翻译小部件——而不是直接调用 REST API。该小部件自动处理语言检测、翻译和显示，无需 API 密钥。

## 第 3 步 - 检测选择变化

在 `scripts/translate.js` 中，实现 `window.Asc.plugin.init`。由于 `config.json` 中 `initOnSelectionChanged` 为 `true`，每次选择变化时都会调用此函数。当前选中的文本作为 `text` **参数**传递给 `init()`：

```js
var isInit = false;
var ifr;
var prevTxt;
var txt;

window.Asc.plugin.init = function (text) {
  // 对于 "word" 编辑器，使用 GetSelectedText 以获得更多控制
  if (window.Asc.plugin.info.editorType === "word") {
    window.Asc.plugin.executeMethod("GetSelectedText", [{ Numbering: false }], function (data) {
      prevTxt = txt;
      txt = (!data) ? "" : ProcessText(data);
      ExecPlugin();
    });
  } else {
    // 对于 cell、slide、pdf——直接使用 text 参数
    prevTxt = txt;
    txt = ProcessText(text);
    ExecPlugin();
  }
};

function ProcessText(sText) {
  return sText.replace(/\t/gi, "\n").replace(/\t/gi, "\n");
}
```

:::note
选中的文本通过 `init()` 的 `text` 参数传入，而不是通过 `window.Asc.plugin.info.data`。对于 `word` 编辑器类型，插件会额外调用 `GetSelectedText` 以获取不含编号伪影的更纯净文本。
:::

## 第 4 步 - 加载翻译小部件

首次初始化时，创建一个指向 `index_widget.html` 的 iframe，其中嵌入了 Google 翻译小部件。后续的选择变化通过 `postMessage` 更新现有 iframe 中的文本：

```js
function ExecPlugin() {
  if (!isInit) {
    // 首次——创建 iframe
    document.getElementById("iframe_parent").innerHTML = "";
    ifr = document.createElement("iframe");
    ifr.name = "google_name";
    ifr.id = "google_id";
    ifr.src = "./index_widget.html";
    ifr.style.width = "100%";
    ifr.style.height = "100%";
    ifr.setAttribute("frameBorder", "0");
    document.getElementById("iframe_parent").appendChild(ifr);
    isInit = true;

    ifr.onload = function () {
      // 在小部件中设置初始文本
      var element = ifr.contentDocument.getElementById("google_translate_element");
      if (element) {
        element.innerHTML = txt;
      }
      // 创建复制和插入按钮
      createButtons();
    };
  } else if (prevTxt !== txt) {
    // 文本已更改——更新 iframe
    ifr.contentWindow.postMessage(txt, "*");
  }
}
```

:::tip[更换翻译提供商]
要使用其他翻译 API（DeepL、Azure、LibreTranslate），请将 `index_widget.html` 替换为您自己的页面，通过 `fetch()` 调用 API 并通过 `postMessage` 返回结果。插件的其余代码保持不变。
:::

## 第 5 步 - 将翻译结果插入回文档

插件提供两个按钮：**复制**（复制到剪贴板）和**插入**（替换文档中的选中内容）。插入按钮使用 `GetVersion` 和 `GetSelectionType` 来决定粘贴方式：

```js
btnReplace.onclick = function () {
  var translatedTxt = ifr.contentDocument.getElementById("google_translate_element").outerText;
  var allParasTxt = translatedTxt.split(/\n/);
  // ... 解析段落 ...
  Asc.scope.arr = allParsedParas;

  window.Asc.plugin.executeMethod("GetVersion", [], function (version) {
    if (version === undefined) {
      // 旧版本——使用 PasteText
      window.Asc.plugin.executeMethod("PasteText", [translatedTxt]);
    } else {
      // 新版本——检查选择类型以进行更智能的替换
      window.Asc.plugin.executeMethod("GetSelectionType", [], function (sType) {
        switch (sType) {
          case "none":
          case "drawing":
            window.Asc.plugin.executeMethod("PasteText", [translatedTxt]);
            break;
          case "text":
            window.Asc.plugin.callCommand(function () {
              Api.ReplaceTextSmart(Asc.scope.arr);
            });
            break;
        }
      });
    }
  });
};
```

该插件对空选择或图形选择使用 `PasteText`，对文本选择使用 `callCommand` 配合 `Api.ReplaceTextSmart`——这在替换过程中保留了段落结构。

## 第 6 步 - 处理关闭按钮

面板的关闭按钮使用 `executeCommand("close", "")`：

```js
window.Asc.plugin.button = function (id) {
  this.executeCommand("close", "");
};
```

## 第 7 步 - 测试插件

1. 将 `translator/` 文件夹压缩为 zip，然后通过**插件 → 插件管理器 → 上传插件**进行安装。
2. 打开任意文档并输入几句话。
3. 选中一些文本，然后从**插件**选项卡中打开**翻译器**插件。
4. 翻译结果会自动显示在侧面板中。
5. 从下拉菜单中更改目标语言——面板会立即重新翻译。
6. 点击**复制**将翻译复制到剪贴板，或点击**插入**替换文档中选中的文本。

## 进一步扩展

- 添加 `onExternalMouseUp` 处理程序（实际插件中已使用），将鼠标事件传递到 iframe 以实现正确的滚动条交互。
- 缓存最近的翻译结果，避免用户取消选择后重新选择相同文本时出现冗余的小部件重新加载。
- 使用 `window.Asc.plugin.onThemeChanged` 添加主题支持，以匹配编辑器的亮色/暗色主题。
- 使用 PDF 文档进行测试，验证翻译工作流在 PDF 编辑器中是否正常工作。

**资源：**

1. [翻译器插件示例](/docs/plugins/learning-resources/samples/translator.md)——包含完整 Google 翻译小部件集成的参考实现。
2. [插件结构](/docs/plugins/configuration/configuration.md)——完整的 `config.json` 字段参考。
3. [executeMethod ("GetSelectedText")](/docs/plugins/interacting-with-editors/document-api/Methods/GetSelectedText.md)——使用可配置的分隔符获取选中内容。
4. [executeMethod ("PasteText")](/docs/plugins/interacting-with-editors/document-api/Methods/PasteText.md)——在当前光标位置插入文本。

**关键概念：** `initDataType: "text"` · `initOnSelectionChanged` · `GetSelectedText` · `PasteText` · `ReplaceTextSmart` · `executeCommand("close", "")` · iframe 小部件
