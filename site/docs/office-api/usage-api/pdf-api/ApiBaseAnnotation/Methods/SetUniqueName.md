# SetUniqueName

Sets annotation unique name.

## Syntax

```javascript
expression.SetUniqueName(name);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The unique name for the annotation. |

## Returns

boolean

## Example

Assign a unique identifier to an annotation in a PDF.

```javascript editor-pdf
// Give an annotation a distinct name for reference in a PDF.

// Set a unique name to distinguish an annotation from others in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetUniqueName("Square annot");
```
