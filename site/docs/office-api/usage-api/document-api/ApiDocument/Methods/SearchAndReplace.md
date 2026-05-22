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

Find a word and replace it with another word throughout a document.

```javascript editor-docx
// How do I perform a find-and-replace operation in a document?

// Update outdated wording in bulk by substituting one string with another in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
doc.SearchAndReplace({"searchString": "first", "replaceString": "second"});
```
