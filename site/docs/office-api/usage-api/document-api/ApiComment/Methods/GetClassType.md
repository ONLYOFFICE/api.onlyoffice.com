# GetClassType

Returns a type of the ApiComment class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"comment"

## Example

Retrieve the class type of a comment object in a document.

```javascript editor-docx
// How do I check what type of object a comment is in a document?

// Confirm the object category of a comment to distinguish it from other element types.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let classType = comments[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
