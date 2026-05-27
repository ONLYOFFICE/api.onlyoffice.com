# GetItem

按索引返回格式条件。

## 语法

```javascript
expression.GetItem(index);
```

`expression` - 表示 [ApiFormatConditions](../ApiFormatConditions.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | 必需 | number |  | 格式条件的索引（从 1 开始）。 |

## 返回值

[ApiFormatCondition](../../ApiFormatCondition/ApiFormatCondition.md) \| null

## 示例

按列表中的位置从电子表格中的范围检索单个格式规则。

```javascript editor-xlsx
// How do I access one particular highlight rule out of several applied to a range in a spreadsheet?

// Pick out an individual color condition by its order to inspect or modify it in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sample Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddDatabar();

let firstRule = formatConditions.GetItem(1);

worksheet.GetRange("B1").SetValue("Rule found: " + (firstRule !== null));
```
