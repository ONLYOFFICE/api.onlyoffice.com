# GetY

Returns the Y coordinate for the "moveTo"/"lineTo" path commands.

## Syntax

```javascript
expression.GetY();
```

`expression` - A variable that represents a [ApiPathCommand](../ApiPathCommand.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

Analyzes path commands of a star shape and displays command details.

```javascript editor-xlsx playground
// Shows total command count and first command information in cells.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = worksheet.AddShape("star5", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 0);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let commands = path.GetCommands();
worksheet.GetRange("A8").SetValue("Commands: " + path.GetCommandCount());
let cmd = path.GetCommand(0);
worksheet.GetRange("A9").SetValue("Type: " + cmd.GetType() + " at (" + cmd.GetX() + ", " + cmd.GetY() + ")");
```
