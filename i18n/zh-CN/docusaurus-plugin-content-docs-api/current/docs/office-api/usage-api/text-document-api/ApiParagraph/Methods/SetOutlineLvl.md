# SetOutlineLvl

设置指定属性的大纲级别。

## 语法

```javascript
expression.SetOutlineLvl(nLvl);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLvl | 可选 | Number |  | 大纲级别。可能的值：1-9。如果需要设置无大纲级别，请不带参数使用此方法。 |

## 返回值

boolean

## 示例

此示例展示如何通过段落属性获取指定段落的大纲级别。

```javascript editor-docx
const doc = Api.GetDocument();

const paragraph = doc.GetElement(0);
const paraPr = paragraph.GetParaPr();

const levelBefore = paraPr.GetOutlineLvl();
paraPr.SetOutlineLvl(8);
const levelAfter = paraPr.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\nbut originally was set to ' + levelBefore;
paragraph.AddText(text);

```
