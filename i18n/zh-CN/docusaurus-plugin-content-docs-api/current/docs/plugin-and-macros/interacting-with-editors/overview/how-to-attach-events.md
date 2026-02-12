---
sidebar_position: -1
---

# 如何绑定事件

您可以通过两种方式在编辑器中绑定事件。

## 选项 1：使用绑定编辑器事件方法 {#option-1-using-the-attacheditorevent-method}

从 8.2 版本开始，在插件代码中定义**绑定编辑器事件**方法，以添加事件监听器。该事件监听器是一个函数，每当指定事件传递到目标时，该函数将被调用。

### 参数说明

   | 名称     | 类型     | 描述         |
   | -------- | -------- | ------------------- |
   | *id*     | string   | 事件名称。     |
   | *action* | function | 事件监听函数。 |

   ### 返回值

   此方法无返回值。

   ### 示例

``` ts
Asc.plugin.attachEditorEvent("onAddComment", (data) => {
  console.log(data);
});
```

## 选项 2：使用 attachEvent 方法 {#option-2-using-the-attachevent-method}

:::danger[已废弃]
从 8.2 版本开始，请改用 [绑定编辑器事件](#option-1-using-the-attacheditorevent-method) 方法。
:::

1. 在 config.json 文件中，添加[事件](../../structure/configuration/configuration.md#variationsevents) 参数，其中包含所有可用事件的数组：

   ``` json
   {
     "events": ["onAddComment"]
   }
   ```

2. 在插件代码中定义**绑定事件**方法，以添加事件监听器。事件监听器是一个函数，每当指定事件传递到目标时，该函数将被调用：

   ``` ts
   Asc.plugin.attachEvent(id, action);
   ```

### 参数

| 名称     | 类型     | 描述         |
| -------- | -------- | ------------------- |
| *id*     | string   | 事件名称。     |
| *action* | function | 事件监听函数。 |

### 返回值

此方法无返回值。

### 示例：

   ``` ts
   Asc.plugin.attachEvent("onAddComment", (data) => {
     console.log(data);
   });
   ```

   您也可以使用 **event_\{event-name\}** 方法，其中 *event_* 是每个事件方法的前缀，而 *\{event-name\}* 是任意事件的名称。例如：

   ``` ts
   Asc.plugin.event_onAddComment = (data) => {
     console.log(data);
   };
   ```

   这些方法的工作方式与 *attachEvent* 方法相同。
