# SetJoinType

Sets the join type of the stroke.

## Syntax

```javascript
expression.SetJoinType(type);
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [LineJoinType](../../Enumeration/LineJoinType.md) |  | The join type of the stroke. |

## Returns

boolean

## Example

Set a bevel join for the corners of a shape border in a spreadsheet.

```javascript editor-xlsx
// Change the join type to control how the stroke corners are drawn.

// Create a rectangle, retrieve its stroke, apply the bevel join type, and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetJoinType("bevel");
worksheet.GetRange("A1").SetValue("Join type set: " + result);
```
