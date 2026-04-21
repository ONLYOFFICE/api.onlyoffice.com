# GetParent

返回当前格式条件的父区域对象。

继承自 [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md)。

## 示例

获取电子表格中条件格式规则的父范围。

```javascript editor-xlsx
// How to get the parent for a format condition?

// Get the parent and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Sales Data');
worksheet.GetRange('A2').SetValue(100);
worksheet.GetRange('A3').SetValue(250);
worksheet.GetRange('A4').SetValue(150);

const dataRange = worksheet.GetRange('A2:A4');
const formatConditions = dataRange.GetFormatConditions();
const condition = formatConditions.Add('xlCellValue', 'xlGreater', '200');
condition.SetFillColor(Api.CreateColorFromRGB(200, 100, 100));

const parentRange = condition.GetParent();
worksheet.GetRange('C1').SetValue('Parent range:');
worksheet.GetRange('C2').SetValue(parentRange.GetAddress());
```
