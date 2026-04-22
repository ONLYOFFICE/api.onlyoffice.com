---
sidebar_position: -4
---

# 保护区域

下图和步骤说明了在 ONLYOFFICE 文档电子表格中区域保护的工作原理。

![保护范围](/assets/images/editor/protect-ranges-scheme.svg)

1. 用户在**文档编辑器**中打开*保护 -> 保护范围*，单击*新建*，然后开始在*谁可以编辑*字段中输入内容。
2. **文档编辑器**触发 [onRequestUsers](../../usage-api/config/events.md#onrequestusers) 事件，其中 `data.c` 设置为 `protect`，请求可被授予该范围编辑权限的用户列表。
3. **文档管理器**处理该事件并调用 [setUsers](../../usage-api/methods.md#setusers) 方法，将用户列表传递回**文档编辑器**，该列表显示在*谁可以编辑*字段下。
4. 用户在*新建范围*窗口中指定范围标题和地址，然后单击*确定*以添加受保护范围。

## 如何在实践中做到这一点

1. 创建一个空的 `.html` 文件来[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在**文档编辑器**初始化的配置脚本中，添加 [onRequestUsers](../../usage-api/config/events.md#onrequestusers) 事件处理程序。当用户打开*保护 -> 保护范围*、单击*新建*并开始在*谁可以编辑*字段中输入内容时，此事件将触发，其中 `data.c` 设置为 `protect`。处理程序调用 [setUsers](../../usage-api/methods.md#setusers) 方法来提供可被授予编辑权限的用户列表：

   <img alt="Grant access" src="/assets/images/editor/protect-range.png" width="292px" />

   ``` ts
   function onRequestUsers(event) {
     docEditor.setUsers({
       c: event.data.c,
       users: [
         {
           email: "john@example.com",
           id: "78e1e841",
           name: "John Smith",
         },
         {
           email: "kate@example.com",
           id: "F89d8069ba2b",
           name: "Kate Cage",
         },
       ],
     });
   }

   const config = {
     events: {
       onRequestUsers,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. 在浏览器中打开您的 `.html` 文件。
