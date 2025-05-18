# Table To Chart

Generates a chart based on selected table data.

```ts
(function () {
    let presentation = Api.GetPresentation();
    function processPresentation(startIndex = 0) {
        if (startIndex >= presentation.GetSlidesCount()) {
            return;
        }
        let slide = presentation.GetSlideByIndex(startIndex);
        processSlide(slide);
        processPresentation(startIndex + 1);
    }

    function processSlide(slide) {
        let drawings = slide.GetAllDrawings();
        processDrawings(slide, drawings);
    }

    function processDrawings(slide, drawings, index = 0) {
        if (index >= drawings.length) {
            return;
        }
        let drawing = drawings[index];
        if (drawing.GetClassType && drawing.GetClassType() === "table") {
            let tableData = extractTableData(drawing);
            drawing.Delete();

            if (tableData.length > 0) {
                createChartFromTable(slide, tableData);
            }
        }
        processDrawings(slide, drawings, index + 1);
    }

    function extractTableData(table) {
        let tableData = [];
        function processRows(rowIndex = 0) {
            let currentRow = table.GetRow(rowIndex);
            if (!currentRow) return;
            let rowData = extractRowData(currentRow);
            tableData.push(rowData);

            processRows(rowIndex + 1);
        }

        function extractRowData(row) {
            let cellCount = row.GetCellsCount();
            let rowData = [];
            function processCells(cellIndex = 0) {
                if (cellIndex >= cellCount) return;

                let cell = row.GetCell(cellIndex);
                let cellContent = cell.GetContent();
                let cellText = cellContent.GetText();
                rowData.push(cellText);

                processCells(cellIndex + 1);
            }

            processCells();
            return rowData;
        }

        processRows();
        return tableData;
    }
    function createChartFromTable(slide, tableData) {
        if (tableData.length < 2) {
            console.error("Insufficient data for chart creation");
            return;
        }

        let headers = tableData[0];
        let values = tableData.slice(1);

        let series = [];
        let categories = [];

        for (let i = 0; i < values.length; i++) {
            if (values[i].length > 0) {
                categories.push(values[i][0]);
            }
        }

        for (let colIndex = 1; colIndex < headers.length; colIndex++) {
            let seriesData = [];
            for (let rowIndex = 0; rowIndex < values.length; rowIndex++) {
                if (values[rowIndex].length > colIndex) {
                    let val = parseFloat(values[rowIndex][colIndex]);
                    seriesData.push(isNaN(val) ? 0 : val);
                } else {
                    seriesData.push(0);
                }
            }
            series.push(seriesData);
        }

        let seriesNames = headers.slice(1);

        let chart = Api.CreateChart(
            "bar3D",
            series,
            seriesNames,
            categories,
            4051300,
            2347595,
            24,
            ["0", "0.00"]
        );

        if (chart.SetHorAxisTitle) {
            chart.SetHorAxisTitle(headers[0] || "Categories", 10);
        }

        if (chart.SetLegendPos) {
            chart.SetLegendPos("bottom");
        }

        slide.AddObject(chart);
        console.log("Chart created successfully");
    }

    processPresentation();

    console.log("Macro execution completed successfully.");
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllDrawings](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetAllDrawings.md), [GetClassType](../../../../office-api/usage-api/presentation-api/ApiBullet/Methods/GetClassType.md), [Delete](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/Delete.md), [GetRow](../../../../office-api/usage-api/presentation-api/ApiTable/Methods/GetRow.md), [GetCellsCount](../../../../office-api/usage-api/presentation-api/ApiTableRow/Methods/GetCellsCount.md), [GetCell](../../../../office-api/usage-api/presentation-api/ApiTableRow/Methods/GetCell.md), [GetContent](../../../../office-api/usage-api/presentation-api/ApiTableCell/Methods/GetContent.md), [GetText](../../../../office-api/usage-api/presentation-api/ApiComment/Methods/GetText.md), [CreateChart](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateChart.md), [SetHorAxisTitle](../../../../office-api/usage-api/presentation-api/ApiChart/Methods/SetHorAxisTitle.md), [SetLegendPos](../../../../office-api/usage-api/presentation-api/ApiChart/Methods/SetLegendPos.md), [AddObject](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/AddObject.md)

## Result

![TableToChart](/assets/images/plugins/table-to-chart.png#gh-light-mode-only)
![TableToChart](/assets/images/plugins/table-to-chart.dark.png#gh-dark-mode-only)

