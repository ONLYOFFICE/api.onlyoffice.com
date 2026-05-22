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

从电子表格中的自定义形状路径读取单个绘图命令。

```javascript editor-xlsx
// How do I inspect one specific step in a shape's drawing sequence in a spreadsheet?

// Retrieve the type and coordinates of a particular path command to examine shape construction in a spreadsheet.

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
