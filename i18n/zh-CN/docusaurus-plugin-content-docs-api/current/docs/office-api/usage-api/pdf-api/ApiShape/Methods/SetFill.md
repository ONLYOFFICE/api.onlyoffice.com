# SetFill

设置当前形状的填充属性。

## 语法

```javascript
expression.SetFill(fill);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充形状的填充类型。 |

## 返回值

boolean

## 示例

更改 PDF 中形状的内部颜色。

```javascript editor-pdf
// How do I apply a background color to a shape in a PDF?

// Modify a shape's background to use a specific color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, Api.CreateNoFill(), stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Original shape with no fill");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0));
shape.SetFill(fill);
paragraph.AddLineBreak();
paragraph.AddText("Fill changed to red");
```
