# SetSubject

Sets the document subject.

## Syntax

```javascript
expression.SetSubject(sSubject);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSubject | Required | string |  | The document subject. |

## Returns

This method doesn't return any data.

## Example

Define the subject line for a presentation in a presentation.

```javascript editor-pptx
// How do I add a subject to my presentation metadata?

// Store and access the subject text in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetSubject("ApiCore Method Showcase");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const subject = core.GetSubject();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Subject: " + subject);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
