# SetLine

设置当前形状的轮廓属性。

## 语法

```javascript
expression.SetLine(oStroke);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建形状轮廓的笔触。 |

## 返回值

boolean

## 示例

为形状设置轮廓属性。在文档中创建矩形并将其轮廓更改为粗蓝线。

```javascript editor-docx
// How do I set line in a document?

// Set line using a shape object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
paragraph.AddText("Original shape with no border");
paragraph.AddLineBreak();
let newStroke = Api.CreateStroke(3 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
shape.SetLine(newStroke);
paragraph.AddText("Border changed to 3pt blue line");
```
