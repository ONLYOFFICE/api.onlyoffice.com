# MINA

返回一组值中的最小值。不忽略逻辑值和文本。

## 语法

```javascript
expression.MINA(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| string \| boolean \| (number \| string \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个值（数字、文本、逻辑值），将返回其中的最小值。第一个参数是必需的，后续参数是可选的。参数可以是数字、逻辑值和数字的文本表示形式、名称、区域或数组。 |

## 返回值

number

## 示例

查找电子表格中包含文本和逻辑值的列表中的最小值。

```javascript editor-xlsx
// What is the minimum value across mixed data types in a spreadsheet?

// Compare different value types to find the lowest one in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let minA = func.MINA(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(minA);
```
