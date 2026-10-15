# Search

搜索内容控件对象的范围。

搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(text, isMatchCase);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string \| RegExp |  | 搜索字符串或要匹配的正则表达式。传递 RegExp 时，将忽略 isMatchCase 参数（请改用 "i" 标志控制大小写敏感性）。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

在内容控件中使用字符串和正则表达式查找文本，然后将匹配项设为粗体。

```javascript editor-docx
// Look up a keyword across the content control paragraphs and match it with a RegExp.

// Bold the second keyword match, then bold every match found by the /paragraph/g expression.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph in the content control.");
blockLvlSdt.AddElement(paragraph1, 0);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph in the content control.");
blockLvlSdt.AddElement(paragraph2, 1);
doc.AddElement(0, blockLvlSdt);

let byKeyword = blockLvlSdt.Search("paragraph");
byKeyword[1].SetBold(true);

let byRegExp = blockLvlSdt.Search(/paragraph/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
