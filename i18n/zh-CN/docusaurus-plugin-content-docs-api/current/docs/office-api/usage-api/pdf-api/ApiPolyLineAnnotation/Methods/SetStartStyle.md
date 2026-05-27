# SetStartStyle

设置线条起点样式。

## 语法

```javascript
expression.SetStartStyle(style);
```

`expression` - 表示 [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | 必需 | [LineEndStyle](../../Enumeration/LineEndStyle.md) |  | 折线起始端点的样式。 |

## 返回值

boolean

## 示例

更改 PDF 中折线标记的线条起始外观。

```javascript editor-pdf
// How do I update the line beginning style on a polyline marking in a PDF?

// Modify the appearance of the starting point shown on a polyline marking in a PDF.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
polylineAnnot.SetStartStyle("circle");
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`We set line start style to: ${polylineAnnot.GetStartStyle()}`);
```
