# SetTitle

设置当前绘图对象的标题。

## 语法

```javascript
expression.SetTitle(title);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | 必需 | string |  | 要为当前绘图对象设置的标题。 |

## 返回值

boolean

## 示例

设置 PDF 表单中绘图对象的替代文本标题。

```javascript editor-pdf
// Assign an accessibility title used by assistive tools for the shape.

// Create a shape, set its title, and display the title inside it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetTitle("My Drawing Title");
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing title: " + shape.GetTitle());
```
