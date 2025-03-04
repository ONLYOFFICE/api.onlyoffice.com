# Creating presentation

Create a presentation on a specific topic:

- create the necessary number of slides in the current presentation ([Api/CreateSlide](../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [Api/GetPresentation](../../docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [ApiPresentation/AddSlide](../../docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md), [ApiPresentation/GetSlideByIndex](../../docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md));
- set the presentation sizes ([ApiPresentation/SetSizes](../../docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/SetSizes.md));
- set the background to each slide ([Api/CreateBlipFill](../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateBlipFill.md), [ApiSlide/SetBackground](../../docs/office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md));
- set the slide title and text in the specified style ([Api/CreateParagraph](../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [Api/CreateRGBColor](../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [Api/CreateShape](../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [Api/CreateSolidFill](../../docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [ApiDocumentContent/RemoveAllElements](../../docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md), [ApiDocumentContent/Push](../../docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [ApiDrawing/SetPosition](../../docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [ApiParagraph/AddText](../../docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [ApiParagraph/SetJc](../../docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [ApiParagraph/SetSpacingAfter](../../docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetSpacingAfter.md), [ApiParagraph/SetSpacingBefore](../../docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetSpacingBefore.md), [ApiRun/SetBold](../../docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md), [ApiRun/SetFill](../../docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFill.md), [ApiRun/SetFontFamily](../../docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md), [ApiRun/SetFontSize](../../docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [ApiShape/GetDocContent](../../docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [ApiSlide/AddObject](../../docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [ApiSlide/RemoveAllObjects](../../docs/office-api/usage-api/presentation-api/ApiSlide/Methods/RemoveAllObjects.md)).

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../../document-builder/builder-framework/builder-framework-samples/builder-framework-samples.md) page.

```ts document-builder={"documentType": "slide", "editorConfig": {"customization": {"zoom": 60}}}
const oPresentation = Api.GetPresentation()
oPresentation.SetSizes(9_144_000, 6_858_000)

function createSlide(oPresentation, image_url) {
  const oSlide = Api.CreateSlide()
  oPresentation.AddSlide(oSlide)
  const oFill = Api.CreateBlipFill(image_url, "stretch")
  oSlide.SetBackground(oFill)
  oSlide.RemoveAllObjects()
  return oSlide
}

function addText(oShape, oContent, text, fontSize, isBold, js) {
  const oParagraph = Api.CreateParagraph()
  oParagraph.SetSpacingBefore(0)
  oParagraph.SetSpacingAfter(0)
  oContent.Push(oParagraph)
  const oRun = oParagraph.AddText(text)
  oRun.SetFill(Api.CreateSolidFill(Api.CreateRGBColor(0xFF, 0xFF, 0xFF)))
  oRun.SetFontSize(fontSize)
  oRun.SetFontFamily("Georgia")
  oRun.SetBold(isBold)
  oParagraph.SetJc(js)
}

const image_url = "https://static.onlyoffice.com/assets/docs/samples/img/presentation_gun.png"
let oSlide = createSlide(oPresentation, image_url)
oPresentation.GetSlideByIndex(0).Delete()

let oShape = Api.CreateShape("rect", 8_056_800, 3_020_400, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()))
oShape.SetPosition(608_400, 1_267_200)
let oContent = oShape.GetDocContent()
oContent.RemoveAllElements()
addText(oShape, oContent, "How They", 160, true, "left")
addText(oShape, oContent, "Throw Out", 132, false, "left")
addText(oShape, oContent, "a Challenge", 132, false, "left")
oSlide.AddObject(oShape)

oSlide = Api.CreateSlide()
oPresentation.AddSlide(oSlide)
let oFill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_axe.png", "stretch")
oSlide.SetBackground(oFill)
oSlide.RemoveAllObjects()

oShape = Api.CreateShape("rect", 6_904_800, 1_724_400, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()))
oShape.SetPosition(1_764_000, 1_191_600)
oContent = oShape.GetDocContent()
oContent.RemoveAllElements()
addText(oShape, oContent, "American Indians ", 110, true, "right")
addText(oShape, oContent, "(XVII century)", 94, false, "right")
oSlide.AddObject(oShape)

oShape = Api.CreateShape("rect", 4_986_000, 2_419_200, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()))
oShape.SetPosition(3_834_000, 3_888_000)
oContent = oShape.GetDocContent()
oContent.RemoveAllElements()
addText(oShape, oContent, "put a tomahawk on the ground in the ", 84, false, "right")
addText(oShape, oContent, "rival's camp", 84, false, "right")
oSlide.AddObject(oShape)

oSlide = Api.CreateSlide()
oPresentation.AddSlide(oSlide)
oFill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_knight.png", "stretch")
oSlide.SetBackground(oFill)
oSlide.RemoveAllObjects()

oShape = Api.CreateShape("rect", 6_904_800, 1_724_400, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()))
oShape.SetPosition(1_764_000, 1_191_600)
oContent = oShape.GetDocContent()
oContent.RemoveAllElements()
addText(oShape, oContent, "European Knights", 110, true, "right")
addText(oShape, oContent, " (XII-XVI centuries)", 94, false, "right")
oSlide.AddObject(oShape)

oShape = Api.CreateShape("rect", 4_986_000, 2_419_200, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()))
oShape.SetPosition(3_834_000, 3_888_000)
oContent = oShape.GetDocContent()
oContent.RemoveAllElements()
addText(oShape, oContent, "threw a glove", 84, false, "right")
addText(oShape, oContent, "in the rival's face", 84, false, "right")
oSlide.AddObject(oShape)

oSlide = Api.CreateSlide()
oPresentation.AddSlide(oSlide)
oFill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "stretch")
oSlide.SetBackground(oFill)
oSlide.RemoveAllObjects()

oShape = Api.CreateShape("rect", 7_887_600, 3_063_600, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()))
oShape.SetPosition(630_000, 1_357_200)
oContent = oShape.GetDocContent()
oContent.RemoveAllElements()
addText(oShape, oContent, "ONLYOFFICE", 176, false, "center")
addText(oShape, oContent, "stands for Peace", 132, false, "center")
oSlide.AddObject(oShape)
```
