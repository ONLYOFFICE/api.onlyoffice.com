---
sidebar_position: -1
---

# 常见问题

## 如何安装 ONLYOFFICE 桌面编辑器？

ONLYOFFICE 桌面编辑器支持 Windows、Linux 和 macOS 系统。从 6.1 版本开始，该应用也支持基于 ARM 的 Apple Silicon 芯片的 Mac 设备。

在本地计算机上安装此应用最简单的方法是从我们的官方[网站](https://www.onlyoffice.com/zh/download-desktop.aspx)下载。

对于某些 Linux 发行版，如 Zorin OS、Linux Mint、Linkat、Linspire 等，ONLYOFFICE 桌面编辑器软件包已预装或可在其官方商店中获取。

## 如何启用调试模式？

要启用[调试模式](../usage-api/debugging/running-in-debug-mode-on-windows.md)，请使用 *--ascdesktop-support-debug-info* 标志运行桌面编辑器。

## 如何向桌面编辑器添加插件？

桌面编辑器中默认安装了一些插件，并显示在**插件**选项卡中。您可以通过插件管理器或插件文件夹安装额外的插件。有关更多信息，请参见[本节](../usage-api/adding-plugins.md)。

## 我可以将自己的 DMS 提供商添加到默认连接列表中吗？

是的，可以。请按照[此页面](../usage-api/adding-a-dms-provider/adding-a-dms-provider.md)上的说明操作。

通过这种方式，您只能将 DMS 提供商添加到自己的连接列表中。如果您想为所有用户添加，请在 [GitHub](https://github.com/ONLYOFFICE/DesktopEditors/issues) 上提交功能请求。

## 如何检查 DMS 门户的可用性？

要检查门户的可用性，需要发送 GET 请求。如果门户可用，预期会收到 *HTTP_STATUS_CODE = 200* 的响应。

创建此请求时，集成[配置](../usage-api/adding-a-dms-provider/adding-a-dms-provider.md)中应指定以下两个参数：

- *check.url* - 请求中使用的 URL，

- *check.headers* - 添加到 *ajax* 请求的标头。

  ```json
  {
    "name": "Nextcloud",
    "check": {
      "url": "status.php",
      "headers": {
        "OCS-APIREQUEST": true
      }
    }
  }
  ```

## 如何了解文件状态？

声明以下全局函数：

```ts
window.DesktopUpdateFile = function DesktopUpdateFile() {}
```

桌面应用程序会调用此函数来通知用户文件编辑已完成。

## 如何检查文档是否在桌面应用程序中打开？

有三种方法可以识别桌面应用程序：

- 服务器请求地址的参数中添加了 *?desktop = true*。
- 从 6.1 版本开始，应用程序会在 *navigator.userAgent* 参数中添加 *AscDesktopEditor $version$* 行。例如，*AscDesktopEditor 5.6.0*。
- 在 JavaScript 代码中还有一个 *window.AscDesktopEditor* 对象，其方法可以向应用程序发送命令和信息。

## 如何在桌面编辑器中打开新窗口？

无法在桌面编辑器中打开新窗口，因为这是被禁止的（例如，对于 *OAuth*）。

要正确在新窗口/标签页中打开文档，需要使用 `window.open("http://url.to.document")` JavaScript 命令或 **execCommand** 方法的 *open:document* 命令。有关如何在桌面编辑器中打开文档的详细信息，请参见[本节](../usage-api/adding-a-dms-provider/opening-documents.md)。

## 如何检查桌面应用程序是否支持加密？

要检查桌面应用程序是否支持加密，请调用以下命令：

```ts
typeof window.AscDesktopEditor.cloudCryptoCommand === "function"
```

## 如何删除所有读取密钥？

要重置密钥并添加新密钥，请执行以下操作：

- 删除 DMS 数据库中的密钥；

- 从 *sdkjs-plugins* 目录中删除 *cloud_crypto.xml* 文件。文件夹的路径取决于您使用的操作系统：

  - 对于 Linux - *home/\<username>/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/*
  - 对于 Windows - *C:\Users\\\<username>\AppData\Local\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\\*
