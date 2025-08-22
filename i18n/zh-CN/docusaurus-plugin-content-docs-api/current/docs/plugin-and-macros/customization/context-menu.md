---
sidebar_position: -5
---

# 右键菜单 

插件可以通过右键菜单访问。

![Context menu item](/assets/images/plugins/context-menu-item.png#gh-light-mode-only)![Context menu item](/assets/images/plugins/context-menu-item.dark.png#gh-dark-mode-only)

## 创建右键菜单项 {#creating-a-context-menu-item}

1. 订阅 **onContextMenuShow** 事件，该事件在右键菜单显示时触发。

   > 如果插件监听此事件，必须调用 **AddContextMenuItem** 方法（可以同步或异步调用），因为编辑器会等待所有插件的响应后再填充右键菜单。

   参数说明:

    | 名称       | 类型                                      | 描述                                                     |
    | ---------- | ----------------------------------------- | -------------------------------------------------------- |
    | *options*  | [ContextMenuOptions](#contextmenuoptions) | 定义所选右键菜单项的信息。                               |

   示例:

   ``` ts
   Asc.plugin.attachEvent("onContextMenuShow", (options) => {
     const items = {
       guid: window.Asc.plugin.guid,
       items: [
         {
           id: "onNameClick",
           text: "Name",
           items: [],
         },
       ],
     }

     this.executeMethod("AddContextMenuItem", [items])
   })
   ```

### 右键菜单选项 {#contextmenuoptions}

   定义右键菜单选项。

   类型：对象

   属性：

   | 名称         | 类型                                | 描述                                                     |
   | ------------ | ----------------------------------- | --------------------------------------------------------------- |
   | *Type*       | [ContextMenuType](#contextmenutype) | 上下文菜单类型。                                          |
   | *header*     | boolean                             | 指定是否在标题栏内打开上下文菜单。 |
   | *footer*     | boolean                             | 指定是否在页脚内打开上下文菜单。 |
   | *headerArea* | boolean                             | 指定是否在标题上打开上下文菜单。   |
   | *footerArea* | boolean                             | 指定是否在页脚上打开上下文菜单。   |

   ### 右键菜单类型 {#contextmenutype}

   右键菜单类型：

   - **None** — 未使用，
   - **Target** — 无选中内容，
   - **Selection** — 选中文本，
   - **Image** — 选中图片，
   - **Shape** — 选中形状，
   - **OleObject** — 选中 OLE 对象。

   根据选中类型，可以添加不同的右键菜单项。

   类型："None" | "Target" | "Selection" | "Image" | "Shape" | "OleObject"

2. 如有必要，使用 **AddContextMenuItem** 方法向右键菜单添加按钮。

   参数:

   | 名称    | 类型                                         | 描述                                   |
   | ------- | -------------------------------------------- | -------------------------------------- |
   | *items* | Array.\<[ContextMenuItem](#contextmenuitem)\> | 包含右键菜单项的数组。                  |

   返回值：此方法不返回任何数据。

    ### 右键菜单项 {#contextmenuitem}

    右键菜单项。

    类型：对象

    属性：

    | 名称       | 类型                       | 描述                                                                                     |
    | ---------- | -------------------------- | ---------------------------------------------------------------------------------------- |
    | *id*       | string                     | 项目 ID。                                                                               |
    | *text*     | string                     | 项目标题。                                                                             |
    | *data*     | string                     | 项目数据（该数据将发送到点击事件回调）。                                               |
    | *disabled* | boolean                    | 指定当前项目是否被禁用。                                                               |
    | *icons*    | string                     | 项目图标（参见插件[config](../structure/configuration/configuration.md)文档）。                   |
    | *items*    | Array.\<ContextMenuItem\>  | 包含当前项目的右键菜单项数组。                                                         |

    示例:

    ``` ts
    Asc.plugin.attachEvent("onContextMenuShow", (options) => {
      const items = {
        guid: window.Asc.plugin.guid,
        items: [
          {
            id: "onNameClick",
            text: "Name",
            items: [],
          },
        ],
      }

      this.executeMethod("AddContextMenuItem", [items])
    })
    ```

  ## 更新右键菜单项 {#updating-a-context-menu-item}

  要更新右键菜单项，请使用 **UpdateContextMenuItem** 方法。

  参数:

  | 名称    | 类型                                         | 描述                                                         |
  | ------- | ---------------------------------------------- | ------------------------------------------------------------ |
  | *items* |  Array.\<[ContextMenuItem](#contextmenuitem)\> | 包含当前项目的右键菜单项数组。                               |

  返回值：此方法不返回任何数据。

  示例:

  ``` ts
  Asc.plugin.attachEvent("onContextMenuShow", (options) => {
    const items = {
      guid: window.Asc.plugin.guid,
      items: [
        {
          id: "onNameClick",
          text: "New name",
          items: [],
        },
      ],
    }

    this.executeMethod("UpdateContextMenuItem", [items])
  })
  ```

## 点击右键菜单项 {#clicking-a-context-menu-item}

1. [订阅](../interacting-with-editors/overview/how-to-attach-events.md) **onContextMenuClick** 事件，该事件在右键菜单按钮被点击时触发。

   参数:

   | 名称  | 类型   | 描述      |
   | ----- | ------ | --------- |
   | *id*  | string | 项目 ID。 |

   示例:

   ``` ts
   window.Asc.plugin.event_onContextMenuClick = (id) => {
     const pluginObj = window.Asc.plugin
     const itemId = id
     const itemData = undefined
     const itemPos = itemId.indexOf("_oo_sep_")
     if (itemPos !== -1) {
       const itemData = itemId.slice(itemPos + 8)
       const itemId = itemId.slice(0, itemPos)
     }

     if (pluginObj.contextMenuEvents && pluginObj.contextMenuEvents[itemId]) {
       pluginObj.contextMenuEvents[itemId].call(pluginObj, itemData)
     }
   }
   ```

2. 使用 **attachContextMenuClickEvent** 添加事件监听器，该函数会在右键菜单中指定按钮被点击并触发事件时调用。对于每个右键菜单按钮，可以通过其 ID 指定单独的事件监听器。

   参数:

   | 名称     | 类型       | 描述           |
   | -------- | ---------- | -------------- |
   | *id*     | string     | 事件名称。     |
   | *action* | function   | 事件监听函数。 |

   返回值：此方法不返回任何数据。

   示例:

   ``` ts
   Asc.plugin.attachContextMenuClickEvent("onNameClick", (data) => {
     console.log(data)
   })
   ```
   
例如，您可以创建自己的拼写检查器。在这种情况下，包含单词的右键菜单项将拥有相同的 ID 和相同的事件监听器。所需的单词则通过 **attachContextMenuClickEvent** 方法传递的数据来确定。
