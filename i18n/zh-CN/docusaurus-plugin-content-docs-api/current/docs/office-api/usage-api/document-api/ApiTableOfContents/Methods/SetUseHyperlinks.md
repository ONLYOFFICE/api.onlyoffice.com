# SetUseHyperlinks

指定是否将条目设置为超链接格式。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetUseHyperlinks(isUseHyperlinks);
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUseHyperlinks | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

将目录条目设置为超链接格式。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Enable hyperlinks so each entry links to its heading.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetUseHyperlinks(true);
```
