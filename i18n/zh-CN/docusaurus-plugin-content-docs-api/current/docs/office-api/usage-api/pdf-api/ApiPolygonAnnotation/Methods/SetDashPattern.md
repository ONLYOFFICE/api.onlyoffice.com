# SetDashPattern

设置批注虚线图案。

:::note
必须使用 [ApiBaseAnnotation#SetBorderStyle](../../ApiBaseAnnotation/Methods/SetBorderStyle.md) 方法将边框样式设置为 `"dashed"`。
:::

继承自 [ApiBaseAnnotation.SetDashPattern](../../ApiBaseAnnotation/Methods/SetDashPattern.md)。

## 语法

```javascript
expression.SetDashPattern(pattern);
```

`expression` - 表示 [ApiPolygonAnnotation](../ApiPolygonAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pattern | 必需 | number[] |  | 定义用于绘制虚线边框的虚线和间隙图案的数组。例如，值 [3, 2] 指定用 3 点虚线和 2 点间隙交替绘制的边框。 |

## 返回值

boolean

## 示例

在 PDF 中为注释应用虚线边框样式。

```javascript editor-pdf
// Create a dotted line effect on an annotation's border in a PDF.

// Define the dash pattern for an annotation's outline in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
