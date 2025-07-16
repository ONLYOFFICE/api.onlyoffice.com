# GetDocumentInfo

Returns the document information:\
-**Application** - the application the document has been created with.\
-**CreatedRaw** - the date and time when the file was created.\
-**Created** - the parsed date and time when the file was created.\
-**LastModifiedRaw** - the date and time when the file was last modified.\
-**LastModified** - the parsed date and time when the file was last modified.\
-**LastModifiedBy** - the name of the user who has made the latest change to the document.\
-**Authors** - the persons who has created the file.\
-**Title** - this property allows you to simplify your documents classification.\
-**Tags** - this property allows you to simplify your documents classification.\
-**Subject** - this property allows you to simplify your documents classification.\
-**Comment** - this property allows you to simplify your documents classification.

## Syntax

```javascript
expression.GetDocumentInfo();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

object

## Example

This example shows how to get the document info represented as an object and paste the application name into the document.

```javascript editor-pptx
// How to get a document info from the presentation.

// Get current document info.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const docInfo = presentation.GetDocumentInfo();
paragraph.AddText('This document has been created with: ' + docInfo.Application);
slide.AddObject(shape);

```
