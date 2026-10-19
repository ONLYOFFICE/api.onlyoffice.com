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

在工作表的形状中将一段文本转换为超链接。

```javascript editor-xlsx
// The range must stay within a single paragraph, and besides a web address the link can point to a cell range in the workbook, for example, "#Sheet1!A1".

// Turn the word "here" into a link to the ONLYOFFICE website.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Click here to learn more");

let range = shape.GetTextRange();

let link = range.GetRange(6, 10);
link.AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE");
```
