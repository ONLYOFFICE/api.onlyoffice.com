# ToHtml

将段落转换为 HTML。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.ToHtml(options);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | \{\} | HTML 转换选项。 |

## 返回值

string

## 示例

在电子表格中将段落内容导出为 HTML 字符串以便在编辑器外使用。

```javascript editor-xlsx
// How do I get the HTML representation of a paragraph's text and formatting in a spreadsheet?

// Capture the markup of a paragraph inside a shape and write it to a cell in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText("This paragraph will be converted to ");
const boldRun = paragraph.AddText("HTML");
boldRun.SetBold(true);
const html = paragraph.ToHtml({"RenderHTMLTags": true});
worksheet.GetRange("A1").SetValue("HTML output: " + html.trim());
```
