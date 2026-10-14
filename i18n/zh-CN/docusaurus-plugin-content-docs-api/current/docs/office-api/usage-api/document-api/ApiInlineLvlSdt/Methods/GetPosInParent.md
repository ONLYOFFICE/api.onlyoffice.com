# GetPosInParent

返回当前内联内容控件在其父元素中的位置（索引）。

## 语法

```javascript
expression.GetPosInParent();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

确定内联内容控件在其父元素中的索引。

```javascript editor-docx
// The position is the inline content control's index within its parent paragraph.

// Read an inline content control's position within its paragraph and report it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Before ");
let inlineSdt = Api.CreateInlineLvlSdt();
inlineSdt.AddText("control");
paragraph.AddInlineLvlSdt(inlineSdt);
let position = inlineSdt.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The inline control is at position " + position + ".");
doc.Push(report);
```
