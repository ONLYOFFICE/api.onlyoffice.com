# AddReply

向批注添加回复。

## 语法

```javascript
expression.AddReply(sText, sAuthorName, sUserId, nPos);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | String |  | 批注回复文本。 |
| sAuthorName | 可选 | String |  | 批注回复作者的姓名。 |
| sUserId | 可选 | String |  | 批注回复作者的用户 ID。 |
| nPos | 可选 | Number | -1 | 批注回复位置。如果 nPos=-1，则添加到末尾。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例演示如何向批注添加回复。

```javascript editor-pptx
// How to reply to the comment.

// Get all comments from the presentation and reply to the first one.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const posX = 15 * 36000;
const posY = 35 * 36000;
const shapeWidth = 300 * 36000;
const shapeHeight = 100 * 36000;

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", shapeWidth, shapeHeight, fill, stroke);
shape.SetPosition(posX, posY);
slide.AddObject(shape);

slide.AddComment(posX, posY, "Comment from current user with default params");
slide.AddComment(posX + shapeWidth, posY + shapeHeight, "Comment from another user", "John Doe", "uid-2");

const arrComments = presentation.GetAllComments();
arrComments[0].AddReply("Hello, this is a reply", "John Smith", "uid-1");
const reply = arrComments[0].GetReply(0);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("First comment and its reply are aligned to the top left corner of the shape." + "\n");
paragraph.AddText("Comment from John Doe is aligned to the bottom right corner of the shape." + "\n");
paragraph.AddLineBreak();
paragraph.AddText("Comment's reply text: " + reply.GetText());

```
