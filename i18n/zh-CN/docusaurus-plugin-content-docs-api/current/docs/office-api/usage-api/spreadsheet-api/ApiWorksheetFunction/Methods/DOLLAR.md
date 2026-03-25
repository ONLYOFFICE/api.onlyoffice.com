# DOLLAR

使用货币格式 $#.## 将数字转换为文本。

## 语法

```javascript
expression.DOLLAR(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 数字、包含数字的单元格引用或返回数字的公式。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 小数点右边的位数。数字会根据需要舍入。如果省略，函数将假定为 2。 |

## 返回值

string

## 示例

此示例演示如何使用货币格式 $#.## 将数字转换为文本。

```javascript editor-xlsx
// How to convert a number to text.

// Use function to get text from a number using dollar format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLAR(98.9997, 3));
```
