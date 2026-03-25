# SetAuthorName

设置批注作者的姓名。

## 语法

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | 必需 | string |  | 批注作者的姓名。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置批注作者的姓名。

```javascript editor-xlsx
// How to add author's name to the comment.

// Add a comment and author name to it, then show author name in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment's author: ");
comment.SetAuthorName("Mark Potato");
worksheet.GetRange("B3").SetValue(comment.GetAuthorName());
```
