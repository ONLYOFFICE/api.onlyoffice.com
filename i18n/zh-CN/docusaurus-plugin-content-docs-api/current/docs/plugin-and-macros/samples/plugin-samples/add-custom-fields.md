# 添加自定义字段

向文档中插入自定义字段。

**插件类型：**可视化，非系统。  

**支持的编辑器：**文档。

![AddCustomFields](/assets/images/plugins/gifs/add-custom-fields.gif)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_add) 下载此插件，并根据以下方式的说明进行安装：[**桌面端**](../../tutorials/installing/onlyoffice-desktop-editors.md)、[**本地部署**](../../tutorials/installing/onlyoffice-docs-on-premises.md) 或 [**云端**](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插件**选项卡并点击**示例添加自定义字段**。  
2. 若要添加**简单字段**，请在对应字段中输入问题和标签，然后点击**添加简单字段**按钮。  
3. 若要添加**下拉字段**，请在对应字段中输入问题和标签，并添加答案选项：在**输入你的选项**字段中输入选项内容，点击**添加**按钮。需要多个选项时可重复操作。要删除某个选项，在组合框中选择它并点击**删除**按钮。准备完成后，点击**添加下拉字段**按钮。  
4. 字段将插入到当前文本光标所在位置。

## 插件结构

GitHub 仓库：[**example_customfields_add**](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_add)

1. *config.json*，*index.html*，*code.js*
2. 图标

## 配置

``` json
{
  "name": "Example add custom fields",
  "guid": "asc.{4E2B5030-E1BE-41FA-BEE3-7E9BE7B5BFCF}",

  "variations": [
    {
      "description": "Example add custom fields",
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

      "buttons": []
    }
  ]
}
```

## 方法和事件

- button
- init
- onMethodReturn
- executeMethod ("AddContentControl")
- executeMethod ("InsertAndReplaceContentControls")

## 支持

如果您想请求功能或报告关于此插件的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues) 上的问题区。
