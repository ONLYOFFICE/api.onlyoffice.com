# Delete

从文档中移除批注。

继承自 [ApiBaseAnnotation.Delete](../../ApiBaseAnnotation/Methods/Delete.md)。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiCircleAnnotation](../ApiCircleAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从 PDF 移除注释。

```javascript editor-pdf
// How do I delete an annotation in a PDF?

// Erase an annotation that no longer needs to be in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
squareAnnot.Delete();
```
