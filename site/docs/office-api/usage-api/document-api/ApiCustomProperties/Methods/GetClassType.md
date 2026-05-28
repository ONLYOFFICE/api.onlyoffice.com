# GetClassType

Returns a type of the ApiCustomProperties class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCustomProperties](../ApiCustomProperties.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"customProperties"

## Example

Get the class type of the custom properties object in a document.

```javascript editor-docx
// How do I identify the type of a custom properties object at runtime in a document?

// Confirm the object type before calling type-specific methods on custom properties in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

const classType = customProps.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);
```
