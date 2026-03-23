# SetLink

设置超链接地址。

## 语法

```javascript
expression.SetLink(sLink);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | 必需 | string |  | 超链接地址。 |

## 返回值

boolean

## 示例

此示例设置超链接地址。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(245, 203, 167));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText('ONLYOFFICE Document Builder');
paragraph.AddElement(run);

const infoParagraph = Api.CreateParagraph();
let hyperlink;

hyperlink = paragraph.AddHyperlink('https://api.onlyoffice.com/docbuilder/basic');
hyperlink.SetLink('https://api.onlyoffice.com/');
infoParagraph.AddText('Text hyperlink updated link: ' + hyperlink.GetLinkedText());
infoParagraph.AddLineBreak();

shape.SetHyperlink(Api.CreateHyperlink('https://api.onlyoffice.com/docbuilder/basic', 'DocBuilder'));
hyperlink = shape.GetHyperlink();
hyperlink.SetLink('https://api.onlyoffice.com/');
infoParagraph.AddText('Shape hyperlink updated link: ' + hyperlink.GetLinkedText());

docContent.Push(infoParagraph);
slide.AddObject(shape);

```
