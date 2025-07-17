# Delete

Deletes the Range object.

## Syntax

```javascript
expression.Delete(shift);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shift | Optional | [DeleteShiftDirection](../../Enumeration/DeleteShiftDirection.md) |  | Specifies how to shift cells to replace the deleted cells. |

## Returns

This method doesn't return any data.

## Example

This example deletes the Range object.

```javascript editor-xlsx
// How to remove a range from the worksheet.

// Get a range from the worksheet and delete it specifying the direction.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Delete("up");
```
