# SetVertices

设置折线批注的顶点。

## 语法

```javascript
expression.SetVertices(path);
```

`expression` - 表示 [ApiPolyLineAnnotation](../ApiPolyLineAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| path | 必需 | [Path](../../Enumeration/Path.md) |  | 折线路径 |

## 返回值

boolean

## 示例

此示例为折线注释设置顶点。

```javascript editor-pdf
let doc = Api.GetDocument();
let vertices = [{x: 100, y: 10}, {x: 150, y: 100}, {x: 50, y: 100}];
let polylineAnnot = Api.CreatePolyLineAnnot([40, 5, 160, 110], vertices);
polylineAnnot.SetBorderColor(Api.RGB(255, 0, 0));
let newVertices = [{x: 100, y: 10}, {x: 150, y: 50}, {x: 50, y: 50}];
polylineAnnot.SetVertices(newVertices)
let page = doc.GetPage(0);
page.AddObject(polylineAnnot);
console.log(`We set vertices to polyline annotation`);
```
