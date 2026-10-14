# Search

搜索文档对象的范围。

搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string \| RegExp |  | 搜索字符串或要匹配的正则表达式。传递 RegExp 时，将忽略 isMatchCase 参数（请改用 "i" 标志控制大小写敏感性）。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

在文档中使用字符串和正则表达式查找文本，然后将匹配项设为粗体。

```javascript editor-docx
// Combine a keyword lookup with a RegExp that matches every numbered label.

// Bold the second keyword match, then bold each label found by the /№\d+/g expression.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is paragraph №2.");
doc.Push(paragraph);

let byKeyword = doc.Search("paragraph");
byKeyword[1].SetBold(true);

let byRegExp = doc.Search(/№\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
