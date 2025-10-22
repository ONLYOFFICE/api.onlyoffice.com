# addChart

This function creates a chart of the specified type from the given range or the selected range.

## Prompts

- Create a bar chart from the current selection
- Create a normal line chart from the current selection
- Create a pie chart from range A1:B10
- Create a chart with title "Sales Overview"

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "addChart";
func.params = [
    "range (string, optional): cell range with data for chart (e.g., 'A1:D10'). If omitted, uses current selection",
    "chartType (string, optional): type of chart - bar, barStacked, barStackedPercent, bar3D, barStacked3D, barStackedPercent3D, barStackedPercent3DPerspective, horizontalBar, horizontalBarStacked, horizontalBarStackedPercent, horizontalBar3D, horizontalBarStacked3D, horizontalBarStackedPercent3D, lineNormal, lineStacked, lineStackedPercent, line3D, pie, pie3D, doughnut, scatter, stock, area, areaStacked, areaStackedPercent Default: bar",
    "title (string, optional): chart title text"
];

func.examples = [
    "To create a bar chart from current selection, respond:" +
    "[functionCalling (addChart)]: {}",

    "To create a line chart from current selection, respond:" +
    "[functionCalling (addChart)]: {\"chartType\": \"line\"}",

    "To create a pie chart from specific range, respond:" +
    "[functionCalling (addChart)]: {\"range\": \"A1:B10\", \"chartType\": \"pie\"}",

    "To create a chart with title, respond:" +
    "[functionCalling (addChart)]: {\"title\": \"Sales Overview\"}"
];
```

### Parameters

| Name      | Type   | Example          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------|--------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| range     | string | "A1:D10"         | The cell range containing the data for the chart. If omitted, the selected range is used.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| chartType | string | "bar3D"          | The chart type can be "bar", "barStacked", "barStackedPercent", "bar3D", "barStacked3D", "barStackedPercent3D", "barStackedPercent3DPerspective", "horizontalBar", "horizontalBarStacked", "horizontalBarStackedPercent", "horizontalBar3D", "horizontalBarStacked3D", "horizontalBarStackedPercent3D", "lineNormal", "lineStacked", "lineStackedPercent", "line3D", "pie", "pie3D", "doughnut", "scatter", "stock", "area", "areaStacked", "areaStackedPercent". The default value is "bar". |
| title     | string | "Sales Overview" | The chart title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.range = params.range;
    Asc.scope.chartType = params.chartType || "bar";
    Asc.scope.title = params.title;

    await Asc.Editor.callCommand(function(){
        let ws = Api.GetActiveSheet();
        let chartRange;

        if (Asc.scope.range) {
            chartRange = Asc.scope.range;
        } else {
            let selection = Api.GetSelection();
            chartRange = selection.GetAddress(true, true, "xlA1", false);
        }

        let range = ws.GetRange(chartRange);
        let fromRow = range.GetRow() + 3;
        let fromCol = range.GetCol();

        let widthEMU = 130 * 36000;
        let heightEMU = 80 * 36000;

        let chart = ws.AddChart(
            chartRange,
            true,
            Asc.scope.chartType,
            2,
            widthEMU,
            heightEMU,
            fromCol,
            0,
            fromRow,
            0
        );
        if (chart && Asc.scope.title) {
            chart.SetTitle(Asc.scope.title, 14);
        }
    });
};

return func;
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetAddress](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetAddress.md), [AddChart](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/AddChart.md), [SetTitle](/docs/office-api/usage-api/spreadsheet-api/ApiChart/Methods/SetTitle.md), [GetRow](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md), [GetCol](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCol.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/spreadsheets-editor/addChart.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/spreadsheets-editor/addChart.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
