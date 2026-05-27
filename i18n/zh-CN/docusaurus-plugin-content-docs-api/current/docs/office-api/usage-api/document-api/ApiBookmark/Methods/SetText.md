# SetText

设置书签文本。

## 语法

```javascript
expression.SetText(sText);
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 书签文本。 |

## 返回值

boolean

## 示例

用新文本替换文档中书签内的文本内容。

```javascript editor-docx
// How do I update the words covered by a bookmark in a document?

// Swap out a bookmark's original text for a revised value without removing the bookmark in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
let oldText = bookmark.GetText();
bookmark.SetText("New bookmark text");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark text changed from: '" + oldText + "' to: '" + bookmark.GetText() + "'");
```
