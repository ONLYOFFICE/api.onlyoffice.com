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

获取文档中当前文档的标题。

```javascript editor-docx
// How can I get the title using a core properties in a document?

// Get the title for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);
```
