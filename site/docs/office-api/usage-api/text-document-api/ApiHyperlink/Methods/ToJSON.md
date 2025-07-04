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

This example converts the ApiHyperlink object into the JSON object.

```javascript editor-docx
// How to get a JSON from the hyperlink.

// Convert the hyperlink to json and add it to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
let json = hyperlink.ToJSON(true);
let hyperlinkFromJSON = Api.FromJSON(json);
hyperlinkFromJSON.SetDefaultStyle();
paragraph.AddElement(hyperlinkFromJSON);
```
