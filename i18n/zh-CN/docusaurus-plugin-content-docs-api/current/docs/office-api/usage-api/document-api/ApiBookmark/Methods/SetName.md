# SetName

更改书签名称。

## 语法

```javascript
expression.SetName(sNewName);
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sNewName | 必需 | string |  | 新的书签名称。 |

## 返回值

boolean

## 示例

将文档中的现有书签重命名为新标识符。

```javascript editor-docx
// How do I change the name of a bookmark already placed in a document?

// Update a bookmark's label so it can be referenced under a different name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark_A");
let bookmark = doc.GetBookmark("Bookmark_A");
let oldName = bookmark.GetName();
bookmark.SetName("Bookmark_B");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark name changed from: '" + oldName + "' to: '" + bookmark.GetName() + "'");
```
