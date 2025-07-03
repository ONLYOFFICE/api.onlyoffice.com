# Add

Adds a custom property to the document with automatic type detection.

## Syntax

```javascript
expression.Add(name, value);
```

`expression` - A variable that represents a [ApiCustomProperties](../ApiCustomProperties.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The custom property name. |
| value | Required | string \| number \| boolean \| Date |  | The custom property value. |

## Returns

boolean

## Example

This example demonstrates how to add string custom properties to a document.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();

customProps.Add("CompanyName", "ONLYOFFICE");
const companyName = customProps.Get("CompanyName");

customProps.Add("trueBool", true);
const trueBool = customProps.Get("trueBool");

customProps.Add("NumberInt", 3.0);
customProps.Add("NumberReal", 3.14);
const numberInt = customProps.Get("NumberInt");
const numberReal = customProps.Get("NumberReal");

customProps.Add("BirthDate", new Date("20 January 2000"));
const birthDate = new Date(customProps.Get("BirthDate"));
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

const fill = Api.CreateSolidFill(Api.CreateRGBColor(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Company Name: " + companyName + " (" + typeof companyName + ")");
paragraph.AddLineBreak();

paragraph.AddText("\nTrue Boolean: " + trueBool + " (" + typeof trueBool + ")");
paragraph.AddLineBreak();

paragraph.AddText("\nNumber Int: " + numberInt + " (" + typeof numberInt + ")");
paragraph.AddText("\nNumber Real: " + numberReal + " (" + typeof numberReal + ")");
paragraph.AddLineBreak();

paragraph.AddText("\nBirth Date: " + birthDate.toDateString() + " (" + typeof birthDate + ")");
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);

```
