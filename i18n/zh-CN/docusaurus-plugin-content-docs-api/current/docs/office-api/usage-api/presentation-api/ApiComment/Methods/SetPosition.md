# SetPosition

设置文档中批注的位置。

## 语法

```javascript
expression.SetPosition(x, y);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| x | 必需 | number |  | 批注位置的 X 坐标（以 EMU 为单位）。 |
| y | 必需 | number |  | 批注位置的 Y 坐标（以 EMU 为单位）。 |

## 返回值

此方法不返回任何数据。

## 示例

This example sets the position of the comment in the presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
presentation.GetAllComments().forEach(comment => {
	comment.Delete();
});
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(173, 216, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

slide.AddComment(0, 0, 'Comment 1', 'John Smith');
const arrComments = presentation.GetAllComments();
arrComments[0].SetPosition(Api.MillimetersToEmus(20 + 300), Api.MillimetersToEmus(35 + 130));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('The comment position was changed from (0, 0) to (320, 165).');

```
