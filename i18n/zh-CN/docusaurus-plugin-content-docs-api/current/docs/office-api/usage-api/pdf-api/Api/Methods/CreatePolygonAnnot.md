# CreatePolygonAnnot

创建多边形批注。

## 语法

```javascript
expression.CreatePolygonAnnot(rect, path);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 批注矩形。 |
| path | 必需 | [Path](../../Enumeration/Path.md) |  | 多边形路径 |

## 返回值

[ApiPolygonAnnotation](../../ApiPolygonAnnotation/ApiPolygonAnnotation.md)

## 示例

This example creates a polygon annotation and adds it to the page.

```javascript editor-pdf
let doc = Api.GetDocument();
let polygonAnnot = Api.CreatePolygonAnnot([40, 40, 200, 200], [{x: 100, y: 100}, {x: 150, y: 150}, {x: 100, y: 150}]);
let page = doc.GetPage(0);
page.AddObject(polygonAnnot);

```
