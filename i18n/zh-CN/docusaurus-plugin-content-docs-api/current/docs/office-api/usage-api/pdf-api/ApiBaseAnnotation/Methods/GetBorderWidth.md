# GetBorderWidth

获取批注边框宽度。

## 语法

```javascript
expression.GetBorderWidth();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[pt](../../Enumeration/pt.md)

## 示例

This example creates a square annotation and gets its border width.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border width is: ${squareAnnot.GetBorderWidth()}`);

```
