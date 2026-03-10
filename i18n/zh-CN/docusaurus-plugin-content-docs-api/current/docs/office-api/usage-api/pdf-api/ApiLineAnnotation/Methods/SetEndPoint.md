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
| point | 必需 | [Point](../../Enumeration/Point.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example sets end point to line annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
lineAnnot.SetEndPoint({x: 145, y: 20});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End point set to: ${lineAnnot.GetEndPoint()}`);
```
