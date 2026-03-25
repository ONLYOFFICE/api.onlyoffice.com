# AddHeadingCrossRef

向当前段落添加标题交叉引用。
💡 请注意，此段落必须在文档中。

## 语法

```javascript
expression.AddHeadingCrossRef(sRefType, oParaTo, bLink, bAboveBelow);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefType | 必需 | [headingRefTo](../../Enumeration/headingRefTo.md) |  | 要插入的标题引用的文本或数值。 |
| oParaTo | 必需 | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 要引用的标题段落（必须在文档中）。 |
| bLink | 可选 | boolean | true | 指定引用是否作为超链接插入。 |
| bAboveBelow | 可选 | boolean | false | 指定是否应包含表示引用位置的「上方/下方」字样（不与 "text" 和 "aboveBelow" sRefType 一起使用）。 |

## 返回值

boolean

## 示例

此示例向段落添加标题交叉引用。

```javascript editor-docx
// How to create a heading reference to the paragraph.

// Add a cross-reference to the heading of the paragraph.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Cross-reference method");
let headingParagraphs = doc.GetAllHeadingParagraphs();
paragraph = Api.CreateParagraph();
paragraph.AddText("Heading 1 style is applied to the heading ");
doc.Push(paragraph);
paragraph.AddHeadingCrossRef("text", headingParagraphs[0]);
```
