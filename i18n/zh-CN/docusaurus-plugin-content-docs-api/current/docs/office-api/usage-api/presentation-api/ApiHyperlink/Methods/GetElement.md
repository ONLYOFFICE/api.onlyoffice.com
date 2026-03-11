# GetElement

使用指定的位置返回超链接元素。

## 语法

```javascript
expression.GetElement(nPos);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 要获取其内容的元素必须位于的位置。 |

## 返回值

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## 示例

此示例使用指定位置返回超链接元素。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(244, 206, 206));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run1 = Api.CreateRun();
run1.AddText('Api Document Builder.');
paragraph.AddElement(run1, 0);
const run2 = Api.CreateRun();
run2.AddText(' ONLYOFFICE for developers');
paragraph.AddElement(run2, 1);

const infoParagraph = Api.CreateParagraph();
let hyperlink, element;

hyperlink = paragraph.AddHyperlink('https://api.onlyoffice.com/docbuilder/basic');
element = hyperlink.GetElement(0);
if (element) {
	infoParagraph.AddText('The element at position 0 in the text hyperlink is: ' + element.GetText());
} else {
	infoParagraph.AddText('There is no element at position 0 in the text hyperlink.');
}
infoParagraph.AddLineBreak();

shape.SetHyperlink(Api.CreateHyperlink('https://api.onlyoffice.com/', 'ONLYOFFICE website'));
hyperlink = shape.GetHyperlink();
element = hyperlink.GetElement(0);
if (element) {
	infoParagraph.AddText('The element at position 0 in the shape hyperlink is: ' + element.GetText());
	infoParagraph.AddElement(element);
} else {
	infoParagraph.AddText('There is no element at position 0 in the shape hyperlink.');
}

docContent.Push(infoParagraph);
slide.AddObject(shape);

```
