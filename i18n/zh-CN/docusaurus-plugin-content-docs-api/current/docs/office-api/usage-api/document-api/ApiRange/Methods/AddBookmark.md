# AddBookmark

向指定范围添加书签。

## 语法

```javascript
expression.AddBookmark(sName);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | String |  | 书签名称。 |

## 返回值

boolean

## 示例

用命名书签标记文档中的特定文本部分。

```javascript editor-docx
// How do I attach a named bookmark to a selected portion of text in a document?

// Label a text selection so it can be referenced or navigated to later in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
paragraph.AddLineBreak();
paragraph.AddText("A bookmark was added to the 'ONLYOFFICE' range.");
```
