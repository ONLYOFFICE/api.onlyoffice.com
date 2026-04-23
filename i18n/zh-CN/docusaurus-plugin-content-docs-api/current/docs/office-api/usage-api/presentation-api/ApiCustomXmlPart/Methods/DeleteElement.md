# DeleteElement

删除指定 XPath 的 XML 元素。

## 语法

```javascript
expression.DeleteElement(xPath);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要删除的节点的 XPath。 |

## 返回值

boolean

## 示例

此示例演示如何从自定义 XML 部件删除 XML 元素。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xml = xmlManager.Add('<content xmlns="http://example"><text>example_text</text><imaginaryNode>text inside imaginary node</imaginaryNode></content>');
xml.DeleteElement('/content/imaginaryNode');

const fill = Api.CreateSolidFill(Api.RGB(156, 90, 161));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after deletion: ' + xml.GetXml());

```
