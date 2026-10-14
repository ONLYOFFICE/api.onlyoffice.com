# SetPosition

设置首字下沉类型。

## 语法

```javascript
expression.SetPosition(position);
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | 必需 | "none" \| "drop" \| "margin" |  | 首字下沉类型："none" 移除首字下沉，"drop" 将其置于文本内，"margin" 将其置于页边距中。 |

## 返回值

[ApiDropCap](../../ApiDropCap/ApiDropCap.md) \| null \| undefined

## 示例

在文档中将首字下沉类型在文本内和页边距之间切换。

```javascript editor-docx
// Move a drop cap from the text into the margin in a document.

// Switch an existing in-text drop cap to an in-margin drop cap in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetPosition('margin');
```
