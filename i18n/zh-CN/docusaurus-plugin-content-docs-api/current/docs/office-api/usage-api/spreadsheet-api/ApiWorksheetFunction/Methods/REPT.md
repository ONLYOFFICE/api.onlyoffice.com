# REPT

将文本重复指定的次数。使用此函数用文本字符串的多个实例填充单元格。

## 语法

```javascript
expression.REPT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将被重复的文本。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定重复文本次数的正数。 |

## 返回值

string

## 示例

此示例演示如何将文本重复指定的次数。使用此函数用文本字符串的多个实例填充单元格。

```javascript editor-xlsx
// How to create an indicated number of copies.

// Use a function to repeat a text n times.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPT("Text", 3));
```
