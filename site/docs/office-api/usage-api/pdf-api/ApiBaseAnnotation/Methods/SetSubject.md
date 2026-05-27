# SetSubject

Sets annotation subject.

## Syntax

```javascript
expression.SetSubject(subject);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subject | Required | string |  | The annotation subject text. |

## Returns

boolean

## Example

Add a subject or topic label to an annotation in a PDF.

```javascript editor-pdf
// Categorize an annotation with a subject line in a PDF.

// Assign a subject title to an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetSubject("Annot subject");
```
