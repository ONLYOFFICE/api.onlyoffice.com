# GetClassType

Returns a type of the ApiParagraph class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"paragraph"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
