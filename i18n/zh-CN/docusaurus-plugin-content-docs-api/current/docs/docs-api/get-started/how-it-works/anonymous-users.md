---
sidebar_position: -11
---

# 匿名用户

以下参考图和步骤解释了在ONLYOFFICE文档中为匿名用户设置名称的过程。

<img alt="Anonymous" src="/assets/images/editor/anonymous-user.png" width="720px" />

1. 匿名用户使用**文档管理器**打开文档进行查看或编辑。
2. **文档管理器**使用包含空的[`user.id`](../../usage-api/config/editor/editor.md#user)且未指定用户名的[`config`](../../usage-api/config/config.md)初始化**文档编辑器**。
3. **文档编辑器**提示用户输入名称。
4. **文档编辑器**将名称发送给**文档编辑服务**。
5. **文档编辑服务**将该名称转发给正在协同编辑文档的所有用户的**文档编辑器**。

## 实际操作方法

1. 创建一个`.html`文件，用于[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 要将用户设为匿名用户，请在编辑器[`config`](../../usage-api/config/config.md)中传递空的[`user.id`](../../usage-api/config/editor/editor.md#user)。[`editorConfig.customization.anonymous`](../../usage-api/config/editor/customization/customization-standard-branding.md#anonymous)参数控制名称提示和访客标签：

   - `request` — 为`true`（默认值）时，**文档编辑器**在首次打开时提示用户输入名称。设置为`false`可禁用该提示。
   - `label` — 附加到名称后的后缀，用于在协同编辑期间区分访客。默认值为`"Guest"`。

   ``` ts
   const config = {
     editorConfig: {
       user: {
         id: "",
       },
       customization: {
         anonymous: {
           request: true,
           label: "Guest",
         },
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. 当`request`为`true`且尚未存储名称时，**文档编辑器**显示名称输入提示：

   ![名称请求](/assets/images/editor/name-request.png)

4. 名称设置后，`label`后缀将附加到名称后：

   ![Label](/assets/images/editor/label.png)

5. 输入的名称保存在浏览器的本地存储中。下次访问时，存储的名称将自动复用，用户无需再次输入。

6. 要更改名称，用户可点击顶部工具栏上的名称，然后在打开的对话框中输入新名称。

7. 所有协同作者将立即看到更新后的名称。

## 限制对编辑器或实时查看器的访问

要限制匿名用户对编辑器或实时查看器的访问，请将服务器配置文件中的[`services.CoAuthoring.server.isAnonymousSupport`](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-isAnonymousSupport)参数设置为`false`。当匿名用户尝试打开编辑器时，将显示警告：

<img alt="Anonymous user warning" src="/assets/images/editor/anonymous-warning.jpg" width="400px" />

对于实时查看器，不会显示警告 — 它将静默回退到离线查看器。
