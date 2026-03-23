# ApiPath

表示 ApiPath 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [ArcTo](./Methods/ArcTo.md) | 无 | 使用指定的宽度和高度半径、起始角度和扫描角度从当前点绘制弧线。 |
| [Close](./Methods/Close.md) | 无 | 关闭当前路径。 |
| [CubicBezTo](./Methods/CubicBezTo.md) | 无 | 使用两个控制点从当前点到指定终点绘制三次贝塞尔曲线。 |
| [GetCommand](./Methods/GetCommand.md) | [ApiPathCommand](../ApiPathCommand/ApiPathCommand.md) \| null | 按索引返回特定的路径命令。 |
| [GetCommandCount](./Methods/GetCommandCount.md) | number | 返回当前路径的命令数量。 |
| [GetCommands](./Methods/GetCommands.md) | [ApiPathCommand](../ApiPathCommand/ApiPathCommand.md)[] | 返回当前路径的所有命令。 |
| [GetFill](./Methods/GetFill.md) | [PathFillType](../Enumeration/PathFillType.md) | 返回当前路径的填充类型。 |
| [GetHeight](./Methods/GetHeight.md) | number | 返回当前路径的高度。 |
| [GetStroke](./Methods/GetStroke.md) | boolean | 如果当前路径有描边则返回 true，否则返回 false。 |
| [GetWidth](./Methods/GetWidth.md) | number | 返回当前路径的宽度。 |
| [LineTo](./Methods/LineTo.md) | 无 | 从当前点到指定坐标绘制一条线。 |
| [MoveTo](./Methods/MoveTo.md) | 无 | 将当前路径移动到指定坐标。 |
| [QuadBezTo](./Methods/QuadBezTo.md) | 无 | 使用一个控制点从当前点到指定终点绘制二次贝塞尔曲线。 |
| [SetFill](./Methods/SetFill.md) | 无 | 设置当前路径的填充类型。 |
| [SetHeight](./Methods/SetHeight.md) | 无 | 设置当前路径的高度。 |
| [SetStroke](./Methods/SetStroke.md) | 无 | 设置当前路径是否有描边。 |
| [SetWidth](./Methods/SetWidth.md) | 无 | 设置当前路径的宽度。 |
