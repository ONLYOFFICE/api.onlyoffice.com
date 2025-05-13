# Creating chart presentation

Create a chart presentation:

- get the first slide in the current presentation ([Api/GetPresentation](../../../docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [ApiPresentation/GetSlideByIndex](../../../docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md));
- set the gradient background ([Api/CreateGradientStop](../../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateGradientStop.md), [ApiSlide/SetBackground](../../../docs/office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md));
- set the slide title and text in the specified style ([Api/CreateShape](../../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [ApiRun/AddText](../../../docs/office-api/usage-api/presentation-api/ApiRun/Methods/AddText.md), [ApiParagraph/SetJc](../../../docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [ApiTextPr/SetFill](../../../docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFill.md), [ApiTextPr/SetFontFamily](../../../docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFontFamily.md), [ApiTextPr/SetFontSize](../../../docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFontSize.md),  [ApiShape/GetDocContent](../../../docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [ApiSlide/AddObject](../../../docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md));
- create a chart and add it to the specified slide ([Api/CreateChart](../../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateChart.md), [ApiSlide/AddObject](../../../docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md))

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../builder-framework-samples/builder-framework-samples.md) page.

```ts document-builder={"documentType": "slide", "editorConfig": {"customization": {"zoom": 60}}}
const oPresentation = Api.GetPresentation()
const oSlide = oPresentation.GetSlideByIndex(0)
oSlide.RemoveAllObjects()

const oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 240, 235), 0)
const oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 216, 201), 100_000)
let oFill = Api.CreateRadialGradientFill([oGs1, oGs2])
oSlide.SetBackground(oFill)

const oStroke = Api.CreateStroke(0, Api.CreateNoFill())
const oShapeTitle = Api.CreateShape("rect", 300 * 36_000, 20 * 36_000, Api.CreateNoFill(), oStroke)
const oShapeText = Api.CreateShape("rect", 120 * 36_000, 80 * 36_000, Api.CreateNoFill(), oStroke)
oShapeTitle.SetPosition(20 * 36_000, 20 * 36_000)
oShapeText.SetPosition(210 * 36_000, 50 * 36_000)
const oParagraphTitle = oShapeTitle.GetDocContent().GetElement(0)
const oParagraphText = oShapeText.GetDocContent().GetElement(0)
oFill = Api.CreateSolidFill(Api.CreateRGBColor(115, 81, 68))

function addText(fontSize, text, oShape, oParagraph, jc) {
  const oRun = Api.CreateRun()
  const oTextPr = oRun.GetTextPr()
  oTextPr.SetFontSize(fontSize)
  oTextPr.SetFill(oFill)
  oTextPr.SetFontFamily("Tahoma")
  oParagraph.SetJc(jc)
  oRun.AddText(text)
  oRun.AddLineBreak()
  oParagraph.AddElement(oRun)
  oSlide.AddObject(oShape)
}
function addChart(values, items, periods) {
  const oChart = Api.CreateChart("lineStacked", values, items, periods, 36_000 * 180, 36_000 * 100, 24)
  oChart.SetPosition(36_000 * 20, 36_000 * 50)
  oChart.SetVertAxisLablesFontSize(16)
  oChart.SetHorAxisLablesFontSize(16)
  oChart.SetLegendFontSize(16)
  oChart.SetLegendPos("top")
  oSlide.AddObject(oChart)
}
const titleContent = "Price Type Report"
const textContent = "This is an overview of price types. As we can see, May was the price peak, but even in June the price went down, the annual upward trend persists."
addText(80, titleContent, oShapeTitle, oParagraphTitle, "center")
addText(42, textContent, oShapeText, oParagraphText, "left")

const values = [
  [12, 13, 19, 17, 21, 15, 16],
  [8, 6, 10, 11, 14, 9, 10],
  [15, 14, 15, 18, 19, 12, 13],
]
const items = ["Price type A", "Price type B", "Price type C"]
const periods = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"]
addChart(values, items, periods)
```
