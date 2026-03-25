# SetDisplayedText

设置超链接显示文本。

## 语法

```javascript
expression.SetDisplayedText(sDisplay);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDisplay | 必需 | string |  | 用于显示超链接的文本。 |

## 返回值

boolean

## 示例

此示例设置超链接显示文本。

```javascript editor-docx
// How to specify the hyperlink text that is displayed.

// Set the visible text of the link.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetDisplayedText("Api ONLYOFFICE DocBuilder");
```
