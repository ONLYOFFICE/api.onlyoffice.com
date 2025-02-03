# ToJSON

Converts the ApiMaster object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteTableStyles);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteTableStyles | Optional | bool | false | Specifies whether to write used table styles to the JSON object (true) or not (false). |

## Returns

JSON

## Example

This example converts the ApiMaster object into the JSON object.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var json = oMaster.ToJSON(true);
var oMasterFromJSON = Api.FromJSON(json);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var sType = oMasterFromJSON.GetClassType();
oParagraph.AddText("Class type = " + sType);
oSlide.AddObject(oShape);
```
