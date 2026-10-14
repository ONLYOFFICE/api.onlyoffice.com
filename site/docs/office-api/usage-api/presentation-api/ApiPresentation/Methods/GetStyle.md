# GetStyle

Returns the presentation style by its name.

## Syntax

```javascript
expression.GetStyle(sStyleName);
```

`expression` - A variable that represents an [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleName | Required | string |  | The name of the table style to look up. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md) \| null

## Example

Get a named table style, rename it, and apply it to a table.

```javascript editor-pptx
// A built-in table style can be retrieved by name and then customized.

// Fetch "Dark Style 1 - Accent 2", rename it, and apply it to a 3×3 table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
style.SetName("My Custom Table Style");
const paragraph = Api.CreateParagraph();
paragraph.AddText("New style name: " + style.GetName());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
