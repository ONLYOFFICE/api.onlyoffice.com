# TEXT

以特定数字格式将值转换为文本。

## 语法

```javascript
expression.TEXT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 数字、计算结果为数值的公式或包含数值的单元格引用。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | **开始**选项卡上**数字格式**组合框中文本形式的数字格式。 |

## 返回值

string

## 示例

在电子表格中以特定数字格式将值转换为文本。

```javascript editor-xlsx
// Format the number as a currency string with two decimal places.

// Apply the TEXT function with value and format code parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TEXT(45.5, "$0.00"));
```
