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
| name | Required | string |  | No description provided. |

## Returns

boolean

## Example

Create a square annotation and set unique name to it in a PDF document.

```javascript editor-pdf
// How do I set unique name in a PDF document?

// Set unique name using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetUniqueName("Square annot");
```
