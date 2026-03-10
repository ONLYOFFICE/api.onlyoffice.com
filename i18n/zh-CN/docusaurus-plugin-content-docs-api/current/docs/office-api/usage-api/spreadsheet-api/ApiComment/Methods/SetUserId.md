# SetUserId

设置批注作者的用户 ID。

## 语法

```javascript
expression.SetUserId(sUserId);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sUserId | 必需 | string |  | 批注作者的用户 ID。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置批注作者的用户 ID。

```javascript editor-xlsx
// How to change a comment author ID.

// Replace a comment author ID to a new one.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment's user Id: ");
comment.SetUserId("uid-2");
worksheet.GetRange("B3").SetValue(comment.GetUserId());
```
