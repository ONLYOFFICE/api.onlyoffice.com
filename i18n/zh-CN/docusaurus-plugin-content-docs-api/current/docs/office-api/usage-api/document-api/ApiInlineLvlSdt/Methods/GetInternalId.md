# GetInternalId

返回当前内容控件的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中内联内容控件的内部标识符。

```javascript editor-docx
// How do I obtain the internal ID of an inline content control in a document?

// Display the system-assigned internal ID of an inline content control alongside its text in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);

const run = Api.CreateRun();
run.AddText("This is an inline text content control.");

const inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddElement(run, 0);
firstParagraph.AddInlineLvlSdt(inlineLvlSdt);

let internalId = inlineLvlSdt.GetInternalId();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal Id: " + internalId);
doc.Push(paragraph);
```
