# CreateNumbering

创建具有指定类型的抽象多级编号。

## 语法

```javascript
expression.CreateNumbering(sType);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 可选 | "bullet" \| "numbered" | "bullet" | 将要创建的编号类型。 |

## 返回值

[ApiNumbering](../../ApiNumbering/ApiNumbering.md)

## 示例

向文档添加多个缩进级别的项目符号段落。

```javascript editor-docx
// How do I create a bulleted list with nested indent levels in a document?

// Format several paragraphs as a structured bullet list with increasing indentation in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 2; ++lvl) 
{
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is an example of the bulleted paragraph № " + (lvl + 1));
	paragraph.SetNumbering(numbering.GetLevel(lvl));
	doc.Push(paragraph);
}
```
