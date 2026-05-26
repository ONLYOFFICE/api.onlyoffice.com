# GetItem

Returns a single object from a collection by its ID.

## Syntax

```javascript
expression.GetItem(ind);
```

`expression` - A variable that represents a [ApiAreas](../ApiAreas.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ind | Required | number |  | The index number of the object. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Retrieve a specific range from a multi-area selection by its position in a spreadsheet.

```javascript editor-xlsx
// How do I access one particular range out of a multi-area selection in a spreadsheet?

// Pull out an individual area by index to work with it separately in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let item = areas.GetItem(1);
range = worksheet.GetRange('A5');
range.SetValue("The first item from the areas: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').Paste(item);
```
