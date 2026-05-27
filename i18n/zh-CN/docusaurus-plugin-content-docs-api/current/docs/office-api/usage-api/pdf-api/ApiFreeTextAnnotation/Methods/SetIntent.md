# SetIntent

设置此批注的意图类型。

## 语法

```javascript
expression.SetIntent(intentType);
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| intentType | 必需 | [FreeTextIntent](../../Enumeration/FreeTextIntent.md) |  | 自由文本批注的意图类型。 |

## 返回值

boolean

## 示例

在 PDF 中为文本注释分配用途类型。

```javascript editor-pdf
// How do I specify what kind of comment a text annotation is in a PDF?

// Define the annotation's purpose and verify it in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot intent is: ${freeTextAnnot.GetIntent()}`);
```
