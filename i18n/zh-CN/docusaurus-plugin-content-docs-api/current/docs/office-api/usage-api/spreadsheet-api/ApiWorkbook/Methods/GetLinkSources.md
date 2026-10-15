# GetLinkSources

返回注册为当前工作簿外部链接的其他工作簿的路径，包括已不再被任何公式使用的链接。

## 语法

```javascript
expression.GetLinkSources();
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

列出当前工作簿所链接的其他工作簿。

```javascript editor-xlsx
// How do I find which external workbooks a spreadsheet depends on?

// Write the path of every linked workbook to the sheet.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
let sources = workbook.GetLinkSources();
worksheet.GetRange("A1").SetValue("Linked workbooks: " + sources.length);
for (let i = 0; i < sources.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue(sources[i]);
}
```
