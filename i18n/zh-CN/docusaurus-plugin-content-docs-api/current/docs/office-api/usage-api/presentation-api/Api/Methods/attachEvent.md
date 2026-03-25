# attachEvent

订阅指定事件，并在事件触发时调用回调函数。

## 语法

```javascript
expression.attachEvent(eventName, callback);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| eventName | 必需 | string |  | 事件名称。 |
| callback | 必需 | function |  | 事件触发时要调用的函数。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何订阅超链接点击事件。

```javascript editor-pptx
// How to trigger an event on hyperlink click.

// Subscribe to the hyperlink click event.

Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});

```
