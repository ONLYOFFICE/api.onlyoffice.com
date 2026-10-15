# SetBeginArrow

Sets the beginning arrow of the stroke.

## Syntax

```javascript
expression.SetBeginArrow(type, width, length);
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [LineEndType](../../Enumeration/LineEndType.md) |  | The type of the beginning arrow. |
| width | Optional | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | The width of the beginning arrow. |
| length | Optional | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | The length of the beginning arrow. |

## Returns

boolean

## Example

Add an arrowhead to the start of a shape border in a spreadsheet.

```javascript editor-xlsx
// How do I set the beginning arrow of a shape's outline in a spreadsheet?

// Create a shape, retrieve its stroke, and apply a triangle arrow to the start of the border line in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetBeginArrow("triangle", "medium", "large");
worksheet.GetRange("A1").SetValue("Begin arrow set: " + result);
```
