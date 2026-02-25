# SetRotation

Sets stamp rotate.

## Syntax

```javascript
expression.SetRotation(angle);
```

`expression` - A variable that represents a [ApiStampAnnotation](../ApiStampAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| angle | Required | [Degree](../../Enumeration/Degree.md) |  | No description provided. |

## Returns

boolean

## Example

This example sets rotate for stamp annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
stampAnnot.SetRotation(180);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We set rotate angle to: ${stampAnnot.GetRotation()} for stamp annotation`);
```
