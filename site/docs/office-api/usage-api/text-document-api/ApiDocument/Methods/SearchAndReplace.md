# SearchAndReplace

Finds and replaces the text.

## Syntax

```javascript
expression.SearchAndReplace(oProperties);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProperties | Required | Object |  | The properties to find and replace. |
| oProperties.searchString | Required | string |  | Search string. |
| oProperties.replaceString | Required | string |  | Replacement string. |
| oProperties.matchCase | Optional | string | true | Case sensitive or not. |

## Returns

boolean

## Example

This example shows how to make search and replace.

```javascript editor-docx
// How to search for a specific word and replace it with another one.

// Search the first string and replace it with the second one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
doc.SearchAndReplace({"searchString": "first", "replaceString": "second"});
```
