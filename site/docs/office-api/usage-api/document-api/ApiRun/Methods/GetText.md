# GetText

Returns a text from the text run.

## Syntax

```javascript
expression.GetText(options);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | object |  | Options for formatting the returned text. |
| options.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any symbol can be used. The default separator is "\r". |
| options.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string. Any symbol can be used. The default symbol is "\t". |

## Returns

string

## Example

Extract the plain text content from a text run in a document.

```javascript editor-docx
// How do I read the string of characters stored in a text run in a document?

// Retrieve the readable text from a run and display it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("\tThis is a text run");
paragraph.AddElement(run);
let text = run.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the specified run: " + text);
doc.Push(paragraph);
```
