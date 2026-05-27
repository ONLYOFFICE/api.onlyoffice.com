# SetAuthorName

Sets annotation author name.

## Syntax

```javascript
expression.SetAuthorName(name);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The author name. |

## Returns

boolean

## Example

Assign an author name to an annotation in a PDF.

```javascript editor-pdf
// Who created or should be credited for an annotation in a PDF?

// Set the author name property of an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetAuthorName("John Smith");
```
