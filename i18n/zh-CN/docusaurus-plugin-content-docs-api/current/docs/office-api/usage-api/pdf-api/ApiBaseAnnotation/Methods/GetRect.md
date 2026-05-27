# GetRect

设置批注矩形。

## 语法

```javascript
expression.GetRect();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Rect](../../Enumeration/Rect.md)

## 示例

获取 PDF 中注释的矩形边界。

```javascript editor-pdf
// What is the area occupied by an annotation in a PDF?

// Read the bounding rectangle coordinates of an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation rect is: ${squareAnnot.GetRect()}`);
```
