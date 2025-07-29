# 图片编辑器

连接 [Toast UI 图片编辑器](https://ui.toast.com/tui-image-editor)，可直接在文档中编辑图像：裁剪、调整大小、应用效果等。

**插件类型：** 可视化、非系统插件。  

**支持的编辑器：** 文档、电子表格、演示文稿。

![PhotoEditor](/assets/images/plugins/gifs/photo-editor.gif)

## 安装方式

在 ONLYOFFICE 编辑器的云端、本地部署和桌面版本中默认可用。

你可以按照以下说明卸载插件：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)、[云端版](../../tutorials/installing/onlyoffice-cloud.md)。

插件 GUID：`{07FD8DFA-DFE0-4089-AL24-0730933CC80A}`。

## ## 使用方法

1. 在文档中选择一张图片。
2. 在**插件**选项卡中找到**图片编辑器**插件。
3. 图片下方会显示用于编辑的各项设置。
4. 设置完成后点击**确定**按钮。

## 插件结构

GitHub 仓库：[photoeditor](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/photoeditor)。

1. *config.json*、*index.html* 和 *photoeditor.js*

2. 图标

3. 翻译文件夹包含俄语、德语、西班牙语、捷克语和法语的翻译

4. 插件**关于**窗口对应的 *index_about.html*

5. *black-theme.css*、*black-theme.js*、*white-theme.css* 和 *white-theme.js* 用于设置插件的深色或浅色主题

6. 第三方服务：

   - [jQuery](https://jquery.com)：一个快速且简洁的 JavaScript 库，用于简化 HTML 文档遍历、事件处理、动画和 Ajax 交互。许可证：[MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/photoeditor/licenses/jQuery.license)。
   - [Toast UI 图片编辑器](https://ui.toast.com/tui-image-editor)：一款基于 HTML5 Canvas 的全功能图像编辑器，易于使用并提供强大的滤镜功能。许可证：[MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/photoeditor/licenses/Tui.license)。

## 配置

``` json
{
  "name": "Photo Editor",
  "nameLocale": {
    "fr": "Photo Editor",
    "es": "Editor de Fotos",
    "pt-BR": "Editor de foto",
    "de": "Foto-Editor"
  },
  "guid": "asc.{07FD8DFA-DFE0-4089-AL24-0730933CC80A}",
  "version": "1.0.1",
  "baseUrl": "",

  "variations": [
    {
      "description": "Edit images, screenshots, and photos right in your documents: crop, resize, apply effects.",
      "descriptionLocale": {
        "fr": "Modifiez des images, des captures d'écran et des photos directement dans vos documents: coupez, ajustez, appliquez des effets.",
        "es": "Edite imágenes, capturas de pantalla y fotos directamente en sus documentos: recorte, cambie el tamaño y aplique efectos.",
        "pt-BR": "Edite imagens, capturas de tela e fotos diretamente em seus documentos: corte, redimensione e aplique efeitos.",
        "de": "Bearbeiten Sie Bilder, Screenshots und Fotos direkt in Dokumenten: Zuschneiden, Größe ändern, Effekte anwenden."
      },
      "url": "index.html",

      "icons": ["resources/light/icon.png", "resources/light/icon@2x.png"],
      "icons2": [
        {
          "style": "light",
                    
          "100%": {
            "normal": "resources/light/icon.png"
          },
          "125%": {
            "normal": "resources/light/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/light/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/light/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/light/icon@2x.png"
          }
        },
        {
          "style": "dark",
                    
          "100%": {
            "normal": "resources/dark/icon.png"
          },
          "125%": {
            "normal": "resources/dark/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/dark/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/dark/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/dark/icon@2x.png"
          }
        }
      ],
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,

      "initDataType": "html",
      "initData": "",

      "buttons": [
        {
          "text": "Ok",
          "primary": true
        },
        {
          "text": "Cancel",
          "primary": false,
          "isViewer": false,
          "textLocale": {
            "fr": "Annuler",
            "es": "Cancelar",
            "de": "Abbrechen"
          }
        }
      ],

      "size": [10000, 10000],
      "store": {
        "background": {
          "light": "linear-gradient(180deg, #FF8E3D 0%, #FF6F3D 100%)",
          "dark": "linear-gradient(180deg, #FF8E3D 0%, #FF6F3D 100%)"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png"
        ],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities", "work", "recommended"]
      }
    },
    {
      "description": "About",
      "descriptionLocale": {
        "fr": "À propos",
        "es": "Sobre programa",
        "de": "Über"
      },
      "url": "index_about.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png", "resources/img/icon2.png", "resources/img/icon2@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,

      "initDataType": "none",
      "initData": "",

      "size": [392, 147]
    }
  ]
}
```

## 方法和事件

- button
- init
- onTranslate
- [callCommand](../../interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [executeMethod ("GetImageDataFromSelection")](../../interacting-with-editors/methods/text-document-api/Api/Methods/GetImageDataFromSelection.md)
- [executeMethod ("GerVersion")](../../interacting-with-editors/methods/text-document-api/Api/Methods/GetVersion.md)
- [executeMethod ("PutImageDataToSelection")](../../interacting-with-editors/methods/text-document-api/Api/Methods/PutImageDataToSelection.md)
- [resizeWindow](../../customization/windows-and-panels.md#interacting-with-a-window)
- [Asc.scope](../../interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object
- [info.editorType](../../interacting-with-editors/overview/how-to-call-commands.md#editorType)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
