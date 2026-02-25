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

This example gets a class type and pastes it into the document.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
const classType = core.GetClassType();

let paragraph = doc.GetElement(0);
paragraph.AddText("Class type: " + classType);

```
