# GetCurrentContentControl

返回当前选中的内容控件。

继承自 [ApiDocumentContent.GetCurrentContentControl](../../ApiDocumentContent/Methods/GetCurrentContentControl.md)。

## 语法

```javascript
expression.GetCurrentContentControl();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null

## 示例

获取文档中当前选中的内容控件。

```javascript editor-docx
// How do I get the active content control at the cursor position in a document?

// Check which control the user is interacting with by reading the current selection in a document.

const doc = Api.GetDocument();

const inlineSdt = doc.AddCheckBoxContentControl();
inlineSdt.Select();
const currentCC = doc.GetCurrentContentControl();

const paragraph = Api.CreateParagraph();
if (currentCC) {
	paragraph.AddText('Current content control class: ' + currentCC.GetClassType());
} else {
	paragraph.AddText('No content control is selected.');
}
doc.Push(paragraph);
```
