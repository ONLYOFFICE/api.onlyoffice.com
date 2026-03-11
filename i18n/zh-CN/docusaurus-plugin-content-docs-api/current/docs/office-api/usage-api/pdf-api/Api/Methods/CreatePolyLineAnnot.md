# CreatePolyLineAnnot

创建折线批注。

## 语法

```javascript
expression.CreatePolyLineAnnot(rect, path);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 批注矩形。 |
| path | 必需 | [Path](../../Enumeration/Path.md) |  | 折线路径 |

## 返回值

[ApiPolyLineAnnotation](../../ApiPolyLineAnnotation/ApiPolyLineAnnotation.md)

## 示例

此示例创建折线注释并将其添加到页面。

```javascript editor-pdf
let doc = Api.GetDocument();
let polylineAnnot = Api.CreatePolyLineAnnot([40, 40, 200, 200], [{x: 100, y: 100}, {x: 150, y: 150}, {x: 100, y: 150}]);
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);

```
