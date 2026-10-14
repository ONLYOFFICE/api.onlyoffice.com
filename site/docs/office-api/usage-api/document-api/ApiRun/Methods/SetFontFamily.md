# SetFontFamily

Sets all 4 font slots with the specified font family.

Inherited from [ApiTextPr.SetFontFamily](../../ApiTextPr/Methods/SetFontFamily.md).

## Syntax

```javascript
expression.SetFontFamily(sFontFamily);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Optional | string \| null |  | The font family or families used for the current text run. Pass *null* or omit it to remove the font family. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Change the typeface of a text run to a chosen font family in a document.

```javascript editor-docx
// How do I set a specific font family for a piece of text in a document?

// Switch the lettering style of a run by assigning a different font in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontFamily("Calibri Light");
run.AddText("This is a text run with the font family set to 'Calibri Light'.");
paragraph.AddElement(run);
```
