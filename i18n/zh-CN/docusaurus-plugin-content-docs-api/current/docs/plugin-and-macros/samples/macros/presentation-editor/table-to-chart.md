# 表格转换图表

由选定的表格数据生成图表。

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
    }

    processPresentation();
})();
```

使用方法：[获取演示文稿](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md)，[获取幻灯片数量](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md)，[按索引获取幻灯片](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md)，[获取所有图形](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md)，[获取类型](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetClassType.md)，[删除图形](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/Delete.md)，[获取表格行](/docs/office-api/usage-api/presentation-api/ApiTable/Methods/GetRow.md)，[获取单元格数量](/docs/office-api/usage-api/presentation-api/ApiTableRow/Methods/GetCellsCount.md)，[获取单元格](/docs/office-api/usage-api/presentation-api/ApiTableRow/Methods/GetCell.md)，[获取内容](/docs/office-api/usage-api/presentation-api/ApiTableCell/Methods/GetContent.md)，[创建图表](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateChart.md)，[设置横轴标题](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/SetHorAxisTitle.md)，[设置图例位置](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/SetLegendPos.md)，[添加对象](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)

## 结果

![表格转换图表](/assets/images/plugins/table-to-chart.png#gh-light-mode-only)
![表格转换图表](/assets/images/plugins/table-to-chart.dark.png#gh-dark-mode-only)
