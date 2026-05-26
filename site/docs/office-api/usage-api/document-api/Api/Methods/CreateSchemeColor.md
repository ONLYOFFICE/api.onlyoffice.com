# CreateSchemeColor

Creates a complex color scheme selecting from one of the available schemes.

## Syntax

```javascript
expression.CreateSchemeColor(schemeColorId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| schemeColorId | Required | [SchemeColorId](../../Enumeration/SchemeColorId.md) |  | The color scheme identifier. |

## Returns

[ApiSchemeColor](../../ApiSchemeColor/ApiSchemeColor.md)

## Example

Fill a shape using a color taken from the document's active theme palette in a document.

```javascript editor-docx
// How do I use one of the document's theme colors as the solid fill for a shape in a document?

// Apply a theme-aware color to a shape so it updates automatically when the theme changes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateSchemeColor("dk1"));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);
```
