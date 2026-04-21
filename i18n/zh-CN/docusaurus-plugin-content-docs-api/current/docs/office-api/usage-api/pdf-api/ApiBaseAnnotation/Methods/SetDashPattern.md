# SetDashPattern

设置批注虚线图案。
💡 边框样式属性必须设置为 "dashed"。

## 语法

```javascript
expression.SetDashPattern(pattern);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pattern | 必需 | number[] |  | 定义用于绘制虚线边框的虚线和间隙图案的数组。例如，值 [3, 2] 指定用 3 点虚线和 2 点间隙交替绘制的边框。 |

## 返回值

boolean

## 示例

在 PDF 文档中创建方形注释并为边框设置虚线模式。

```javascript editor-pdf
// How to set dash pattern for an annotation in a PDF document?

// Set dash pattern and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
