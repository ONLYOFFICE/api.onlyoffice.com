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

This example demonstrates how to set the language of the current document using the ApiCore.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLanguage("en-US");

const language = core.GetLanguage();
let paragraph = doc.GetElement(0);
paragraph.AddText("Language: " + language);

```
