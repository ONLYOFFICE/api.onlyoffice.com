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

此方法不返回任何数据。

## 示例

在演示文稿中取消订阅超链接点击事件。

```javascript editor-pptx
// Detaching events removes previously registered listeners to stop event handling.

// Remove the listener from the asc_onHyperlinkClick event using Api.detachEvent().

Api.detachEvent("asc_onHyperlinkClick");
```
