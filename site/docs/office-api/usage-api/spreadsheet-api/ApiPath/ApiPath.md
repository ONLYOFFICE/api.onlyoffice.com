# ApiPath

Represents the ApiPath class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [ArcTo](./Methods/ArcTo.md) | None | Draws an arc from the current point using the specified width and height radii, start angle, and sweep angle. |
| [Close](./Methods/Close.md) | None | Closes the current path. |
| [CubicBezTo](./Methods/CubicBezTo.md) | None | Draws a cubic Bezier curve from the current point to the specified end point using two control points. |
| [GetCommand](./Methods/GetCommand.md) | [ApiPathCommand](../ApiPathCommand/ApiPathCommand.md) \| null | Returns a specific path command by its index. |
| [GetCommandCount](./Methods/GetCommandCount.md) | number | Returns the number of commands for the current path. |
| [GetCommands](./Methods/GetCommands.md) | [ApiPathCommand](../ApiPathCommand/ApiPathCommand.md)[] | Returns all commands of the current path. |
| [GetFill](./Methods/GetFill.md) | [PathFillType](../Enumeration/PathFillType.md) | Returns the fill type of the current path. |
| [GetHeight](./Methods/GetHeight.md) | number | Returns the height of the current path. |
| [GetStroke](./Methods/GetStroke.md) | boolean | Returns true if the current path is stroked, otherwise false. |
| [GetWidth](./Methods/GetWidth.md) | number | Returns the width of the current path. |
| [LineTo](./Methods/LineTo.md) | None | Draws a line from the current point to the specified coordinates. |
| [MoveTo](./Methods/MoveTo.md) | None | Moves the current path to the specified coordinates. |
| [QuadBezTo](./Methods/QuadBezTo.md) | None | Draws a quadratic Bezier curve from the current point to the specified end point using a control point. |
| [SetFill](./Methods/SetFill.md) | None | Sets the fill type to the current path. |
| [SetHeight](./Methods/SetHeight.md) | None | Sets the height to the current path. |
| [SetStroke](./Methods/SetStroke.md) | None | Sets whether the current path is stroked. |
| [SetWidth](./Methods/SetWidth.md) | None | Sets the width to the current path. |
