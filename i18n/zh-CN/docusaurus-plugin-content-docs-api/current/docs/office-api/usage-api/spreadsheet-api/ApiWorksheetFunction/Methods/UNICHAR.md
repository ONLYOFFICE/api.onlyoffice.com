# UNICHAR

返回由给定数值引用的 Unicode 字符。

## 语法

```javascript
expression.UNICHAR(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示字符的 Unicode 编号。 |

## 返回值

string

## 示例

在电子表格中返回由给定数值引用的 Unicode 字符。

```javascript editor-xlsx
// The UNICHAR function converts numeric code points to their corresponding characters.

// Apply the function to obtain a character from its Unicode number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICHAR(378));
```
