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

分析演示文稿幻灯片上星形形状的路径命令。

```javascript editor-pptx
// Shows command count and first command details in a text shape.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
let path = geometry.GetPath(0);
let commands = path.GetCommands();
let cmd = path.GetCommand(0);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Commands: " + path.GetCommandCount());
paragraph.AddText(", First: " + cmd.GetType() + " at (" + cmd.GetX() + ", " + cmd.GetY() + ")");
shape.SetPosition(1000000, 1000000);
slide.AddObject(shape);
```
