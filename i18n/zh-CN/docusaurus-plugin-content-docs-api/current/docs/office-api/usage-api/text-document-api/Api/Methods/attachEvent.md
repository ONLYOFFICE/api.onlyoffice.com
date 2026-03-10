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

boolean

## 示例

此示例展示如何订阅超链接点击事件。

```javascript editor-docx
// How to attach the "asc_onHyperlinkClick" event.

// Subscribes to the "asc_onHyperlinkClick" event and calls the callback function which displays the "HYPERLINK!!!" message in the console log when the event fires.

Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
```
