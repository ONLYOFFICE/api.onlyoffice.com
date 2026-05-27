# TYPE

返回表示值数据类型的整数：数字 = 1；文本 = 2；逻辑值 = 4；错误值 = 16；数组 = 64；复合数据 = 128。

## 语法

```javascript
expression.TYPE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number \| string \| boolean \| (number \| string \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要测试的值。 |

## 返回值

number

## 示例

识别电子表格中单元格值的数据类型并返回数字代码。

```javascript editor-xlsx
// How do I determine what type of data is stored in a cell in a spreadsheet?

// Get a numeric identifier that indicates whether a value is text, a number, or a boolean in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TYPE(255));
worksheet.GetRange("A2").SetValue(func.TYPE(true));
worksheet.GetRange("A3").SetValue(func.TYPE("Online Office"));
```
