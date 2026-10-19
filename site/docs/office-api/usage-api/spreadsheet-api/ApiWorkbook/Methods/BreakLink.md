# BreakLink

Breaks the link to the specified workbook: the formulas that refer to it are replaced with their current values, and the link is removed from the workbook.

## Syntax

```javascript
expression.BreakLink(sName);
```

`expression` - A variable that represents an [ApiWorkbook](../ApiWorkbook.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The path of the linked workbook as returned by the [ApiWorkbook#GetLinkSources](../../ApiWorkbook/Methods/GetLinkSources.md) method. |

## Returns

boolean

## Example

Break the links to other workbooks, replacing the formulas that use them with their values.

```javascript editor-xlsx
// How do I remove external workbook links before sending a spreadsheet?

// Break every link and report the ones a defined name still uses.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
let sources = workbook.GetLinkSources();
let kept = [];
for (let i = 0; i < sources.length; i++) {
    if (!workbook.BreakLink(sources[i])) {
        kept.push(sources[i]);
    }
}
worksheet.GetRange("A1").SetValue("Links broken: " + (sources.length - kept.length));
worksheet.GetRange("A2").SetValue("Links kept: " + kept.join(", "));
```
