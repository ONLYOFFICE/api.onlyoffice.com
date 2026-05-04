# SetLanguage

Sets the document language.

## Syntax

```javascript
expression.SetLanguage(sLanguage);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLanguage | Required | string |  | The document language. |

## Returns

This method doesn't return any data.

## Example

Set the language of the current document using the core properties in a document.

```javascript editor-docx
// How can I set language using a core properties in a document?

// Set language for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLanguage("en-US");

const language = core.GetLanguage();
let paragraph = doc.GetElement(0);
paragraph.AddText("Language: " + language);
```
