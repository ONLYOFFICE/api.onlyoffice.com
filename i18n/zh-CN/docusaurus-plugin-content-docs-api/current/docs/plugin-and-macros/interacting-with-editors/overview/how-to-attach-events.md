---
sidebar_position: -1
---

# 如何绑定事件

您可以通过两种方式在编辑器中绑定事件。

## 方法 1. 使用绑定事件方法（适用于所有版本）

1. 在 config.json 文件中，添加 [事件](../../structure/configuration/configuration.md#variationsevents)参数，并列出所有可用事件组成的数组：

   ``` json
   {
     "events": ["onAddComment"]
   }
   ```

2. 在插件代码中，定义**绑定事件**方法，用来添加事件监听器。每当指定事件触发时，绑定的函数就会被调用：

   ``` ts
   Asc.plugin.attachEvent(id, action)
   ```

   ### 参数说明：

   | 名称     | 类型     | 描述         |
   | -------- | -------- | ------------------- |
   | *id*     | string   | 事件名称。     |
   | *action* | function | 事件监听函数。 |

   ### 返回值：

   此方法无返回值。

   ### 示例：

   ``` ts
   Asc.plugin.attachEvent("onAddComment", (data) => {
     console.log(data)
   })
   ```

   您也可以使用 **event_\{event-name\}** 的方式绑定事件，其中event_ 是事件方法的统一前缀， \{event-name\} 是具体事件名。例如：

   ``` ts
   Asc.plugin.event_onAddComment = (data) => {
     console.log(data)
   }
   ```

   这种写法的效果与绑定事件方法相同。

## 方法 2. 使用绑定编辑器事件方法（适用于 8.2 及以上版本）

在插件代码中，定义**绑定编辑器事件**方法，用于添加事件监听器。每当指定事件触发时，所绑定的函数就会被调用：

### 参数：

| 名称     | 类型     | 描述         |
| -------- | -------- | ------------------- |
| *id*     | string   | 事件名称。     |
| *action* | function | 事件监听函数。 |

### 返回值：

此方法无返回值。

### 示例：

``` ts
Asc.plugin.attachEditorEvent("onAddComment", (data) => {
  console.log(data)
})
```
