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

此示例演示如何设置色阶条件的值。

```javascript editor-xlsx
// How to change the value of a color scale criterion.

// Set the value of a color scale criterion.

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
