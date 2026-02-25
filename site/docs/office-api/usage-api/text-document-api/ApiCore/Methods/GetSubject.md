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

This example demonstrates how to get the subject of the current document.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = doc.GetElement(0);
paragraph.AddText("Subject: " + subject);

```
