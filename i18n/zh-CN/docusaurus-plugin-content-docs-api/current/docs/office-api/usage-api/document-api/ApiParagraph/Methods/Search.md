# Search

在段落对象的范围内搜索。

搜索结果是 ApiRange 对象的集合。

## 语法

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string \| RegExp |  | 搜索字符串或要匹配的正则表达式。传递 RegExp 时，将忽略 isMatchCase 参数（请改用 "i" 标志控制大小写敏感性）。 |
| isMatchCase | 必需 | boolean |  | 是否区分大小写。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)[]

## 示例

在段落中使用字符串和正则表达式查找文本，然后将匹配项设为粗体。

```javascript editor-docx
// Look up a keyword and also match every digit sequence with a RegExp in one paragraph.

// Bold the first keyword match, then bold each number found by the /\d+/g expression.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Sample text 1 and text 2 within the paragraph.");

let byKeyword = paragraph.Search("text");
byKeyword[0].SetBold(true);

let byRegExp = paragraph.Search(/\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
