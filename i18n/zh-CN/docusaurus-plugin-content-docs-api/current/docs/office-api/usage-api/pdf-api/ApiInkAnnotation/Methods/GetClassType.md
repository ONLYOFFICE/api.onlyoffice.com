# GetClassType

返回 ApiInkAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiInkAnnotation](../ApiInkAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"inkAnnot"

## 示例

获取 PDF 中墨迹注释的类类型。

```javascript editor-pdf
// Useful for verifying the category of an ink annotation in a PDF.

// Determine the classification of an ink annotation in a PDF.

let doc = Api.GetDocument();
let inkPaths = [[{x: 328.002, y: 222.017}, {x: 328.648, y: 222.017}, {x: 329.294, y: 222.017}]];
let inkAnnot = Api.CreateInkAnnot([10, 10, 160, 32], inkPaths);
inkAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(inkAnnot);
console.log(`Annot class type is: ${inkAnnot.GetClassType()}`);
```
