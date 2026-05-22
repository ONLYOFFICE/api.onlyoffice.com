# SetBetweenBorder

指定在具有相同段落边框设置的一组段落中每个段落之间显示的边框。

## 语法

```javascript
expression.SetBetweenBorder(sType, nSize, nSpace, r, g, b);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 边框样式。 |
| nSize | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前边框的宽度，以磅的八分之一为单位。 |
| nSpace | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的段落之间的间距偏移量，以磅为单位。 |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |

## 返回值

boolean

## 示例

在文档中连续的同样式段落之间添加边框。

```javascript editor-docx
// How do I draw a dividing line between paragraphs that share the same style in a document?

// Apply a uniform visual separator across a group of related paragraphs using a shared style.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetBetweenBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border between paragraphs.");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the second paragraph. ");
paragraph.AddText("No need to add anything additionally to it. ");
paragraph.AddText("The borders between the paragraphs have already been set.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the third paragraph. ");
paragraph.AddText("No need to add anything additionally to it. ");
paragraph.AddText("The borders between the paragraphs have already been set.");
doc.Push(paragraph);
```
