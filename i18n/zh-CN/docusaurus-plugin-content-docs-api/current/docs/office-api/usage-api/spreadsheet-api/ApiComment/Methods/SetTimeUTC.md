# SetTimeUTC

设置批注创建时间戳（UTC 格式）。

## 语法

```javascript
expression.SetTimeUTC(nTimeStamp);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | 必需 | Number \| String |  | 批注创建时间戳（UTC 格式）。 |

## 返回值

此方法不返回任何数据。

## 示例

将批注的创建时间存储为电子表格中的 UTC 时间戳。

```javascript editor-xlsx
// How do I record when a comment was created using a universal time value in a spreadsheet?

// Assign a UTC-based creation time to a comment so all users see the same timestamp in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Timestamp UTC: ");
comment.SetTimeUTC(Date.now());
worksheet.GetRange("B3").SetValue(comment.GetTimeUTC());
```
