# ToJSON

Converts the ApiParagraph object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

Serialize a paragraph into a portable data format for storage or transfer in a document.

```javascript editor-docx
// How do I export a paragraph's structure and content as a JSON object in a document?

// Save a paragraph's formatting and text as structured data so it can be reconstructed later in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
doc.AddElement(0, paragraphFromJSON);
```
