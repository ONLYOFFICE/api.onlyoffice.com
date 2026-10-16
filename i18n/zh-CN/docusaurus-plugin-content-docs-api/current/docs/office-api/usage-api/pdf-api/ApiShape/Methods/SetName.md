# SetName

设置当前绘图对象的名称。如果已存在同名的其他绘图对象，则该绘图对象的名称将重置为自动生成的默认名称。OLE 对象不支持自定义名称，因此对于 OLE 对象，此方法始终返回 false。

继承自 [ApiDrawing.SetName](../../ApiDrawing/Methods/SetName.md)。

## 语法

```javascript
expression.SetName(name);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 将设置到当前绘图的名称。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上为形状分配名称。

```javascript editor-pdf
// Give a page shape a recognizable name so tools can reference it.

// Create a shape, assign a name, and display the applied name inside it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetName("CustomShapeName");
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Shape name was set to: " + shape.GetName());
```
