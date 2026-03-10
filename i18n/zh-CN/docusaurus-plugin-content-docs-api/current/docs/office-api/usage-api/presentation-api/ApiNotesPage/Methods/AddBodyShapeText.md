# AddBodyShapeText

向当前备注页的正文形状添加文本。

## 语法

```javascript
expression.AddBodyShapeText(sText);
```

`expression` - 表示 [ApiNotesPage](../ApiNotesPage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 要添加到正文形状的文本。 |

## 返回值

boolean

## 示例

此示例展示如何向备注页的正文形状添加文本。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const notesPage = slide.GetNotesPage();
slide.RemoveAllObjects();

let isAdded = false;
if (notesPage) {
	isAdded = notesPage.AddBodyShapeText('This text was added using AddBodyShapeText method');
}

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

if (isAdded) {
	paragraph.AddText('Text was successfully added to the body shape.');
} else {
	paragraph.AddText('Failed to add text to the body shape.');
}

slide.AddObject(shape);

```
