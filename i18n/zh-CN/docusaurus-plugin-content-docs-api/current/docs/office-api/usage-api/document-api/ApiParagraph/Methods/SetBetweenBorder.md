# SetBetweenBorder

指定在具有相同段落边框设置的一组段落中每个段落之间显示的边框。

继承自 [ApiParaPr.SetBetweenBorder](../../ApiParaPr/Methods/SetBetweenBorder.md)。

## 语法

```javascript
expression.SetBetweenBorder(type, size, space, color);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 边框样式。 |
| size | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前边框的宽度，以磅的八分之一为单位。 |
| space | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的段落之间的间距偏移量，以磅为单位。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中为具有相同边框设置的相邻段落之间添加可见边框。

```javascript editor-docx
// How do I draw a dividing line between consecutive paragraphs in a document?

// Separate groups of related paragraphs with a styled border line for clearer visual structure in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thick orange border between it and the next paragraph. ");
paragraph.AddText("No additional spacing between the border and the paragraphs is added.");
paragraph.SetBetweenBorder("single", 24, 0, Api.Color(255, 111, 61));
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph. We will add a thin black border between it and the next paragraph. ");
paragraph.AddText("We added additional spacing between the border and the paragraphs.");
paragraph.SetBetweenBorder("single", 12, 10, Api.Color(51, 51, 51));
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the third paragraph. The border can be displayed above it only, as there are no new paragraphs after it.");
doc.Push(paragraph);
```
