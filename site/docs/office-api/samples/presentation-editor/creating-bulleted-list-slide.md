# Creating bulleted list slide

Create a slide with a bulleted list for structured information presentation:

- get the first slide in the current presentation ([Api/GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [ApiPresentation/GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md));
- set the slide background color ([Api/CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [Api/CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [ApiSlide/SetBackground](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md));
- create and position the slide title ([Api/CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [ApiShape/SetPosition](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/SetPosition.md), [ApiShape/GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md));
- format the title text ([Api/CreateParagraph](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [ApiParagraph/AddText](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [ApiParagraph/SetJc](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [ApiRun/SetFontSize](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [ApiRun/SetBold](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md));
- create bulleted list with proper formatting ([ApiParagraph/SetBullet](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetBullet.md), [ApiParagraph/SetIndLeft](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetIndLeft.md), [ApiParagraph/SetSpacingAfter](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetSpacingAfter.md));
- add all elements to the slide ([ApiSlide/AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)).

```ts editor-pptx
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

// Set light blue background color
let backgroundColor = Api.CreateRGBColor(240, 248, 255);
let backgroundFill = Api.CreateSolidFill(backgroundColor);
slide.SetBackground(backgroundFill);

// Create title shape
let titleShape = Api.CreateShape("rect", 8_000_000, 1_200_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
titleShape.SetPosition(572_000, 500_000);

// Get title content and clear it
let titleContent = titleShape.GetDocContent();
titleContent.RemoveAllElements();

// Create title paragraph
let titleParagraph = Api.CreateParagraph();
titleParagraph.SetJc("center");
let titleRun = titleParagraph.AddText("Key Benefits");

// Format title text (30pt, Bold, Center)
titleRun.SetFontSize(30 * 2); // Font size in half-points
titleRun.SetBold(true);
titleRun.SetFontFamily("Arial");
let titleColor = Api.CreateRGBColor(51, 51, 51); // Dark gray for title
let titleFill = Api.CreateSolidFill(titleColor);
titleRun.SetFill(titleFill);

titleContent.Push(titleParagraph);
slide.AddObject(titleShape);

// Create bulleted list shape (positioned 40pt below title)
let listShape = Api.CreateShape("rect", 7_500_000, 4_000_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
listShape.SetPosition(750_000, 2_160_000); // 40pt spacing from title (40 * 36000 / 2 = 720000 + title height)

// Get list content and clear it
let listContent = listShape.GetDocContent();
listContent.RemoveAllElements();

// Define list items
let listItems = [
  "Easy to use",
  "Fast integration",
  "Scalable architecture"
];

// Create bulleted list
let textColor = Api.CreateRGBColor(68, 68, 68); // Dark gray for text
let textFill = Api.CreateSolidFill(textColor);

for (let i = 0; i < listItems.length; i++) {
  let listParagraph = Api.CreateParagraph();
  
  // Set bullet point (standard bullet •)
  listParagraph.SetBullet(Api.CreateBullet("•"));
  
  // Set left alignment
  listParagraph.SetJc("left");
  
  // Set indentation and spacing
  listParagraph.SetIndLeft(720); // Left indent for bullet
  listParagraph.SetSpacingAfter(300); // Space after each item
  
  // Set line spacing to 1.4
  listParagraph.SetSpacingLine(1.4 * 240); // 1.4 line spacing (240 = 1.0 spacing)
  
  // Add text
  let listRun = listParagraph.AddText(listItems[i]);
  
  // Format text (18pt, Regular)
  listRun.SetFontSize(18 * 2); // Font size in half-points
  listRun.SetBold(false);
  listRun.SetFontFamily("Arial");
  listRun.SetFill(textFill);
  
  listContent.Push(listParagraph);
}

slide.AddObject(listShape);
```
