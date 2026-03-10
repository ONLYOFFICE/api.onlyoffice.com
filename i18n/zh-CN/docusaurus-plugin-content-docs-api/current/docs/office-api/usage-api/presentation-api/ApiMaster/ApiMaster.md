# ApiMaster

表示 ApiMaster 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddLayout](./Methods/AddLayout.md) | boolean | 向指定的幻灯片母版添加版式。 |
| [AddObject](./Methods/AddObject.md) | boolean | 向当前幻灯片母版添加对象（图像、形状或图表）。 |
| [ClearBackground](./Methods/ClearBackground.md) | boolean | 清除幻灯片母版背景。 |
| [Copy](./Methods/Copy.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | 创建指定幻灯片母版对象的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 如果存在，则从父对象中删除指定对象。注意：如果是演示文稿中的最后一个母版，则无法删除。 |
| [Duplicate](./Methods/Duplicate.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | 创建指定幻灯片母版对象的副本，并将新幻灯片母版添加到幻灯片母版集合。 |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | 返回包含幻灯片母版中所有图表对象的数组。 |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回包含幻灯片母版中所有绘图对象的数组。 |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | 返回包含幻灯片母版中所有图像对象的数组。 |
| [GetAllLayouts](./Methods/GetAllLayouts.md) | [ApiLayout](../ApiLayout/ApiLayout.md)[] | 返回幻灯片母版中的所有版式。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | 返回包含幻灯片母版中所有 OLE 对象的数组。 |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 返回包含幻灯片母版中所有形状对象的数组。 |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 返回包含幻灯片母版中所有表格的数组。 |
| [GetClassType](./Methods/GetClassType.md) | "master" | 返回 ApiMaster 类的类型。 |
| [GetDrawingsByPlaceholderType](./Methods/GetDrawingsByPlaceholderType.md) | [Drawing](../Enumeration/Drawing.md)[] | 按指定的占位符类型返回绘图数组。 |
| [GetLayout](./Methods/GetLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | 按位置返回指定幻灯片母版的版式。 |
| [GetLayoutByType](./Methods/GetLayoutByType.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | 返回与幻灯片母版的指定版式类型对应的版式。 |
| [GetLayoutsCount](./Methods/GetLayoutsCount.md) | number | 返回版式对象的数量。 |
| [GetTheme](./Methods/GetTheme.md) | [ApiTheme](../ApiTheme/ApiTheme.md) \| null | 返回幻灯片母版的主题。 |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | 在当前幻灯片母版中将绘图数组分组。 |
| [RemoveLayout](./Methods/RemoveLayout.md) | boolean | 从当前幻灯片母版中删除版式。 |
| [RemoveObject](./Methods/RemoveObject.md) | boolean | 从当前幻灯片母版中删除对象（图像、形状或图表）。 |
| [SetBackground](./Methods/SetBackground.md) | boolean | 设置当前幻灯片母版的背景。 |
| [SetTheme](./Methods/SetTheme.md) | boolean | 为幻灯片母版设置主题。设置主题对象的副本。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiMaster 对象转换为 JSON 对象。 |
