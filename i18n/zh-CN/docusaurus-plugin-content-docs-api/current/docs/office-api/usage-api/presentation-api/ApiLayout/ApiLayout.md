# ApiLayout

表示 ApiLayout 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddObject](./Methods/AddObject.md) | boolean | 向当前幻灯片版式添加对象（图像、形状或图表）。 |
| [ClearBackground](./Methods/ClearBackground.md) | boolean | 清除幻灯片版式背景。 |
| [Copy](./Methods/Copy.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | 创建指定幻灯片版式对象的副本。不复制母版幻灯片。 |
| [Delete](./Methods/Delete.md) | boolean | 如果存在，则从父幻灯片母版中删除指定对象。 |
| [Duplicate](./Methods/Duplicate.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | 创建指定幻灯片版式对象的副本，并将新幻灯片版式添加到幻灯片版式集合。 |
| [FollowMasterBackground](./Methods/FollowMasterBackground.md) | boolean | 将母版背景设置为版式的背景。 |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | 返回包含幻灯片版式中所有图表对象的数组。 |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回包含幻灯片版式中所有绘图对象的数组。 |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | 返回包含幻灯片版式中所有图像对象的数组。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | 返回包含幻灯片版式中所有 OLE 对象的数组。 |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | 返回包含幻灯片版式中所有形状对象的数组。 |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 返回包含当前幻灯片版式中所有表格的数组。 |
| [GetClassType](./Methods/GetClassType.md) | "layout" | 返回 ApiLayout 类的类型。 |
| [GetDrawingsByPlaceholderType](./Methods/GetDrawingsByPlaceholderType.md) | [Drawing](../Enumeration/Drawing.md)[] | 按指定的占位符类型返回绘图数组。 |
| [GetLayoutType](./Methods/GetLayoutType.md) | [LayoutType](../Enumeration/LayoutType.md) | 返回当前版式的类型。 |
| [GetMaster](./Methods/GetMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) | 返回当前版式的父幻灯片母版。 |
| [GetName](./Methods/GetName.md) | string | 返回当前版式的名称。 |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | 在当前版式中将绘图数组分组。 |
| [MoveTo](./Methods/MoveTo.md) | boolean | 将指定版式移动到同一集合中的特定位置。 |
| [RemoveObject](./Methods/RemoveObject.md) | boolean | 从当前幻灯片版式中删除对象（图像、形状或图表）。 |
| [SetBackground](./Methods/SetBackground.md) | boolean | 设置当前幻灯片版式的背景。 |
| [SetName](./Methods/SetName.md) | boolean | 为当前版式设置名称。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiLayout 对象转换为 JSON 对象。 |
