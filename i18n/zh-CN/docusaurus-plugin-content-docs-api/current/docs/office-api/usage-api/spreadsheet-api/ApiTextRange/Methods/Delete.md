# Delete

删除当前文本范围的内容。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在工作表的形状中删除文本范围所包含的文本。

```javascript editor-xlsx
// Only the covered fragment is removed, the rest of the text stays.

// Delete the middle word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello cruel World");

let range = shape.GetTextRange();

range.GetRange(5, 11).Delete();

worksheet.GetRange("A1").SetValue("Delete: " + shape.GetTextRange().GetText());
```
