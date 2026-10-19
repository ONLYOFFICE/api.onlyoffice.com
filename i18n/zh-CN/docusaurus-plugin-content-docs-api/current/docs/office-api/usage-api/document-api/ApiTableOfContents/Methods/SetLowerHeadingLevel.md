# SetLowerHeadingLevel

设置目录中包含的最低（最内层）标题级别。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetLowerHeadingLevel(nLevel);
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLevel | 必需 | number |  | 未提供描述。 |

## 返回值

boolean

## 示例

设置目录中包含的最低标题级别。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Limit the outline depth by ending the heading range at level 3.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetLowerHeadingLevel(3);
```
