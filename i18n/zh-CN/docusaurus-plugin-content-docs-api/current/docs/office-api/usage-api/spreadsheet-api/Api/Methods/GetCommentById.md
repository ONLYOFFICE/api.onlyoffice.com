# GetCommentById

通过 ID 从当前文档返回批注。

## 语法

```javascript
expression.GetCommentById(sId);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | 必需 | string |  | 批注 ID。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

使用唯一标识符在电子表格中查找特定批注。

```javascript editor-xlsx
// How do I find a particular comment by its ID in a spreadsheet?

// Locate and read a single comment by referencing its identifier in a spreadsheet.

let comment = Api.AddComment("Comment", "Bob");
let id = comment.GetId();
comment = Api.GetCommentById(id);
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: " + comment.GetText());
worksheet.GetRange("B1").SetValue("Comment Author: " + comment.GetAuthorName());
```
