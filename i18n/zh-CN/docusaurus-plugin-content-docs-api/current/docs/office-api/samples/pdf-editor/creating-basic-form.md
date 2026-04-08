---
hide_table_of_contents: true
---

# 创建基本表单

创建包含图片和文本输入的基本表单：

- 创建新文档，向第一段添加文本并设置为标题样式（[ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md)、[ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md)）；
- 创建图片表单和文本表单，并将表单添加到文档中（[Api/CreatePictureForm](/docs/office-api/usage-api/form-api/Api/Methods/CreatePictureForm.md)、[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)）。

:::tip
此示例也适用于 **Document Builder**。
下载示例并在 [Document Builder 示例](/docs/document-builder/samples/samples.md) 页面获取更多信息。
:::

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 创建主标题
let paragraph = doc.GetElement(0);
paragraph.AddText("员工证申请表");
paragraph.SetFontSize(18 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// 添加员工照片部分
paragraph = Api.CreateParagraph();
paragraph.AddText("员工照片：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let pictureForm = Api.CreatePictureForm({
  key: "employee_photo",
  tip: "上传您的员工照片",
  required: true,
  placeholder: "点击上传照片",
  scaleFlag: "tooBig",
  lockAspectRatio: true,
  respectBorders: false,
  shiftX: 50,
  shiftY: 50,
});
paragraph = Api.CreateParagraph();
paragraph.AddElement(pictureForm);
doc.Push(paragraph);

// 添加个人信息部分
paragraph = Api.CreateParagraph();
paragraph.AddText("个人信息：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 名字字段
paragraph = Api.CreateParagraph();
paragraph.AddText("名字：");
paragraph.SetFontSize(12 * 2);
let firstNameForm = Api.CreateTextForm({
  key: "first_name",
  tip: "输入您的名字",
  required: true,
  placeholder: "名字",
  comb: true,
  maxCharacters: 20,
  cellWidth: 3,
  multiLine: false,
  autoFit: false,
});
paragraph.AddElement(firstNameForm);
doc.Push(paragraph);

// 姓氏字段
paragraph = Api.CreateParagraph();
paragraph.AddText("姓氏：");
paragraph.SetFontSize(12 * 2);
let lastNameForm = Api.CreateTextForm({
  key: "last_name",
  tip: "输入您的姓氏",
  required: true,
  placeholder: "姓氏",
  comb: true,
  maxCharacters: 20,
  cellWidth: 3,
  multiLine: false,
  autoFit: false,
});
paragraph.AddElement(lastNameForm);
doc.Push(paragraph);

// 员工编号字段
paragraph = Api.CreateParagraph();
paragraph.AddText("员工编号：");
paragraph.SetFontSize(12 * 2);
let employeeIdForm = Api.CreateTextForm({
  key: "employee_id",
  tip: "输入您的员工编号",
  required: true,
  placeholder: "编号",
  comb: true,
  maxCharacters: 10,
  cellWidth: 2,
  multiLine: false,
  autoFit: false,
});
paragraph.AddElement(employeeIdForm);
doc.Push(paragraph);

// 部门字段
paragraph = Api.CreateParagraph();
paragraph.AddText("部门：");
paragraph.SetFontSize(12 * 2);
let departmentForm = Api.CreateTextForm({
  key: "department",
  tip: "输入您的部门",
  required: false,
  placeholder: "部门名称",
  comb: false,
  maxCharacters: 30,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(departmentForm);
doc.Push(paragraph);

// 职位字段
paragraph = Api.CreateParagraph();
paragraph.AddText("职位：");
paragraph.SetFontSize(12 * 2);
let positionForm = Api.CreateTextForm({
  key: "position",
  tip: "输入您的职位",
  required: false,
  placeholder: "职位名称",
  comb: false,
  maxCharacters: 25,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(positionForm);
doc.Push(paragraph);

// 添加间距
paragraph = Api.CreateParagraph();
doc.Push(paragraph);

// 添加说明
paragraph = Api.CreateParagraph();
paragraph.AddText("填写说明：");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 上传一张近期证件照");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 填写所有标有 * 的必填字段");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 将此表单提交至人力资源部门");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);
```
