# GetStartPos

返回当前范围的起始位置。

## 语法

```javascript
expression.GetStartPos();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例获取给定范围对象的起始位置。

```javascript editor-docx
// Get the start index of the range and display it.

// Retrieve a range of the paragraph and show its first position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
paragraph = Api.CreateParagraph();
paragraph.AddText("We used range in previous paragraph with start position: " + range.GetStartPos());
doc.Push(paragraph);
```
