# GetStartPoint

获取线条起点。

## 语法

```javascript
expression.GetStartPoint();
```

`expression` - 表示 [ApiLineAnnotation](../ApiLineAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Point](../../Enumeration/Point.md)

## 示例

This example gets start point of line annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
let startPoint = lineAnnot.GetStartPoint();
console.log(`Start point is: x: ${startPoint.x}, y: ${startPoint.y}`);
```
