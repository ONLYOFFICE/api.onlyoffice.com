# InsertElement

在指定 XPath 插入 XML 元素。

## 语法

```javascript
expression.InsertElement(xPath, xmlStr, index);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 将插入新元素的父节点的 XPath。 |
| xmlStr | 必需 | string |  | 要插入的 XML 字符串。 |
| index | 可选 | number |  | 插入新 XML 元素的位置。如果省略，元素将作为最后一个子元素追加。 |

## 返回值

boolean

## 示例

此示例演示如何将新 XML 元素插入自定义 XML 部件。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xml = xmlManager.Add('<content xmlns="http://example"></content>');
xml.InsertElement('/content', '<description>Main content</description>');
xml.InsertElement('/content', '<title>Introduction</title>', 0);

const fill = Api.CreateSolidFill(Api.HexColor('#689F38'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after insertion: ' + xml.GetXml());

```
