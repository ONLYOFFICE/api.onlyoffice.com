# GetColor

返回色阶条件的格式颜色。

## 语法

```javascript
expression.GetColor();
```

`expression` - 表示 [ApiColorScaleCriterion](../ApiColorScaleCriterion.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

读取分配给电子表格中颜色渐变规则阈值点的颜色。

```javascript editor-xlsx
// How do I find out what color is used at a specific stop of a color scale in a spreadsheet?

// Inspect the fill color tied to one of the gradient breakpoints in a color scale rule in a spreadsheet.

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
    let criterionColor = criteria[0].GetColor();
    
    worksheet.GetRange("C1").SetValue("Has Color:");
    worksheet.GetRange("C2").SetValue(criterionColor ? "Yes" : "No");
}
```
