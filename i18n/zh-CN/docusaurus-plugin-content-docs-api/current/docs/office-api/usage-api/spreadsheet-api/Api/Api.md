# Api

表示 Api 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| ActiveSheet | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回表示活动工作表的对象。 |
| AllComments | [ApiComment](../ApiComment/ApiComment.md)[] | 返回当前工作簿中的所有批注，包括所有工作表中的批注。 |
| Comments | [ApiComment](../ApiComment/ApiComment.md)[] | 返回与整个工作簿相关的所有批注。 |
| FreezePanes | [FreezePaneType](../Enumeration/FreezePaneType.md) | 返回或设置冻结窗格的类型。 |
| PivotTables | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | 返回所有数据透视表。 |
| ReferenceStyle | [ReferenceStyle](../Enumeration/ReferenceStyle.md) | 返回或设置引用样式。 |
| Selection | [ApiRange](../ApiRange/ApiRange.md) | 返回表示所选范围的对象。 |
| Sheets | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md)[] | 返回表示活动工作簿中所有工作表的 Sheets 集合。 |
| WorksheetFunction | [ApiWorksheetFunction](../ApiWorksheetFunction/ApiWorksheetFunction.md) | 返回表示函数列表的对象。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) \| null | 返回 ApiComment 对象的数组。 |
| [AddCustomFunction](./Methods/AddCustomFunction.md) | 无 | 创建新的自定义函数。函数参数和结果的描述使用 JSDoc 指定。JSDoc 中需要 *@customfunction* 标签。参数和结果可以指定为 *number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]* 类型。参数可以是必需的或可选的。用户还可以设置默认值。传递的函数可以是异步的（async 函数或返回 Promise 的函数）。在传递的函数内部，可以使用 *this.address* 访问执行计算的当前单元格地址。还可以使用 *this.args[0].address*、*this.args[1].address* 等访问函数参数的地址。此方法不用于 ONLYOFFICE Document Builder。请改用 AddCustomFunctionLibrary。 |
| [AddCustomFunctionLibrary](./Methods/AddCustomFunctionLibrary.md) | 无 | 注册新的自定义函数库（请参阅 **SetCustomFunctions** 插件方法）。函数参数和结果的描述使用 JSDoc 指定。JSDoc 中需要 *@customfunction* 标签。参数和结果可以指定为 *number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]* 类型。参数可以是必需的或可选的。用户还可以设置默认值。 |
| [AddDefName](./Methods/AddDefName.md) | boolean | 向单元格范围添加新名称。 |
| [AddSheet](./Methods/AddSheet.md) | 无 | 创建新工作表。新工作表将成为活动工作表。 |
| [CentimetersToPoints](./Methods/CentimetersToPoints.md) | number | 将厘米转换为磅。 |
| [ClearCustomFunctions](./Methods/ClearCustomFunctions.md) | boolean | 清除所有自定义函数。 |
| [CreateBlipFill](./Methods/CreateBlipFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建图片填充，使用所选图像作为对象背景应用于对象。 |
| [CreateBullet](./Methods/CreateBullet.md) | [ApiBullet](../ApiBullet/ApiBullet.md) | 使用 sSymbol 参数指定的字符或符号为段落创建项目符号。 |
| [CreateColorByName](./Methods/CreateColorByName.md) | [ApiColor](../ApiColor/ApiColor.md) | 从可用的颜色预设中选择创建颜色。 |
| [CreateColorFromRGB](./Methods/CreateColorFromRGB.md) | [ApiColor](../ApiColor/ApiColor.md) | 通过设置红、绿、蓝颜色分量的适当值来创建 RGB 颜色。 |
| [CreateCustomGeometry](./Methods/CreateCustomGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | 创建新的自定义几何图形。 |
| [CreateGradientStop](./Methods/CreateGradientStop.md) | [ApiGradientStop](../ApiGradientStop/ApiGradientStop.md) | 创建用于不同类型渐变的渐变光圈。 |
| [CreateLinearGradientFill](./Methods/CreateLinearGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建线性渐变填充，使用所选线性渐变作为对象背景应用于对象。 |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | 无 | 创建新的历史记录点。 |
| [CreateNoFill](./Methods/CreateNoFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建无填充并移除元素的填充。 |
| [CreateNumbering](./Methods/CreateNumbering.md) | [ApiBullet](../ApiBullet/ApiBullet.md) | 使用 numType 参数指定的编号字符或符号为段落创建项目符号。 |
| [CreateParagraph](./Methods/CreateParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 创建新段落。 |
| [CreatePatternFill](./Methods/CreatePatternFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建图案填充，使用所选图案作为对象背景应用于对象。 |
| [CreatePresetColor](./Methods/CreatePresetColor.md) | [ApiPresetColor](../ApiPresetColor/ApiPresetColor.md) | 从可用的颜色预设中选择创建颜色。 |
| [CreatePresetGeometry](./Methods/CreatePresetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) \| null | 使用可用的预设形状之一创建几何图形。 |
| [CreateRGBColor](./Methods/CreateRGBColor.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | 通过设置红、绿、蓝颜色分量的适当值来创建 RGB 颜色。 |
| [CreateRadialGradientFill](./Methods/CreateRadialGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建径向渐变填充，使用所选径向渐变作为对象背景应用于对象。 |
| [CreateRun](./Methods/CreateRun.md) | [ApiRun](../ApiRun/ApiRun.md) | 创建要插入到当前段落或表格中的新的较小文本块。 |
| [CreateSchemeColor](./Methods/CreateSchemeColor.md) | [ApiSchemeColor](../ApiSchemeColor/ApiSchemeColor.md) | 从可用的配色方案中选择创建复杂配色方案。 |
| [CreateSolidFill](./Methods/CreateSolidFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建纯色填充，使用所选纯色作为对象背景应用于对象。 |
| [CreateStroke](./Methods/CreateStroke.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | 创建为元素添加阴影的笔触。 |
| [CreateTextPr](./Methods/CreateTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 创建空的文本属性。 |
| [EmusToMillimeters](./Methods/EmusToMillimeters.md) | [mm](../Enumeration/mm.md) | 将英制度量单位 (EMU) 转换为毫米。 |
| [EmusToPoints](./Methods/EmusToPoints.md) | number | 将 EMU（英制度量单位）转换为磅。 |
| [Format](./Methods/Format.md) | string | 返回根据格式表达式中包含的指令格式化的类。 |
| [GetActiveSheet](./Methods/GetActiveSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回表示活动工作表的对象。 |
| [GetActiveWorkbook](./Methods/GetActiveWorkbook.md) | [ApiWorkbook](../ApiWorkbook/ApiWorkbook.md) | 返回表示活动工作簿的对象。 |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | 返回当前工作簿中的所有批注，包括所有工作表中的批注。 |
| [GetAllPivotTables](./Methods/GetAllPivotTables.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | 返回所有数据透视表。 |
| [GetCommentById](./Methods/GetCommentById.md) | [ApiComment](../ApiComment/ApiComment.md) | 通过 ID 从当前文档返回批注。 |
| [GetComments](./Methods/GetComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | 返回与整个工作簿相关的所有批注。 |
| [GetCore](./Methods/GetCore.md) | [ApiCore](../ApiCore/ApiCore.md) | 返回工作簿的核心属性接口。此方法用于查看或修改标准元数据，如标题、作者和关键字。 |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | 返回工作簿的自定义属性。 |
| [GetDefName](./Methods/GetDefName.md) | [ApiName](../ApiName/ApiName.md) | 根据范围名称返回 ApiName 对象。 |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | 返回文档信息：**Application** - 创建文档的应用程序。**CreatedRaw** - 文件创建的日期和时间。**Created** - 解析后的文件创建日期和时间。**LastModifiedRaw** - 文件最后修改的日期和时间。**LastModified** - 解析后的文件最后修改日期和时间。**LastModifiedBy** - 对文档进行最新更改的用户名称。**Authors** - 创建文件的人员。**Title** - 此属性可简化文档分类。**Tags** - 此属性可简化文档分类。**Subject** - 此属性可简化文档分类。**Comment** - 此属性可简化文档分类。 |
| [GetFreezePanesType](./Methods/GetFreezePanesType.md) | [FreezePaneType](../Enumeration/FreezePaneType.md) | 返回冻结窗格类型。 |
| [GetFullName](./Methods/GetFullName.md) | string | 返回当前打开文件的完整名称。 |
| [GetLocale](./Methods/GetLocale.md) | number | 返回当前区域设置 ID。 |
| [GetMailMergeData](./Methods/GetMailMergeData.md) | string[][] | 返回邮件合并数据。 |
| [GetPivotByName](./Methods/GetPivotByName.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | 根据名称返回数据透视表，如果不存在则返回 null。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 根据范围引用返回 ApiRange 对象。 |
| [GetReferenceStyle](./Methods/GetReferenceStyle.md) | [ReferenceStyle](../Enumeration/ReferenceStyle.md) | 返回单元格引用样式。 |
| [GetSelection](./Methods/GetSelection.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示所选范围的对象。 |
| [GetSheet](./Methods/GetSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) \| null | 返回表示工作表的对象。 |
| [GetSheets](./Methods/GetSheets.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md)[] | 返回表示活动工作簿中所有工作表的工作表集合。 |
| [GetThemesColors](./Methods/GetThemesColors.md) | string[] | 返回电子表格所有可用主题颜色的列表。 |
| [GetWorksheetFunction](./Methods/GetWorksheetFunction.md) | [ApiWorksheetFunction](../ApiWorksheetFunction/ApiWorksheetFunction.md) | 返回 ApiWorksheetFunction 对象。 |
| [InchesToPoints](./Methods/InchesToPoints.md) | number | 将英寸转换为磅。 |
| [InsertPivotExistingWorksheet](./Methods/InsertPivotExistingWorksheet.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | 将指定的数据透视表插入到现有工作表中。 |
| [InsertPivotNewWorksheet](./Methods/InsertPivotNewWorksheet.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | 将指定的数据透视表插入到新工作表中。 |
| [Intersect](./Methods/Intersect.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示两个或多个范围的矩形交集的 ApiRange 对象。如果指定了来自不同工作表的一个或多个范围，将返回错误。 |
| [LinesToPoints](./Methods/LinesToPoints.md) | number | 将行转换为磅（1 行 = 12 磅）。 |
| [MillimetersToEmus](./Methods/MillimetersToEmus.md) | [EMU](../Enumeration/EMU.md) | 将毫米转换为英制度量单位 (EMU)。结果为整数值。 |
| [MillimetersToPixels](./Methods/MillimetersToPixels.md) | number | 将毫米转换为像素。 |
| [MillimetersToPoints](./Methods/MillimetersToPoints.md) | number | 将毫米转换为磅。 |
| [PicasToPoints](./Methods/PicasToPoints.md) | number | 将派卡转换为磅。 |
| [PixelsToEmus](./Methods/PixelsToEmus.md) | number | 将像素转换为 EMU（英制度量单位）。 |
| [PixelsToPoints](./Methods/PixelsToPoints.md) | number | 将像素转换为磅。 |
| [PointsToCentimeters](./Methods/PointsToCentimeters.md) | number | 将磅转换为厘米。 |
| [PointsToEmus](./Methods/PointsToEmus.md) | number | 将磅转换为 EMU（英制度量单位）。 |
| [PointsToInches](./Methods/PointsToInches.md) | number | 将磅转换为英寸。 |
| [PointsToLines](./Methods/PointsToLines.md) | number | 将磅转换为行（1 行 = 12 磅）。 |
| [PointsToMillimeters](./Methods/PointsToMillimeters.md) | number | 将磅转换为毫米。 |
| [PointsToPicas](./Methods/PointsToPicas.md) | number | 将磅转换为派卡（1 派卡 = 12 磅）。 |
| [PointsToPixels](./Methods/PointsToPixels.md) | number | 将磅转换为像素。 |
| [PointsToTwips](./Methods/PointsToTwips.md) | number | 将磅转换为缇。 |
| [RecalculateAllFormulas](./Methods/RecalculateAllFormulas.md) | boolean | 重新计算活动工作簿中的所有公式。 |
| [RefreshAllPivots](./Methods/RefreshAllPivots.md) | 无 | 刷新所有数据透视表。 |
| [RemoveCustomFunction](./Methods/RemoveCustomFunction.md) | boolean | 删除自定义函数。 |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | 用字符串数组中的相应文本替换选区中的每个段落（或单元格中的文本）。 |
| [Save](./Methods/Save.md) | 无 | 保存对指定文档的更改。 |
| [SetFreezePanesType](./Methods/SetFreezePanesType.md) | 无 | 设置冻结窗格的类型。 |
| [SetLocale](./Methods/SetLocale.md) | 无 | 设置文档的区域设置。 |
| [SetReferenceStyle](./Methods/SetReferenceStyle.md) | 无 | 设置单元格引用样式。 |
| [SetThemeColors](./Methods/SetThemeColors.md) | boolean | 设置当前电子表格的主题颜色。 |
| [TwipsToPoints](./Methods/TwipsToPoints.md) | number | 将缇转换为磅。 |
| [attachEvent](./Methods/attachEvent.md) | 无 | 订阅指定事件，并在事件触发时调用回调函数。 |
| [detachEvent](./Methods/detachEvent.md) | 无 | 取消订阅指定事件。 |
