# GetType

返回节分隔符类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[SectionBreakType](../../Enumeration/SectionBreakType.md)

## 示例

此示例展示如何设置和获取文档中节的类型。

```javascript editor-docx
const doc = Api.GetDocument();

const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('This is section #1 of the document. ');
const firstSection = doc.CreateSection(firstParagraph);

const possibleTypes = ['nextPage', 'oddPage', 'evenPage', 'continuous', 'nextColumn'];
const randomIndex = Math.random() * 5 >> 0;

const finalSection = doc.GetFinalSection();
finalSection.SetType(possibleTypes[randomIndex]);

const paragraph = Api.CreateParagraph();
paragraph.AddText('This is section #2 and we randomly set \'' + finalSection.GetType() + '\' type to it. ');
doc.Push(paragraph);

```
