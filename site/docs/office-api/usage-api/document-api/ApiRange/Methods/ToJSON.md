# ToJSON

Converts the ApiRange object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

Save a text range as a reusable data snapshot in a document.

```javascript editor-docx
// How do I preserve a formatted text range for later reuse in a document?

// Capture a portion of text so it can be restored or duplicated elsewhere in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = Api.CreateRange(paragraph, 0, 9);
range.SetBold(true);
let json = range.ToJSON(false, true);
let rangeFromJSON = Api.FromJSON(json);
doc.Push(rangeFromJSON[0]);
```
