# Creating chart presentation

Create a chart presentation:

- get the first slide in the current presentation ([Api/GetPresentation](../presentation-api/Api/Methods/GetPresentation.md), [ApiPresentation/GetSlideByIndex](../presentation-api/ApiPresentation/Methods/GetSlideByIndex.md));
- set the gradient background ([Api/CreateGradientStop](../presentation-api/Api/Methods/CreateGradientStop.md), [ApiSlide/SetBackground](../presentation-api/ApiSlide/Methods/SetBackground.md));
- set the slide title and text in the specified style ([Api/CreateShape](../presentation-api/Api/Methods/CreateShape.md), [ApiRun/AddText](../presentation-api/ApiRun/Methods/AddText.md), [ApiParagraph/SetJc](../presentation-api/ApiParagraph/Methods/SetJc.md), [ApiTextPr/SetFill](../presentation-api/ApiTextPr/Methods/SetFill.md), [ApiTextPr/SetFontFamily](../presentation-api/ApiTextPr/Methods/SetFontFamily.md), [ApiTextPr/SetFontSize](../presentation-api/ApiTextPr/Methods/SetFontSize.md),  [ApiShape/GetDocContent](../presentation-api/ApiShape/Methods/GetDocContent.md), [ApiSlide/AddObject](../presentation-api/ApiSlide/Methods/AddObject.md));
- create a chart and add it to the specified slide ([Api/CreateChart](../presentation-api/Api/Methods/CreateChart.md), [ApiSlide/AddObject](../presentation-api/ApiSlide/Methods/AddObject.md))

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../../document-builder/builder-framework/builder-framework-samples/builder-framework-samples.md) page.

```ts editor-pptx
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 240, 235), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 216, 201), 100_000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);

let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shapeTitle = Api.CreateShape("rect", 300 * 36_000, 20 * 36_000, Api.CreateNoFill(), stroke);
let shapeText = Api.CreateShape("rect", 120 * 36_000, 80 * 36_000, Api.CreateNoFill(), stroke);
shapeTitle.SetPosition(20 * 36_000, 20 * 36_000);
shapeText.SetPosition(210 * 36_000, 50 * 36_000);
let paragraphTitle = shapeTitle.GetDocContent().GetElement(0);
let paragraphText = shapeText.GetDocContent().GetElement(0);
fill = Api.CreateSolidFill(Api.CreateRGBColor(115, 81, 68));

function addText(fontSize, text, shape, paragraph, jc) {
  let run = Api.CreateRun();
  let textPr = run.GetTextPr();
  textPr.SetFontSize(fontSize);
  textPr.SetFill(fill);
  textPr.SetFontFamily("Tahoma");
  paragraph.SetJc(jc);
  run.AddText(text);
  run.AddLineBreak();
  paragraph.AddElement(run);
  slide.AddObject(shape);
}
function addChart(values, items, periods) {
  let chart = Api.CreateChart("lineStacked", values, items, periods, 36_000 * 180, 36_000 * 100, 24);
  chart.SetPosition(36_000 * 20, 36_000 * 50);
  chart.SetVertAxisLablesFontSize(16);
  chart.SetHorAxisLablesFontSize(16);
  chart.SetLegendFontSize(16);
  chart.SetLegendPos("top");
  slide.AddObject(chart);
}
let titleContent = "Price Type Report";
let textContent = "This is an overview of price types. As we can see, May was the price peak, but even in June the price went down, the annual upward trend persists.";
addText(80, titleContent, shapeTitle, paragraphTitle, "center");
addText(42, textContent, shapeText, paragraphText, "left");

let values = [
  [12, 13, 19, 17, 21, 15, 16],
  [8, 6, 10, 11, 14, 9, 10],
  [15, 14, 15, 18, 19, 12, 13],
];
let items = ["Price type A", "Price type B", "Price type C"];
let periods = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];
addChart(values, items, periods);
```
