# SetSmallCaps

Specifies that all the small letter characters in this text run are formatted for display only as their capital
letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean |  | Specifies if the contents of the current run are displayed capitalized two points smaller or not. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Display lowercase letters as smaller capital letters in a text run in a document.

```javascript editor-docx
// How do I make text appear in small capitals without changing the original letters in a document?

// Style a run so that all characters render as compact uppercase glyphs in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetSmallCaps(true);
run.AddText("This is a text run with the font set to small capitalized letters.");
paragraph.AddElement(run);
```
