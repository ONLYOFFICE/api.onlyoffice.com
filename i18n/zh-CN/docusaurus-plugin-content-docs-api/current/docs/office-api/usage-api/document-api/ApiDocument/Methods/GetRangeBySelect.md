# GetRangeBySelect

通过当前选区返回范围对象。

## 语法

```javascript
expression.GetRangeBySelect();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

从文档中当前的文本选区获取范围对象。

```javascript editor-docx
// How do I work with the currently selected text as a range in a document?

// Programmatically select a run and apply bold formatting through the resulting range in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("ONLYOFFICE Document Builder.");
paragraph.AddElement(run1);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers.");
paragraph.AddElement(run2);
run1.Select();
let range = doc.GetRangeBySelect();
range.SetBold(true);
```
