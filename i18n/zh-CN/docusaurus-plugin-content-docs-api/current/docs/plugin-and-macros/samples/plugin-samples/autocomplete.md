# 自动完成

帮助用户快速输入文本。

**插件类型：** 输入辅助，系统插件。

**支持的编辑器：** 文档、电子表格、演示文稿。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="DhyqzMsyirM"/>
```

## 安装

从 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/en/app-directory/autocomplete)下载此插件，并按照[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)，[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)或者[云端版](../../tutorials/installing/onlyoffice-cloud.md)的安装说明进行安装。

## 使用方法

1. 输入单词。如果插件在词典中找到匹配的单词，将弹出一个带有候选单词的输入辅助窗口。
2. 使用**下/上箭头**键选择所需选项，按**回车键**完成单词输入。

## 插件结构

GitHub 仓库： [自动完成](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/autocomplete).

1. *config.json*、 *index.html* 和 *code.js*
2. 图标
3. **翻译**文件夹，包含俄语、德语、西班牙语、捷克语和法语的翻译文件
4. **dictionary.js** 文件，包含自动完成使用的单词

## 配置

``` json
{
  "name": "Autocomplete",
  "nameLocale": {
    "fr": "Autocomplete",
    "es": "Autocomplete",
    "pt-BR": "Preenchimento automático",
    "de": "Autocomplete"
  },
  "guid": "asc.{A103601F-FDA0-418A-BC37-A514031894C0}",
  "version": "1.0.0",

  "variations": [
    {
      "description": "Use an input assistant while typing in the editors.",
      "descriptionLocale": {
        "fr": "Utilisez un assistant de saisie pendant que vous tapez dans les éditeurs.",
        "es": "Utilice un asistente de entrada mientras escribe en los editores.",
        "pt-BR": "Use um assistente de entrada enquanto digita nos editores.",
        "de": "Verwenden Sie einen Assistenten bei der Eingabe in den Editoren."
      },
      "url": "index.html",
      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "screens": ["resources/store/screen_1.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "slide", "cell"],
      "isVisual": false,
      "isSystem": true,
      "initDataType": "none",
            
      "events": [
        "onInputHelperClear",
        "onInputHelperInput"
      ],
      "store": {
        "background": {
          "light": "#F5F5F5",
          "dark": "#444444"
        },
        "screenshots": ["resources/store/screenshots/screen_1.png"],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities", "work", "recommended"]
      }
    }
  ]
}
```

## 方法与事件

- button
- init
- inputHelper_onSelectItem
- onInputHelperClear
- onInputHelperInput
- [createInputHelper](/docs/plugin-and-macros/customization/input-helper.md#creating-an-input-helper)
- [executeMethod ("InputText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/InputText.md)
- [getInputHelper](/docs/plugin-and-macros/customization/input-helper.md#getting-an-input-helper)
- [InputHelper.createWindow](/docs/plugin-and-macros/customization/input-helper.md#createwindow)
- [InputHelper.getItems](/docs/plugin-and-macros/customization/input-helper.md#getitems)
- [InputHelper.getScrollSizes](/docs/plugin-and-macros/customization/input-helper.md#getscrollsizes)
- [InputHelper.setItems](/docs/plugin-and-macros/customization/input-helper.md#setitems)
- [InputHelper.show](/docs/plugin-and-macros/customization/input-helper.md#show)
- [InputHelper.unShow](/docs/plugin-and-macros/customization/input-helper.md#unshow)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
