# CreateShape

使用指定的参数创建形状。

## 语法

```javascript
expression.CreateShape(shapeType, width, height, fill, stroke);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shapeType | 可选 | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | 指定预设形状几何图形的形状类型。 |
| width | 可选 | [EMU](../../Enumeration/EMU.md) | 914400 | 以英制度量单位表示的形状宽度。 |
| height | 可选 | [EMU](../../Enumeration/EMU.md) | 914400 | 以英制度量单位表示的形状高度。 |
| fill | 可选 | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | 用于填充形状的颜色或图案。 |
| stroke | 可选 | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | 用于创建元素阴影的笔触。 |

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

此示例使用 'rect' 预设创建形状。

```javascript editor-docx
// Creates the "rect" shape and adds it to the first paraghraph of the document.

// How to create the ApiShape object and add it to the ApiParagraph class.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
