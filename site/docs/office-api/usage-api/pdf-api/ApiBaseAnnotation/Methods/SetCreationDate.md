# SetCreationDate

Sets annotation creation date.

## Syntax

```javascript
expression.SetCreationDate(timeStamp);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| timeStamp | Required | number |  | The annotation creation date as a numeric timestamp. |

## Returns

boolean

## Example

Record the date when an annotation was created in a PDF.

```javascript editor-pdf
// Timestamp an annotation with its creation date in a PDF.

// Set the creation date metadata for an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetCreationDate(new Date().getTime());
```
