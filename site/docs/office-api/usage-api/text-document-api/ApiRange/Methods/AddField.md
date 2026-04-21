# AddField

Adds a field to the specified range by the field instruction code.
💡  This method removes text within a range. 

## Syntax

```javascript
expression.AddField(sCode);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCode | Required | string |  | The field instruction code. |

## Returns

boolean

## Example

Add the field to the specified range by field instruction code. Note: This method removes text within range in a document.

```javascript editor-docx
// How do I add the field in a document?

// Add the field using a range object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This text for time field");
let range = paragraph.GetRange();
range.AddField('TIME \\@ "dddd, MMMM d, yyyy"');
paragraph = Api.CreateParagraph();
paragraph.AddText("The text within range was replaced by field with TIME instruction field.");
doc.Push(paragraph);
```
