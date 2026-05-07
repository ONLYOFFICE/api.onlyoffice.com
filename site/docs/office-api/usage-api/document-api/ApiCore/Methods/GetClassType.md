# GetClassType

Returns a type of the ApiCore class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"core"

## Example

Find out the class type of a core properties object in a document.

```javascript editor-docx
// How can I get the class type of a core properties in a document?

// Get the class type of a core properties and display it in the document.

const doc = Api.GetDocument();
const core = doc.GetCore();
const classType = core.GetClassType();

let paragraph = doc.GetElement(0);
paragraph.AddText("Class type: " + classType);
```
