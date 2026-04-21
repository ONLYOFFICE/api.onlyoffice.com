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

分析 PDF 文档页面上星形的路径命令。在文本形状中显示命令数量和第一个命令的详细信息。

```javascript editor-pdf
// How to get the commands for a geometry path in a PDF document?

// Get the commands and display the result in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let commands = path.GetCommands();
let cmd = path.GetCommand(0);
let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Commands: " + path.GetCommandCount());
paragraph.AddText(", First: " + cmd.GetType() + " at (" + cmd.GetX() + ", " + cmd.GetY() + ")");
shape.SetPosition(1000000, 1000000);
page.AddObject(shape);
```
