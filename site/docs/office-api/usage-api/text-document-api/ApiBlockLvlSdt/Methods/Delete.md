# Delete

Removes a content control and its content. If keepContent is true, the content is not deleted.

## Syntax

```javascript
expression.Delete(keepContent);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | boolean |  | Specifies if the content will be deleted or not. |

## Returns

boolean

## Example

This example deletes a content control and its content.

```javascript editor-docx
// Creates the ApiBlockLvlSdt object in the current document, adds a text to it, and deletes it and its content from the document.

// How to delete the block level container from the ApiDocument class.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Delete(false);
```
