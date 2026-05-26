# Delete

删除 ApiComment 对象。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从电子表格中完全移除单元格的批注。

```javascript editor-xlsx
// How do I delete a comment that was added to a cell range in a spreadsheet?

// Clean up a cell by adding a comment and then erasing it to leave no annotation behind in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
comment.Delete();
worksheet.GetRange("A3").SetValue("The comment was just deleted from A1.");
```
