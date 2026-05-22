# GetPosition

获取批注位置。

## 语法

```javascript
expression.GetPosition();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Point](../../Enumeration/Point.md)

## 示例

获取 PDF 中注释的位置坐标。

```javascript editor-pdf
// What are the horizontal and vertical coordinates of an annotation in a PDF?

// Retrieve the X and Y position values from an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
let pos = squareAnnot.GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```
