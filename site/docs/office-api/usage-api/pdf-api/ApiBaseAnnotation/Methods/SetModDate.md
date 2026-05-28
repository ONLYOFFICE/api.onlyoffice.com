# SetModDate

Sets annotation last modification date.

## Syntax

```javascript
expression.SetModDate(timeStamp);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| timeStamp | Required | number |  | The annotation last modification date as a numeric timestamp. |

## Returns

boolean

## Example

Record the date when an annotation was last modified in a PDF.

```javascript editor-pdf
// Update the modification timestamp of an annotation in a PDF.

// Set the last-changed date for an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetModDate(new Date().getTime());
```
