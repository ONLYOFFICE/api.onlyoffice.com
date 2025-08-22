# Creating background image slide

Create a slide with a background image and overlay text:

- get the first slide in the current presentation ([Api/GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [ApiPresentation/GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md));
- set the background image ([Api/CreateBlipFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateBlipFill.md), [ApiSlide/SetBackground](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md));
- create and position overlay text ([Api/CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [ApiDrawing/SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [ApiShape/GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md));
- format the overlay text for readability ([Api/CreateParagraph](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [ApiParagraph/AddText](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [ApiParagraph/SetJc](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [ApiRun/SetFontSize](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [ApiRun/SetBold](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md), [ApiRun/SetFill](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFill.md));
- add dark background overlay for text readability ([Api/CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md));
- add all elements to the slide ([ApiSlide/AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)).

```ts editor-pptx
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

// Set background image
let backgroundImage = "https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png";
let backgroundFill = Api.CreateBlipFill(backgroundImage, "stretch");
slide.SetBackground(backgroundFill);

// Create overlay shape for better text readability with dark background
let overlayColor = Api.CreateRGBColor(0, 0, 0);
let overlayFill = Api.CreateSolidFill(overlayColor);
let overlayShape = Api.CreateShape("rect", 8_500_000, 2_500_000, overlayFill, Api.CreateStroke(0, Api.CreateNoFill()));
overlayShape.SetPosition(322_000, 3_500_000);

// Get overlay content and clear it
let overlayContent = overlayShape.GetDocContent();
overlayContent.RemoveAllElements();

// Create main title paragraph
let titleParagraph = Api.CreateParagraph();
titleParagraph.SetJc("center");
let titleRun = titleParagraph.AddText("Innovation Starts Here");

// Format title text (36pt, Bold, White)
titleRun.SetFontSize(36 * 2); // Font size in half-points
titleRun.SetBold(true);
titleRun.SetFontFamily("Arial");
let titleColor = Api.CreateRGBColor(255, 255, 255); // White color for contrast
let titleFill = Api.CreateSolidFill(titleColor);
titleRun.SetFill(titleFill);

overlayContent.Push(titleParagraph);

// Create subtitle paragraph
let subtitleParagraph = Api.CreateParagraph();
subtitleParagraph.SetJc("center");
subtitleParagraph.SetSpacingBefore(400); // Add space before subtitle
let subtitleRun = subtitleParagraph.AddText("Transforming ideas into reality through cutting-edge technology");

// Format subtitle text (20pt, Regular, White)
subtitleRun.SetFontSize(20 * 2); // Font size in half-points
subtitleRun.SetBold(false);
subtitleRun.SetFontFamily("Arial");
let subtitleColor = Api.CreateRGBColor(240, 240, 240); // Light gray for subtitle
let subtitleFill = Api.CreateSolidFill(subtitleColor);
subtitleRun.SetFill(subtitleFill);

overlayContent.Push(subtitleParagraph);

// Add the overlay shape to the slide
slide.AddObject(overlayShape);

// Create a call-to-action text at the bottom
let ctaShape = Api.CreateShape("rect", 6_000_000, 800_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
ctaShape.SetPosition(1_572_000, 5_800_000);

// Get CTA content and clear it
let ctaContent = ctaShape.GetDocContent();
ctaContent.RemoveAllElements();

// Create CTA paragraph
let ctaParagraph = Api.CreateParagraph();
ctaParagraph.SetJc("center");
let ctaRun = ctaParagraph.AddText("Join us on this journey");

// Format CTA text (24pt, Bold, White with shadow effect)
ctaRun.SetFontSize(24 * 2); // Font size in half-points
ctaRun.SetBold(true);
ctaRun.SetFontFamily("Arial");
let ctaColor = Api.CreateRGBColor(255, 255, 255); // White color
let ctaFill = Api.CreateSolidFill(ctaColor);
ctaRun.SetFill(ctaFill);

ctaContent.Push(ctaParagraph);

// Add the CTA shape to the slide
slide.AddObject(ctaShape);
```
