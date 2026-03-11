# CreateLineAnnot

创建线条批注。

## 语法

```javascript
expression.CreateLineAnnot(rect, startPoint, endPoint);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 批注矩形。 |
| startPoint | 必需 | [Point](../../Enumeration/Point.md) |  | 线条起点 |
| endPoint | 必需 | [Point](../../Enumeration/Point.md) |  | 线条终点 |

## 返回值

[ApiLineAnnotation](../../ApiLineAnnotation/ApiLineAnnotation.md)

## 示例

此示例创建线条注释并将其添加到页面。

```javascript editor-pdf
let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 11, y: 11}, {x: 155, y: 25});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);

```
