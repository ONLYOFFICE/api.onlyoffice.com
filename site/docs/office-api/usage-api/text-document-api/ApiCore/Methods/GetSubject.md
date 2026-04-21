# GetSubject

Returns the document subject.

## Syntax

```javascript
expression.GetSubject();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the subject of the current document in a document.

```javascript editor-docx
// How to get the subject for a core properties in a document?

// Get the subject and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = doc.GetElement(0);
paragraph.AddText("Subject: " + subject);
```
