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

在文档中每次点击超链接时运行自定义操作。

```javascript editor-docx
// How do I run a function automatically when a hyperlink is clicked in a document?

// Listen for hyperlink clicks and trigger a response without manual intervention in a document.

Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
```
