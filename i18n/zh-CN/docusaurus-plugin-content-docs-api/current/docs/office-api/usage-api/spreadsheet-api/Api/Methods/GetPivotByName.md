# GetPivotByName

根据名称返回数据透视表，如果不存在则返回 null。

## 语法

```javascript
expression.GetPivotByName(name);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 数据透视表名称。 |

## 返回值

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md) \| null

## 示例

此示例演示如何根据名称获取数据透视表。

```javascript editor-xlsx
// How to get pivot knowing its pivot table name.

// Update pivot getting it by its name.

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

```
