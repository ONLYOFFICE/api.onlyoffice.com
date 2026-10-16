# GetPosInParent

返回当前超链接在其父元素中的位置（索引）。

## 语法

```javascript
expression.GetPosInParent();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

确定超链接在其父元素中的索引。

```javascript editor-docx
// The position is the hyperlink's index within its parent paragraph.

// Read a hyperlink's position within its paragraph and report it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Visit our website");
let hyperlink = paragraph.AddHyperlink("https://www.example.com", "Example");
let position = hyperlink.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The hyperlink is at position " + position + " in its parent.");
doc.Push(report);
```
