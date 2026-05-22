# AddComment

向当前范围添加批注。

## 语法

```javascript
expression.AddComment(sText, sAuthor);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 批注文本。 |
| sAuthor | 必需 | string |  | 作者姓名（可选）。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md) \| null

## 示例

在电子表格中为单元格范围附加注释。

```javascript editor-xlsx
// How do I add a comment to a range of cells in a spreadsheet?

// Leave a written remark on a cell so other users see context when they open it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("The comment was added to the cell A1.");
worksheet.GetRange("A4").SetValue("Comment: " + range.GetComment().GetText());
```
