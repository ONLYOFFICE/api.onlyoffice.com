# ApiPresentation

表示 ApiPresentation 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddMaster](./Methods/AddMaster.md) | boolean | 将幻灯片母版添加到演示文稿的幻灯片母版集合。 |
| [AddMathEquation](./Methods/AddMathEquation.md) | boolean | 向当前演示文稿添加数学公式。 |
| [AddSlide](./Methods/AddSlide.md) | 无 | 在演示文稿末尾追加新幻灯片。 |
| [ApplyTheme](./Methods/ApplyTheme.md) | boolean | 将主题应用于演示文稿中的所有幻灯片。 |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | 无 | 创建新的历史记录点。 |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | 返回包含当前演示文稿中所有图表对象的数组。 |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | 返回当前演示文稿中的所有批注。 |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回包含当前演示文稿中所有绘图对象的数组。 |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | 返回包含当前演示文稿中所有图像对象的数组。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | 返回包含当前演示文稿中所有 OLE 对象的数组。 |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 返回包含当前演示文稿中所有形状对象的数组。 |
| [GetAllSlideMasters](./Methods/GetAllSlideMasters.md) | [ApiMaster](../ApiMaster/ApiMaster.md)[] | 返回当前演示文稿中所有幻灯片母版的数组。 |
| [GetAllSlides](./Methods/GetAllSlides.md) | [ApiSlide](../ApiSlide/ApiSlide.md)[] | 返回当前演示文稿中所有幻灯片的数组。 |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 返回包含当前演示文稿中所有表格的数组（包括幻灯片母版和幻灯片版式）。 |
| [GetClassType](./Methods/GetClassType.md) | "presentation" | 返回 ApiPresentation 类的类型。 |
| [GetCore](./Methods/GetCore.md) | [ApiCore](../ApiCore/ApiCore.md) | 返回当前演示文稿的核心属性接口。此方法用于查看或修改标准元数据，如标题、作者和关键字。 |
| [GetCurSlideIndex](./Methods/GetCurSlideIndex.md) | number | 返回当前幻灯片的索引。 |
| [GetCurrentSlide](./Methods/GetCurrentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) | 返回当前幻灯片。 |
| [GetCurrentVisibleSlide](./Methods/GetCurrentVisibleSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | 返回当前可见的幻灯片。 |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | 返回当前演示文稿的自定义属性。 |
| [GetCustomXmlParts](./Methods/GetCustomXmlParts.md) | [ApiCustomXmlParts](../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null | 检索与演示文稿关联的自定义 XML 管理器。此管理器允许操作和访问演示文稿中的自定义 XML 部分。 |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | 返回文档信息：**Application** - 创建文档的应用程序。**CreatedRaw** - 文件创建的日期和时间。**Created** - 解析后的文件创建日期和时间。**LastModifiedRaw** - 文件最后修改的日期和时间。**LastModified** - 解析后的文件最后修改日期和时间。**LastModifiedBy** - 对文档进行最新更改的用户名称。**Authors** - 创建文件的人员。**Title** - 此属性可简化文档分类。**Tags** - 此属性可简化文档分类。**Subject** - 此属性可简化文档分类。**Comment** - 此属性可简化文档分类。 |
| [GetDrawingsByName](./Methods/GetDrawingsByName.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回按名称筛选的文档内容中绘图对象的集合。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回以英制单位表示的演示文稿高度。 |
| [GetLoopUntilStopped](./Methods/GetLoopUntilStopped.md) | boolean | 返回演示文稿是否持续循环播放直到用户停止。 |
| [GetMaster](./Methods/GetMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | 按位置返回演示文稿中的幻灯片母版。 |
| [GetMastersCount](./Methods/GetMastersCount.md) | number | 返回幻灯片母版的数量。 |
| [GetSlideByIndex](./Methods/GetSlideByIndex.md) | [ApiSlide](../ApiSlide/ApiSlide.md) | 按位置返回演示文稿中的幻灯片。 |
| [GetSlidesCount](./Methods/GetSlidesCount.md) | number | 返回幻灯片的数量。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回以英制单位表示的演示文稿宽度。 |
| [RemoveSlides](./Methods/RemoveSlides.md) | boolean | 从演示文稿中删除一系列幻灯片。如果未指定参数，则删除演示文稿中的所有幻灯片。 |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | 无 | 用指定的图像替换当前图像。 |
| [SetLanguage](./Methods/SetLanguage.md) | boolean | 指定将用于检查拼写和语法的语言（如果需要）。 |
| [SetLoopUntilStopped](./Methods/SetLoopUntilStopped.md) | boolean | 设置演示文稿是否持续循环播放直到用户停止。 |
| [SetSizes](./Methods/SetSizes.md) | 无 | 设置当前演示文稿的大小。 |
| [SlidesToJSON](./Methods/SlidesToJSON.md) | JSON[] | 将当前 ApiPresentation 对象中的幻灯片转换为 JSON 对象。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiPresentation 对象转换为 JSON 对象。 |
