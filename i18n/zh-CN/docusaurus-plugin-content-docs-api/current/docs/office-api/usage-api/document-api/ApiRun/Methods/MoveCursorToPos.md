# MoveCursorToPos

将光标移动到当前文本运行的指定位置。
如果当前运行未分配给任何文档部分，则返回 **false**。否则，此方法返回 **true**。
如果文档中有任何选区，将被移除。

## 语法

```javascript
expression.MoveCursorToPos(nPos);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 可选 | number | 0 | 所需的光标位置。 |

## 返回值

boolean

## 示例

将光标移动到文档中文本运行内的特定字符位置。

```javascript editor-docx
// How do I place the cursor at a chosen position inside a text run in a document?

// Position the insertion point at an exact offset within a piece of text in a document.

let doc = Api.GetDocument();
let para = doc.GetElement(0);
let run = para.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);
```
