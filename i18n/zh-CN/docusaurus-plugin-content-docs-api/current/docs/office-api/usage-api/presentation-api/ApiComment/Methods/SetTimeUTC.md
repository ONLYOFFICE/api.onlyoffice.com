# SetTimeUTC

设置批注创建时间戳（UTC 格式）。

## 语法

```javascript
expression.SetTimeUTC(nTimeStamp);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | 必需 | Number \| String |  | 批注创建时间戳（UTC 格式）。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例演示如何设置批注的 UTC 时间。

```javascript editor-pptx
// How to change a creation time of a comment in UTC format.

// Get all comments from the presentation and change its first one's creation UTC time.

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
arrComments[0].SetTimeUTC('Jan 20 2000');
const timeUTC = arrComments[0].GetTimeUTC();

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Comment's time (UTC): " + timeUTC);

```
