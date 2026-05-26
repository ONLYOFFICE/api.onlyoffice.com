# SetValue

设置色阶条件的值。

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiColorScaleCriterion](../ApiColorScaleCriterion.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string |  | 色阶条件的值。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格中的色阶规则点分配新的边界数值。

```javascript editor-xlsx
// How do I update the numeric threshold for a color scale rule point in a spreadsheet?

// Adjust where a color scale gradient changes by overwriting the boundary number at one of its rule points in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(30);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(70);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale(2);
let criteria = colorScale.GetColorScaleCriteria();

if (criteria && criteria.length > 0) {
    worksheet.GetRange("C1").SetValue("Before:");
    worksheet.GetRange("C2").SetValue(criteria[1].GetValue() || "No value");
    
    criteria[1].SetValue("25");
    
    worksheet.GetRange("C3").SetValue("After:");
    worksheet.GetRange("C4").SetValue(criteria[1].GetValue() || "No value");
}
```
