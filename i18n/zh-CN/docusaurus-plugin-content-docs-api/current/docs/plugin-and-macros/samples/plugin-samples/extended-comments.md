# 扩展评论

在文档中插入、编辑和删除评论及回复（包含用户信息）。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档编辑器。

![ExtendedComments](/assets/images/plugins/gifs/extended-comments.gif)

## 安装方式

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_extended_comments) 下载此插件，并按照以下说明完成安装：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)、或[云端](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插件**选项卡并点击**扩展评论**。
2. 选中你想评论的文本。在输入框中填写评论内容和作者姓名，并设置**问题类别**、**严重程度**和**提交人**，然后点击**添加评论**按钮将评论插入到文档中。
3. 所有评论会显示在插件窗口的下方区域。
4. 若要删除某条评论，请在下方区域中选中它并点击**删除**按钮。
5. 若要回复某条评论，请在下方区域中选中它并点击**添加回复**按钮。输入回复内容，勾选是否接受该评论，然后点击**回复**按钮。
6. 若要编辑某条评论，请点击**编辑**按钮，输入新的内容或更改属性后点击**确定**按钮。

## 插件结构

GitHub 仓库：[example_extended_comments](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_extended_comments)

1. *config.json*、*index.html* 和 *code.js*

2. 图标文件

3. 第三方服务：

   - [jQuery](https://jquery.com)：快速简洁的 JavaScript 库，简化 HTML 文档遍历、事件处理、动画和 Ajax 操作。许可证：[MIT License](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/example_extended_comments/licenses/jQuery.license)。
   - [Select2](https://select2.org/)：可自定义的下拉选择框，支持搜索、标签、远程数据集、无限滚动等功能。许可证：[MIT](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/example_extended_comments/licenses/Select2.license)。

## 配置

``` json
{
  "name": "Extended comments",
  "guid": "asc.{91EAC419-EF8B-440C-A960-B451C7DF3A37}",

  "variations": [
    {
      "description": "Extended comments",
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
      "EditorsSupport": ["word"],

      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,

      "initDataType": "none",
      "initData": "",

      "buttons": [],
      "events": ["onAddComment", "onRemoveComment", "onChangeCommentData"]

    }
  ]
}
```

## 方法和事件

- button
- init
- onAddComment
- onChangeCommentData
- onRemoveComment
- executeMethod ("AddComment")
- executeMethod ("ChangeComment")
- executeMethod ("GetAllComments")
- executeMethod ("MoveToComment")
- executeMethod ("RemoveComments")

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
