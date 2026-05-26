# SetOutlineLvl

设置指定属性的大纲级别。

## 语法

```javascript
expression.SetOutlineLvl(lvl);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lvl | 可选 | Number \| null \| undefined |  | 大纲级别。可能的值：1-9。1所需功能如下：在编辑过程中使用合并文档 API 将文档 A 插入文档 B 时，文档 A 的来源应在文档 B 中可见。通过单击或悬停在文档 B 中文档 A 的插入内容上，应在弹出/浮动窗口中显示有关文档 A 插入的信息，保留文档 A 的边界。文档 A 应能插入到文档 B 中任意两个字符之间。
若不设置大纲级别，请不带参数调用此方法。 |

## 返回值

boolean

## 示例

为段落分配大纲级别以控制其在文档结构中的位置。

```javascript editor-docx
// How do I set the outline level of a paragraph in a document?

// Change a paragraph's heading depth so it appears correctly in the navigation panel.

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
