---
sidebar_position: -6
---

# 右键菜单

插件可以通过右键菜单访问。

![Context menu item](/assets/images/plugins/context-menu-item.png#gh-light-mode-only)![Context menu item](/assets/images/plugins/context-menu-item.dark.png#gh-dark-mode-only)

## 创建右键菜单项 {#creating-a-context-menu-item}

1. 订阅 [onContextMenuShow](../interacting-with-editors/overview/asc-plugin.md#oncontextmenushow) 事件，该事件在右键菜单显示时触发。

   :::note
   如果插件监听此事件，必须调用 **AddContextMenuItem** 方法（可以同步或异步调用），因为编辑器会等待所有插件的响应后再填充右键菜单。
   :::

2. 调用 [AddContextMenuItem](../interacting-with-editors/overview/asc-plugin.md#addcontextmenuitem) 方法向右键菜单添加按钮。

   **示例**:

   ``` ts
   Asc.plugin.attachEditorEvent("onContextMenuShow", (options) => {
     const items = {
       guid: Asc.plugin.guid,
       items: [
         {
           id: "onNameClick",
           text: "Name",
           items: [],
         },
       ],
     };

     Asc.plugin.executeMethod("AddContextMenuItem", [items]);
   });
   ```

## 更新右键菜单项 {#updating-a-context-menu-item}

要更新右键菜单项，调用 [UpdateContextMenuItem](../interacting-with-editors/overview/asc-plugin.md#updatecontextmenuitem) 方法。

**示例**:

```ts
Asc.plugin.attachEditorEvent("onContextMenuShow", (options) => {
  const items = {
    guid: Asc.plugin.guid,
    items: [
      {
        id: "onNameClick",
        text: "New name",
        items: [],
      },
    ],
  };

  Asc.plugin.executeMethod("UpdateContextMenuItem", [items]);
});
```

## 点击右键菜单项 {#clicking-a-context-menu-item}

1. 订阅 [onContextMenuClick](../interacting-with-editors/overview/asc-plugin.md#oncontextmenuclick) 事件，该事件在右键菜单按钮被点击时触发。

2. 使用 **attachContextMenuClickEvent** 添加事件监听器，该函数会在右键菜单中指定按钮被点击并触发事件时调用。对于每个右键菜单按钮，可以通过其 ID 指定单独的事件监听器。

   **参数**:

   | 名称 | 类型 | 描述 |
   | ---- | ---- | ---- |
   | id | `string` | 事件名称。 |
   | action | `function` | 事件监听函数。 |

   **返回值**：此方法不返回任何数据。

   **示例**:

   ``` ts
   Asc.plugin.attachContextMenuClickEvent("onNameClick", (data) => {
     console.log(data);
   });
   ```

例如，您可以创建自己的拼写检查器。在这种情况下，包含单词的右键菜单项将拥有相同的 ID 和相同的事件监听器。所需的单词则通过 **attachContextMenuClickEvent** 方法传递的数据来确定。
