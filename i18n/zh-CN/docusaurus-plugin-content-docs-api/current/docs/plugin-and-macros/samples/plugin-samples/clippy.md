# 回形针助手

在文档编辑器中添加一个回形针助手。

**插件类型：**可视化、非系统插件。  

**支持的编辑器：**文档、表格、演示文稿。

![Clippy](/assets/images/plugins/gifs/clippy.gif)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/clippy) 下载此插件，并根据以下说明进行安装：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)、或[云端版](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 在**插件**选项卡中找到该插件。
2. 从下拉列表中选择任意助手。
3. 点击助手以播放随机动画。

## 插件结构

GitHub 仓库：[clippy](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/clippy)。

1. *config.json*、*index.html* 和 *code.js*

2. 图标文件

3. 插件**关于**窗口所用的 *index_about.html*

4. 第三方服务：

   - [jQuery](https://jquery.com) - 一款快速简洁的 JavaScript 库，简化了 HTML 文档遍历、事件处理、动画和 Ajax 交互，适用于快速网页开发。许可协议：[MIT License](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/clippy/licenses/jQuery.license)。
   - [clippy.js](https://www.smore.com/clippy-js) - 微软智能助手（又名 Clippy 和他的朋友们）的完整 JavaScript 实现，适用于嵌入任何网站。许可协议：[MIT License](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/clippy/licenses/clippy.license)。

## 配置

``` json
{
  "name": "Clippy",
  "guid": "asc.{5C521CB8-FD20-4CA3-83D7-1EEB8F4DC759}",

  "variations": [
    {
      "description": "Clippy",
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": true,
      "EditorsSupport": ["word", "slide", "cell"],

      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,

      "initDataType": "none",
      "initData": "",

      "buttons": []
    },
    {
      "description": "About",
      "url": "index_about.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "slide", "cell"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,

      "initDataType": "none",
      "initData": "",

      "buttons": [
        {
          "text": "Ok",
          "primary": true
        }
      ],

      "size": [400, 50]
    }
  ]
}
```

## 方法与事件

- button
- init

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
