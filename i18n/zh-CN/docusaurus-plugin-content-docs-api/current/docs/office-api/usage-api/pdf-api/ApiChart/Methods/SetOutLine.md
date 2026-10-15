# SetOutLine

为当前图形对象设置轮廓属性。

继承自 [ApiDrawing.SetOutLine](../../ApiDrawing/Methods/SetOutLine.md)。

## 语法

```javascript
expression.SetOutLine(stroke);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| stroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建图形对象轮廓的笔触。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上为形状添加边框。

```javascript editor-pdf
// Apply a colored stroke as the shape's outline using the drawing's outline setter.

// Create a shape, build a stroke, and set it as the outline with SetOutLine.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
shape.SetOutLine(outline);
```
