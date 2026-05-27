# GetClassType

返回 ApiPolyLineAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"polyLineAnnot"

## 示例

识别 PDF 中折线标记的对象类型。

```javascript editor-pdf
// How do I determine the object type of a polyline marking in a PDF?

// Find the classification name for a polyline marking in a PDF.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`Annot class type is: ${polylineAnnot.GetClassType()}`);
```
