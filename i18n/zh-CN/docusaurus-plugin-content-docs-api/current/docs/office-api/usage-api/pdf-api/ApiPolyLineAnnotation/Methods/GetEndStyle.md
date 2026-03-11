# GetEndStyle

获取线条终点样式。

## 语法

```javascript
expression.GetEndStyle();
```

`expression` - 表示 [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[LineEndStyle](../../Enumeration/LineEndStyle.md)

## 示例

此示例获取折线注释的线条终点样式。

```javascript editor-pdf
let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`Default line end style is: ${polylineAnnot.GetEndStyle()}`);
```
