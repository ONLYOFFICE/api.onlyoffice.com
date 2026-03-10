# SetAuthorName

设置批注作者的姓名。

## 语法

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | 必需 | string |  | 批注作者的姓名。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例演示如何设置批注的作者。

```javascript editor-pptx
// How to change a comment's author name.

// Get all comments from the presentation and set an author for the first one.

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
arrComments[0].SetAuthorName("Mark Pottato");
const authorName = arrComments[0].GetAuthorName();

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment's author: " + authorName);

```
