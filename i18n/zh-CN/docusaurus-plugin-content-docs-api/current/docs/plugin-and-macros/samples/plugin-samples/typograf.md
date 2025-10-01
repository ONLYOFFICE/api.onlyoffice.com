# Typograf（排版助手）

连接 [Typograf](https://github.com/typograf/typograf) 助手，以在发布前修正文本文字中的排版错误。该插件可以自动插入不间断空格、删除多余空格、修复轻微拼写错误、插入正确引号、将连字符替换为破折号等。

支持的语言列表可见于[此处](https://github.com/typograf/typograf/blob/dev/docs/LOCALES.en-US.md)。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文本文档。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="Pr1TAstlj7E"/>
```

## 安装

在 ONLYOFFICE 企业版和社区版（文档 + 工作区）中默认提供。

你也可以从 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/app-directory/typograf) 下载该插件，并根据以下指南进行安装：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)或[云端版](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插件**选项卡并点击 **Typograf**。
2. 点击**显示高级设置**，选择语言环境以及要应用于文本的规则。
3. 选中你想校正的文本。
4. 点击**校正文稿**按钮运行插件。

## 已知问题

- 当插件用于包含图形对象的文档摘要时，这些对象（图片、形状、艺术字、文本框、表格、图表）以及其中的文本将会丢失。
- 如果你选中了图形对象中的文本，该文本将从对象中移除，并以校正后的形式插入到文档中。
- 图形公式将被转换为字符串。
- 首字下沉、内容控件、超链接、底纹、脚注、书签、题注、目录将会被移除。
- 如果文档中有部分文本被分栏处理，则分栏格式会应用于整个文档。
- 分节符不会被保留。
- 使用修订模式建议的更改不会被保留。
- 如果插件在修订模式下使用，校正后的文本将作为建议更改插入。
- 批注不会被保留（仅针对整篇文档的批注除外）。
- 如果只选择正文内容，页眉和页脚将保持不变。
- 如果选择了页眉/页脚中的内容，包含的图形对象将会丢失。
- 如果行为编号应用于整篇文档，将会被保留；但如果只应用于某个部分，该部分的编号将会随之丢失。
- 当选择两个或更多段落时，插件会在校正文本后自动插入一个空段落。

## 插件结构

GitHub 仓库：[typograf](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/typograf)。

1. *config.json*、*index.html* 和 *typograf.js*

2. 图标文件

3. *translations* 文件夹包含了以下语言的翻译：俄语、白俄罗斯语、乌克兰语、保加利亚语、加泰罗尼亚语、丹麦语、德语、西班牙语、希腊语、芬兰语、匈牙利语、拉脱维亚语、挪威语、波兰语、罗马尼亚语、斯洛伐克语、斯洛文尼亚语、瑞典语、意大利语、荷兰语和法语。

4. 第三方服务：

   - [jQuery](https://jquery.com) —— 一个快速且简洁的 JavaScript 库，用于简化 HTML 文档遍历、事件处理、动画和 Ajax 交互。许可证：[MIT 许可证](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/typograf/licenses/jQuery.license)。
   - [Select2](https://select2.org/) —— 提供可定制的选择框，支持搜索、标签、远程数据集、无限滚动及多种常用选项。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/typograf/licenses/Select2.license)。
   - [Typograf](https://github.com/typograf/typograf) —— 用于排版文本的屏幕排版工具。许可证：[MIT 许可证](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/typograf/licenses/Typograf.license)。

## 配置

``` json
{
  "name": "Typograf",
  "nameLocale": {
    "fr": "Typograf",
    "es": "Typograf",
    "pt-BR": "Typograf",
    "de": "Typograf"
  },
  "guid": "asc.{55159EC6-C91A-4DDB-8E1E-558454666461}",
  "version": "1.0.1",

  "variations": [
    {
      "description": "Prepare your texts for publishing by correcting typography.",
      "descriptionLocale": {
        "fr": "Préparez vos textes pour la publication en corrigeant la typographie.",
        "es": "Prepare sus textos para la publicación corrigiendo la tipografía.",
        "pt-BR": "Prepare seus textos para publicação corrigindo a tipografia.",
        "de": "Bereiten Sie Ihre Texte für die Veröffentlichung vor, indem Sie Typografie korrigieren."
      },
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "icons2": [
        {
          "100%": {"normal": "resources/img/icon.png"},
          "125%": {"normal": "resources/img/icon@1.25x.png"},
          "150%": {"normal": "resources/img/icon@1.5x.png"},
          "175%": {"normal": "resources/img/icon@1.75x.png"},
          "200%": {"normal": "resources/img/icon@2x.png"}
        }
      ],
      "isViewer": false,
      "EditorsSupport": ["word", "slide", "cell"],

      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,

      "initDataType": "text",
      "initData": "",

      "buttons": [],

      "initOnSelectionChanged": true,
      "store": {
        "background": {
          "light": "#00ACC7",
          "dark": "#00ACC7"
        },
        "screenshots": ["resources/store/screenshots/screen_1.png"],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities"]
      }
    }
  ]
}
```

## 方法和事件

- button
- init
- onExternalMouseUp
- onTranslate
- [executeMethod ("GetSelectedText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetSelectedText.md)
- [executeMethod ("GetVersion")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetVersion.md)
- [executeMethod ("PasteText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteText.md)
- [executeMethod ("ReplaceTextSmart")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/ReplaceTextSmart.md)
- [Asc.scope](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object
- [info.editorType](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#editorType)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
