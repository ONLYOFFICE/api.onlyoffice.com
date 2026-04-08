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

此示例演示如何取消订阅超链接点击事件。

```javascript editor-pptx
// How to detach an event on hyperlink click.

// Unsubscribe from the hyperlink click event.

Api.detachEvent("asc_onHyperlinkClick");

```
