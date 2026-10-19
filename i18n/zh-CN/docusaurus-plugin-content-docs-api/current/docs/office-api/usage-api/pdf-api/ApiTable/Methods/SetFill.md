# SetFill

设置当前图形对象的填充格式属性。

继承自 [ApiDrawing.SetFill](../../ApiDrawing/Methods/SetFill.md)。

## 语法

```javascript
expression.SetFill(fill);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充图形对象的填充类型。 |

## 返回值

boolean

## 示例

在 PDF 中通过 ApiDrawing 基础接口为绘图对象设置纯色填充。

```javascript editor-pdf
// The SetFill method works for any graphic object in a PDF, not only shapes.

// Add a rectangle to a PDF page and fill it with a solid blue-grey color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 50 * 36000, 50 * 36000, Api.CreateNoFill(), stroke);
drawing.SetPosition(2000000, 1000000);
page.AddObject(drawing);
const fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
drawing.SetFill(fill);
```
