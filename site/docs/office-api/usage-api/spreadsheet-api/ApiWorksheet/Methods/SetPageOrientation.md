# SetPageOrientation

Sets the page orientation.

## Syntax

```javascript
expression.SetPageOrientation(sPageOrientation);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPageOrientation | Required | [PageOrientation](../../Enumeration/PageOrientation.md) |  | The page orientation type. |

## Returns

boolean

## Example

Switch between portrait and landscape page layouts in a spreadsheet.

```javascript editor-xlsx
// How do I rotate the page orientation from vertical to horizontal in a spreadsheet?

// Choose whether your printed pages display in tall or wide format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPageOrientation("xlPortrait");
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);
```
