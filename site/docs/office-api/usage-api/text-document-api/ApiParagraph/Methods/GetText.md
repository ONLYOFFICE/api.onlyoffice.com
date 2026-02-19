# GetText

Returns the paragraph text.

## Syntax

```javascript
expression.GetText(options);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | object |  | Options for formatting the returned text. |
| options.Numbering | Optional | boolean | false | Defines if the resulting string will include numbering or not. |
| options.Math | Optional | boolean | false | Defines if the resulting string will include mathematical expressions or not. |
| options.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any string can be used. The default separator is "\r". |
| options.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string (does not apply to numbering). Any string can be used. The default symbol is "\t". |

## Returns

string

## Example

This example shows how to get the paragraph text.

```javascript editor-docx
// How to get text of the paragraph object.

// Get the paragraph text and display it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("\tThis is just a sample text.");
let text = paragraph.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the first paragraph: " + text);
doc.Push(paragraph);
```
