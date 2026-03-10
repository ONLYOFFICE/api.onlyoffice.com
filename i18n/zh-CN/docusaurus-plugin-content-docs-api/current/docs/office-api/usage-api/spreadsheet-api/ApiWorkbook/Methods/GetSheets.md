# GetSheets

返回表示工作簿中所有工作表的工作表集合。

## 语法

```javascript
expression.GetSheets();
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)[]

## 示例

此示例展示如何从工作簿获取所有工作表。

```javascript editor-xlsx
Api.AddSheet('new_sheet_name');

const workbook = Api.GetActiveWorkbook();
const sheets = workbook.GetSheets();
let sheetName1 = sheets[0].GetName();
let sheetName2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheetName1);
sheets[1].GetRange("A2").SetValue(sheetName2);

```
