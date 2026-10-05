# SetLeftBorder

指定将在指定段落周围的页面左侧显示的边框。

继承自 [ApiParaPr.SetLeftBorder](../../ApiParaPr/Methods/SetLeftBorder.md)。

## 语法

```javascript
expression.SetLeftBorder(sType, nSize, nSpace, r, g, b);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 边框样式。 |
| nSize | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前左侧边框的宽度，以磅的八分之一为单位。 |
| nSpace | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的段落左侧间距偏移量，以磅为单位。 |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |

## 返回值

boolean

## 示例

在文档中沿段落左边缘添加彩色边框。

```javascript editor-docx
// How do I draw a vertical line on the left side of a paragraph in a document?

// Highlight a paragraph by placing a styled border on its left side in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a two point orange border at its left side. ");
paragraph.AddText("The space between the left side of the paragraph and the border is 8 points. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetLeftBorder("single", 16, 8, 255, 111, 61);
```
