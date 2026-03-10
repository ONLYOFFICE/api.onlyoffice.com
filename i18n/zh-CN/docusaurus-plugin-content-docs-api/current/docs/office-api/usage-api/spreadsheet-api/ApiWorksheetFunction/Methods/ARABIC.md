# ARABIC

将罗马数字转换为阿拉伯数字。

## 语法

```javascript
expression.ARABIC(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要转换的罗马数字。 |

## 返回值

number

## 示例

此示例演示如何将罗马数字转换为阿拉伯数字。

```javascript editor-xlsx
// How to convert numbers to Arabic numerical.

// Use function to convert numbers to Arabic numerical.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ARABIC("MCCL"));
```
