# ROMAN

将阿拉伯数字转换为字符串格式的罗马数字。

## 语法

```javascript
expression.ROMAN(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 一个大于或等于 1 且小于 3999 的数值。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 罗马数字类型：**0** - 经典、**1** - 更简洁、**2** - 更简洁、**3** - 更简洁、**4** - 简化。 |

## 返回值

string

## 示例

此示例演示如何将阿拉伯数字转换为字符串格式的罗马数字。

```javascript editor-xlsx
// How to get roman numbers from arabic.

// Use a function to convert numbers from arabic numeral to roman.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROMAN(1250, 4));
```
