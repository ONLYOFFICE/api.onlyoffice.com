# IntersectWith

返回当前范围与另一个范围的交集作为新范围。当前范围未更改。

## 语法

```javascript
expression.IntersectWith(oRange);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oRange | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 将与当前范围相交的范围。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

从文档中两个高亮区域的重叠部分生成新的文本选区。

```javascript editor-docx
// How do I find the shared content between two text selections in a document?

// Combine two overlapping spans into their common area for focused formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Lorem ipsum dolor sit amet,");
paragraph.AddText(" consectetuer adipiscing elit,");
paragraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
let rangeFirst = doc.GetRange(0, 49);
let rangeSecond = doc.GetRange(22, 123);
let range = rangeFirst.IntersectWith(rangeSecond);
range.SetBold(true);
```
