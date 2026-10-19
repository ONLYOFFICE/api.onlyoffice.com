# SetIncludePageNumbers

指定是否在目录中显示页码。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetIncludePageNumbers(isInclude);
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isInclude | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

隐藏目录中的页码。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Turn page numbers off for the table of contents entries.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetIncludePageNumbers(false);
```
