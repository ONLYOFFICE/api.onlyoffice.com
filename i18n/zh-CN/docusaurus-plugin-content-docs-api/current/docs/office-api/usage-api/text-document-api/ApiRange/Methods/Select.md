# Select

将选区设置为指定范围。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例将选区设置为指定范围。

```javascript editor-docx
// How to select a range with a cursor.

// Get range of the paragraph and select it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
range.Select();
paragraph = Api.CreateParagraph();
paragraph.AddText("The word 'ONLYOFFICE' was just selected.");
doc.Push(paragraph);
```
