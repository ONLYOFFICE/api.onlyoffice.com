# ApiGeometry

Represents the ApiGeometry class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddAdj](./Methods/AddAdj.md) | boolean | Adds a new adjustment parameter to the current geometry. |
| [AddConnectionPoint](./Methods/AddConnectionPoint.md) | boolean | Adds a connection point to the current geometry. |
| [AddGuide](./Methods/AddGuide.md) | boolean | Adds a guide (formula) to the current geometry. |
| [AddPath](./Methods/AddPath.md) | [ApiPath](../ApiPath/ApiPath.md) \| null | Adds a new path to the current geometry. |
| [GetAdjValue](./Methods/GetAdjValue.md) | number \| null | Returns the adjustment value by its name from the current geometry. |
| [GetPath](./Methods/GetPath.md) | [ApiPath](../ApiPath/ApiPath.md) | Returns a geometry path by its index. |
| [GetPathCount](./Methods/GetPathCount.md) | number | Returns the number of paths in the current geometry. |
| [GetPaths](./Methods/GetPaths.md) | [ApiPath](../ApiPath/ApiPath.md)[] | Returns all paths of the current geometry. |
| [GetPreset](./Methods/GetPreset.md) | [ShapeType](../Enumeration/ShapeType.md) \| null | Returns the name of the preset shape if the current geometry is based on a preset. |
| [IsCustom](./Methods/IsCustom.md) | boolean | Checks whether the current geometry is custom. |
| [SetAdjValue](./Methods/SetAdjValue.md) | None | Sets the specified adjustment parameter for the current geometry. |
| [SetTextRect](./Methods/SetTextRect.md) | boolean | Sets the text rectangle for the current geometry. |
