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

Set rotate for first page in document.

```javascript editor-pdf
// How can I set rotation using a page in a PDF document?

// Set rotation for a page in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);
```
