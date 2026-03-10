# CreateCircleAnnot

创建圆形批注。

## 语法

```javascript
expression.CreateCircleAnnot(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 批注矩形。 |

## 返回值

[ApiCircleAnnotation](../../ApiCircleAnnotation/ApiCircleAnnotation.md)

## 示例

This example creates a circle annotation and adds it to the page.

```javascript editor-pdf
let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);

```
