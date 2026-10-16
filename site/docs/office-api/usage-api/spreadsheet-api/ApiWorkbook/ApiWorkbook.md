# ApiWorkbook

Class representing the currently active workbook

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| TableStyles | ApiTableStyles | Returns the collection of table styles of the workbook. |

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [BreakLink](./Methods/BreakLink.md) | boolean | Breaks the link to the specified workbook: the formulas that refer to it are replaced with their current values, and the link is removed from the workbook. |
| [Calculate](./Methods/Calculate.md) | boolean | Recalculates the cells that need recalculation (changed, added or volatile) across the workbook. Forces the recalc that is otherwise deferred until a macro finishes, so up-to-date formula results can be read within the same macro. |
| [GetActiveChart](./Methods/GetActiveChart.md) | [ApiChart](../ApiChart/ApiChart.md) \| null | Returns the active chart of the workbook. |
| [GetActiveSheet](./Methods/GetActiveSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the active sheet of the workbook. |
| [GetAllPivotTables](./Methods/GetAllPivotTables.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | Returns all pivot tables in the workbook. |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | Returns the custom properties of the workbook. |
| [GetDrawingsByName](./Methods/GetDrawingsByName.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns drawings with the specified names from the workbook. |
| [GetLinkSources](./Methods/GetLinkSources.md) | string[] | Returns the paths of the other workbooks registered as external links of the current workbook, including links no formula uses any longer. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the workbook. |
| [GetSheets](./Methods/GetSheets.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md)[] | Returns a sheet collection that represents all the sheets in the workbook. |
| [GetTheme](./Methods/GetTheme.md) | [ApiTheme](../ApiTheme/ApiTheme.md) | Returns the theme of the workbook. |
| [Redraw](./Methods/Redraw.md) | boolean | Redraws the editor screen, making the changes already made by a macro visible without waiting for it to finish. Observable from asynchronous code only. Repaints without recalculating: call [ApiWorkbook#Calculate](../ApiWorkbook/Methods/Calculate.md) first if formula results must be up to date. |
| [Save](./Methods/Save.md) | None | Saves changes to the specified document. |
