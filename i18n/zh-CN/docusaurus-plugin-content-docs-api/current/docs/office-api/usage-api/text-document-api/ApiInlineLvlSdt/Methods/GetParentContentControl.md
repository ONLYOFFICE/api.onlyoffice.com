# GetParentContentControl

返回包含当前内容控件的内容控件。

## 语法

```javascript
expression.GetParentContentControl();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null

## 示例

此示例展示如何获取包含内容控件的内容控件。

```javascript editor-docx
// How to display the parent control of the inline text control.

// Set the alias to the parent inline content control.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt1 = Api.CreateInlineLvlSdt();
inlineLvlSdt1.AddText("This is a parent inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt1);
let inlineLvlSdt2 = Api.CreateInlineLvlSdt();
inlineLvlSdt2.AddText("This is an inline text content control added in another content control.");
inlineLvlSdt1.AddElement(inlineLvlSdt2, 0);
let parentInlineLvlSdt = inlineLvlSdt2.GetParentContentControl();
parentInlineLvlSdt.SetAlias("№1");
```
