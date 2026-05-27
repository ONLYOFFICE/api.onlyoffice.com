# ApiWorksheet

表示 ApiWorksheet 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Active | number | 激活当前工作表。 |
| ActiveCell | [ApiRange](../ApiRange/ApiRange.md) | 返回表示活动单元格的对象。 |
| AllProtectedRanges | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md)[] | 返回当前工作表中的所有受保护区域。 |
| AutoFilter | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) | 返回表示所有已应用自动筛选的 AutoFilter |
| BottomMargin | number | 返回或设置以磅为单位的工作表底边距大小。 |
| Cells | [ApiRange](../ApiRange/ApiRange.md) | 返回表示工作表上所有单元格的 ApiRange（不仅限于当前正在使用的单元格）。 |
| Cols | [ApiRange](../ApiRange/ApiRange.md) | 返回表示列区域中所有单元格的 ApiRange。 |
| Comments | [ApiComment](../ApiComment/ApiComment.md)[] | 返回当前工作表中的所有批注。 |
| Defnames | [ApiName](../ApiName/ApiName.md)[] | 返回 ApiName 对象数组。 |
| FreezePanes | [ApiFreezePanes](../ApiFreezePanes/ApiFreezePanes.md) | 返回当前工作表的冻结窗格。 |
| Index | number | 返回工作表索引。 |
| LeftMargin | number | 返回或设置以磅为单位的工作表左边距大小。 |
| Name | string | 返回或设置活动工作表的名称。 |
| PageOrientation | [PageOrientation](../Enumeration/PageOrientation.md) | 返回或设置页面方向。 |
| PivotTables | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | 返回当前工作表中的所有数据透视表。 |
| PrintGridlines | boolean | 返回或设置页面的 PrintGridlines 属性。 |
| PrintHeadings | boolean | 返回或设置页面的 PrintHeadings 属性。 |
| RightMargin | number | 返回或设置以磅为单位的工作表右边距大小。 |
| Rows | [ApiRange](../ApiRange/ApiRange.md) | 返回表示行区域中所有单元格的 ApiRange。 |
| Selection | [ApiRange](../ApiRange/ApiRange.md) | 返回表示所选范围的对象。 |
| TopMargin | number | 返回或设置以磅为单位的工作表顶边距大小。 |
| UsedRange | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定工作表上已用区域的 ApiRange。 |
| Visible | boolean | 返回或设置工作表的可见性状态。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddChart](./Methods/AddChart.md) | [ApiChart](../ApiChart/ApiChart.md) \| null | 从当前工作表的选定数据范围创建指定类型的图表。 |
| [AddDefName](./Methods/AddDefName.md) | boolean | 向当前工作表添加新名称。 |
| [AddDrawing](./Methods/AddDrawing.md) | boolean | 将分离的绘图对象（例如 ApiDrawing.Copy 返回的副本）添加到工作表的指定锚点。 |
| [AddImage](./Methods/AddImage.md) | [ApiImage](../ApiImage/ApiImage.md) | 使用指定的参数向当前工作表添加图像。 |
| [AddListObject](./Methods/AddListObject.md) | [ApiListObject](../ApiListObject/ApiListObject.md) \| null | 向工作表添加格式化表格并返回 ApiListObject 对象。 |
| [AddOleObject](./Methods/AddOleObject.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) | 使用指定的参数向当前工作表添加 OLE 对象。 |
| [AddProtectedRange](./Methods/AddProtectedRange.md) | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md) \| null | 从当前工作表的选定数据区域创建指定类型的受保护区域。 |
| [AddShape](./Methods/AddShape.md) | [ApiShape](../ApiShape/ApiShape.md) | 使用指定的参数向当前工作表添加形状。 |
| [AddWordArt](./Methods/AddWordArt.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | 使用指定的参数向当前工作表添加艺术字对象。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前工作表。 |
| [FormatAsTable](./Methods/FormatAsTable.md) | boolean | 将当前工作表中选定的单元格范围格式化为表格（第一行格式化为标题行）。 |
| [GetActiveCell](./Methods/GetActiveCell.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示活动单元格的对象。 |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | 返回当前工作表中的所有图表。 |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回当前工作表中的所有绘图。 |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | 返回当前工作表中的所有图像。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | 返回当前工作表中的所有 OLE 对象。 |
| [GetAllPivotTables](./Methods/GetAllPivotTables.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | 返回当前工作表中的所有数据透视表。 |
| [GetAllProtectedRanges](./Methods/GetAllProtectedRanges.md) | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md)[] \| null | 返回当前工作表中的所有受保护区域。 |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 返回当前工作表中的所有形状。 |
| [GetAutoFilter](./Methods/GetAutoFilter.md) | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) | 返回表示工作表自动筛选的 ApiAutoFilter 对象实例。 |
| [GetBottomMargin](./Methods/GetBottomMargin.md) | number | 返回工作表的底边距。 |
| [GetCells](./Methods/GetCells.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示工作表上所有单元格的 ApiRange（不仅限于当前正在使用的单元格）。 |
| [GetCols](./Methods/GetCols.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示列区域中所有单元格的 ApiRange 对象。 |
| [GetComments](./Methods/GetComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | 返回当前工作表中的所有批注。 |
| [GetCustomXmlParts](./Methods/GetCustomXmlParts.md) | [ApiCustomXmlParts](../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null | 检索与当前工作表关联的自定义 XML 管理器。 |
| [GetDefName](./Methods/GetDefName.md) | [ApiName](../ApiName/ApiName.md) \| null | 按工作表名称返回 ApiName 对象。 |
| [GetDefNames](./Methods/GetDefNames.md) | [ApiName](../ApiName/ApiName.md)[] | 返回 ApiName 对象数组。 |
| [GetFreezePanes](./Methods/GetFreezePanes.md) | [ApiFreezePanes](../ApiFreezePanes/ApiFreezePanes.md) | 返回当前工作表的冻结窗格。 |
| [GetIndex](./Methods/GetIndex.md) | number | 返回工作表索引。 |
| [GetLeftMargin](./Methods/GetLeftMargin.md) | number | 返回工作表的左边距。 |
| [GetListObjects](./Methods/GetListObjects.md) | [ApiListObject](../ApiListObject/ApiListObject.md)[] | 返回表示工作表上格式化表格的 ApiListObject 对象数组。 |
| [GetName](./Methods/GetName.md) | string | 返回工作表名称。 |
| [GetPageOrientation](./Methods/GetPageOrientation.md) | [PageOrientation](../Enumeration/PageOrientation.md) | 返回页面方向。 |
| [GetPivotByName](./Methods/GetPivotByName.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | 按名称从当前工作表返回数据透视表，如果不存在则返回 null。 |
| [GetPrintGridlines](./Methods/GetPrintGridlines.md) | boolean | 返回页面 PrintGridlines 属性，该属性指定是否必须打印当前工作表网格线。 |
| [GetPrintHeadings](./Methods/GetPrintHeadings.md) | boolean | 返回页面 PrintHeadings 属性，该属性指定是否必须打印当前工作表的行/列标题。 |
| [GetProtectedRange](./Methods/GetProtectedRange.md) | [ApiProtectedRange](../ApiProtectedRange/ApiProtectedRange.md) \| null | 按标题返回受保护区域对象。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示当前工作表选定范围的对象。可以是单个单元格 - **A1**，或单元格 |
| [GetRangeByNumber](./Methods/GetRangeByNumber.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回使用 **行/列** 坐标进行单元格选择的当前工作表选定区域的对象。 |
| [GetRightMargin](./Methods/GetRightMargin.md) | number | 返回工作表的右边距。 |
| [GetRows](./Methods/GetRows.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示行区域中所有单元格的 ApiRange 对象。 |
| [GetSelectedDrawings](./Methods/GetSelectedDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回当前工作表中选定的绘图。 |
| [GetSelectedShapes](./Methods/GetSelectedShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 返回当前工作表中选定的形状。 |
| [GetSelection](./Methods/GetSelection.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示所选范围的对象。 |
| [GetTopMargin](./Methods/GetTopMargin.md) | number | 返回工作表的顶边距。 |
| [GetUsedRange](./Methods/GetUsedRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定工作表上已用区域的 ApiRange 对象。 |
| [GetVisible](./Methods/GetVisible.md) | boolean | 返回工作表的可见性状态。 |
| [Move](./Methods/Move.md) | 无 | 将当前工作表移动到工作簿中的另一个位置。 |
| [Paste](./Methods/Paste.md) | 无 | 将剪贴板的内容粘贴到当前工作表。 |
| [RefreshAllPivots](./Methods/RefreshAllPivots.md) | 无 | 刷新当前工作表上的所有数据透视表。 |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | boolean | 用新图像替换当前图像。 |
| [SetActive](./Methods/SetActive.md) | boolean | 激活当前工作表。 |
| [SetBottomMargin](./Methods/SetBottomMargin.md) | boolean | 设置工作表的底边距。 |
| [SetColumnWidth](./Methods/SetColumnWidth.md) | boolean | 设置指定列的宽度。 |
| [SetDisplayGridlines](./Methods/SetDisplayGridlines.md) | boolean | 指定是否必须显示当前工作表网格线。 |
| [SetDisplayHeadings](./Methods/SetDisplayHeadings.md) | boolean | 指定是否必须显示当前工作表的行/列标题。 |
| [SetHyperlink](./Methods/SetHyperlink.md) | boolean | 向指定范围添加超链接。 |
| [SetLeftMargin](./Methods/SetLeftMargin.md) | boolean | 设置工作表的左边距。 |
| [SetName](./Methods/SetName.md) | 无 | 为当前活动工作表设置名称。 |
| [SetPageOrientation](./Methods/SetPageOrientation.md) | boolean | 设置页面方向。 |
| [SetPrintGridlines](./Methods/SetPrintGridlines.md) | boolean | 指定是否必须打印当前工作表网格线。 |
| [SetPrintHeadings](./Methods/SetPrintHeadings.md) | boolean | 指定是否必须打印当前工作表的行/列标题。 |
| [SetRightMargin](./Methods/SetRightMargin.md) | boolean | 设置工作表的右边距。 |
| [SetRowHeight](./Methods/SetRowHeight.md) | boolean | 设置以磅为单位的指定行的高度。 |
| [SetTopMargin](./Methods/SetTopMargin.md) | boolean | 设置工作表的顶边距。 |
| [SetVisible](./Methods/SetVisible.md) | boolean | 设置工作表的可见性状态。 |
