# SetVertAlign

Specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text:

- **"baseline"** - the characters in the current text run will be aligned by the default text baseline.
- **"subscript"** - the characters in the current text run will be aligned below the default text baseline.
- **"superscript"** - the characters in the current text run will be aligned above the default text baseline.

Inherited from [ApiTextPr.SetVertAlign](../../ApiTextPr/Methods/SetVertAlign.md).

## Syntax

```javascript
expression.SetVertAlign(type);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "baseline" \| "subscript" \| "superscript" \| null |  | The vertical alignment type applied to the text contents. Pass *null* to remove the vertical alignment. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Position a text run above, below, or on the baseline of surrounding text in a document.

```javascript editor-docx
// How do I make text appear as a superscript or subscript in a document?

// Raise or lower a portion of text relative to the normal line height in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetVertAlign("subscript");
run.AddText("This is a text run with the text aligned below the baseline vertically. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetVertAlign("baseline");
run.AddText("This is a text run with the text aligned by the baseline vertically. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetVertAlign("superscript");
run.AddText("This is a text run with the text aligned above the baseline vertically.");
paragraph.AddElement(run);
```
