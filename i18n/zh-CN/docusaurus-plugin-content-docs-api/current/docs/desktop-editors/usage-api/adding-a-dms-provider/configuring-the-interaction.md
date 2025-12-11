---
sidebar_position: -8
---

# 配置交互

一旦你的文档管理系统（DMS）已[添加](./adding-a-dms-provider.md)到连接列表中，请配置DMS与桌面编辑器的交互：

- [登录](./login-and-logout.md)到你的DMS，使其显示在“已连接的云”列表中，
- 从桌面应用程序启用[通知](./sending-notifications.md)，
- 更改界面[主题](./changing-a-theme.md)，
- 启用端到端[加密](./encryption/encryption.md)。

在继续操作之前，强烈建议调整在桌面应用程序中打开文档时要显示的DMS元素。

排除与文档管理器无关的功能。隐藏诸如导航、网站页眉和页脚等部分。移除指向第三方资源的链接。其他页面将在默认浏览器中打开，不会与桌面编辑器进行交互。

桌面应用程序有三种识别方式：

- 在服务器请求地址的参数中添加 *?desktop = true*。
- 从6.1版本开始，该应用程序会将 *AscDesktopEditor $version$* 行添加到 *navigator.userAgent* 参数中。例如，*AscDesktopEditor 6.1.0*。
- 在JavaScript代码中，还有一个 *window\.AscDesktopEditor* 对象，其方法可以向应用程序发送命令和信息。
