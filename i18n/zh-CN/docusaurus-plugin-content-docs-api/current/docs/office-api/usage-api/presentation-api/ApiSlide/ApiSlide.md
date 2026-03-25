# ApiSlide

表示 ApiSlide 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | boolean | 向当前幻灯片添加批注。 |
| [AddNotesText](./Methods/AddNotesText.md) | boolean | 向当前幻灯片的备注页添加文本。 |
| [AddObject](./Methods/AddObject.md) | boolean | 向当前演示文稿幻灯片添加对象（图像、形状或图表）。 |
| [ApplyLayout](./Methods/ApplyLayout.md) | boolean | 将指定版式应用于当前幻灯片。版式必须在幻灯片母版中。 |
| [ApplyTheme](./Methods/ApplyTheme.md) | boolean | 将指定主题应用于当前幻灯片。 |
| [ClearBackground](./Methods/ClearBackground.md) | boolean | 清除幻灯片背景。 |
| [Copy](./Methods/Copy.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | 创建当前幻灯片对象的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 从演示文稿中删除当前幻灯片。 |
| [Duplicate](./Methods/Duplicate.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | 创建指定幻灯片对象的副本，并将新幻灯片添加到幻灯片集合。 |
| [FollowLayoutBackground](./Methods/FollowLayoutBackground.md) | boolean | 将版式背景设置为幻灯片的背景。 |
| [FollowMasterBackground](./Methods/FollowMasterBackground.md) | boolean | 将母版背景设置为幻灯片的背景。 |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | 返回幻灯片中所有图表对象的数组。 |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回幻灯片中所有绘图对象的数组。 |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | 返回幻灯片中所有图像对象的数组。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | 返回幻灯片中所有 OLE 对象的数组。 |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 返回幻灯片中所有形状对象的数组。 |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 返回当前幻灯片中所有表格的数组。 |
| [GetClassType](./Methods/GetClassType.md) | "slide" | 返回 ApiSlide 类的类型。 |
| [GetDrawingsByPlaceholderType](./Methods/GetDrawingsByPlaceholderType.md) | [Drawing](../Enumeration/Drawing.md)[] | 按指定的占位符类型返回绘图数组。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回以英制单位表示的幻灯片高度。 |
| [GetLayout](./Methods/GetLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | 返回当前幻灯片的版式。 |
| [GetNotesPage](./Methods/GetNotesPage.md) | [ApiNotesPage](../ApiNotesPage/ApiNotesPage.md) \| null | 返回当前幻灯片的备注页。 |
| [GetSlideIndex](./Methods/GetSlideIndex.md) | number | 返回当前幻灯片在演示文稿中的位置。 |
| [GetSlideShowTransition](./Methods/GetSlideShowTransition.md) | [ApiSlideShowTransition](../ApiSlideShowTransition/ApiSlideShowTransition.md) \| null | 返回当前幻灯片的幻灯片放映切换效果。 |
| [GetTheme](./Methods/GetTheme.md) | [ApiTheme](../ApiTheme/ApiTheme.md) | 返回当前幻灯片的主题。 |
| [GetTimeLine](./Methods/GetTimeLine.md) | [ApiTimeLine](../ApiTimeLine/ApiTimeLine.md) | 返回幻灯片的动画时间线。 |
| [GetVisible](./Methods/GetVisible.md) | boolean | 返回当前演示文稿幻灯片的可见性。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回以英制单位表示的幻灯片宽度。 |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | 将当前幻灯片中的绘图数组进行组合。 |
| [MoveTo](./Methods/MoveTo.md) | boolean | 将当前幻灯片移动到同一集合中的指定位置。 |
| [RemoveAllObjects](./Methods/RemoveAllObjects.md) | 无 | 从当前幻灯片中移除所有对象。 |
| [RemoveObject](./Methods/RemoveObject.md) | boolean | 从当前幻灯片中移除对象（图像、形状或图表）。 |
| [Select](./Methods/Select.md) | 无 | 选择当前幻灯片。 |
| [SetBackground](./Methods/SetBackground.md) | boolean | 设置当前演示文稿幻灯片的背景。 |
| [SetSlideShowTransition](./Methods/SetSlideShowTransition.md) | boolean | 设置当前幻灯片的幻灯片放映切换效果。 |
| [SetVisible](./Methods/SetVisible.md) | boolean | 设置当前演示文稿幻灯片的可见性。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiSlide 对象转换为 JSON 对象。 |
