# CreateUnderlineAnnot

创建下划线批注。

## 语法

```javascript
expression.CreateUnderlineAnnot(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) \| [Quad](../../Enumeration/Quad.md)[] |  | 应用下划线的区域。 |

## 返回值

[ApiUnderlineAnnotation](../../ApiUnderlineAnnotation/ApiUnderlineAnnotation.md)

## 示例

This example creates a underline annotation and adds it to the page.

```javascript editor-pdf
let doc = Api.GetDocument();
let underlineAnnot = Api.CreateUnderlineAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(underlineAnnot);

```
