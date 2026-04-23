# AddHyperlink

向指定范围添加超链接。

## 语法

```javascript
expression.AddHyperlink(sLink, sScreenTipText, sBookmarkName);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | 必需 | string |  | 链接地址。 |
| sScreenTipText | 必需 | string |  | 屏幕提示文本。 |
| sBookmarkName | 必需 | string |  | 书签名称 |

## 返回值

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## 示例

此示例向指定范围添加超链接。

```javascript editor-docx
// Insert a link to the range.

// Get range and add a hyperlink to it. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddHyperlink("https://www.onlyoffice.com/", "Main portal");
```
