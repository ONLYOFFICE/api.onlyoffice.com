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

设置 PDF 中形状路径的水平大小。

```javascript editor-pdf
// How wide should my custom shape be in a PDF?

// Specify the left-to-right dimension of a drawn path in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

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
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
```
