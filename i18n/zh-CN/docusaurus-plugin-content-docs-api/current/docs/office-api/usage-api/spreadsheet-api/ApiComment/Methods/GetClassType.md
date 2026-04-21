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

获取电子表格中批注对象的类类型。

```javascript editor-xlsx
// How can I get the class type of a comment in a spreadsheet?

// Get the class type of a comment and display it in the spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
let type = comment.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);
```
