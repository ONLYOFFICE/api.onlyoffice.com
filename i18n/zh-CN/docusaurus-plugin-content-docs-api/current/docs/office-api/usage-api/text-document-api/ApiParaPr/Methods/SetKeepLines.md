# SetKeepLines

指定在使用页面视图呈现文档时，尽可能将当前段落的所有行保持在同一页上。

## 语法

```javascript
expression.SetKeepLines(isKeepLines);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isKeepLines | 必需 | boolean |  | true 值启用将段落各行保持在同一页上的选项。 |

## 返回值

boolean

## 示例

此示例指定在使用页面视图呈现文档时，尽可能将段落的所有行保持在同一页上。

```javascript editor-docx
// How to set keep lines property of the paragraph content.

// Keep all lines of the paragraph on the same page.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetKeepLines(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of how the paragraph tries to keep lines together. ");
paragraph.AddText("Scroll down to the second page to see it.");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
paragraph.AddText("The paragraph lines are moved to the next page to keep them together. ");
for (let i = 0; i < 10; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetStyle(myStyle);
doc.Push(paragraph);
```
