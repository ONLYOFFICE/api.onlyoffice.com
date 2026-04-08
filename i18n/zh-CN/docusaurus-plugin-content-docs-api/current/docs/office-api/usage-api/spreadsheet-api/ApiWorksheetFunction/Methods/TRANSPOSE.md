# TRANSPOSE

将垂直单元格范围转换为水平范围，反之亦然。

## 语法

```javascript
expression.TRANSPOSE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| (number \| string \| boolean)[] |  | 将被转置的工作表上的单元格区域或数组。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例演示如何将垂直单元格区域转换为水平区域，反之亦然。

```javascript editor-xlsx
// How to change orientation of cells to vertical/horizontal.

// Use a function to transpose a range.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Ann");
worksheet.GetRange("A2").SetValue("Bob");
worksheet.GetRange("B1").SetValue("Apples");
worksheet.GetRange("B2").SetValue("ranges");
let range = worksheet.GetRange("A1:B2");
worksheet.GetRange("A4:B5").SetValue(func.TRANSPOSE(range));
```
