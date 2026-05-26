# AddHyperlink

向当前文本块添加超链接。

## 语法

```javascript
expression.AddHyperlink(sLink, sScreenTipText, sBookmarkName);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | 必需 | string |  | 链接地址。 |
| sScreenTipText | 必需 | string |  | 屏幕提示文本。 |
| sBookmarkName | 必需 | string |  | 书签名称 |

## 返回值

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## 示例

将文档中的文本运行转换为指向网址的可点击链接。

```javascript editor-docx
// How do I make a piece of text open a website when clicked in a document?

// Attach a URL and a tooltip title to a run of text so readers can follow it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
run.AddHyperlink("https://www.onlyoffice.com", "main page");
```
