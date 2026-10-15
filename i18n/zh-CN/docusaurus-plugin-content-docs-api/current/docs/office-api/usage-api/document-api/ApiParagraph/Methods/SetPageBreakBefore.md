# SetPageBreakBefore

指定在使用分页视图呈现文档时，当前段落的内容呈现在文档新页的开头。

继承自 [ApiParaPr.SetPageBreakBefore](../../ApiParaPr/Methods/SetPageBreakBefore.md)。

## 语法

```javascript
expression.SetPageBreakBefore(isPageBreakBefore);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isPageBreakBefore | 必需 | boolean |  | true 值启用在文档新页面开头呈现段落内容的选项。 |

## 返回值

boolean

## 示例

在文档中强制段落始终从新页面的顶部开始。

```javascript editor-docx
// How do I make a paragraph begin on a fresh page in a document?

// Push a paragraph onto the next page by inserting a break before it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a page break before a paragraph. ");
paragraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
paragraph.AddText("Scroll down to the second page to see it. ");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it has page break before it enabled.");
paragraph.SetPageBreakBefore(true);
doc.Push(paragraph);
```
