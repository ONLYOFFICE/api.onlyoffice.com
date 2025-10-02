# 在单元格中添加评论

向电子表格的单元格中添加评论。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 电子表格。

![AddCommentInCell](/assets/images/plugins/gifs/add-comment-in-cell.gif)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_add_comment_in_cell) 下载此插件，并根据以下说明进行安装：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md) 或 [云端版](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 选择你想要添加评论的单元格。
2. 打开 **插件** 选项卡并点击 **示例：在单元格中添加评论**。
3. 在输入框中输入评论内容，然后点击 **添加评论** 按钮。

## 插件结构

GitHub 仓库地址：[example_add_comment_in_cell](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_add_comment_in_cell)。

1. *config.json*、*index.html* 和 *code.js*
2. 图标

## 配置

``` json
{
  "name": "Example add comment",
  "guid": "asc.{89643394-0F74-4297-9E0B-541A67F1E98C}",

  "variations": [
    {
      "description": "Example add comment",
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
      "EditorsSupport": ["cell"],

      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,

      "initDataType": "none",
      "initData": "",

      "buttons": []
 
    }
  ]
}
```

## 方法与事件

- button
- init
- [callCommand](../../interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [Asc.scope](../../interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object

## 支持

如果你希望请求新功能或报告此插件的相关问题，请前往的事件（issues）区[GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues)提交。
