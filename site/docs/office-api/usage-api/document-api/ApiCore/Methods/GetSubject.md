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

Read the subject field from the document's core properties in a document.

```javascript editor-docx
// How do I retrieve the subject stored in a document's metadata in a document?

// Verify that a subject was recorded correctly by printing its value into the document body in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = doc.GetElement(0);
paragraph.AddText("Subject: " + subject);
```
