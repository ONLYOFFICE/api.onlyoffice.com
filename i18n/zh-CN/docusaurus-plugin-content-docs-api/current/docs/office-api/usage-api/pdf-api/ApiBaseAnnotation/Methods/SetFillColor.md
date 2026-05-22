# SetFillColor

设置批注填充颜色。

## 语法

```javascript
expression.SetFillColor(color);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 要设置的填充颜色（省略参数以设置无填充） |

## 返回值

boolean

## 示例

设置 PDF 中注释的背景颜色。

```javascript editor-pdf
// Apply a fill color to make an annotation stand out in a PDF.

// Change the interior color of an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
```
