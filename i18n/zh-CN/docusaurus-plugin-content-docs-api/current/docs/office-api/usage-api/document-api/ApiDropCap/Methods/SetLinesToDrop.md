# SetLinesToDrop

设置首字下沉所占的行数。首字下沉字母会相应调整大小。

## 语法

```javascript
expression.SetLinesToDrop(lines);
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lines | 必需 | number |  | 首字下沉所占的行数。必须为大于 0 的数字。 |

## 返回值

[ApiDropCap](../../ApiDropCap/ApiDropCap.md)

## 示例

设置文档中首字下沉跨越的行数。

```javascript editor-docx
// Control how many lines the drop cap of a paragraph drops down in a document.

// Resize the decorative initial letter so that it occupies the specified number of text lines in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetLinesToDrop(4);
```
