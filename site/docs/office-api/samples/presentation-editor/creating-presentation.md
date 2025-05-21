# Creating presentation

Create a presentation on a specific topic:

- create the necessary number of slides in the current presentation ([Api/CreateSlide](../../usage-api/presentation-api/Api/Methods/CreateSlide.md), [Api/GetPresentation](../../usage-api/presentation-api/Api/Methods/GetPresentation.md), [ApiPresentation/AddSlide](../../usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md), [ApiPresentation/GetSlideByIndex](../../usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md));
- set the presentation sizes ([ApiPresentation/SetSizes](../../usage-api/presentation-api/ApiPresentation/Methods/SetSizes.md));
- set the background to each slide ([Api/CreateBlipFill](../../usage-api/presentation-api/Api/Methods/CreateBlipFill.md), [ApiSlide/SetBackground](../../usage-api/presentation-api/ApiSlide/Methods/SetBackground.md));
- set the slide title and text in the specified style ([Api/CreateParagraph](../../usage-api/presentation-api/Api/Methods/CreateParagraph.md), [Api/CreateRGBColor](../../usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [Api/CreateShape](../../usage-api/presentation-api/Api/Methods/CreateShape.md), [Api/CreateSolidFill](../../usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [ApiDocumentContent/RemoveAllElements](../../usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md), [ApiDocumentContent/Push](../../usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [ApiDrawing/SetPosition](../../usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [ApiParagraph/AddText](../../usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [ApiParagraph/SetJc](../../usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [ApiParagraph/SetSpacingAfter](../../usage-api/presentation-api/ApiParagraph/Methods/SetSpacingAfter.md), [ApiParagraph/SetSpacingBefore](../../usage-api/presentation-api/ApiParagraph/Methods/SetSpacingBefore.md), [ApiRun/SetBold](../../usage-api/presentation-api/ApiRun/Methods/SetBold.md), [ApiRun/SetFill](../../usage-api/presentation-api/ApiRun/Methods/SetFill.md), [ApiRun/SetFontFamily](../../usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md), [ApiRun/SetFontSize](../../usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [ApiShape/GetDocContent](../../usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [ApiSlide/AddObject](../../usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [ApiSlide/RemoveAllObjects](../../usage-api/presentation-api/ApiSlide/Methods/RemoveAllObjects.md)).

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../../document-builder/builder-framework-samples/builder-framework-samples.md) page.

```ts editor-pptx
let presentation = Api.GetPresentation();
presentation.SetSizes(9_144_000, 6_858_000);

function createSlide(presentation, image_url) {
  let slide = Api.CreateSlide();
  presentation.AddSlide(slide);
  let fill = Api.CreateBlipFill(image_url, "stretch");
  slide.SetBackground(fill);
  slide.RemoveAllObjects();
  return slide;
}

function addText(shape, content, text, fontSize, isBold, js) {
  let paragraph = Api.CreateParagraph();
  paragraph.SetSpacingBefore(0);
  paragraph.SetSpacingAfter(0);
  content.Push(paragraph);
  let run = paragraph.AddText(text);
  run.SetFill(Api.CreateSolidFill(Api.CreateRGBColor(0xFF, 0xFF, 0xFF)));
  run.SetFontSize(fontSize);
  run.SetFontFamily("Georgia");
  run.SetBold(isBold);
  paragraph.SetJc(js);
}

let image_url = "https://static.onlyoffice.com/assets/docs/samples/img/presentation_gun.png";
let slide = createSlide(presentation, image_url);
presentation.GetSlideByIndex(0).Delete();

let shape = Api.CreateShape("rect", 8_056_800, 3_020_400, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
shape.SetPosition(608_400, 1_267_200);
let content = shape.GetDocContent();
content.RemoveAllElements();
addText(shape, content, "How They", 160, true, "left");
addText(shape, content, "Throw Out", 132, false, "left");
addText(shape, content, "a Challenge", 132, false, "left");
slide.AddObject(shape);

slide = Api.CreateSlide();
presentation.AddSlide(slide);
let fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_axe.png", "stretch");
slide.SetBackground(fill);
slide.RemoveAllObjects();

shape = Api.CreateShape("rect", 6_904_800, 1_724_400, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
shape.SetPosition(1_764_000, 1_191_600);
content = shape.GetDocContent();
content.RemoveAllElements();
addText(shape, content, "American Indians ", 110, true, "right");
addText(shape, content, "(XVII century)", 94, false, "right");
slide.AddObject(shape);

shape = Api.CreateShape("rect", 4_986_000, 2_419_200, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
shape.SetPosition(3_834_000, 3_888_000);
content = shape.GetDocContent();
content.RemoveAllElements();
addText(shape, content, "put a tomahawk on the ground in the ", 84, false, "right");
addText(shape, content, "rival's camp", 84, false, "right");
slide.AddObject(shape);

slide = Api.CreateSlide();
presentation.AddSlide(slide);
fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_knight.png", "stretch");
slide.SetBackground(fill);
slide.RemoveAllObjects();

shape = Api.CreateShape("rect", 6_904_800, 1_724_400, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
shape.SetPosition(1_764_000, 1_191_600);
content = shape.GetDocContent();
content.RemoveAllElements();
addText(shape, content, "European Knights", 110, true, "right");
addText(shape, content, " (XII-XVI centuries)", 94, false, "right");
slide.AddObject(shape);

shape = Api.CreateShape("rect", 4_986_000, 2_419_200, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
shape.SetPosition(3_834_000, 3_888_000);
content = shape.GetDocContent();
content.RemoveAllElements();
addText(shape, content, "threw a glove", 84, false, "right");
addText(shape, content, "in the rival's face", 84, false, "right");
slide.AddObject(shape);

slide = Api.CreateSlide();
presentation.AddSlide(slide);
fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "stretch");
slide.SetBackground(fill);
slide.RemoveAllObjects();

shape = Api.CreateShape("rect", 7_887_600, 3_063_600, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
shape.SetPosition(630_000, 1_357_200);
content = shape.GetDocContent();
content.RemoveAllElements();
addText(shape, content, "ONLYOFFICE", 176, false, "center");
addText(shape, content, "stands for Peace", 132, false, "center");
slide.AddObject(shape);
```
