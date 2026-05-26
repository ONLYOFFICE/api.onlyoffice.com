# GetId

返回自定义 XML 部件的 ID。

## 语法

```javascript
expression.GetId();
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索分配给电子表格中自定义 XML 块的唯一标识符。

```javascript editor-xlsx
// How do I find the ID that distinguishes one XML block from another in a spreadsheet?

// Look up a stored XML block by its identifier to reference it later in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<settings><theme>dark</theme></settings>");
let id = xml.GetId();
worksheet.GetRange("A1").SetValue("XML part ID: " + id);
```
