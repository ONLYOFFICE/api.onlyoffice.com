# GetDocumentInfo

返回文档信息：
-**Application** - 创建文档的应用程序。
-**CreatedRaw** - 文件创建的日期和时间。
-**Created** - 解析后的文件创建日期和时间。
-**LastModifiedRaw** - 文件最后修改的日期和时间。
-**LastModified** - 解析后的文件最后修改日期和时间。
-**LastModifiedBy** - 对文档进行最新更改的用户名称。
-**Authors** - 创建文件的人员。
-**Title** - 此属性可简化文档分类。
-**Tags** - 此属性可简化文档分类。
-**Subject** - 此属性可简化文档分类。
-**Comment** - 此属性可简化文档分类。

## 语法

```javascript
expression.GetDocumentInfo();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

object

## 示例

此示例演示如何获取以对象表示的文档信息并将应用程序名称粘贴到文档中。

```javascript editor-pptx
// How to get a document info from the presentation.

// Get current document info.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const docInfo = presentation.GetDocumentInfo();
paragraph.AddText('This document has been created with: ' + docInfo.Application);
slide.AddObject(shape);

```
