# GetEndPos

返回当前范围的结束位置。

## 语法

```javascript
expression.GetEndPos();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例获取给定范围对象的结束位置。

```javascript editor-docx
// How to get the last index of the range position.

// Get a range of the paragraph and display its the end position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
paragraph = Api.CreateParagraph();
paragraph.AddText("We used range in previous paragraph with end position: " + range.GetEndPos());
doc.Push(paragraph);
```
