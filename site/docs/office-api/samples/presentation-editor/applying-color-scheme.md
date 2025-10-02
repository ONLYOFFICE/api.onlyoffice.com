# Applying color scheme

Apply a unified color scheme to an entire presentation:

- get the presentation and create multiple slides ([Api/GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [Api/CreateSlide](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [ApiPresentation/AddSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md));
- create a custom color scheme ([Api/CreateThemeColorScheme](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateThemeColorScheme.md), [Api/CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md));
- create format scheme with fills and strokes ([Api/CreateThemeFormatScheme](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateThemeFormatScheme.md), [Api/CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [Api/CreateStroke](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateStroke.md));
- create font scheme ([Api/CreateThemeFontScheme](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateThemeFontScheme.md));
- create and apply theme to presentation ([Api/CreateTheme](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateTheme.md), [ApiPresentation/ApplyTheme](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/ApplyTheme.md));
- add content to slides to demonstrate the theme ([Api/CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [ApiSlide/AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)).

```ts editor-pptx
let presentation = Api.GetPresentation();

// Create additional slides to demonstrate theme application
let slide1 = presentation.GetSlideByIndex(0);
let slide2 = Api.CreateSlide();
let slide3 = Api.CreateSlide();
presentation.AddSlide(slide2);
presentation.AddSlide(slide3);

// Get the master slide for theme creation
let master = presentation.GetMaster(0);

// Create a custom color scheme with corporate branding colors
// The array should contain 12 colors: 2 dark, 2 light, 6 primary, hyperlink, followed hyperlink
let colorScheme = Api.CreateThemeColorScheme([
  Api.CreateRGBColor(44, 62, 80),    // Dark 1 - Navy blue
  Api.CreateRGBColor(52, 73, 94),    // Dark 2 - Darker blue
  Api.CreateRGBColor(236, 240, 241), // Light 1 - Light gray
  Api.CreateRGBColor(189, 195, 199), // Light 2 - Medium gray
  Api.CreateRGBColor(52, 152, 219),  // Accent 1 - Bright blue
  Api.CreateRGBColor(46, 204, 113),  // Accent 2 - Green
  Api.CreateRGBColor(155, 89, 182),  // Accent 3 - Purple
  Api.CreateRGBColor(241, 196, 15),  // Accent 4 - Yellow
  Api.CreateRGBColor(230, 126, 34),  // Accent 5 - Orange
  Api.CreateRGBColor(231, 76, 60),   // Accent 6 - Red
  Api.CreateRGBColor(52, 152, 219),  // Hyperlink - Blue
  Api.CreateRGBColor(155, 89, 182)   // Followed hyperlink - Purple
], "Corporate Brand Scheme");

// Create format scheme with fills and strokes
let fill1 = Api.CreateSolidFill(Api.CreateRGBColor(52, 152, 219)); // Blue fill
let fill2 = Api.CreateSolidFill(Api.CreateRGBColor(46, 204, 113)); // Green fill
let fill3 = Api.CreateSolidFill(Api.CreateRGBColor(155, 89, 182)); // Purple fill

let bgFill1 = Api.CreateSolidFill(Api.CreateRGBColor(236, 240, 241)); // Light background
let bgFill2 = Api.CreateSolidFill(Api.CreateRGBColor(189, 195, 199)); // Medium background
let bgFill3 = Api.CreateSolidFill(Api.CreateRGBColor(44, 62, 80));    // Dark background

let stroke1 = Api.CreateStroke(2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(52, 152, 219))); // Blue stroke
let stroke2 = Api.CreateStroke(2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(46, 204, 113))); // Green stroke
let stroke3 = Api.CreateStroke(2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(155, 89, 182))); // Purple stroke

let formatScheme = Api.CreateThemeFormatScheme(
  [fill1, fill2, fill3], 
  [bgFill1, bgFill2, bgFill3], 
  [stroke1, stroke2, stroke3], 
  "Corporate Format Scheme"
);

// Create font scheme
let fontScheme = Api.CreateThemeFontScheme(
  "Segoe UI", "Segoe UI", "Segoe UI",     // Major fonts (headings)
  "Segoe UI", "Segoe UI", "Segoe UI",     // Minor fonts (body text)
  "Corporate Font Scheme"
);

// Create the complete theme
let theme = Api.CreateTheme("Corporate Theme", master, colorScheme, formatScheme, fontScheme);

// Apply theme to the entire presentation
presentation.ApplyTheme(theme);

// Add content to slide 1 to demonstrate the theme
slide1.RemoveAllObjects();

// Title shape
let titleShape1 = Api.CreateShape("rect", 8_000_000, 1_200_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
titleShape1.SetPosition(572_000, 500_000);
let titleContent1 = titleShape1.GetDocContent();
titleContent1.RemoveAllElements();
let titleParagraph1 = Api.CreateParagraph();
titleParagraph1.SetJc("center");
let titleRun1 = titleParagraph1.AddText("Corporate Presentation");
titleRun1.SetFontSize(32 * 2);
titleRun1.SetBold(true);
titleRun1.SetFontFamily("Segoe UI");
titleContent1.Push(titleParagraph1);
slide1.AddObject(titleShape1);

// Subtitle shape
let subtitleShape1 = Api.CreateShape("rect", 8_000_000, 800_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
subtitleShape1.SetPosition(572_000, 2_000_000);
let subtitleContent1 = subtitleShape1.GetDocContent();
subtitleContent1.RemoveAllElements();
let subtitleParagraph1 = Api.CreateParagraph();
subtitleParagraph1.SetJc("center");
let subtitleRun1 = subtitleParagraph1.AddText("Unified Brand Colors Applied");
subtitleRun1.SetFontSize(18 * 2);
subtitleRun1.SetFontFamily("Segoe UI");
subtitleContent1.Push(subtitleParagraph1);
slide1.AddObject(subtitleShape1);

// Add content to slide 2
slide2.RemoveAllObjects();

// Title for slide 2
let titleShape2 = Api.CreateShape("rect", 8_000_000, 1_000_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
titleShape2.SetPosition(572_000, 400_000);
let titleContent2 = titleShape2.GetDocContent();
titleContent2.RemoveAllElements();
let titleParagraph2 = Api.CreateParagraph();
titleParagraph2.SetJc("center");
let titleRun2 = titleParagraph2.AddText("Theme Colors in Action");
titleRun2.SetFontSize(28 * 2);
titleRun2.SetBold(true);
titleRun2.SetFontFamily("Segoe UI");
titleContent2.Push(titleParagraph2);
slide2.AddObject(titleShape2);

// Color demonstration shapes
let colorShapes = [
  { color: Api.CreateRGBColor(52, 152, 219), label: "Primary Blue" },
  { color: Api.CreateRGBColor(46, 204, 113), label: "Success Green" },
  { color: Api.CreateRGBColor(155, 89, 182), label: "Brand Purple" }
];

for (let i = 0; i < colorShapes.length; i++) {
  let colorFill = Api.CreateSolidFill(colorShapes[i].color);
  let colorShape = Api.CreateShape("rect", 2_000_000, 1_500_000, colorFill, Api.CreateStroke(0, Api.CreateNoFill()));
  colorShape.SetPosition(1_000_000 + (i * 2_500_000), 2_000_000);
  
  // Add label below each color
  let labelShape = Api.CreateShape("rect", 2_000_000, 600_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
  labelShape.SetPosition(1_000_000 + (i * 2_500_000), 3_800_000);
  let labelContent = labelShape.GetDocContent();
  labelContent.RemoveAllElements();
  let labelParagraph = Api.CreateParagraph();
  labelParagraph.SetJc("center");
  let labelRun = labelParagraph.AddText(colorShapes[i].label);
  labelRun.SetFontSize(14 * 2);
  labelRun.SetFontFamily("Segoe UI");
  labelContent.Push(labelParagraph);
  
  slide2.AddObject(colorShape);
  slide2.AddObject(labelShape);
}

// Add content to slide 3
slide3.RemoveAllObjects();

// Title for slide 3
let titleShape3 = Api.CreateShape("rect", 8_000_000, 1_000_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
titleShape3.SetPosition(572_000, 400_000);
let titleContent3 = titleShape3.GetDocContent();
titleContent3.RemoveAllElements();
let titleParagraph3 = Api.CreateParagraph();
titleParagraph3.SetJc("center");
let titleRun3 = titleParagraph3.AddText("Consistent Typography");
titleRun3.SetFontSize(28 * 2);
titleRun3.SetBold(true);
titleRun3.SetFontFamily("Segoe UI");
titleContent3.Push(titleParagraph3);
slide3.AddObject(titleShape3);

// Typography demonstration
let textShape = Api.CreateShape("rect", 7_000_000, 3_000_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
textShape.SetPosition(1_000_000, 1_800_000);
let textContent = textShape.GetDocContent();
textContent.RemoveAllElements();

// Different text styles using theme fonts
let styles = [
  { text: "Heading 1 - Segoe UI Bold", size: 24, bold: true },
  { text: "Heading 2 - Segoe UI Semibold", size: 20, bold: true },
  { text: "Body Text - Segoe UI Regular", size: 16, bold: false },
  { text: "Caption - Segoe UI Light", size: 12, bold: false }
];

for (let i = 0; i < styles.length; i++) {
  let textParagraph = Api.CreateParagraph();
  textParagraph.SetJc("left");
  textParagraph.SetSpacingAfter(300);
  let textRun = textParagraph.AddText(styles[i].text);
  textRun.SetFontSize(styles[i].size * 2);
  textRun.SetBold(styles[i].bold);
  textRun.SetFontFamily("Segoe UI");
  textContent.Push(textParagraph);
}

slide3.AddObject(textShape);
```
