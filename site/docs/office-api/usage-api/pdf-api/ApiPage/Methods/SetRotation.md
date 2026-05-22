# SetRotation

Sets page rotation angle

## Syntax

```javascript
expression.SetRotation(nAngle);
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nAngle | Required | number |  | No description provided. |

## Returns

boolean

## Example

Rotate a page to a specific angle in a PDF.

```javascript editor-pdf
// How do I turn a page to face the right direction in a PDF?

// Apply a rotation transformation to change the page orientation in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);
```
