# GetElement

使用指定位置返回当前内联文本内容控件的元素。

## 语法

```javascript
expression.GetElement(nPos);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 要获取其内容的元素必须位于的位置。 |

## 返回值

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## 示例

此示例展示如何使用指定位置获取内联文本内容控件的元素。

```javascript editor-docx
// Get the element of the inline text control, make it bold.

// How to get the n^th element of the inline control.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
for (let i = 0; i < 10; ++i) {
	let run = Api.CreateRun();
	run.AddText("This is text run " + (i + 1) + ". ");
	inlineLvlSdt.AddElement(run);
}
let changeRun = inlineLvlSdt.GetElement(4);
changeRun.SetBold(true);
paragraph.AddLineBreak();
paragraph.AddLineBreak();
paragraph.AddLineBreak();
paragraph.AddText("We added 10 text runs to the above inline text content control. Then we changed the fifth run, so it is different from the others.");
```
