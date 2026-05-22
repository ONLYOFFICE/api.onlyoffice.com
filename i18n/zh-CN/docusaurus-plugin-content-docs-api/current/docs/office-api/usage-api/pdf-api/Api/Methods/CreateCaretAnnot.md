# CreateCaretAnnot

创建插入符号批注。

## 语法

```javascript
expression.CreateCaretAnnot(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) \| [Quad](../../Enumeration/Quad.md)[] |  | 应用插入符号的区域。 |

## 返回值

[ApiCaretAnnotation](../../ApiCaretAnnotation/ApiCaretAnnotation.md)

## 示例

在 PDF 中添加插入符号注释以标记文本插入位置。

```javascript editor-pdf
// How do I mark where text should be added in a PDF?

// Create an insertion point indicator in a PDF.

let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);
```
