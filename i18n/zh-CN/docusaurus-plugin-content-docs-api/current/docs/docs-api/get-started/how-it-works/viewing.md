---
sidebar_position: -8
---

# 查看

要以只读模式打开文档，请将 [`editorConfig.mode`](../../usage-api/config/editor/editor.md#mode) 设置为 `"view"`。用户可以阅读文档，但无法修改。

## 实时查看器与通用查看器

ONLYOFFICE文档支持文本文档、电子表格、演示文稿和PDF的两种查看模式：

- **实时查看器** — 实时显示正在编辑文档的其他用户所做的更改，包括其光标。这是默认模式。
- **通用查看器** — 显示文档的静态快照。用户在重新加载页面之前看不到其他用户的编辑。

:::note
实时查看器从7.2版开始可用。实时查看器的服务器连接数与编辑连接数分开计算，并受许可证中 [`connections_view`](../../additional-api/command-service/license.md#license.connections_view) 参数的限制。开源版本的限制为20。对于较旧的许可证，实时查看器不可用。
:::

要控制使用哪种查看模式，请配置 [`editorConfig.coEditing`](../../usage-api/config/editor/editor.md#coediting) 参数：

1. `mode: "fast"` 且 `change: true` — 默认打开实时查看器。用户可以通过**文件** > **高级设置...** > **显示其他用户的更改**在实时查看器和通用查看器之间切换，无需重新加载页面。这是默认配置：

   ``` ts
   const config = {
     editorConfig: {
       coEditing: {
         mode: "fast",
         change: true,
       },
       mode: "view",
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![显示其他用户的更改](/assets/images/editor/show-changes-from-other-users.png)

2. `mode: "fast"` 且 `change: false` — 默认打开实时查看器。用户无法切换到通用查看器：

   ``` ts
   const config = {
     editorConfig: {
       coEditing: {
         mode: "fast",
         change: false,
       },
       mode: "view",
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. `mode: "strict"` 且 `change: true` — 默认打开通用查看器。用户可以通过**文件** > **高级设置...** > **显示其他用户的更改**切换到实时查看器：

   ``` ts
   const config = {
     editorConfig: {
       coEditing: {
         mode: "strict",
         change: true,
       },
       mode: "view",
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

4. `mode: "strict"` 且 `change: false` — 默认打开通用查看器。用户无法切换到实时查看器：

   ``` ts
   const config = {
     editorConfig: {
       coEditing: {
         mode: "strict",
         change: false,
       },
       mode: "view",
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

在实时查看器中，会显示其他用户的光标。通过 [`document.permissions.userInfoGroups`](../../usage-api/config/document/permissions.md#userinfogroups) 参数配置显示哪些用户的光标。

![实时查看器中的用户光标](/assets/images/editor/live-viewer.png)

在通用查看器中，文档显示为静态快照：

![通用查看器](/assets/images/editor/viewer.png)

在以下情况下，仅使用通用查看器：

- 在[嵌入式模式](../../usage-api/config/editor/embedded.md)下；
- 使用 [WOPI](../../using-wopi/overview.md) 时；
- 打开 `.djvu` 或 `.xps` 格式时。

移动编辑器支持与Web版本相同的查看模式和 `coEditing` 配置。
