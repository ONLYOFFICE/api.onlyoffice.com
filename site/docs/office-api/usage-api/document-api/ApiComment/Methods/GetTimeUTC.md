# GetTimeUTC

Returns the timestamp of the comment creation in UTC format.

## Syntax

```javascript
expression.GetTimeUTC();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Read the creation timestamp of a comment in UTC format in a document.

```javascript editor-docx
// How do I get the UTC creation time of a comment in a document?

// Store or compare comment timestamps across time zones using a UTC-normalized value.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetTimeUTC("1672247153658");
let timeUTC = comments[0].GetTimeUTC();
paragraph = Api.CreateParagraph();
paragraph.AddText("The timestamp of comment creation in UTC format: " + timeUTC);
doc.Push(paragraph);
```
