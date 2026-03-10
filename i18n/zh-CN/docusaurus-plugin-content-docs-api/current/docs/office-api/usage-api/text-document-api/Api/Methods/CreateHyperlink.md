# CreateHyperlink

创建要插入到当前段落或表格中的新超链接文本块。

## 语法

```javascript
expression.CreateHyperlink(link, display, screenTipText);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| link | 必需 | string |  | 超链接地址。 |
| display | 必需 | string |  | 用于显示超链接的文本。 |
| screenTipText | 必需 | string |  | 屏幕提示文本。 |

## 返回值

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## 示例

此示例创建一个超链接并将其粘贴到文档中。

```javascript editor-docx
// How to create the ApiHyperlink object and add it to the ApiParagraph class.

// Creates a hyperlink with the specified URL address, display text and tip text and adds it to the first paragraph of the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
paragraph.AddElement(hyperlink, 0);
paragraph.AddLineBreak();
paragraph.AddText("Class type of the created object: " + hyperlink.GetClassType());
```
