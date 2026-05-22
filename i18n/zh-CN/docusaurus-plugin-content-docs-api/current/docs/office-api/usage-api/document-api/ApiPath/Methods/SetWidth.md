# SetWidth

设置当前路径的宽度。

## 语法

```javascript
expression.SetWidth(nWidth);
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | 必需 | number |  | 以 EMU 为单位的路径宽度。 |

## 返回值

此方法不返回任何数据。

## 示例

设置文档中自定义形状绘图区域的宽度。

```javascript editor-docx
// How do I control the horizontal size of a shape's drawing area in a document?

// Define how wide the drawable region of a custom shape is in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo(50 * 36000, 0);
path.LineTo(70 * 36000, 45 * 36000);
path.LineTo(55 * 36000, 70 * 36000);
path.LineTo(100 * 36000, 100 * 36000);
path.LineTo(0, 100 * 36000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
paragraph.AddDrawing(shape);
```
