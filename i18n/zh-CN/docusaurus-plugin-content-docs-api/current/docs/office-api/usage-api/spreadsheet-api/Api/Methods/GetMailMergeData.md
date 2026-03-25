# GetMailMergeData

返回邮件合并数据。

## 语法

```javascript
expression.GetMailMergeData(nSheet, bWithFormat);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSheet | 必需 | number |  | 工作表索引。 |
| bWithFormat | 可选 | boolean | false | 指定数据将以格式接收。 |

## 返回值

string[][]

## 示例

此示例演示如何获取邮件合并数据。

```javascript editor-xlsx
// Get mail merge data from the worksheet.

// How to get mail merge information using index.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 20);
worksheet.GetRange("A1").SetValue("Email address");
worksheet.GetRange("B1").SetValue("Greeting");
worksheet.GetRange("C1").SetValue("First name");
worksheet.GetRange("D1").SetValue("Last name");
worksheet.GetRange("A2").SetValue("user1@example.com");
worksheet.GetRange("B2").SetValue("Dear");
worksheet.GetRange("C2").SetValue("John");
worksheet.GetRange("D2").SetValue("Smith");
worksheet.GetRange("A3").SetValue("user2@example.com");
worksheet.GetRange("B3").SetValue("Hello");
worksheet.GetRange("C3").SetValue("Kate");
worksheet.GetRange("D3").SetValue("Cage");
let mailMergeData = Api.GetMailMergeData(0);
worksheet.GetRange("A5").SetValue("Mail merge data: " + mailMergeData);
```
