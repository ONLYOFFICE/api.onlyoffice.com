---
sidebar_position: -11
---

# 匿名用户

以下参考图和步骤解释了在ONLYOFFICE文档中为匿名用户设置名称的过程。

<img alt="Anonymous" src="/assets/images/editor/anonymous-user.png" width="720px" />

1. 匿名用户使用**文档管理器**打开文档进行查看或编辑

   > 匿名用户是指具有空的[用户id](../../usage-api/config/editor/editor.md#user)的用户。

2. **文档存储服务**使用[JavaScript API](../basic-concepts.md)将初始化配置发送给**文档编辑器**，但其中未指定用户名。

3. **文档编辑器**请求输入用户名。

4. **文档编辑器**将接收到的用户名发送给**文档编辑服务**。

5. **文档编辑服务**将用户名发送给处于协同编辑模式下的所有用户的**文档编辑器**。

## 实际操作方法

1. 创建一个*html*文件，用于[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 如果指定了匿名用户的名称，该名称将显示在顶部工具栏上。

3. 如果未指定用户名，则会请求输入用户名。可以通过将[editorConfig.customization.anonymous](../../usage-api/config/editor/customization/customization-standard-branding.md#anonymous)参数的 *"request"=false*值来关闭该请求。

   ![名称请求](/assets/images/editor/name-request.png)

4. 设置匿名用户的名称后，会通过*editorConfig.customization.anonymous*参数的*label*字段为其添加后缀，以便在协同编辑会话中区分访客。默认情况下，此后缀为*"Guest"*。

   ![Label](/assets/images/editor/label.png)

   ``` ts
   const config = {
     editorConfig: {
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

5. 一旦您首次设置了名称，它将存储在浏览器的本地存储中。下次使用时，只需按**F5**键即可。

6. 要更改此名称，请点击顶部工具栏上的名称，然后在打开的窗口中输入新名称。

7. 所有协同作者都将看到新名称。

## 限制对编辑器或实时查看器的访问

要限制匿名用户对编辑器或实时查看器的访问，请将配置文件中的[services.CoAuthoring.server.isAnonymousSupport](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-isAnonymousSupport)参数设置为**false**。在这种情况下，当匿名用户尝试打开编辑器时，将出现警告。

<img alt="Anonymous user warning" src="/assets/images/editor/anonymous-warning.jpg" width="400px" />

实时查看器将无警告地切换到离线查看器。
