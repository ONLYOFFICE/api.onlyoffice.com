# UpdateAttribute

更新自定义 XML 节点中现有属性的值。
如果属性不存在，则不会执行更新。

## 语法

```javascript
expression.UpdateAttribute(name, value);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要更新的属性名称。 |
| value | 必需 | string |  | 要分配给属性的新值。 |

## 返回值

boolean

## 示例

此示例演示如何更新自定义 XML 节点中现有属性的值。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<bookstore><book category="house"><title lang="en">The Odyssey</title></book></bookstore>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/bookstore/book')[0];
node.UpdateAttribute('category', 'ancient');

const fill = Api.CreateSolidFill(Api.HexColor('#BB0066'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after update: ' + xml.GetXml());

```
