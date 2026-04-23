# SetReadingOrder

指定当前段落的阅读顺序。
可能的值有：
-**null** - 使用标准方向参数；
-**"ltr"** - 从左到右的文本方向；
-**"rtl"** - 从右到左的文本方向。

## 语法

```javascript
expression.SetReadingOrder(readingOrder);
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| readingOrder | 可选 | [ReadingOrder](../../Enumeration/ReadingOrder.md) |  | 阅读顺序。 |

## 返回值

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)

## 示例

此示例为富文本段落设置从右到左方向。

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let run = para.GetElement(0);
run.AddText("Some paragraph text");
para.SetReadingOrder("rtl");

console.log("We sets rtl to rich paragraph");
```
