# RemoveElement

使用指定的位置移除元素。
💡 如果移除的元素是段落的最后一个元素（即所有元素都从段落中移除），
将自动创建一个新的空 Run。如果要向此 Run 添加
内容，请使用 [ApiParagraph#GetElement](../../ApiParagraph/Methods/GetElement.md) 方法。

## 语法

```javascript
expression.RemoveElement(nPos);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 要从段落中移除的元素位置。 |

## 返回值

boolean

## 示例

此示例使用指定的位置移除元素。

```javascript editor-pptx
// How to remove an element from the paragraph using its position index.

// Delete an element from the paragraph.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

let run = Api.CreateRun();
run.AddText("This is the first paragraph element. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("This is the second paragraph element. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("This is the third paragraph element (it will be removed from the paragraph and we will not see it). ");
paragraph.AddElement(run);
paragraph.AddLineBreak();

run = Api.CreateRun();
run.AddText("This is the fourth paragraph element - it became the third, because we removed the previous run from the paragraph. ");
paragraph.AddElement(run);
paragraph.AddLineBreak();

run = Api.CreateRun();
run.AddText("Please note that line breaks are not counted into paragraph elements!");
paragraph.AddElement(run);
paragraph.RemoveElement(3);

slide.AddObject(shape);

```
