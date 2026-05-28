# SetCallout

设置批注标注。

## 语法

```javascript
expression.SetCallout(callout);
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| callout | 必需 | [FreeTextCallout](../../Enumeration/FreeTextCallout.md) |  | 定义标注线的 3 个点的数组。 |

## 返回值

boolean

## 示例

设置 PDF 中文本注释的标注形状样式。

```javascript editor-pdf
// How do I change what the comment box looks like in a PDF?

// Assign a callout appearance to an annotation element in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot callout is: ${freeTextAnnot.GetCallout()}`);
```
