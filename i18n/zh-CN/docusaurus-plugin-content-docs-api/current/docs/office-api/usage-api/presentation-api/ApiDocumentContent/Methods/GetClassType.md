# GetClassType

返回 ApiDocumentContent 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"documentContent"

## 示例

获取演示文稿中文档内容的类类型。

```javascript editor-pptx
// How to identify the class type of a document content?

// Obtain the class type identifier of a document content object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const classType = docContent.GetClassType();
paragraph.AddText("Class Type: " + classType);
slide.AddObject(shape);
```
