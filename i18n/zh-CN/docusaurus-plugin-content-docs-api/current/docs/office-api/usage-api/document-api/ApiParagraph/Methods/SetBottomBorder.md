# SetBottomBorder

指定在具有相同段落边框设置的一组段落下方显示的边框。

:::note
连续的相同样式段落被视为一个整体，因此边框添加到整个块而不是块中的每个段落。
:::

继承自 [ApiParaPr.SetBottomBorder](../../ApiParaPr/Methods/SetBottomBorder.md)。

## 语法

```javascript
expression.SetBottomBorder(type, size, space, color);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 边框样式。 |
| size | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前底部边框的宽度，以磅的八分之一为单位。 |
| space | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的段落下方间距偏移量，以磅为单位。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中的段落下方绘制边框。

```javascript editor-docx
// How do I add a bottom border line to a paragraph in a document?

// Visually separate a paragraph from the content beneath it using a styled bottom border in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thin orange border below it.");
paragraph.SetBottomBorder("single", 8, 0, Api.Color(255, 111, 61));
```
