# ApiGeometry

表示 ApiGeometry 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddAdj](./Methods/AddAdj.md) | boolean | 向当前几何形状添加新的调整参数。 |
| [AddConnectionPoint](./Methods/AddConnectionPoint.md) | boolean | 向当前几何形状添加连接点。 |
| [AddGuide](./Methods/AddGuide.md) | boolean | 向当前几何形状添加参考线（公式）。 |
| [AddPath](./Methods/AddPath.md) | [ApiPath](../ApiPath/ApiPath.md) \| null | 向当前几何形状添加新路径。 |
| [GetAdjValue](./Methods/GetAdjValue.md) | number \| null | 按名称从当前几何形状返回调整值。 |
| [GetPath](./Methods/GetPath.md) | [ApiPath](../ApiPath/ApiPath.md) | 按索引返回几何路径。 |
| [GetPathCount](./Methods/GetPathCount.md) | number | 返回当前几何形状中的路径数量。 |
| [GetPaths](./Methods/GetPaths.md) | [ApiPath](../ApiPath/ApiPath.md)[] | 返回当前几何形状的所有路径。 |
| [GetPreset](./Methods/GetPreset.md) | [ShapeType](../Enumeration/ShapeType.md) \| null | 如果当前几何形状基于预设，则返回预设形状的名称。 |
| [IsCustom](./Methods/IsCustom.md) | boolean | 检查当前几何形状是否为自定义。 |
| [SetAdjValue](./Methods/SetAdjValue.md) | 无 | 设置当前几何形状的指定调整参数。 |
| [SetTextRect](./Methods/SetTextRect.md) | boolean | 设置当前几何形状的文本矩形。 |
