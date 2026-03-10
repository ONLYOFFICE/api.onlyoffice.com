# GetCore

返回当前演示文稿的核心属性接口。
此方法用于查看或修改标准元数据，如标题、作者和关键字。

## 语法

```javascript
expression.GetCore();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCore](../../ApiCore/ApiCore.md)

## 示例

此示例演示如何获取 ApiCore 实例并使用其方法管理演示文稿元数据。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const core = presentation.GetCore();
core.SetCategory("Examples");
core.SetContentStatus("Final");
core.SetCreated(new Date('2000-01-20'));
core.SetCreator("John Smith");
core.SetDescription("Sample presentation demonstrating ApiCore methods.");
core.SetIdentifier("#ID42");
core.SetKeywords("Presentation; ApiCore; Metadata");
core.SetLanguage("en-US");
core.SetLastModifiedBy("Mark Pottato");
core.SetLastPrinted(new Date());
core.SetModified(new Date('1990-03-10'));
core.SetRevision("Rev. B");
core.SetSubject("Presentation Metadata Showcase");
core.SetTitle("My Presentation Title");
core.SetVersion("v9.0");

let category = core.GetCategory();
let contentStatus = core.GetContentStatus();
let createdDate = core.GetCreated().toDateString();
let creator = core.GetCreator();
let description = core.GetDescription();
let identifier = core.GetIdentifier();
let keywords = core.GetKeywords();
let language = core.GetLanguage();
let lastModifiedBy = core.GetLastModifiedBy();
let lastPrintedDate = core.GetLastPrinted().toDateString();
let lastModifiedDate = core.GetModified().toDateString();
let revision = core.GetRevision();
let subject = core.GetSubject();
let title = core.GetTitle();
let version = core.GetVersion();

let fill = Api.CreateSolidFill(Api.RGB(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 250 * 36000, 150 * 36000, fill, stroke);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);

paragraph.AddText("Category: " + category + "\n");
paragraph.AddText("Content Status: " + contentStatus + "\n");
paragraph.AddText("Created: " + createdDate + "\n");
paragraph.AddText("Creator: " + creator + "\n");
paragraph.AddText("Description: " + description + "\n");
paragraph.AddText("Identifier: " + identifier + "\n");
paragraph.AddText("Keywords: " + keywords + "\n");
paragraph.AddText("Language: " + language + "\n");
paragraph.AddText("Last Modified By: " + lastModifiedBy + "\n");
paragraph.AddText("Last Printed: " + lastPrintedDate + "\n");
paragraph.AddText("Last Modified: " + lastModifiedDate + "\n");
paragraph.AddText("Revision: " + revision + "\n");
paragraph.AddText("Subject: " + subject + "\n");
paragraph.AddText("Title: " + title + "\n");
paragraph.AddText("Version: " + version);

slide.AddObject(shape);

```
