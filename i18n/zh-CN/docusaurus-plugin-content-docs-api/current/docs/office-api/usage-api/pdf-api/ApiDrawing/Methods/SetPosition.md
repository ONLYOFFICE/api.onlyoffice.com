# SetPosition

设置绘图在页面上的位置。

## 语法

```javascript
expression.SetPosition(posX, posY);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posX | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从页面左侧到绘图左侧的距离（以英制单位表示）。 |
| posY | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从页面顶部到绘图上侧的距离（以英制单位表示）。 |

## 返回值

boolean

## 示例

How to change a position of a drawing.

```javascript editor-pdf
// Get a shape object from a page and move it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
page.AddObject(shape);
```
