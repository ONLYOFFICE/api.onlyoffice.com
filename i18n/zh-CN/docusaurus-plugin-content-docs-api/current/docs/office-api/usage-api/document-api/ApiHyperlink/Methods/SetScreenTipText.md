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

此示例设置超链接的屏幕提示文本。

```javascript editor-docx
// How to specify the hyperlink screen tip text.

// Set the screen tip text of the link.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetScreenTipText("ONLYOFFICE for developers");
let screenTipText = hyperlink.GetScreenTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Screen tip text: " + screenTipText);
doc.Push(paragraph);
```
