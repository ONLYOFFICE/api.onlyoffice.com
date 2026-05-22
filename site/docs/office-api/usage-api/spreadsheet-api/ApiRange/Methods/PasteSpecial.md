# PasteSpecial

Pastes the Range object to the specified range using the special paste options.

## Syntax

```javascript
expression.PasteSpecial(sPasteType, sPasteSpecialOperation, bSkipBlanks, bTranspose);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPasteType | Optional | [PasteType](../../Enumeration/PasteType.md) | "xlPasteAll" | Paste option. |
| sPasteSpecialOperation | Optional | [PasteSpecialOperation](../../Enumeration/PasteSpecialOperation.md) | "xlPasteSpecialOperationNone" | The mathematical operation which will be applied to the copied data. |
| bSkipBlanks | Optional | boolean | false | Specifies whether to avoid replacing values in the paste area when blank cells occur in the copy area. |
| bTranspose | Optional | boolean | false | Specifies whether the pasted data will be transposed from rows to columns. |

## Returns

This method doesn't return any data.

## Example

Paste clipboard data into a cell using controlled options in a spreadsheet.

```javascript editor-xlsx
// How do I paste only specific parts of copied data, such as values or formats, in a spreadsheet?

// Reuse copied cell content in a new location while choosing exactly what gets transferred in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("test");
worksheet.GetRange("A1").Copy();
worksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);
```
