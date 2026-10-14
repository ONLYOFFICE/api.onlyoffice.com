# SetTransparent

设置填充的透明度。

## 语法

```javascript
expression.SetTransparent(transparent);
```

`expression` - 表示 [ApiFill](../ApiFill.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| transparent | 必需 | number |  | 透明度值，范围从 0（完全不透明）到 1（完全透明）。 |

## 返回值

boolean

## 示例

在 PDF 的页面中使形状的填充半透明。

```javascript editor-pdf
// Adjust how see-through a shape's fill is in a PDF.

// Fade a shape's solid fill so the page content behind it shows through in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);
```
