# ToJSON

Converts the ApiTextPr object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteStyles);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

Export text formatting settings to JSON and reapply them in a document.

```javascript editor-docx
// How do I serialize text formatting so it can be restored and reused in a document?

// Save and reload a set of text properties through a JSON snapshot in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let json = textPr.ToJSON(true);
let textPrFromJSON = Api.FromJSON(json);
textPrFromJSON.SetFontSize(30);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font size set to 15 points using the text properties.");
paragraph.SetTextPr(textPrFromJSON);
```
