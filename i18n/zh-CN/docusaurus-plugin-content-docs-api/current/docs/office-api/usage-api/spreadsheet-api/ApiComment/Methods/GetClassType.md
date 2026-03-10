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

此示例获取类类型并将其插入到表格中。

```javascript editor-xlsx
// How to get a comment class type.

// Get an comment class type to show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
let type = comment.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);
```
