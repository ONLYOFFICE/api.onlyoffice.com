# GetStartStyle

获取线条起点样式。

## 语法

```javascript
expression.GetStartStyle();
```

`expression` - 表示 [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[LineEndStyle](../../Enumeration/LineEndStyle.md)

## 示例

查找 PDF 中折线标记的线条起始外观。

```javascript editor-pdf
// How do I check what the line beginning looks like on a polyline marking in a PDF?

// Retrieve the style of the starting point displayed on a polyline marking in a PDF.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`Default line start style is: ${polylineAnnot.GetStartStyle()}`);
```
