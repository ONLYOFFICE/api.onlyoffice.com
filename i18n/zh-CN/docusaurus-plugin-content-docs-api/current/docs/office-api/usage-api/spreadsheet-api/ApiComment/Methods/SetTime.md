# SetTime

设置批注创建时间戳（当前时区格式）。

## 语法

```javascript
expression.SetTime(nTimeStamp);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | 必需 | Number \| String |  | 批注创建时间戳（当前时区格式）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置批注创建时间戳（当前时区格式）。

```javascript editor-xlsx
// How to change a time when a comment was created.

// Add a comment then update its creation time and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Timestamp: ");
comment.SetTime(Date.now());
worksheet.GetRange("B3").SetValue(comment.GetTime());
```
