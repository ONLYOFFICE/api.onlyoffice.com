# SetZoom

Sets the scaling factor (in percent) used when the worksheet is printed. Setting this property turns off the "fit to page" mode.

## Syntax

```javascript
expression.SetZoom(nZoom);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nZoom | Required | number |  | The scaling factor measured in percent (10-400). |

## Returns

boolean

## Example

Set the print scaling factor (zoom) of a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I shrink or enlarge the printout to a percentage of its size in a spreadsheet?

// Scale the printed worksheet to a given percentage in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetZoom(80);
```
