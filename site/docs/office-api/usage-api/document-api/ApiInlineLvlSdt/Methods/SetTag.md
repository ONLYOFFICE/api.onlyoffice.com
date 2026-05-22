# SetTag

Adds a string tag to the current inline text content control.

## Syntax

```javascript
expression.SetTag(sTag);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTag | Required | string |  | The tag which will be added to the current inline text content control. |

## Returns

boolean

## Example

Attach a string tag to an inline text content control in a document.

```javascript editor-docx
// How do I add a searchable tag to an inline content control in a document?

// Read back the tag after setting it to confirm the stored value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a tag set to it.");
inlineLvlSdt.SetTag("This is a tag");
inlineLvlSdt.AddElement(run, 0);
let tag = inlineLvlSdt.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tag: " + tag);
doc.Push(paragraph);
```
