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

此示例展示如何通过选区获取 Range 对象。

```javascript editor-docx
// How to get the range selected on the document.

// Select a range and make it bold.

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
