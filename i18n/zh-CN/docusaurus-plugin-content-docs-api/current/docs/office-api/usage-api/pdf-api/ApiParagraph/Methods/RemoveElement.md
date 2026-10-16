# RemoveElement

使用指定的位置移除元素。

:::note
如果移除的元素是段落的最后一个元素（即所有元素都从段落中移除），将自动创建一个新的空 Run。如果要向此 Run 添加内容，请使用 [ApiParagraph#GetElement](../../ApiParagraph/Methods/GetElement.md) 方法。
:::

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

在 PDF 中从段落对象删除特定元素。

```javascript editor-pdf
// Useful for removing an element by its position in a paragraph in a PDF.

// Eliminate an element at a given index from a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.RemoveAllElements();

let run = Api.CreateRun();
run.AddText("Run 1. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("Run 2. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("Run 3. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("Run 4. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("Run 5. ");
paragraph.AddElement(run);

paragraph.RemoveElement(3);

page.AddObject(shape);
```
