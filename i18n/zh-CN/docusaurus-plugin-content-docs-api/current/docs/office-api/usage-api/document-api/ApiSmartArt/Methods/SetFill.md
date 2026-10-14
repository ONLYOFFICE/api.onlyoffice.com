# SetFill

设置当前图形对象的填充格式属性。

继承自 [ApiDrawing.SetFill](../../ApiDrawing/Methods/SetFill.md)。

## 语法

```javascript
expression.SetFill(oFill);
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充图形对象的填充类型。 |

## 返回值

boolean

## 示例

在文档中通过基础 ApiDrawing 接口为绘图对象设置纯色填充。

```javascript editor-docx
// The SetFill method works for any graphic object, including images and groups, not only shapes.

// Add a rectangle to a document and fill it with a solid blue-grey color.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, Api.CreateNoFill(), stroke);
paragraph.AddDrawing(drawing);
let fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
drawing.SetFill(fill);
```
