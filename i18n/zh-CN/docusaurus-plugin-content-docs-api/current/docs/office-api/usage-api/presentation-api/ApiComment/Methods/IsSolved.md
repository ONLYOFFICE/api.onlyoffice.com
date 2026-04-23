# IsSolved

检查批注是否已解决。

## 语法

```javascript
expression.IsSolved();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何确定批注是否已解决。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const posX = 15 * 36000;
const posY = 35 * 36000;

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(posX, posY);
slide.AddObject(shape);

slide.AddComment(posX, posY, 'Comment 1');
const arrComments = presentation.GetAllComments();
const comment = arrComments[0];

const before = comment.IsSolved() ? 'solved' : 'not solved';
comment.SetSolved(true);
const after = comment.IsSolved() ? 'solved' : 'not solved';

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Originally comment was ' + before + ', but currently it is ' + after);

```
