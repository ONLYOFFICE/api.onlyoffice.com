# SetShd

Specifies the shading applied to the contents of the current text run.

## Syntax

```javascript
expression.SetShd(type, color);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type applied to the contents of the current text run. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The shading color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Apply a background shading color to a text run in a document.

```javascript editor-docx
// How do I shade the background behind a run of text in a document?

// Color the area behind words to make them stand out in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetShd("clear", Api.HexColor('#FF6F3D'));
run.AddText("This is a text run with the text shading set to orange.");
paragraph.AddElement(run);
```
