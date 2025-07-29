# 符号表

将特殊符号插入到文档中。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档、电子表格、演示文稿。

![SymbolTable](/assets/images/plugins/gifs/symbol-table.gif)

## ## 安装方式

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/symboltable) 下载此插件，并根据以下指南完成安装：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 在**插件**选项卡中找到该插件。
2. 选择你想要插入的字符（也可以手动输入其 Unicode 十六进制编码值）。你可以通过选择字符范围来快速定位。
3. 选择字符字体。
4. 点击**插入**按钮。

## 插件结构

GitHub 仓库地址：[符号表](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/symboltable)。

1. *config.json*、*index.html* 与 *symboltable.js*

2. 图标

3. 翻译文件夹，包含俄语、德语、西班牙语、捷克语和法语版本的翻译内容

4. *character.js* 文件包含插件支持的所有字符

5. 第三方服务：

   - [jQuery](https://jquery.com)：简洁快速的 JavaScript 库，用于简化 HTML 文档遍历、事件处理、动画和 Ajax 交互。许可证：[MIT License](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/symboltable/licenses/jQuery.license)。
   - [Select2](https://select2.org/)：提供可搜索、可标签化、支持远程数据和无限滚动的自定义选择框。许可证：[MIT](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/symboltable/licenses/Select2.license)。
  
## 配置

``` json
{
  "name": "Symbol Table",
  "nameLocale": {
    "fr": "Table des symboles",
    "es": "Tabla de símbolos",
    "de": "Symboltabelle"
  },
  "guid": "asc.{03C18A8D-8E01-444A-86EB-EDDFA7773157}",
  "baseUrl": "",

  "variations": [
    {
      "description": "Symbol Table",
      "descriptionLocale": {
        "fr": "Table des symboles",
        "es": "Tabla de símbolos",
        "de": "Symboltabelle"
      },
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png", "resources/img/icon2.png", "resources/img/icon2@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],

      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,

      "initDataType": "html",
      "initData": "",

      "buttons": [
        {
          "text": "Insert",
          "primary": true,
          "textLocale": {
            "fr": "Insérer",
            "es": "Insertar",
            "de": "Einfügen"
          }
        },
        {
          "text": "Cancel",
          "primary": false,
          "textLocale": {
            "fr": "Annuler",
            "es": "Cancelar",
            "de": "Abbrechen"
          }
        }
      ],

      "size": [600, 700]
    }
  ]
}
```

## 方法和事件

- button
- init
- onExternalMouseUp
- onMethodReturn
- onTranslate
- [executeMethod ("GetFontList")](../../interacting-with-editors/methods/text-document-api/Api/Methods/GetFontList.md)
- [executeMethod ("PasteHtml")](../../interacting-with-editors/methods/text-document-api/Api/Methods/PasteHtml.md)
- [info.editorType](../../interacting-with-editors/overview/how-to-call-commands.md#editorType)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
