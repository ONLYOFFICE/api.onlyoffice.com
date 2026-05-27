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

在文档中插入带有自定义显示文本的可点击超链接。

```javascript editor-docx
// How do I add a hyperlink with a tooltip to a paragraph in a document?

// Embed a named web link that shows a tooltip when hovered, then read back its type in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
paragraph.AddElement(hyperlink, 0);
paragraph.AddLineBreak();
paragraph.AddText("Class type of the created object: " + hyperlink.GetClassType());
```
