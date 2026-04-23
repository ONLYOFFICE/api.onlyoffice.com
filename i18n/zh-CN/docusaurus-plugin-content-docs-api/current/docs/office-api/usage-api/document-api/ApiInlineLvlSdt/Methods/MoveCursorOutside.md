# MoveCursorOutside

将光标放置在当前内容控件之前/之后。

## 语法

```javascript
expression.MoveCursorOutside(isAfter);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | 可选 | boolean | true | 指定光标是放置在当前内容控件之前（false）还是之后（true）。 |

## 返回值

boolean

## 示例

此示例展示如何将光标移到内联内容控件外部。

```javascript editor-docx
// How to move the cursor out of the form.

// Move the cursor out of the inline text control.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("The cursor will be placed after the current content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.MoveCursorOutside(true);
```
