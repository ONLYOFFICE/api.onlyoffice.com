---
sidebar_position: -1
---

# 打开编辑器的生命周期

[打开](./opening-file.md)编辑器的生命周期由API在每个阶段触发的一系列事件定义。在集成中处理这些事件可以让您响应状态变化——从初始加载到文档就绪再到关闭。

## onAppReady

当文档编辑器加载到浏览器中时，会触发[onAppReady](../../usage-api/config/events.md#onappready)事件。此时编辑器框架已就绪，但文档本身尚未加载。在此事件之后，您可以调用[showMessage](../../usage-api/methods.md#showmessage)方法向用户显示带有消息的工具提示。

## onError

当加载过程中发生错误时——例如转换错误或编辑器组件加载失败——会触发[onError](../../usage-api/config/events.md#onerror)事件。此事件之后编辑器将无法使用；您的集成应处理该错误，并在需要时重新初始化编辑器。

## onRequestRefreshFile

当使用已用于保存文件的[`key`](../../usage-api/config/document/document.md#key)打开编辑器时，会触发[onRequestRefreshFile](../../usage-api/config/events.md#onrequestrefreshfile)事件。这意味着文档存在更新的已保存版本。在事件处理程序中，调用[refreshFile](../../usage-api/methods.md#refreshfile)方法并传入新的`key`值，以在不重新加载编辑器的情况下更新文件版本。

## onUserActionRequired

当需要用户操作才能打开文档时，会触发[onUserActionRequired](../../usage-api/config/events.md#onuseractionrequired)事件。当用户需要输入密码才能打开受保护的文档，或者需要为`txt`或`csv`文件选择编码或分隔符时，就会发生这种情况。

## onDocumentReady

当文档加载完成且编辑器准备好工作时，会触发[onDocumentReady](../../usage-api/config/events.md#ondocumentready)事件。在此事件之后，您可以向[Automation API](../../usage-api/automation-api/automation-api.md)发送请求，以编程方式与文档内容进行交互。

在以下情况下，`onRequestRefreshFile`事件也可能在`onDocumentReady`之后触发：

1. 文档已被修改。
2. 网络连接中断。
3. 文档已成功保存。
4. 编辑器已重新连接到服务器。

## onRequestClose

当用户点击关闭编辑器的十字按钮时，会触发[onRequestClose](../../usage-api/config/events.md#onrequestclose)事件。

建议在调用[destroyEditor](../../usage-api/methods.md#destroyeditor)之前先调用[requestClose](../../usage-api/methods.md#requestclose)方法，以检查是否有未保存的数据。如果存在未保存的数据，将显示一个对话框询问用户是要继续编辑还是关闭编辑器并丢失所有未保存的更改。如果用户选择关闭，则会触发`onRequestClose`事件。

[destroyEditor](../../usage-api/methods.md#destroyeditor)方法用于销毁`docEditor`对象。当需要使用其他配置重新初始化编辑器时，可以使用此方法。
