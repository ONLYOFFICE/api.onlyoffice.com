# SetLine

设置当前形状的轮廓属性。

## 语法

```javascript
expression.SetLine(stroke);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| stroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建形状轮廓的笔触。 |

## 返回值

boolean

## 示例

在 PDF 中为形状添加边框。

```javascript editor-pdf
// How do I customize the outline of a shape in a PDF?

// Give a shape a colored border with specific thickness in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Original shape with no border");
let newStroke = Api.CreateStroke(3 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
shape.SetLine(newStroke);
paragraph.AddLineBreak();
paragraph.AddText("Border changed to 3pt blue line");
```
