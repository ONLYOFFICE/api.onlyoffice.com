# SetContextualSpacing

指定当前后段落具有相同段落样式时，使用
[ApiParaPr#SetSpacingBefore](../../ApiParaPr/Methods/SetSpacingBefore.md) 或 [ApiParaPr#SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md) 间距元素设置的此段落前后任何间距不应被应用，分别影响顶部和底部间距。

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

此示例指定当前后段落具有相同段落样式时，使用 [ApiParaPr#SetSpacingBefore](./SetSpacingBefore.md) 或 [ApiParaPr#SetSpacingAfter](./SetSpacingAfter.md) 间距元素设置的此段落前后任何间距不应被应用，分别影响顶部和底部间距。

```javascript editor-docx
// Set the contextual spacing for paragraph.

// Get the first paragraph and set the spacing for its two ends.

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
