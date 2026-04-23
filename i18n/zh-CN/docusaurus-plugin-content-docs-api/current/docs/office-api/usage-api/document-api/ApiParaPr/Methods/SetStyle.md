# SetStyle

段落样式基础方法。
💡 此方法本身不单独使用，它仅构成 [ApiParagraph#SetStyle](../../ApiParagraph/Methods/SetStyle.md) 方法的基础，该方法为段落设置选定或创建的样式。

## 语法

```javascript
expression.SetStyle(oStyle);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | 要设置的段落样式。 |

## 返回值

boolean

## 示例

此示例为段落设置样式。

```javascript editor-docx
// Set the style of the paragraph to "Heading 6".

// Create a text in a paragraph styled with the 'Heading 6' style.

let doc = Api.GetDocument();
let heading6Style = doc.GetStyle("Heading 6");
let paraPr = heading6Style.GetParaPr();
paraPr.SetJc("center");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(heading6Style);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
