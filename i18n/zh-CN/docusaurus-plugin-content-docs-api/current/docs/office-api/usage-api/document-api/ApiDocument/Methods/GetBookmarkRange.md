# GetBookmarkRange

返回书签范围。

## 语法

```javascript
expression.GetBookmarkRange(sName);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 书签名称。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

检索文档中命名书签覆盖的文本范围。

```javascript editor-docx
// How do I get the range that a bookmark spans in a document?

// Apply bold formatting to a bookmarked range by looking it up by name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
range = doc.GetBookmarkRange("Bookmark");
range.SetBold(true);
```
