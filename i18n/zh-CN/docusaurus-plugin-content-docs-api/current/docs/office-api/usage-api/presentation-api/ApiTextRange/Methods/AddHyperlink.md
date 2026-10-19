# AddHyperlink

向当前文本范围添加超链接。

## 语法

```javascript
expression.AddHyperlink(link, screenTipText);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| link | 必需 | string |  | 链接地址。接受外部 URL（http、https、mailto、ftp）或内部链接。在演示文稿编辑器中，内部链接为以下幻灯片操作之一："ppaction://hlinkshowjump?jump=firstslide"、"ppaction://hlinkshowjump?jump=lastslide"、"ppaction://hlinkshowjump?jump=nextslide"、"ppaction://hlinkshowjump?jump=previousslide"、"ppaction://hlinksldjumpslide\{N\}"（N 为从零开始的幻灯片索引）、"ppaction://hlinkfile?file=\{path\}"（打开外部文件）。在电子表格编辑器中，内部链接为 "#" 后跟单元格范围或定义的名称，例如，"#Sheet1!A1" 或 "#MyName"。 |
| screenTipText | 必需 | string |  | 屏幕提示文本。 |

## 返回值

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) \| null \| undefined

## 示例

在演示文稿中为形状文本的一部分添加超链接。

```javascript editor-pptx
// The range must stay within a single paragraph, and besides a web address the link can be a slide action, for example, "ppaction://hlinksldjumpslide1" for the second slide.

// Turn the word "here" into a link to the ONLYOFFICE website.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Click here to learn more");
slide.AddObject(shape);

const range = shape.GetTextRange();
const link = range.GetRange(6, 10);
link.AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE");
```
