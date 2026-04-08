# AddFootnoteCrossRef

向当前段落添加脚注交叉引用。
💡 请注意，此段落必须在文档中。

## 语法

```javascript
expression.AddFootnoteCrossRef(sRefType, oParaTo, bLink, bAboveBelow);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefType | 必需 | [footnoteRefTo](../../Enumeration/footnoteRefTo.md) |  | 要插入的脚注引用的文本或数值。 |
| oParaTo | 必需 | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 要引用的脚注的首段（必须在文档中）。 |
| bLink | 可选 | boolean | true | 指定引用是否作为超链接插入。 |
| bAboveBelow | 可选 | boolean | false | 指定是否应包含表示引用位置的「上方/下方」字样（不与 "aboveBelow" sRefType 一起使用）。 |

## 返回值

boolean

## 示例

此示例向段落添加脚注交叉引用。

```javascript editor-docx
// How to create a footnote reference to the paragraph.

// Add a cross-reference to the footnote of the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("For more information on previous sentences see footnote ");
doc.Push(paragraph);
paragraph.AddFootnoteCrossRef("formFootnoteNum", footnotesFirstParagraphs[0]);
```
