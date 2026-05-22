# ToJSON

Converts the ApiSection object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

Save section settings as a portable data structure in a document.

```javascript editor-docx
// How do I export a section's configuration so it can be stored or reused in a document?

// Capture and restore the layout properties of a section in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a page size set in the current document section.");
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let json = section.ToJSON(false, true);
let sectionFromJSON = Api.FromJSON(json);
let type = sectionFromJSON.GetClassType();
paragraph.AddLineBreak();
paragraph.AddText("Class type = " + type);
```
