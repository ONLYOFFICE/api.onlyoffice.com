# ToJSON

Converts the ApiInlineLvlSdt object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteStyles);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

Serialize an inline content control to JSON and restore it in a document.

```javascript editor-docx
// How do I convert an inline content control to JSON format in a document?

// Preserve and reuse a configured inline content control by round-tripping it through JSON in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.SetAlias("№1");
let json = inlineLvlSdt.ToJSON(true);
let inlineLvlSdtFromJSON = Api.FromJSON(json);
paragraph.AddInlineLvlSdt(inlineLvlSdtFromJSON);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdtFromJSON.AddElement(run, 0);
```
