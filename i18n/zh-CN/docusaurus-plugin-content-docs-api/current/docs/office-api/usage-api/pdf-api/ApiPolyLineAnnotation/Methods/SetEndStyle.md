# SetEndStyle

设置线条终点样式。

## 语法

```javascript
expression.SetEndStyle(style);
```

`expression` - 表示 [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | 必需 | [LineEndStyle](../../Enumeration/LineEndStyle.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

在 PDF 文档中为折线注释设置线条终止样式。

```javascript editor-pdf
// How can I set end style using a polyline annotation in a PDF document?

// Set end style for a polyline annotation in a PDF document.

let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
polylineAnnot.SetEndStyle("square");
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`We set line end style to: ${polylineAnnot.GetEndStyle()}`);
```
