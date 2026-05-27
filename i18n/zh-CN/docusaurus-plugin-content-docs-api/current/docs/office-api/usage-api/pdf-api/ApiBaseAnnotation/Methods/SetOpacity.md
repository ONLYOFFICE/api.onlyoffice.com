# SetOpacity

设置批注不透明度。

## 语法

```javascript
expression.SetOpacity(value);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | [percentage](../../Enumeration/percentage.md) |  | 不透明度值，从 0（透明）到 100（不透明）。 |

## 返回值

boolean

## 示例

在 PDF 中使注释透明或不透明。

```javascript editor-pdf
// Adjust the transparency level of an annotation in a PDF.

// Control how solid or see-through an annotation appears in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
squareAnnot.SetOpacity(50);
```
