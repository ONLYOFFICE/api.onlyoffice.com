# GetType

Gets stamp type.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiStampAnnotation](../ApiStampAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[StampType](../../Enumeration/StampType.md)

## Example

This example gets type of stamp annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Stamp type is: ${stampAnnot.GetType()}`);
```
