# SetQuads

设置当前标记批注的四边形。

## 语法

```javascript
expression.SetQuads(quads);
```

`expression` - 表示 [ApiBaseMarkupAnnotation](../ApiBaseMarkupAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| quads | 必需 | [Quad](../../Enumeration/Quad.md)[] |  | 定义高亮区域的四边形数组。 |

## 返回值

boolean

## 示例

指定 PDF 中标记注释的高亮区域。

```javascript editor-pdf
// How do I define the highlighted region in a PDF?

// Assign new coordinates to the marked area of an annotation in a PDF.

let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
markupAnnot.SetQuads([[85, 73, 226, 73, 85, 87, 226, 87]]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`We set new quads to markup annotation`);
```
