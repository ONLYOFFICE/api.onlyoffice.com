# SetContents

Sets annotation contents.

## Syntax

```javascript
expression.SetContents(contents);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| contents | Required | string |  | No description provided. |

## Returns

boolean

## Example

Create a square annotation and set contents to it in a PDF document.

```javascript editor-pdf
// How can I set contents using an annotation in a PDF document?

// Set contents for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetContents("John Smith");
```
