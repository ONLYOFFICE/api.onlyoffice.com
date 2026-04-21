# GetContentStatus

返回文档内容状态。

## 语法

```javascript
expression.GetContentStatus();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

使用文档中的核心属性获取当前文档的内容状态。

```javascript editor-docx
// How can I get the content status using a core properties in a document?

// Get the content status for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = doc.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);
```
