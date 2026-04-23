# GetBookmark

从当前文档中按名称返回书签。

## 语法

```javascript
expression.GetBookmark(sBookmarkName);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sBookmarkName | 必需 | string |  | 书签名称。 |

## 返回值

[ApiBookmark](../../ApiBookmark/ApiBookmark.md)

## 示例

此示例展示如何获取文档中的书签。

```javascript editor-docx
// Get a bookmark added by its name.

// How to retrieve a bookmark and display its name.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark_ex");
let bookmark = doc.GetBookmark("Bookmark_ex");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name '" + bookmark.GetName() + "' surrounds text: " + bookmark.GetText());

```
