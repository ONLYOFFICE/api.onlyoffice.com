# SetKeepNext

指定在使用分页视图呈现文档时，尽可能将当前段落的内容至少部分地与下一段落呈现在同一页上。

## 语法

```javascript
expression.SetKeepNext(isKeepNext);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isKeepNext | 必需 | boolean |  | true 值启用将段落各行与下一段落保持在同一页上的选项。 |

## 返回值

boolean

## 示例

此示例指定在使用分页视图呈现文档时，尽可能将段落的内容至少部分地与下一段落呈现在同一页上。

```javascript editor-docx
// How to partly keep lines of the paragraph content.

// How to try to keep all lines of the paragraph on the same page.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetKeepNext(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of how the paragraph tries to keep together with the next paragraph. ");
paragraph.AddText("Scroll down to the second page to see it. ");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	paragraph.SetStyle(myStyle);
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
paragraph.AddText("The paragraph lines stay on the same page as the previous paragraph. ");
for (let i = 0; i < 10; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
doc.Push(paragraph);
```
