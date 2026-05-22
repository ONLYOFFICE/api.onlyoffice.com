# GetProtectedRange

Returns a protected range object by its title.

## Syntax

```javascript
expression.GetProtectedRange(sTitle);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The title of the protected range that will be returned. |

## Returns

[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md) \| null

## Example

Access a protected range by name and update its title in a spreadsheet.

```javascript editor-xlsx
// How do I retrieve a protected range from a worksheet in a spreadsheet?

// Locate a locked cell range and rename it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
```
