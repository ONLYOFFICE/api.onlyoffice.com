---
sidebar_position: -8
---

# 查看

查看打开模式允许用户仅查看文档而不修改其数据。为了启用此模式，编辑器 [editorConfig.mode](../../usage-api/config/editor/editor.md#mode) 参数必须设置为 **view**。

从7.2版开始，**实时查看器**被添加到文本文档、电子表格和演示文稿编辑器中。要应用查看模式，请使用 [editorConfig.coEditing](../../usage-api/config/editor/editor.md#coediting) 参数：

1. 如果 *mode* 字段是 *fast*，而 *change* 字段为 *true*，则默认情况下会打开实时查看器，但您可以将模式切换到通用查看器，然后再切换回来，而无需重新加载页面。为此，请打开**文件**选项卡，单击**高级设置…**，然后选中/取消选中**显示其他用户的更改**复选框。默认情况下启用此模式：

   ``` ts
   const config = {
     editorConfig: {
       coEditing: {
         mode: "fast",
         change: true,
       },
       mode: "view",
     },
   }
   ```

   ![设置](/assets/images/editor/show-changes-from-other-users.png)

   在实时查看器中，通过配置 [document.permissions.userInfoGroups](../../usage-api/config/document/permissions.md#userinfogroups) 参数来显示其他用户的光标。

   ![实时查看器](/assets/images/editor/live-viewer.png)

   更改的显示方式与编辑模式中的相同。

   ![编辑器](/assets/images/editor/editor.png)

2. 如果 *mode* 字段是 *fast*，而 *change* 字段为 *false*，则默认情况下会打开实时查看器，并且无法将模式切换到普通查看器：

   ``` ts
   const config = {
     editorConfig: {
       coEditing: {
         mode: "fast",
         change: false,
       },
     },
   }
   ```

3. 如果 *mode* 字段是 *strict*，且 *change* 字段为 *true*，则默认情况下会打开通用查看器，但您可以在**高级设置...**中将模式切换为实时查看器：

   ``` ts
   const config = {
     editorConfig: {
       coEditing: {
         mode: "strict",
         change: true,
       },
       mode: "view",
     },
   }
   ```

4. 如果 *mode* 字段是 *strict*，且 *change* 字段为 *false*，则默认情况下会打开通用查看器，并且您无法将模式切换到实时查看器：

   ``` ts
   const config = {
     editorConfig: {
       coEditing: {
         mode: "strict",
         change: false,
       },
       mode: "view",
     },
   }
   ```

   ![查看器](/assets/images/editor/viewer.png)

在以下情况下，仅使用通用查看器：

- 在[嵌入式模式](../../usage-api/config/editor/embedded.md);
- 对于 [WOPI](../../using-wopi/overview.md);
- 打开 *pdf/djvu/xps* 格式时。

> 请注意，实时查看器的服务器连接数与同时连接总数分开计算，并接受许可证中 [connections\_view](../../additional-api/command-service/license.md#license) 参数的限制。对于开源版本，这个值限制为20。对于较旧的许可证，实时查看器不可用。

在移动编辑器中使用查看模式的概念与web版本相同。
