# SetStartPoint

设置线条起点。

## 语法

```javascript
expression.SetStartPoint(point);
```

`expression` - 表示 [ApiLineAnnotation](../ApiLineAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| point | 必需 | [Point](../../Enumeration/Point.md) |  | 线条的起始点。 |

## 返回值

boolean

## 示例

重新定位 PDF 中线条注释的起始位置。

```javascript editor-pdf
// How do I move the starting position of a line in a PDF?

// Update the coordinates for the line's starting location in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetStartPoint({x: 20, y: 20});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start point set to: ${lineAnnot.GetStartPoint()}`);
```
