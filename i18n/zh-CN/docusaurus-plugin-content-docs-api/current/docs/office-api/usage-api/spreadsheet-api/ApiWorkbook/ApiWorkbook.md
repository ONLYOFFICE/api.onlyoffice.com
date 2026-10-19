# ApiWorkbook

表示当前活动工作簿的类

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| TableStyles | ApiTableStyles | 返回工作簿的表格样式集合。 |

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [BreakLink](./Methods/BreakLink.md) | boolean | 断开与指定工作簿的链接：引用该工作簿的公式将替换为其当前值，并从工作簿中移除该链接。 |
| [Calculate](./Methods/Calculate.md) | boolean | 在整个工作簿中重新计算需要重新计算的单元格（已更改、已添加或易失性单元格）。强制执行原本会推迟到宏结束时才进行的重新计算，以便在同一宏中读取最新的公式结果。 |
| [GetActiveChart](./Methods/GetActiveChart.md) | [ApiChart](../ApiChart/ApiChart.md) \| null | 返回工作簿的活动图表。 |
| [GetActiveSheet](./Methods/GetActiveSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回工作簿的活动工作表。 |
| [GetAllPivotTables](./Methods/GetAllPivotTables.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | 返回工作簿中的所有数据透视表。 |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | 返回工作簿的自定义属性。 |
| [GetDrawingsByName](./Methods/GetDrawingsByName.md) | [Drawing](../Enumeration/Drawing.md)[] | 从工作簿返回具有指定名称的绘图。 |
| [GetLinkSources](./Methods/GetLinkSources.md) | string[] | 返回注册为当前工作簿外部链接的其他工作簿的路径，包括已不再被任何公式使用的链接。 |
| [GetName](./Methods/GetName.md) | string | 返回工作簿的名称。 |
| [GetSheets](./Methods/GetSheets.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md)[] | 返回表示工作簿中所有工作表的工作表集合。 |
| [GetTheme](./Methods/GetTheme.md) | [ApiTheme](../ApiTheme/ApiTheme.md) | 返回工作簿的主题。 |
| [Redraw](./Methods/Redraw.md) | boolean | 重绘编辑器屏幕，使宏已做出的更改立即可见，而无需等待宏执行完毕。仅可在异步代码中观察到效果。仅重绘而不重新计算：如果公式结果必须是最新的，请先调用 [ApiWorkbook#Calculate](../ApiWorkbook/Methods/Calculate.md)。 |
| [Save](./Methods/Save.md) | 无 | 保存对指定文档的更改。 |
