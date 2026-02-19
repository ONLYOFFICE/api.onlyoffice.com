# SetLastModifiedBy

Sets the name of the user who last modified the document.

## Syntax

```javascript
expression.SetLastModifiedBy(sLastModifiedBy);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLastModifiedBy | Required | string |  | The name of the user who last modified the document. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set and get the name of the last user who modified the current presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastModifiedBy = core.GetLastModifiedBy();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
