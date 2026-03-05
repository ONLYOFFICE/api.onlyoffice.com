# SetIntent

Sets intent type for this annotation.

## Syntax

```javascript
expression.SetIntent(intentType);
```

`expression` - A variable that represents a [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| intentType | Required | [FreeTextIntent](../../Enumeration/FreeTextIntent.md) |  | No description provided. |

## Returns

boolean

## Example

This example sets intent for freeText annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot intent is: ${freeTextAnnot.GetIntent()}`);
```
