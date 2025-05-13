# ToJSON

Converts the ApiDocument object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteDefaultTextPr, bWriteDefaultParaPr, bWriteTheme, bWriteSectionPr, bWriteNumberings, bWriteStyles);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteDefaultTextPr | Required | boolean |  | Specifies if the default text properties will be written to the JSON object or not. |
| bWriteDefaultParaPr | Required | boolean |  | Specifies if the default paragraph properties will be written to the JSON object or not. |
| bWriteTheme | Required | boolean |  | Specifies if the document theme will be written to the JSON object or not. |
| bWriteSectionPr | Required | boolean |  | Specifies if the document section properties will be written to the JSON object or not. |
| bWriteNumberings | Required | boolean |  | Specifies if the document numberings will be written to the JSON object or not. |
| bWriteStyles | Required | boolean |  | Specifies if the document styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiDocument object into the JSON object.

```javascript editor-docx
let doc = Api.GetDocument();
let json = doc.ToJSON(true, true, true, true, true, true);
let docFromJSON = Api.FromJSON(json);
let paragraph = docFromJSON[0];
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing1);
let drawing2 = Api.CreateShape("wave", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing2);
let drawings = docFromJSON[0].GetAllShapes();
paragraph = doc.GetElement(0);
paragraph.AddDrawing(drawings[0]);
paragraph.AddLineBreak();
paragraph.AddText("This is the first shape from the JSON document.");
```
