# SetContextualSpacing

指定当前后段落具有相同段落样式时，使用 [ApiParaPr#SetSpacingBefore](../../ApiParaPr/Methods/SetSpacingBefore.md) 或 [ApiParaPr#SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md) 间距元素设置的此段落前后任何间距不应被应用，分别影响顶部和底部间距。

继承自 [ApiParaPr.SetContextualSpacing](../../ApiParaPr/Methods/SetContextualSpacing.md)。

## 语法

```javascript
expression.SetContextualSpacing(isContextualSpacing);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isContextualSpacing | 必需 | boolean |  | true 值将启用段落上下文间距。 |

## 返回值

boolean

## 示例

在文档中控制是否在相同样式的段落之间添加额外间距。

```javascript editor-docx
// How do I remove or keep extra space between adjacent paragraphs of the same style in a document?

// Adjust spacing behavior so that matching paragraphs sit closer together or farther apart in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
paragraph.SetContextualSpacing(false);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
paragraph.SetContextualSpacing(false);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
paragraph.SetContextualSpacing(false);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);
```
