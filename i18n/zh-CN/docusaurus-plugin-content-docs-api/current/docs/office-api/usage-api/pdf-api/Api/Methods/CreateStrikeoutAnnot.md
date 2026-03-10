# CreateStrikeoutAnnot

创建删除线批注。

## 语法

```javascript
expression.CreateStrikeoutAnnot(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) \| [Quad](../../Enumeration/Quad.md)[] |  | 应用删除线的区域。 |

## 返回值

[ApiStrikeoutAnnotation](../../ApiStrikeoutAnnotation/ApiStrikeoutAnnotation.md)

## 示例

How to strikeout a text on a page.

```javascript editor-pdf
// Ho to create strikeout annotation

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);

```
