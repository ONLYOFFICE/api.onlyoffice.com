# GetRange

返回书签范围。

## 语法

```javascript
expression.GetRange();
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例展示如何获取书签范围。

```javascript editor-docx
// How to add a bookmark and then make its range bold.

// Highlight the range of a bookmark.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
let bookmarkRange = bookmark.GetRange();
bookmarkRange.SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText("Bookmark range is shown in bold");

```
