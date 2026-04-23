# AddHyperlink

向当前运行添加超链接。

## 语法

```javascript
expression.AddHyperlink(sLink, sScreenTipText, sBookmarkName);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | 必需 | string |  | 链接地址。 |
| sScreenTipText | 必需 | string |  | 屏幕提示文本。 |
| sBookmarkName | 必需 | string |  | 书签名称 |

## 返回值

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## 示例

此示例向运行添加超链接。

```javascript editor-docx
// How to add a link to the text.

// Insert a hyperlink to the run indicating its link and title.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
run.AddHyperlink("https://www.onlyoffice.com", "main page");
```
