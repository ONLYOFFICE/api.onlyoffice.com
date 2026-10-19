# SetOrientation

Sets the page orientation used when the worksheet is printed.

## Syntax

```javascript
expression.SetOrientation(sOrientation);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sOrientation | Required | [PageOrientation](../../Enumeration/PageOrientation.md) |  | The page orientation type. |

## Returns

boolean

## Example

Set the page orientation to landscape for printing in a spreadsheet.

```javascript editor-xlsx
// How do I switch a worksheet to landscape orientation when printing in a spreadsheet?

// Print the sheet sideways (landscape) instead of upright (portrait) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOrientation("xlLandscape");
```
