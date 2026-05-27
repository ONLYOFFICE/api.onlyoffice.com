# SetScreenTipText

设置超链接的屏幕提示文本。

## 语法

```javascript
expression.SetScreenTipText(sScreenTipText);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScreenTipText | 必需 | string |  | 超链接的屏幕提示文本。 |

## 返回值

boolean

## 示例

设置演示文稿中超链接的屏幕提示文本。

```javascript editor-pptx
// How do I assign tooltip text to a hyperlink in a presentation?

// Configure the screen tip text and verify the result in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#C5D8A4'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const hyperlink = Api.CreateHyperlink('https://api.onlyoffice.com/', 'ONLYOFFICE website')
hyperlink.SetScreenTipText('Visit ONLYOFFICE');
shape.SetHyperlink(hyperlink);

const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText('Shape hyperlink screen tip: ' + hyperlink.GetScreenTipText());

const docContent = shape.GetContent();
docContent.Push(infoParagraph);
slide.AddObject(shape);
```
