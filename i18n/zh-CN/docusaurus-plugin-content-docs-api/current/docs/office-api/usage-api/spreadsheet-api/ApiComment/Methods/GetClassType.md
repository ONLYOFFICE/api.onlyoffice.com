# GetClassType

返回 ApiComment 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"comment"

## 示例

验证电子表格中单元格批注的对象类别。

```javascript editor-xlsx
// How do I confirm what kind of object a cell comment is classified as in a spreadsheet?

// Display the category label that identifies a comment object to distinguish it from other element types in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
let type = comment.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);
```
