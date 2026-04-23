# GetClassType

返回 ApiNotesPage 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiNotesPage](../ApiNotesPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"notesPage"

## 示例

此示例展示如何获取 ApiNotesPage 的类类型。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const notesPage = slide.GetNotesPage();
const classType = notesPage.GetClassType();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(0, 30 * 36000);
slide.AddObject(shape);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Class type of ApiNotesPage: ' + classType);

```
