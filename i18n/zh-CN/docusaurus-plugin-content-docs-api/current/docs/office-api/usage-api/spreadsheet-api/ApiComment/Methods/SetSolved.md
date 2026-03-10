# SetSolved

将批注标记为已解决。

## 语法

```javascript
expression.SetSolved(bSolved);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bSolved | 必需 | boolean |  | 指定批注是否已解决。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例将批注标记为已解决。

```javascript editor-xlsx
// How to resolve a comment.

// Resolve a comment, then show its status in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment is solved: ");
comment.SetSolved(true);
worksheet.GetRange("B3").SetValue(comment.IsSolved());
```
