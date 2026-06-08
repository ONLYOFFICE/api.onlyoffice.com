# GetDefNames

返回工作簿中定义的所有 ApiName 对象的数组，涵盖所有作用域（工作簿级和工作表级）。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetDefNames();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiName](../../ApiName/ApiName.md)[]

## 示例

此示例展示如何获取工作簿中定义的所有 ApiName 对象的数组。

```javascript editor-xlsx
// How to get all def names from the workbook across all scopes.

// Get all workbook-level and sheet-level def names as an array.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("A2").SetValue("A");
worksheet.GetRange("B2").SetValue("B");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.AddDefName("letters", "Sheet1!$A$2:$B$2");
let defNames = Api.GetDefNames();
worksheet.GetRange("A4").SetValue("DefNames: " + defNames[0].GetName() + ", " + defNames[1].GetName());
```
