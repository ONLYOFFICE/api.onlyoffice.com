# InsertAttribute

将属性插入指定 XPath 的 XML 节点。

## 语法

```javascript
expression.InsertAttribute(xPath, name, value);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要插入属性的节点的 XPath。 |
| name | 必需 | string |  | 要插入的属性名称。 |
| value | 必需 | string |  | 要插入的属性值。 |

## 返回值

boolean

## 示例

此示例演示如何将属性插入自定义 XML 节点。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xml = xmlManager.Add('<content xmlns="http://example"></content>');
xml.InsertAttribute('/content', 'version', '1.0');

const fill = Api.CreateSolidFill(Api.RGB(191, 127, 63));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after insertion: ' + xml.GetXml());

```
