# SetPosition

指定当前范围的文本相对于周围非定位文本的默认基线升高或降低的量。

## 语法

```javascript
expression.SetPosition(position);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | 必需 | [hps](../../Enumeration/hps.md) \| null |  | 以半磅（1/144 英寸）为单位指定正值（升高文本）或负值（降低文本）。传递 *null* 可移除位置设置。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

相对于文档中周围的基线升高或降低选定文本。

```javascript editor-docx
// How do I shift a portion of text up or down without changing its size in a document?

// Adjust the vertical offset of highlighted words to create superscript or subscript effects in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
paragraph.AddText("This is a text run with the text raised 5 points (10 half-points).");
let range = doc.GetRange(22, 75);
range.SetPosition(10);
```
