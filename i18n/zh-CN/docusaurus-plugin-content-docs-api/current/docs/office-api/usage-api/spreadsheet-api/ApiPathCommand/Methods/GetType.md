# GetType

返回当前路径命令的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiPathCommand](../ApiPathCommand.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[PathCommandType](../../Enumeration/PathCommandType.md)

## 示例

识别路径命令表示的绘图指令类型并在电子表格中显示。

```javascript editor-xlsx
// How do I find out the type of a path command on a shape in a spreadsheet?

// Distinguish between move, line, curve, and arc steps in a shape's drawing path in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("star5", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 0);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let commands = path.GetCommands();
worksheet.GetRange("A8").SetValue("Commands: " + path.GetCommandCount());
let cmd = path.GetCommand(0);
worksheet.GetRange("A9").SetValue("Type: " + cmd.GetType() + " at (" + cmd.GetX() + ", " + cmd.GetY() + ")");
```
