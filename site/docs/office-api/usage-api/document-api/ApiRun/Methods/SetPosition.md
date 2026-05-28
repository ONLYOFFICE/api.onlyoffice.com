# SetPosition

Specifies an amount by which text is raised or lowered for this run in relation to the default
baseline of the surrounding non-positioned text.

## Syntax

```javascript
expression.SetPosition(nPosition);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | Required | [hps](../../Enumeration/hps.md) |  | Specifies a positive (raised text) or negative (lowered text) measurement in half-points (1/144 of an inch). |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Raise or lower a text run relative to the surrounding baseline in a document.

```javascript editor-docx
// How do I shift a word up or down from the normal line of text in a document?

// Adjust the vertical offset of characters to create superscript or subscript effects in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetPosition(10);
run.AddText("This is a text run with the text raised 5 points (10 half-points).");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetPosition(-16);
run.AddText("This is a text run with the text lowered 8 points (16 half-points).");
paragraph.AddElement(run);
```
