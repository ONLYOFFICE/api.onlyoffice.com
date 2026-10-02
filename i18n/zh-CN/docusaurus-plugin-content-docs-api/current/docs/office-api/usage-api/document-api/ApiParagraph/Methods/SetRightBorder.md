# SetRightBorder

指定将在指定段落周围的页面右侧显示的边框。

继承自 [ApiParaPr.SetRightBorder](../../ApiParaPr/Methods/SetRightBorder.md)。

## 语法

```javascript
expression.SetRightBorder(sType, nSize, nSpace, r, g, b);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 边框样式。 |
| nSize | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前右侧边框的宽度，以磅的八分之一为单位。 |
| nSpace | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的段落右侧间距偏移量，以磅为单位。 |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |

## 返回值

boolean

## 示例

在文档中为段落的右侧添加边框。

```javascript editor-docx
// How do I place a visible border along the right edge of a paragraph in a document?

// Decorate a paragraph with a colored line on its right side in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a two point orange border at its right side. ");
paragraph.AddText("The space between the right side of the paragraph and the border is 8 points. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetRightBorder("single", 16, 8, 255, 111, 61);
```
