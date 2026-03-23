# Copy

创建内联内容控件的副本。忽略批注、脚注引用、复杂域。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

此示例创建内联内容控件的副本。

```javascript editor-docx
// How to create a duplicate of the inline text element.

// Add inline content control and its copy to the paragraph separated by a line break.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let copyInlineLvlSdt = inlineLvlSdt.Copy();
paragraph.AddLineBreak();
paragraph.AddInlineLvlSdt(copyInlineLvlSdt);
```
