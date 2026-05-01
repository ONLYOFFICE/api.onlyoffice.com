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

分析星形的路径命令。获取第一个命令的信息，包括类型和坐标。

```javascript editor-docx
// How can I get the x using a path command in a document?

// Get the x for a path command in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 80 * 36000, 80 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let commands = path.GetCommands();
paragraph.AddText("Command count: " + path.GetCommandCount());
let cmd = path.GetCommand(0);
paragraph.AddText(", First command: " + cmd.GetType() + " (" + cmd.GetX() + ", " + cmd.GetY() + ")");
paragraph.AddDrawing(shape);
```
