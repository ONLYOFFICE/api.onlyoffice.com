# Creating title slide

Create a presentation with a professional title slide:

- get the first slide in the current presentation ([Api/GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [ApiPresentation/GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md));
- set the slide background color ([Api/CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [Api/CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [ApiSlide/SetBackground](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md));
- create and position the main title ([Api/CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [ApiShape/SetPosition](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/SetPosition.md), [ApiShape/GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md));
- format the title text ([Api/CreateParagraph](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [ApiParagraph/AddText](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [ApiParagraph/SetJc](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [ApiRun/SetFontSize](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [ApiRun/SetBold](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md), [ApiRun/SetFontFamily](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md));
- create and format the subtitle ([Api/CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [Api/CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [ApiRun/SetFill](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFill.md));
- add both elements to the slide ([ApiSlide/AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)).


```ts editor-pptx
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

// Set light neutral background color (#F0F4F8)
let backgroundColor = Api.CreateRGBColor(240, 244, 248);
let backgroundFill = Api.CreateSolidFill(backgroundColor);
slide.SetBackground(backgroundFill);

// Create main title shape
let titleShape = Api.CreateShape("rect", 8_000_000, 1_500_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
titleShape.SetPosition(572_000, 2_000_000);

// Get title content and clear it
let titleContent = titleShape.GetDocContent();
titleContent.RemoveAllElements();

// Create title paragraph
let titleParagraph = Api.CreateParagraph();
titleParagraph.SetJc("center");
let titleRun = titleParagraph.AddText("Project Alpha");

// Format title text (42pt, Bold, Center)
titleRun.SetFontSize(42 * 2); // Font size in half-points
titleRun.SetBold(true);
titleRun.SetFontFamily("Arial");
let titleColor = Api.CreateRGBColor(51, 51, 51); // Dark gray for title
let titleFill = Api.CreateSolidFill(titleColor);
titleRun.SetFill(titleFill);

titleContent.Push(titleParagraph);
slide.AddObject(titleShape);

// Create subtitle shape
let subtitleShape = Api.CreateShape("rect", 8_000_000, 1_000_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
subtitleShape.SetPosition(572_000, 3_800_000);

// Get subtitle content and clear it
let subtitleContent = subtitleShape.GetDocContent();
subtitleContent.RemoveAllElements();

// Create subtitle paragraph
let subtitleParagraph = Api.CreateParagraph();
subtitleParagraph.SetJc("center");
let subtitleRun = subtitleParagraph.AddText("Quarterly Overview, June 2025");

// Format subtitle text (22pt, Regular, Gray #666666)
subtitleRun.SetFontSize(22 * 2); // Font size in half-points
subtitleRun.SetBold(false);
subtitleRun.SetFontFamily("Arial");
let subtitleColor = Api.CreateRGBColor(102, 102, 102); // Gray color (#666666)
let subtitleFill = Api.CreateSolidFill(subtitleColor);
subtitleRun.SetFill(subtitleFill);

subtitleContent.Push(subtitleParagraph);
slide.AddObject(subtitleShape);
```
