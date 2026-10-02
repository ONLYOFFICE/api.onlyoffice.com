# SetRect

设置批注矩形。

继承自 [ApiBaseAnnotation.SetRect](../../ApiBaseAnnotation/Methods/SetRect.md)。

## 语法

```javascript
expression.SetRect(rect);
```

`expression` - 表示 [ApiBaseMarkupAnnotation](../ApiBaseMarkupAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 批注的新边界矩形。 |

## 返回值

boolean

## 示例

在 PDF 中通过更改边界调整注释大小。

```javascript editor-pdf
// Expand or shrink an annotation's size in a PDF.

// Adjust the rectangular area covered by an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetRect([10, 10, 320, 64]);
```
