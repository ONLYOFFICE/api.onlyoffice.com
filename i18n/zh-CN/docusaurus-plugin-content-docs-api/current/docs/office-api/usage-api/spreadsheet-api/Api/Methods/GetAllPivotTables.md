# GetAllPivotTables

返回所有数据透视表。

## 语法

```javascript
expression.GetAllPivotTables();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md)[]

## 示例

此示例演示如何从工作表获取数据透视表。

```javascript editor-xlsx
// How to  get pivot tables.

// How to work with pivot tables.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);

Api.GetAllPivotTables().forEach(function (pivot) {
    pivot.AddDataField('Price');
});

```
