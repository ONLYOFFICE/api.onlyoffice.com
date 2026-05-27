# SetRectDiff

设置批注矩形差值。

## 语法

```javascript
expression.SetRectDiff(rectDiff);
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rectDiff | 必需 | [RectDiff](../../Enumeration/RectDiff.md) |  | 描述两个矩形之间数值差异的四个数字的集合。 |

## 返回值

boolean

## 示例

调整 PDF 中文本注释周围的边框间距。

```javascript editor-pdf
// How do I control the distance between the text and the annotation border in a PDF?

// Modify the boundary offset and confirm the change in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetRectDiff([10, 10, 10, 10]);
console.log(`Annot rect diff is: ${freeTextAnnot.GetRectDiff()}`);
```
