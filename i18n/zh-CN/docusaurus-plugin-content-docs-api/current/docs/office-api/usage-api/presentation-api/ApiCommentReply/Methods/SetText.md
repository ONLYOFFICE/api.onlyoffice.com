# SetText

设置批注回复文本。

## 语法

```javascript
expression.SetText(sText);
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 批注回复文本。 |

## 返回值

[ApiCommentReply](../../ApiCommentReply/ApiCommentReply.md)

## 示例

此示例演示如何设置批注回复文本。

```javascript editor-pptx
// How to change a text of a comment reply.

// Get all comments from the presentation and set its first one's reply text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const posX = 15 * 36000;
const posY = 35 * 36000;

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(posX, posY);
slide.AddObject(shape);

slide.AddComment(posX, posY, "Comment 1", "John Smith");
const arrComments = presentation.GetAllComments();
arrComments[0].AddReply("Reply 1", "John Smith", "uid-1");
const reply = arrComments[0].GetReply(0);
reply.SetText("New reply text");

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment's reply text: " + reply.GetText());

```
