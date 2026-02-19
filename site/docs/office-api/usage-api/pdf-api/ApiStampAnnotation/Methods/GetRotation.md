# GetRotation

Gets stamp rotate.

## Syntax

```javascript
expression.GetRotation();
```

`expression` - A variable that represents a [ApiStampAnnotation](../ApiStampAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Degree](../../Enumeration/Degree.md)

## Example

This example gets rotate of stamp annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
let oldRotAngle = stampAnnot.GetRotation();
stampAnnot.SetScale(0.5);
stampAnnot.SetRotation(180);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We change stamp rotate angle from ${oldRotAngle} to: ${stampAnnot.GetRotation()}`);
```
