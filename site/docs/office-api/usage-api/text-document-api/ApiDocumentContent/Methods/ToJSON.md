# ToJSON

Converts the ApiDocumentContent object into the JSON object.

## Syntax

```javascript
expression.ToJSON(isWriteNumberings, isWriteStyles);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |
| isWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiDocumentContent object into the JSON object.

```javascript editor-docx
// How to get a JSON object from the document content.

// Convert the document to json file and print its class type.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = docContent.GetElement(0);
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
let json = docContent.ToJSON(false, true);
let docContentFromJSON = Api.FromJSON(json);
let type = docContentFromJSON.GetClassType();
docContentFromJSON.RemoveAllElements();
paragraph = docContentFromJSON.GetElement(0);
paragraph.AddText("Class type = " + type);
Api.ReplaceDocumentContent(docContentFromJSON);
```
