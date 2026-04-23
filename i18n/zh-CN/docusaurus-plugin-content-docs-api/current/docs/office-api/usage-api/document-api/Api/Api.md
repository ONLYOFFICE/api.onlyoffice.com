# Api

表示 Api 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | 向指定的文档元素或 Runs 数组添加批注。 |
| [AutoColor](./Methods/AutoColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 创建自动颜色。 |
| [CentimetersToPoints](./Methods/CentimetersToPoints.md) | number | 将厘米转换为磅。 |
| [ConvertDocument](./Methods/ConvertDocument.md) | string | 将文档转换为 Markdown 或 HTML 文本。 |
| [CreateBlipFill](./Methods/CreateBlipFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建图片填充，使用所选图像作为对象背景应用于对象。 |
| [CreateBlockLvlSdt](./Methods/CreateBlockLvlSdt.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | 创建新的块级容器。 |
| [CreateChart](./Methods/CreateChart.md) | [ApiChart](../ApiChart/ApiChart.md) | 使用指定的参数创建图表。 |
| [CreateCheckBoxContentControl](./Methods/CreateCheckBoxContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 创建复选框内容控件。 |
| [CreateComboBoxContentControl](./Methods/CreateComboBoxContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 使用给定的选项列表创建新的组合框容器。 |
| [CreateCustomGeometry](./Methods/CreateCustomGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | 创建新的自定义几何图形。 |
| [CreateDatePickerContentControl](./Methods/CreateDatePickerContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 创建新的日期选择器内容控件。 |
| [CreateDropDownListContentControl](./Methods/CreateDropDownListContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 使用给定的选项列表创建新的下拉列表容器。 |
| [CreateGradientStop](./Methods/CreateGradientStop.md) | [ApiGradientStop](../ApiGradientStop/ApiGradientStop.md) | 创建用于不同类型渐变的渐变光圈。 |
| [CreateGroup](./Methods/CreateGroup.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | 将一组绘图对象进行分组。 |
| [CreateHyperlink](./Methods/CreateHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) | 创建要插入到当前段落或表格中的新超链接文本块。 |
| [CreateImage](./Methods/CreateImage.md) | [ApiImage](../ApiImage/ApiImage.md) | 使用指定的参数创建图像。 |
| [CreateInlineLvlSdt](./Methods/CreateInlineLvlSdt.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 创建新的内联容器。 |
| [CreateLinearGradientFill](./Methods/CreateLinearGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建线性渐变填充，使用所选线性渐变作为对象背景应用于对象。 |
| [CreateNoFill](./Methods/CreateNoFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建无填充并移除元素的填充。 |
| [CreateOleObject](./Methods/CreateOleObject.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) | 使用指定的参数创建 OLE 对象。 |
| [CreateParaPr](./Methods/CreateParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | 创建空的段落属性。 |
| [CreateParagraph](./Methods/CreateParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 创建新段落。 |
| [CreatePatternFill](./Methods/CreatePatternFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建图案填充，使用所选图案作为对象背景应用于对象。 |
| [CreatePictureContentControl](./Methods/CreatePictureContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 创建新的图片容器。 |
| [CreatePresetColor](./Methods/CreatePresetColor.md) | [ApiPresetColor](../ApiPresetColor/ApiPresetColor.md) | 从可用的颜色预设中选择创建颜色。 |
| [CreatePresetGeometry](./Methods/CreatePresetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) \| null | 使用可用的预设形状之一创建几何图形。 |
| [CreateRGBColor](./Methods/CreateRGBColor.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | 通过设置红、绿、蓝颜色分量的适当值来创建 RGB 颜色。 |
| [CreateRadialGradientFill](./Methods/CreateRadialGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建径向渐变填充，使用所选径向渐变作为对象背景应用于对象。 |
| [CreateRange](./Methods/CreateRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 创建元素范围。如果不指定起始和结束位置，将从整个元素获取范围。 |
| [CreateRun](./Methods/CreateRun.md) | [ApiRun](../ApiRun/ApiRun.md) | 创建要插入到当前段落或表格中的新的较小文本块。 |
| [CreateSchemeColor](./Methods/CreateSchemeColor.md) | [ApiSchemeColor](../ApiSchemeColor/ApiSchemeColor.md) | 从可用的配色方案中选择创建复杂配色方案。 |
| [CreateShape](./Methods/CreateShape.md) | [ApiShape](../ApiShape/ApiShape.md) | 使用指定的参数创建形状。 |
| [CreateSolidFill](./Methods/CreateSolidFill.md) | [ApiFill](../ApiFill/ApiFill.md) | 创建纯色填充，使用所选纯色作为对象背景应用于对象。 |
| [CreateStroke](./Methods/CreateStroke.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | 创建为元素添加阴影的笔触。 |
| [CreateTable](./Methods/CreateTable.md) | [ApiTable](../ApiTable/ApiTable.md) | 创建具有指定行数和列数的新表格。 |
| [CreateTableCellPr](./Methods/CreateTableCellPr.md) | [ApiTableCellPr](../ApiTableCellPr/ApiTableCellPr.md) | 创建空的表格单元格属性。 |
| [CreateTablePr](./Methods/CreateTablePr.md) | [ApiTablePr](../ApiTablePr/ApiTablePr.md) | 创建空的表格属性。 |
| [CreateTableRowPr](./Methods/CreateTableRowPr.md) | [ApiTableRowPr](../ApiTableRowPr/ApiTableRowPr.md) | 创建空的表格行属性。 |
| [CreateTableStylePr](./Methods/CreateTableStylePr.md) | [ApiTableStylePr](../ApiTableStylePr/ApiTableStylePr.md) | 创建空的表格样式属性。 |
| [CreateTextPr](./Methods/CreateTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | 创建空的文本属性。 |
| [CreateWordArt](./Methods/CreateWordArt.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | 使用指定的参数创建艺术字对象。 |
| [EmusToMillimeters](./Methods/EmusToMillimeters.md) | [mm](../Enumeration/mm.md) | 将英制度量单位 (EMU) 转换为毫米。 |
| [EmusToPoints](./Methods/EmusToPoints.md) | number | 将 EMU（英制度量单位）转换为磅。 |
| [FromJSON](./Methods/FromJSON.md) | object | 将指定的 JSON 对象转换为相应类型的文档生成器对象。 |
| [GetByInternalId](./Methods/GetByInternalId.md) | object | 通过内部 ID 返回对象。 |
| [GetDocument](./Methods/GetDocument.md) | [ApiDocument](../ApiDocument/ApiDocument.md) | 返回主文档。 |
| [GetFullName](./Methods/GetFullName.md) | string | 返回当前打开文件的完整名称。 |
| [GetMailMergeReceptionsCount](./Methods/GetMailMergeReceptionsCount.md) | number | 返回邮件合并收件人计数。 |
| [GetMailMergeTemplateDocContent](./Methods/GetMailMergeTemplateDocContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回邮件合并模板文档。 |
| [HexColor](./Methods/HexColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 从十六进制字符串创建颜色。 |
| [InchesToPoints](./Methods/InchesToPoints.md) | number | 将英寸转换为磅。 |
| [LinesToPoints](./Methods/LinesToPoints.md) | number | 将行转换为磅（1 行 = 12 磅）。 |
| [LoadMailMergeData](./Methods/LoadMailMergeData.md) | boolean | 加载邮件合并的数据。 |
| [MailMerge](./Methods/MailMerge.md) | boolean | 启动邮件合并过程。 |
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
| [RGB](./Methods/RGB.md) | [ApiColor](../ApiColor/ApiColor.md) | 从红、绿、蓝分量创建 RGB 颜色。 |
| [RGBA](./Methods/RGBA.md) | [ApiColor](../ApiColor/ApiColor.md) | 从红、绿、蓝和透明度分量创建 RGBA 颜色。 |
| [ReplaceDocumentContent](./Methods/ReplaceDocumentContent.md) | boolean | 用另一个文档内容替换主文档内容。 |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | 用字符串数组中的相应文本替换选区中的每个段落（或单元格中的文本）。 |
| [Save](./Methods/Save.md) | boolean | 保存对指定文档的更改。 |
| [ThemeColor](./Methods/ThemeColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 创建主题颜色。 |
| [TwipsToPoints](./Methods/TwipsToPoints.md) | number | 将缇转换为磅。 |
| [attachEvent](./Methods/attachEvent.md) | boolean | 订阅指定事件，并在事件触发时调用回调函数。 |
| [detachEvent](./Methods/detachEvent.md) | boolean | 取消订阅指定事件。 |
