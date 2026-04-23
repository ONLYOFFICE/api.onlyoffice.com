# SetWidowControl

指定在显示时是否通过将当前段落的单独一行移动到下一页来使其与其余内容显示在不同的页面上。

## 语法

```javascript
expression.SetWidowControl(isWidowControl);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isWidowControl | 必需 | boolean |  | true 值表示在显示时，通过将当前段落的单独一行移动到下一页，使其与其余内容显示在不同的页面上。 |

## 返回值

boolean

## 示例

此示例指定在显示时是否通过将当前段落的单独一行移动到下一页来使其与其余内容显示在不同的页面上。

```javascript editor-docx
// Set the window control of the paragraph.

// Make the last line to be displayed on the next page, by setting widow control method set to 'true'.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetWidowControl(true);
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
for (let i = 0; i < 3; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetStyle(myStyle);
paragraph.AddText("This last line would be displayed on the next page, if we had not used the set widow control method.");
doc.Push(paragraph);
```
