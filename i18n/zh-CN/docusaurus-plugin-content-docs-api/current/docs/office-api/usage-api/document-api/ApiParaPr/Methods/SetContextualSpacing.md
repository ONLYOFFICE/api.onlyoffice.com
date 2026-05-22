# SetContextualSpacing

指定当前后段落具有相同段落样式时，使用
[ApiParaPr#SetSpacingBefore](../../ApiParaPr/Methods/SetSpacingBefore.md) 或 [ApiParaPr#SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md) 间距元素设置的此段落前后任何间距不应被应用，分别影响顶部和底部间距。

## 语法

```javascript
expression.SetContextualSpacing(isContextualSpacing);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isContextualSpacing | 必需 | boolean |  | true 值将启用段落上下文间距。 |

## 返回值

boolean

## 示例

在文档中取消相邻同样式段落之间的间距。

```javascript editor-docx
// How do I remove extra space between paragraphs that share the same style in a document?

// Keep visually grouped paragraphs compact by ignoring before/after spacing within a style.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetContextualSpacing(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
doc.Push(paragraph);
```
