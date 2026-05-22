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

停止响应文档中的超链接点击。

```javascript editor-docx
// How do I remove a hyperlink click listener in a document?

// Cancel a previously registered hyperlink click handler to prevent it from firing in a document.

Api.detachEvent("asc_onHyperlinkClick");
```
