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

Add string custom properties to a document in a document.

```javascript editor-docx
// Custom properties support string, boolean, number, and date value types.

// Add using a custom properties object in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

customProps.Add("CompanyName", "ONLYOFFICE");
const companyName = customProps.Get("CompanyName");

customProps.Add("TrueBool", true);
const trueBool = customProps.Get("TrueBool");

customProps.Add("NumberInt", 3.0);
customProps.Add("NumberReal", 3.14);
const numberInt = customProps.Get("NumberInt");
const numberReal = customProps.Get("NumberReal");

customProps.Add("BirthDate", new Date("20 January 2000"));
const birthDate = new Date(customProps.Get("BirthDate"));
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

const paragraph = doc.GetElement(0);
paragraph.AddText("CompanyName: " + companyName);
paragraph.AddLineBreak();

paragraph.AddText("\nTrueBool: " + trueBool);
paragraph.AddLineBreak();

paragraph.AddText("\nNumberInt: " + numberInt);
paragraph.AddText("\nNumberReal: " + numberReal);
paragraph.AddLineBreak();

paragraph.AddText("\nBirthDate: " + birthDate.toDateString());
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);
```
