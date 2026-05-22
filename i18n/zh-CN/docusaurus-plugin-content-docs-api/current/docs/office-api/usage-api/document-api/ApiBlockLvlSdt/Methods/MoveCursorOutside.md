# MoveCursorOutside

将光标放置在当前内容控件之前/之后。

## 语法

```javascript
expression.MoveCursorOutside(isAfter);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | 可选 | boolean | true | 指定光标是放置在当前内容控件之前（false）还是之后（true）。 |

## 返回值

boolean

## 示例

将光标移动到文档中内容控件的外部。

```javascript editor-docx
// How do I move the cursor outside a content control in a document?

// Place the cursor after a content control to continue typing outside it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The cursor will be placed after the current content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.MoveCursorOutside(true);
```
