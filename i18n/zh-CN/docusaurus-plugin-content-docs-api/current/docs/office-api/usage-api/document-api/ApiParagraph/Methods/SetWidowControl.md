# SetWidowControl

指定在显示时是否通过将当前段落的单独一行移动到下一页来使其与其余内容显示在不同的页面上。

继承自 [ApiParaPr.SetWidowControl](../../ApiParaPr/Methods/SetWidowControl.md)。

## 语法

```javascript
expression.SetWidowControl(isWidowControl);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isWidowControl | 必需 | boolean |  | true 值表示在显示时，通过将当前段落的单独一行移动到下一页，使其与其余内容显示在不同的页面上。 |

## 返回值

boolean

## 示例

在文档中防止段落的单独一行被留在页面上。

```javascript editor-docx
// How do I keep orphaned or widowed lines of a paragraph from appearing alone on a page in a document?

// Ensure paragraph lines always flow together so no single line strays to an isolated page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The single line of the last paragraph on this page will be prevented from being displayed on a separate page. ");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
for (let i = 0; i < 4; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetWidowControl(true);
paragraph.AddText("This last line is displayed on the next page, because we used the set widow control method set to 'true'.");
doc.Push(paragraph);
```
