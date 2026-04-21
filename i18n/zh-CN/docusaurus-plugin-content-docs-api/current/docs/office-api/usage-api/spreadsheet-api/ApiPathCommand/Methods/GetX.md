# GetX

返回「moveTo」/「lineTo」路径命令的 X 坐标。

## 语法

```javascript
expression.GetX();
```

`expression` - 表示 [ApiPathCommand](../ApiPathCommand.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

分析星形的路径命令并显示命令详细信息。在单元格中显示命令总数和第一个命令信息。

```javascript editor-xlsx
// How can I get the x using a path command in a spreadsheet?

// Get the x for a path command in a spreadsheet.

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
