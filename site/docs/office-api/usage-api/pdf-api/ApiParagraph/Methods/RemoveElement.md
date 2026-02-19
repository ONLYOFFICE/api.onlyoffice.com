# RemoveElement

Removes an element using the position specified.\
💡 If the element you remove is the last paragraph element (i.e. all the elements are removed from the paragraph),\
a new empty run is automatically created. If you want to add\
content to this run, use the [ApiParagraph#GetElement](../../ApiParagraph/Methods/GetElement.md) method.

## Syntax

```javascript
expression.RemoveElement(nPos);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The element position which we want to remove from the paragraph. |

## Returns

boolean