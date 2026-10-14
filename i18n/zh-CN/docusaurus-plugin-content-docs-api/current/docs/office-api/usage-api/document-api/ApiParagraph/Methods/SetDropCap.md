# SetDropCap

根据当前段落的第一个字母创建首字下沉。首字下沉是下沉两行或更多行的大号首字母。

## 语法

```javascript
expression.SetDropCap(position);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | 必需 | "none" \| "drop" \| "margin" |  | 首字下沉类型："none" 移除首字下沉，"drop" 将其置于文本内，"margin" 将其置于页边距中。 |

## 返回值

[ApiDropCap](../../ApiDropCap/ApiDropCap.md) \| null \| undefined

## 示例

在文档中将段落的第一个字母设置为首字下沉。

```javascript editor-docx
// How do I make the first letter of a paragraph a large drop cap in a document?

// Split the first letter into a decorative initial and adjust its size through the returned drop cap object.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetLinesToDrop(4);
```
