# GetClassType

返回 ApiSquareAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiSquareAnnotation](../ApiSquareAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"squareAnnot"

## 示例

检查 PDF 文档中方形注释返回的类类型。

```javascript editor-pdf
// How do I check what type a square annotation object is in a PDF document?

// Retrieve and output the class type string for a square annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${squareAnnot.GetClassType()}`);
```
