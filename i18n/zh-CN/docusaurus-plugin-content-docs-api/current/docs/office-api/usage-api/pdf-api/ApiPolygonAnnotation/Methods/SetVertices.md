# SetVertices

设置多边形批注的顶点。

## 语法

```javascript
expression.SetVertices(path);
```

`expression` - 表示 [ApiPolygonAnnotation](../ApiPolygonAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| path | 必需 | [Path](../../Enumeration/Path.md) |  | 多边形路径 |

## 返回值

boolean

## 示例

This example sets vertices to polygon annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polygonAnnot = Api.CreatePolygonAnnot([40, 5, 160, 110], vertices);
polygonAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let newVertices = [{x: 100, y: 10}, {x: 150, y: 50}, {x: 50, y: 50}];
polygonAnnot.SetVertices(newVertices)
let page = doc.GetPage(0);
page.AddObject(polygonAnnot);
console.log(`We set vertices to polygon annotation`);
```
