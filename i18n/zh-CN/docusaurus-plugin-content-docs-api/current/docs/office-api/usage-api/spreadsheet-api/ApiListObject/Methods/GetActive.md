# GetActive

返回一个布尔值，指示 ListObject 是否处于活动状态，
即活动单元格是否在 ListObject 的范围内。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetActive();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中是否当前选定了格式化表格。

```javascript editor-xlsx
// How do I tell if the user's cursor is inside a particular table in a spreadsheet?

// Confirm a table is active before running table-specific operations to avoid acting on the wrong range in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("A3").SetValue("Bob");

let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

worksheet.GetRange("C1").SetValue("Is table active:");
worksheet.GetRange("D1").SetValue(table.GetActive());
```
