# SetDescription

设置当前绘图对象的描述。

继承自 [ApiDrawing.SetDescription](../../ApiDrawing/Methods/SetDescription.md)。

## 语法

```javascript
expression.SetDescription(description);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| description | 必需 | string |  | 要为当前绘图对象设置的描述。 |

## 返回值

boolean

## 示例

设置 PDF 表单中绘图对象的替代文本描述。

```javascript editor-pdf
// Assign an accessibility description used by assistive tools for the shape.

// Create a shape, set its description, and display the description inside it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetDescription("My Drawing Description");
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing description: " + shape.GetDescription());
```
