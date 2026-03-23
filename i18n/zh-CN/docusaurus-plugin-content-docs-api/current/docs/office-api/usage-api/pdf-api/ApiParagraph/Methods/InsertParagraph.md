# InsertParagraph

在指定位置插入段落。

## 语法

```javascript
expression.InsertParagraph(paragraph, sPosition, beRNewPara);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | 必需 | string \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 文本或段落。 |
| sPosition | 必需 | string |  | 将插入文本或段落的位置（指定段落的「之前」或「之后」）。 |
| beRNewPara | 必需 | boolean |  | 定义此方法是返回新段落（true）还是当前段落（false）。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## 示例

此示例在指定位置插入段落。

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This paragraph was inserted after the first one.');
paragraph.InsertParagraph(paragraph2, 'after', true);
page.AddObject(shape);

```
