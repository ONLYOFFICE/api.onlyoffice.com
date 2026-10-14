# Update

更新目录。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Update(bOnlyPageNumbers);
```

`expression` - 表示 [ApiTableOfContents](../ApiTableOfContents.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bOnlyPageNumbers | 可选 | boolean | false | 未提供描述。 |

## 返回值

boolean

## 示例

在文档内容更改后刷新目录。

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Rebuild the table of contents so it reflects the current headings and page numbers.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.Update();
```
