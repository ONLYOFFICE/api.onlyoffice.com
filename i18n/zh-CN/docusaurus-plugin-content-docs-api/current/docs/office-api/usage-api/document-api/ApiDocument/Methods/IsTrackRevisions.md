# IsTrackRevisions

检查是否启用了修订跟踪模式。

## 语法

```javascript
expression.IsTrackRevisions();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中是否当前启用了修订跟踪。

```javascript editor-docx
// How do I find out if change tracking is turned on in a document?

// Verify the tracking state before deciding whether to record or ignore edits in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
let trackRevisions = doc.IsTrackRevisions();
paragraph.AddText("Change tracking is enabled: " + trackRevisions);
```
