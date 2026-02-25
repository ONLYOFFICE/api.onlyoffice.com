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

This example demonstrates how to get the class type of ApiCustomProperties.

```javascript editor-docx playground
const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

const classType = customProps.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);

```
