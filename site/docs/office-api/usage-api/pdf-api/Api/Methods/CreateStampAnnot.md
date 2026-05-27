# CreateStampAnnot

Creates stamp annotation.

## Syntax

```javascript
expression.CreateStampAnnot(rect, type, author, creationDate);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect (only x1, y1 coordinates will be used, since the stamp dimensions are reserved). |
| type | Required | [StampType](../../Enumeration/StampType.md) |  | stamp type |
| author | Optional | string |  | name of the author |
| creationDate | Optional | number |  | creation date (timeStamp) |

## Returns

[ApiStampAnnotation](../../ApiStampAnnotation/ApiStampAnnotation.md)

## Example

Add an approval stamp annotation to a PDF page.

```javascript editor-pdf
// How do I mark a document with a stamp in a PDF?

// Place a preset stamp at specified coordinates in a PDF.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([40, 40, 100, 100], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
```
