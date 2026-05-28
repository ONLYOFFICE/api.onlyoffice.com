# Select

选择当前内容控件。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

选择文档中的内联内容控件使其获得焦点。

```javascript editor-docx
// How do I programmatically select an inline content control in a document?

// Highlight a content control so the cursor lands on it when navigating in a document.

let doc = Api.GetDocument();
let checkbox = doc.AddCheckBoxContentControl();
checkbox.Select();
```
