# GetCommands

返回当前路径的所有命令。

## 语法

```javascript
expression.GetCommands();
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPathCommand](../../ApiPathCommand/ApiPathCommand.md)[]

## 示例

从电子表格中的自定义形状路径检索所有绘图命令。

```javascript editor-xlsx
// How do I access every step in a shape's drawing sequence at once in a spreadsheet?

// Collect the full list of path instructions to inspect or process a shape's outline in a spreadsheet.

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
