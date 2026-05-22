# SetLocale

设置文档的区域设置。

## 语法

```javascript
expression.SetLocale(LCID);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| LCID | 必需 | number |  | 指定的区域设置。 |

## 返回值

boolean

## 示例

在电子表格中为文档应用特定的区域语言设置。

```javascript editor-xlsx
// How do I change the language and region used for dates, numbers, and text in a spreadsheet?

// Switch the document locale to match the target audience's region in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
worksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");
```
