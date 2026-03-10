# Delete

删除当前段落。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例删除段落。

```javascript editor-pdf
// How to remove a paragraph from the page.

// Delete a text.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
docContent.RemoveAllElements();

let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
docContent.Push(paragraph);
paragraph.Delete();
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph. The first paragraph was removed from the shape content.");
docContent.Push(paragraph);
page.AddObject(shape);

```
