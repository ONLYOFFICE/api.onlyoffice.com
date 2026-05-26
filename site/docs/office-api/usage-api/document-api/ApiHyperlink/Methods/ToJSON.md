# ToJSON

Converts the ApiHyperlink object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteStyles);
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

Convert a hyperlink to a JSON object and insert it into a paragraph in a document.

```javascript editor-docx
// How do I serialize a hyperlink to JSON and restore it in a document?

// Duplicate a hyperlink by exporting it to JSON and re-importing it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
let json = hyperlink.ToJSON(true);
let hyperlinkFromJSON = Api.FromJSON(json);
hyperlinkFromJSON.SetDefaultStyle();
paragraph.AddElement(hyperlinkFromJSON);
```
