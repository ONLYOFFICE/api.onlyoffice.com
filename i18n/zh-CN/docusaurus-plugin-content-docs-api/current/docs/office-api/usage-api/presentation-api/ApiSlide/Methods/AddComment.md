# AddComment

向当前幻灯片添加批注。

## 语法

```javascript
expression.AddComment(posX, posY, text, author, userId);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posX | 必需 | number |  | 批注的 X 位置（以 EMU 为单位，默认为 0）。 |
| posY | 必需 | number |  | 批注的 Y 位置（以 EMU 为单位，默认为 0）。 |
| text | 必需 | string |  | 批注文本。 |
| author | 可选 | string |  | 作者姓名（默认为当前用户名）。 |
| userId | 可选 | string |  | 批注作者的用户 ID（默认为当前用户 ID）。 |

## 返回值

boolean

## 示例

此示例演示如何向特定幻灯片添加批注。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const commentText = "Note: check method to add comments to slides.";
const commentAuthor = "Mark Pottato";
const commentUserId = "user-42";
const posX = 20 * 36000;
const posY = 20 * 36000;

slide.AddComment(posX, posY, commentText, commentAuthor, commentUserId);
slide.AddComment(posX, posY, 'Author for this comment was not specified');

const fill = Api.CreateSolidFill(Api.RGB(50, 100, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetDocContent().GetElement(0);

const comments = presentation.GetAllComments();
for (let i = 0; i < comments.length; i++) {
	const comment = comments[i];
	paragraph.AddText('Comment' + (i + 1) + ':' + '\n');
	paragraph.AddText('Text: ' + comment.GetText() + '\n');
	paragraph.AddText('Author: ' + comment.GetAuthorName() + '\n');
	paragraph.AddText('User ID: ' + comment.GetUserId() + '\n');
	paragraph.AddLineBreak();
}

slide.RemoveAllObjects();
shape.SetPosition(posX, posY);
slide.AddObject(shape);

```
