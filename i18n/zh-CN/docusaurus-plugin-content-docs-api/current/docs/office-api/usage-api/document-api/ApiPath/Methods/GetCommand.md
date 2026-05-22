# GetCommand

按索引返回特定的路径命令。

## 语法

```javascript
expression.GetCommand(nIndex);
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 路径命令索引。 |

## 返回值

[ApiPathCommand](../../ApiPathCommand/ApiPathCommand.md) \| null

## 示例

按位置检索文档中的单个绘图路径步骤。

```javascript editor-docx
// How do I read one specific step from a shape's outline path in a document?

// Inspect the type and coordinates of any individual path step in a document.

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
