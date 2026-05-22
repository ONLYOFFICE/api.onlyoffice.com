# SetRotation

设置当前绘图对象的旋转角度。

## 语法

```javascript
expression.SetRotation(rotAngle);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rotAngle | 必需 | number |  | 新的绘图旋转角度。 |

## 返回值

boolean

## 示例

在 PDF 中将绘图对象旋转到特定角度。

```javascript editor-pdf
// How do I spin a shape to face a different direction in a PDF?

// Change the rotation of a drawing element in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 65 * 36000, 10 * 36000, fill, stroke);
shape.SetPosition(100000, 2500000);
shape.SetRotation(90);

const rotAngle = shape.GetRotation();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing rotation angle is set to: " + rotAngle + " degrees");
page.AddObject(shape);
```
