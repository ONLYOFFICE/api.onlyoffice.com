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

检索并加粗文档中书签覆盖的文本范围。

```javascript editor-docx
// How do I access the range of a bookmark to apply bold formatting in a document?

// Use a bookmark's range to change text appearance without selecting it manually in a document.

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
