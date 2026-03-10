# SetVisible

设置数据透视项的可见性。
💡 隐藏其他项时，至少必须保留一个可见项。

## 语法

```javascript
expression.SetVisible(visible);
```

`expression` - 表示 [ApiPivotItem](../ApiPivotItem.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| visible | 必需 | boolean |  | 指定数据透视项是否可见。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置数据透视项的可见性。

```javascript editor-xlsx
// How to show/hide pivot items using SetVisible method and Visible property.

// Create a pivot table, add data to it then demonstrate setting visibility of pivot items.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Sales');

worksheet.GetRange('B2').SetValue('North');
worksheet.GetRange('B3').SetValue('South');
worksheet.GetRange('B4').SetValue('East');
worksheet.GetRange('B5').SetValue('West');

worksheet.GetRange('C2').SetValue(15000);
worksheet.GetRange('C3').SetValue(12000);
worksheet.GetRange('C4').SetValue(8000);
worksheet.GetRange('C5').SetValue(9500);

let dataRef = Api.GetRange(`'${worksheet.Name}'!$B$1:$C$5`);
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
    rows: 'Region'
});

pivotTable.AddDataField('Sales');

let pivotWorksheet = Api.GetActiveSheet();
let regionField = pivotTable.GetPivotFields('Region');
let regionItems = regionField.GetPivotItems();

// Remove label/value filters so you’re only using checkbox visibility.
regionField.ClearAllFilters();

// Hide the first region item using SetVisible method
if (regionItems.length > 0) {
    regionItems[0].SetVisible(false);
}

// Hide the second region item using Visible property
if (regionItems.length > 1) {
    regionItems[1].Visible = false;
}

pivotWorksheet.GetRangeByNumber(8, 0).SetValue('Region item visibility after changes');

for (let i = 0; i < regionItems.length; i += 1) {
    let isVisible = regionItems[i].Visible;
    let status = isVisible ? 'Visible' : 'Hidden';
    pivotWorksheet.GetRangeByNumber(8 + i, 1).SetValue(regionItems[i].GetName() + ': ' + status);
}

```
