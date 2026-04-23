# detachEvent

取消订阅指定事件。

## 语法

```javascript
expression.detachEvent(eventName);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| eventName | 必需 | string |  | 事件名称。 |

## 返回值

boolean

## 示例

此示例展示如何取消订阅超链接点击事件。

```javascript editor-docx
// How to detach from the "asc_onHyperlinkClick" event.

// Unsubscribes from the "asc_onHyperlinkClick" event.

Api.detachEvent("asc_onHyperlinkClick");
```
