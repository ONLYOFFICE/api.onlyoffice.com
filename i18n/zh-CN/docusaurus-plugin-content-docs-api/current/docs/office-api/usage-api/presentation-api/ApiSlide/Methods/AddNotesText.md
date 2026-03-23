# AddNotesText

向当前幻灯片的备注页添加文本。

## 语法

```javascript
expression.AddNotesText(sText);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 要添加到备注页的文本。 |

## 返回值

boolean

## 示例

此示例展示如何向幻灯片的备注页添加文本。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

const isNotesAdded = slide.AddNotesText('This is a note added using AddNotesText method');
if (isNotesAdded) {
	paragraph.AddText("Notes were successfully added to the slide.");
} else {
	paragraph.AddText("Failed to add notes.");
}

slide.AddObject(shape);

```
