# SetEndArrow

Sets the ending arrow of the stroke.

## Syntax

```javascript
expression.SetEndArrow(type, width, length);
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [LineEndType](../../Enumeration/LineEndType.md) |  | The type of the ending arrow. |
| width | Optional | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | The width of the ending arrow. |
| length | Optional | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | The length of the ending arrow. |

## Returns

boolean

## Example

Add an arrowhead to the end of a shape border in a spreadsheet.

```javascript editor-xlsx
// How do I set the ending arrow of a shape's outline in a spreadsheet?

// Create a shape, retrieve its stroke, and apply a stealth arrow to the end of the border line in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetEndArrow("stealth", "medium", "large");
worksheet.GetRange("A1").SetValue("End arrow set: " + result);
```
