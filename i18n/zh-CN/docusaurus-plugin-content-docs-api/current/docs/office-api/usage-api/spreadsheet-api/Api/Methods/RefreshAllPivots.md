# RefreshAllPivots

刷新所有数据透视表。

## 语法

```javascript
expression.RefreshAllPivots();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何刷新活动工作簿中的所有数据透视表。

```javascript editor-xlsx
// How to refresh all pivot tables in a worksheet.

// Refresh all values from the pivot table using a method.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

Api.GetPivotByName(pivotTable.GetName()).AddFields({
    rows: 'Region',
});

Api.GetPivotByName(pivotTable.GetName()).AddDataField('Price');
Api.RefreshAllPivots();

```
