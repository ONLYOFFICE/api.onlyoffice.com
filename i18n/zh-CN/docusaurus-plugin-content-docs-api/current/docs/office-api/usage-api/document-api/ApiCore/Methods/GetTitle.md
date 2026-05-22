# GetTitle

返回文档标题。

## 语法

```javascript
expression.GetTitle();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档核心属性中存储的标题。

```javascript editor-docx
// How do I read the title from a document's metadata in a document?

// Confirm the document title is set correctly by inserting it as text into the document body in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);
```
