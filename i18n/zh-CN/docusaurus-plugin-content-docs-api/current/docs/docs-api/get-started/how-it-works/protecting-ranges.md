---
sidebar_position: -4
---

# 保护区域

参考图和以下步骤说明了在 ONLYOFFICE 文档中保护电子表格范围的过程。

![保护范围](/assets/images/editor/protect-ranges-scheme.svg)

1. 用户在**文档编辑器**中打开 *保护 -> 保护范围*，单击*新建*，然后开始在*谁可以编辑*字段中输入用户名。
2. **文档编辑器**向**文档管理器**发送请求，以获取允许编辑指定工作表范围的用户列表。
3. **文档管理器**将用户列表发送到**文档编辑器**，该列表将显示在*谁可以编辑*字段下。
4. 用户在**文档编辑器**的*新建范围*窗口的相应字段中指定范围标题和地址，然后单击*确定*添加将此范围添加到受保护范围列表。

## 如何在实践中做到这一点

1. 创建一个空的 *html* 文件来[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在文档编辑器初始化的配置脚本中，指定事件处理程序以显示授予访问权限的用户列表编辑指定的电子表格范围。当用户打开*保护 -> 保护范围*时，单击*新建*，并开始在*谁可以编辑*字段中输入内容，调用 [onRequestUsers](../../usage-api/config/events.md#onrequestusers) 事件，用户可以选择其他用户以允许他们编辑此范围。具有*保护*操作类型的 *data.c* 参数在此事件中传递。

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
     })
   };
   
   const config = {
     events: {
       onRequestUsers,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. 为了设置*谁可以编辑*字段下的用户列表，必须调用 [setUsers](../../usage-api/methods.md#setusers) 方法：

   ``` ts
   docEditor.setUsers({
     c: "protect",
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
   })
   ```

   其中 **example.com** 是安装**文档管理器**和**文档存储服务**的服务器的名称。请参阅[工作原理](./how-it-works.md)部分，了解有关文档服务器服务客户端与服务器交互的更多信息。
