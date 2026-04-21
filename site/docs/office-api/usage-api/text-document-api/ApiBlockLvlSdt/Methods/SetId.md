# SetId

Specifies a unique ID for the current content control.

## Syntax

```javascript
expression.SetId(id);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | number |  | The numerical ID which will be specified for the current content control. |

## Returns

This method doesn't return any data.

## Example

Set the ID of the container in a document.

```javascript editor-docx
// How do I set id in a document?

// Set id using a block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetId("4815162342");
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with an ID set to it.");
doc.AddElement(0, blockLvlSdt);

let contentControlId = blockLvlSdt.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Id: " + contentControlId);
doc.Push(paragraph);
```
