# SetBorderStyle

设置批注边框样式。

## 语法

```javascript
expression.SetBorderStyle(borderStyle);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| borderStyle | 必需 | [AnnotBorderStyle](../../Enumeration/AnnotBorderStyle.md) |  | 边框样式：**"solid"** 或 **"dashed"**。 |

## 返回值

boolean

## 示例

设置 PDF 中注释的边框样式。

```javascript editor-pdf
// Should an annotation border be solid, dashed, or have another pattern in a PDF?

// Apply a border style pattern to an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
