# SetLanguage

Specifies the language which will be used to check spelling and grammar (if requested) when processing the contents of the current range.

## Syntax

```javascript
expression.SetLanguage(langId);
```

`expression` - A variable that represents an [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | Required | string \| null |  | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". Pass *null* to remove the language. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Set the spell-check language for a range of text in a document.

```javascript editor-docx
// How do I tell the editor which language to use when checking part of a paragraph in a document?

// Set the language of the first word and print it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text.");
let range = paragraph.GetRange(0, 4);
range.SetLanguage("en-CA");
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Language of the first word: " + range.GetTextPr().GetLanguage());
doc.Push(resultParagraph);
```
