# SetEndPoint

设置线条终点。

## 语法

```javascript
expression.SetEndPoint(point);
```

`expression` - 表示 [ApiLineAnnotation](../ApiLineAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| point | 必需 | [Point](../../Enumeration/Point.md) |  | 线条的结束点。 |

## 返回值

boolean

## 示例

更改 PDF 中线条注释的结束位置。

```javascript editor-pdf
// How do I move the endpoint of a line in a PDF?

// Update the ending position of a line annotation in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetEndPoint({x: 145, y: 20});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End point set to: ${lineAnnot.GetEndPoint()}`);
```
