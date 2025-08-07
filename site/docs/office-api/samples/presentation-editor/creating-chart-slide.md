# Creating chart slide

Create a slide with a chart for data visualization:

- get the first slide in the current presentation ([Api/GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [ApiPresentation/GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md));
- set the slide background color ([Api/CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [Api/CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [ApiSlide/SetBackground](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md));
- create and position the slide title ([Api/CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [ApiShape/SetPosition](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/SetPosition.md), [ApiShape/GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md));
- create a chart with data series ([Api/CreateChart](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateChart.md), [ApiChart/SetPosition](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/SetPosition.md), [ApiChart/SetSize](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/SetSize.md));
- format chart appearance ([ApiChart/SetSeriesFill](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/SetSeriesFill.md), [ApiChart/SetLegendPos](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/SetLegendPos.md), [ApiChart/SetShowDataLabels](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/SetShowDataLabels.md));
- set chart axis labels ([ApiChart/SetHorAxisTitle](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/SetHorAxisTitle.md), [ApiChart/SetVerAxisTitle](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/SetVerAxisTitle.md));
- add all elements to the slide ([ApiSlide/AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)).

```ts editor-pptx
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

// Set white background color
let backgroundColor = Api.CreateRGBColor(255, 255, 255);
let backgroundFill = Api.CreateSolidFill(backgroundColor);
slide.SetBackground(backgroundFill);

// Create title shape
let titleShape = Api.CreateShape("rect", 8_000_000, 1_000_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
titleShape.SetPosition(572_000, 400_000);

// Get title content and clear it
let titleContent = titleShape.GetDocContent();
titleContent.RemoveAllElements();

// Create title paragraph
let titleParagraph = Api.CreateParagraph();
titleParagraph.SetJc("center");
let titleRun = titleParagraph.AddText("Quarterly Revenue Analysis");

// Format title text (28pt, Bold, Center)
titleRun.SetFontSize(28 * 2); // Font size in half-points
titleRun.SetBold(true);
titleRun.SetFontFamily("Arial");
let titleColor = Api.CreateRGBColor(51, 51, 51); // Dark gray for title
let titleFill = Api.CreateSolidFill(titleColor);
titleRun.SetFill(titleFill);

titleContent.Push(titleParagraph);
slide.AddObject(titleShape);

// Define chart data
let chartData = [
  [125000, 142000, 158000, 175000], // Revenue
  [85000, 92000, 98000, 105000],    // Expenses
  [40000, 50000, 60000, 70000]     // Profit
];

let seriesNames = ["Revenue", "Expenses", "Profit"];
let categories = ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"];

// Create column chart
let chart = Api.CreateChart("bar", chartData, seriesNames, categories, 6_500_000, 3_500_000, 24, ["$#,##0", "$#,##0", "$#,##0"]);

// Position chart in the center-right area of the slide
chart.SetPosition(1_500_000, 1_800_000);

// Set chart colors
let revenueColor = Api.CreateSolidFill(Api.CreateRGBColor(54, 96, 146)); // Blue
let expensesColor = Api.CreateSolidFill(Api.CreateRGBColor(192, 80, 77)); // Red
let profitColor = Api.CreateSolidFill(Api.CreateRGBColor(79, 129, 89));   // Green

chart.SetSeriesFill(revenueColor, 0, false);
chart.SetSeriesFill(expensesColor, 1, false);
chart.SetSeriesFill(profitColor, 2, false);

// Configure chart appearance
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);

// Set axis titles
chart.SetHorAxisTitle("Quarter", 14);
chart.SetVerAxisTitle("Amount ($)", 14);

// Set chart title
chart.SetTitle("Financial Performance by Quarter", 16);

// Add chart to slide
slide.AddObject(chart);

// Create description text shape
let descShape = Api.CreateShape("rect", 6_000_000, 1_200_000, Api.CreateNoFill(), Api.CreateStroke(0, Api.CreateNoFill()));
descShape.SetPosition(1_000_000, 5_600_000);

// Get description content and clear it
let descContent = descShape.GetDocContent();
descContent.RemoveAllElements();

// Create description paragraph
let descParagraph = Api.CreateParagraph();
descParagraph.SetJc("left");
let descRun = descParagraph.AddText("The chart shows steady growth across all quarters, with revenue increasing by 40% and profit growing by 75% year-over-year.");

// Format description text (12pt, Regular)
descRun.SetFontSize(12 * 2); // Font size in half-points
descRun.SetBold(false);
descRun.SetFontFamily("Arial");
let descColor = Api.CreateRGBColor(102, 102, 102); // Gray for description
let descFill = Api.CreateSolidFill(descColor);
descRun.SetFill(descFill);

descContent.Push(descParagraph);
slide.AddObject(descShape);
```
