# SetParaId

为当前段落指定唯一 ID。

## 语法

```javascript
expression.SetParaId(paraId);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paraId | 必需 | number |  | 将为当前段落指定的数字 ID。值必须大于 0 且小于 0x80000000。 |

## 返回值

boolean

## 示例

此示例展示如何设置段落 ID。

```javascript editor-docx
const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This paragraph will have a custom ID.');

const customId = 920;
paragraph.SetParaId(customId);

paragraph = Api.CreateParagraph();
paragraph.AddText('Custom paragraph ID was set to: ' + customId);
doc.Push(paragraph);

const retrievedId = paragraph.GetParaId();
paragraph = Api.CreateParagraph();
paragraph.AddText('Retrieved paragraph ID: ' + retrievedId);
doc.Push(paragraph);

```
