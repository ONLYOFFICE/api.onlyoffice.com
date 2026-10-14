# SetLanguage

Specifies the language which will be used to check spelling and grammar (if requested) when processing the contents of the current paragraph.

## Syntax

```javascript
expression.SetLanguage(langId);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | Required | string \| null |  | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". Pass *null* to remove the language. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## Example

Set the spell-check language for all text in a paragraph in a document.

```javascript editor-docx
// How do I tell the editor which language to use when checking a whole paragraph in a document?

// Set the language of the paragraph and print it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the spell-check language set.");
paragraph.SetLanguage("en-CA");
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Paragraph language: " + paragraph.GetRange().GetTextPr().GetLanguage());
doc.Push(resultParagraph);
```
