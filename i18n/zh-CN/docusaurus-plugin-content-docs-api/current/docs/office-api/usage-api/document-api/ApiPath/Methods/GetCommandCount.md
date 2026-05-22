# GetCommandCount

返回当前路径的命令数量。

## 语法

```javascript
expression.GetCommandCount();
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算构成文档中形状轮廓路径的总步骤数。

```javascript editor-docx
// How do I find out how many steps are in a shape's drawing path in a document?

// Check how many individual segments define a shape's outline in a document.

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
