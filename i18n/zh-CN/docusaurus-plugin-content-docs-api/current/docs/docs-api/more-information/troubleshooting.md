# 故障排除

编辑器集成最常见的问题以及解决方法。

## 下载失败

![下载失败](/assets/images/editor/e-download.png)

在编辑器加载过程中会显示"下载失败"消息。

**文档编辑服务**无法上传文件进行编辑。

检查 [document.url](../usage-api/config/document/document.md#url) 中指定的文件的链接是否正确。该链接必须可以从**文档编辑服务**访问。

## 没有变化

编辑后关闭编辑器时，**文档管理器**中的文件不变。

>**文档编辑服务**无法将数据发送到**文档存储服务**。

 检查 [editorConfig.callbackUrl](../usage-api/config/editor/editor.md#callbackurl) 链接是否正确。**文档管理器**中的保存必须通过[回调处理程序](../usage-api/callback-handler.md#document-save-examples)实现。

## 无法保存

![无法保存](/assets/images/editor/e-error0.png)

编辑器加载了"无法保存文档"消息。

**文档编辑服务**无法连接到 [editorConfig.callbackUrl](../usage-api/config/editor/editor.md#callbackurl) 地址的**文档存储服务**。

检查[回调处理程序](../usage-api/callback-handler.md#document-save-examples)是否正常工作。**文档存储服务**必须返回 [\{"error": 0\}](../usage-api/callback-handler.md#response-from-the-document-storage-service)作为响应。

## 文件版本已更改

![文件版本已更改](/assets/images/editor/e-key.png)

编辑器加载了"文件版本已更改。将重新加载页面"消息。

**文档编辑服务**无法打开之前编辑和保存过的文件来进行编辑。

不要忘记，每次编辑和保存文档时，都必须重新生成[document.key](../usage-api/config/document/document.md#key)。

## 文件版本打不开

![文件版本打不开](/assets/images/editor/changes-url.png)

**文档编辑服务**无法打开文件版本。

检查 [setHistoryData](../usage-api/methods.md#sethistorydata) 方法中的*changesUrl*链接是否与*previous.url*参数对应。

## 没有协作编辑

![没有协作编辑](/assets/images/editor/e-coedit.png)

当不同用户打开文档进行编辑时，无法进行共同编辑。

**文档编辑服务**打开**两个不同**的文件进行编辑。

检查[document.key](../usage-api/config/document/document.md#key)值是否一致以便能够共同编辑同一个文档。*key* 值在保存后必须改变，不同文档必须不同，并且在共同编辑同一个文档时必须相同。

## 令牌无效

![令牌无效](/assets/images/editor/e-token.png)

编辑器加载了"文档安全令牌没有正确生成。请联系您的文档服务器管理员"消息。

**文档编辑服务**会请求一个加密**签名**。

检查[牌](../usage-api/config/config.md#token)是否正确。令牌必须根据 [JWT（JSON Web 令牌）标准](../get-started/how-it-works/security.md)生成并存在于 **ONLYOFFICE 文档服务器**配置中。

## 拒绝访问

编辑器加载时显示“您正在尝试执行您无权执行的操作。请联系您的文档服务器管理员。”消息。

**文档编辑服务**无法执行用户请求的操作。

此问题可能由于以下原因而发生：

1. 这是编辑器的错误，它传递了服务器检查认为存在安全违规的参数。
2. 更改浏览器中打开的配置中的访问权限（可能是与错误填写缺失配置字段相关的编辑器错误）。
3. 尝试在查看器中保存文档或编辑器错误地在查看器中打开。
4. 执行了 [downloadAs](../usage-api/methods.md#downloadas) 方法，但用户无权[下载](../usage-api/config/document/permissions.md#download)文档。
5. 更改用户名（仅限匿名用户）。

错误原因不仅限于提供的示例。此列表还可扩展。

## 历史记录加载失败

历史记录加载过程中显示“历史记录加载失败”消息。

**文档编辑服务**无法上传版本历史记录。

检查 [refreshHistory](../usage-api/methods.md#refreshhistory) 方法是否正常工作。它必须传递需要在编辑器中显示的版本历史记录数据。

如果由于某种原因集成商无法提供版本历史记录，则此数据中将返回带有错误描述的 *error* 字段。描述由集成商提供：

```ts
docEditor.refreshHistory({
  error: "Exception",
})
```

如果集成商没有提供具体描述，它可以简单地发送 `error: true`，并显示默认的“历史记录加载失败”消息。
