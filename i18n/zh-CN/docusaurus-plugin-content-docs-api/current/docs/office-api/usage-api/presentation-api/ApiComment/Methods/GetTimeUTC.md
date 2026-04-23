# GetTimeUTC

返回批注创建时间戳（UTC 格式）。

## 语法

```javascript
expression.GetTimeUTC();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

此示例演示如何获取批注创建的 UTC 时间。

```javascript editor-pptx
// How to know when a comment was added.

// Get all comments from the presentation and the first one's time of creation in UTC format.

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
const timeUTC = arrComments[0].GetTimeUTC();

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment's time (UTC): " + timeUTC);

```
