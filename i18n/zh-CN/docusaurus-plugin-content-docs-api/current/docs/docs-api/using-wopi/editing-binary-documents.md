---
sidebar_position: -2
---

# 编辑二进制文档格式

在线办公不支持对 *doc*、 *ppt*、 *xls*等传统二进制格式的文件进行编辑。但是，它可以将此类格式的文档相应地转换为 *docx*、 *pptx*、 *xlsx* 格式，让用户在在线办公中编辑自己的内容。

> 通常，转换不会对原始文档布局和格式进行任何可见的更改。但有时它会发生，用户可能希望在转换后恢复到以前的二进制文档格式。

[转换](./wopi-discovery.md#wopi-actions) WOPI 发现操作实现了将二进制格式的文件转换为现代 OOXML 格式的可能性。主机还必须支持 [PutRelativeFile](./wopi-rest-api/putrelativefile.md) WOPI 操作。二进制文件的编辑过程包括以下步骤：

1. 主机对二进制文件执行**转换**操作。
2. 在线办公从主机上取回文件并进行转换。
3. 在线办公将转换后的文档以原文件ID执行 **PutRelativeFile** 操作回传给主机。
4. 主机使用 **PutRelativeFile** 操作的 **X-WOPI-FileConversion** 请求标头来确定请求是在文件转换的上下文中发出的。
5. 文档转换成功后，在线办公将用户重定向到 **PutRelativeFile** 响应体中返回的 [HostEditUrl](./wopi-rest-api/checkfileinfo.md#hostediturl)。

现在用户可以编辑 OOXML 格式的文档。

## 查看模式

可能还有另一种情况，主机首先在查看器中打开文档，然后使用**“编辑”**按钮将文档转换为 OOXML 格式并进行编辑。使用[查看](./wopi-discovery.md#wopi-actions)操作打开二进制文件的过程应如下所示：

1. 将 [UserCanWrite](./wopi-rest-api/checkfileinfo.md#usercanwrite) 属性设置为 **true**。
2. 将 [UserCanNotWriteRelative](./wopi-rest-api/checkfileinfo.md#usercannotwriterelative) 属性设置为**false**（或简单地忽略它）。
3. 将 [HostEditUrl](./wopi-rest-api/checkfileinfo.md#hostediturl) 属性设置为在加载时执行**转换**操作的主机URL。

如果满足所有这些条件，**编辑**按钮将显示在查看器中。当用户单击它时，为二进制文件提供的 **HostEditUrl** 将打开并开始转换过程。最后，用户被重定向到新转换文档的 **HostEditUrl**。

## 定制

有时，用户在打开没有任何更改的二进制文件时可能会感到困惑。发生这种情况是因为所有更改都是在新转换的 OOXML 文件中进行的。这就是为什么在转换开始之前通知用户可能很重要。主机可以通过三种方式执行此操作。

**选项1**。显示通知消息

主机可以在转换开始之前向用户显示一些 UI。**执行**转换操作时，主机将其识别为尝试编辑二进制文档并显示通知消息以通知用户文档将被转换。通过将 [EditModePostMessage](./wopi-rest-api/checkfileinfo.md#editmodepostmessage) 属性设置为 **true** 并处理 [UI\_Edit](./postmessage.md#ui_edit) PostMessage，这种情况也可以应用于**编辑**按钮。

**选项2**。以不同方式处理转换后的文档

通过在转换过程中调用 [PutRelativeFile](./wopi-rest-api/putrelativefile.md) 操作时以不同方式处理，主机可以以独特的方式处理转换后的文档。**X-WOPI-FileConversion** 标头告诉主机何时从转换流调用操作，因此主机可以选择如何最好地处理这些请求。

**选项3**。重定向到插页

在线办公导航到主机控制的 [HostEditUrl](./wopi-rest-api/checkfileinfo.md#hostediturl) 响应中返回的 [PutRelativeFile](./wopi-rest-api/putrelativefile.md)。因此，主机可以在转换完成后将用户发送到任何 URL。例如，主机可能会将用户重定向到一个插页，通知他们，他们的文档已被转换。

<img alt="Convert binary files" src="/assets/images/editor/convert-binary-files.jpg" width="300px" />
