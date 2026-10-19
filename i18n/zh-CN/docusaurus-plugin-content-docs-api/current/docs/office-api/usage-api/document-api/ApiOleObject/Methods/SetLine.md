# SetLine

为当前图形对象设置轮廓属性。

继承自 [ApiDrawing.SetLine](../../ApiDrawing/Methods/SetLine.md)。

## 语法

```javascript
expression.SetLine(stroke);
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| stroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建图形对象轮廓的笔触。 |

## 返回值

boolean

## 示例

在文档中通过基础 ApiDrawing 接口设置绘图对象的轮廓。

```javascript editor-docx
// SetLine is the base method for the outline and works for any graphic object, not only shapes.

// Add a rectangle to a document and give it a dark solid outline.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
drawing.SetLine(outline);
```
