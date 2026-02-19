---
hide_table_of_contents: true
---

# 创建活动表单

构建带有渐变背景的样式化活动注册表单：

- 设置自定义页面尺寸和无边距（[ApiSection/SetPageSize](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetPageSize.md)、[ApiSection/SetPageMargins](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetPageMargins.md)）；
- 创建渐变背景形状（[Api/CreateGradientStop](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateGradientStop.md)、[Api/CreateLinearGradientFill](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateLinearGradientFill.md)、[Api/CreateShape](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateShape.md)）；
- 添加参会者信息文本字段（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)）；
- 添加照片上传字段（[Api/CreatePictureForm](/docs/office-api/usage-api/form-api/Api/Methods/CreatePictureForm.md)）；
- 添加同意复选框（[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 获取当前年份用于动态会议名称
let currentYear = new Date().getFullYear();

// 设置自定义页面尺寸（A4）无边距
let section = doc.GetFinalSection();
section.SetPageSize(11906, 16838); // A4: 210mm x 297mm（twips单位）
section.SetPageMargins(0, 0, 0, 0);

// 创建渐变背景（紫色到白色）
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(128, 0, 255), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(200, 150, 255), 50_000);
let gs3 = Api.CreateGradientStop(Api.CreateRGBColor(255, 255, 255), 100_000);
let gradientFill = Api.CreateLinearGradientFill([gs1, gs2, gs3], 5_400_000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());

// 创建背景形状（A4: 210mm x 297mm，每毫米36000 EMU）
let backgroundShape = Api.CreateShape("rect", 210 * 36000, 297 * 36000, gradientFill, stroke);
backgroundShape.SetWrappingStyle("behind");
backgroundShape.SetHorAlign("page", "left");
backgroundShape.SetVerAlign("page", "top");

// 将背景添加到第一段落
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(backgroundShape);

// 创建表单内容形状（160mm x 265mm卡片）
let contentFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 255, 255));
let contentShape = Api.CreateShape("roundRect", 160 * 36000, 265 * 36000, contentFill, Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(128, 0, 255))));
contentShape.SetWrappingStyle("topAndBottom");
contentShape.SetHorAlign("page", "center");
contentShape.SetVerPosition("page", 16 * 36000);

// 获取内容区域
let shapeContent = contentShape.GetDocContent();
shapeContent.RemoveAllElements();

// 会议标题
let titlePara = Api.CreateParagraph();
titlePara.SetJc("center");
titlePara.SetSpacingBefore(400);
titlePara.SetSpacingAfter(200);
let titleRun = titlePara.AddText("IT未来大会 " + currentYear);
titleRun.SetFontSize(28 * 2);
titleRun.SetBold(true);
titleRun.SetColor(128, 0, 255);
titleRun.SetFontFamily("Arial");
shapeContent.Push(titlePara);

// 副标题
let subtitlePara = Api.CreateParagraph();
subtitlePara.SetJc("center");
subtitlePara.SetSpacingAfter(400);
let subtitleRun = subtitlePara.AddText("注册表单");
subtitleRun.SetFontSize(18 * 2);
subtitleRun.SetColor(100, 100, 100);
subtitleRun.SetFontFamily("Arial");
shapeContent.Push(subtitlePara);

// 照片上传区域
let photoPara = Api.CreateParagraph();
photoPara.SetJc("center");
photoPara.SetSpacingAfter(300);
let pictureForm = Api.CreatePictureForm({
  key: "attendee_photo",
  tip: "上传您的照片",
  required: false,
  placeholder: "照片",
  scaleFlag: "tooBig",
  lockAspectRatio: true,
  respectBorders: true,
});
photoPara.AddElement(pictureForm);
shapeContent.Push(photoPara);

// 创建表单行的辅助函数
function createFormRow(labelText, formKey, placeholder, maxChars, required, multiLine) {
  let rowPara = Api.CreateParagraph();
  rowPara.SetSpacingBefore(150);
  rowPara.SetSpacingAfter(100);
  rowPara.SetIndLeft(400);
  rowPara.SetIndRight(400);

  let labelRun = rowPara.AddText(labelText + "：");
  labelRun.SetFontSize(11 * 2);
  labelRun.SetBold(true);
  labelRun.SetColor(80, 80, 80);
  labelRun.SetFontFamily("Arial");

  let textForm = Api.CreateTextForm({
    key: formKey,
    required: required,
    placeholder: placeholder,
    maxCharacters: maxChars,
    multiLine: multiLine || false,
    autoFit: true,
  });
  textForm.SetBorderColor(128, 0, 255);
  let textPr = Api.CreateTextPr();
  textPr.SetColor(0, 0, 0);
  textForm.SetTextPr(textPr);
  rowPara.AddElement(textForm);

  return rowPara;
}

// 个人信息部分
let sectionPara = Api.CreateParagraph();
sectionPara.SetSpacingBefore(300);
sectionPara.SetSpacingAfter(150);
sectionPara.SetIndLeft(400);
let sectionRun = sectionPara.AddText("个人信息");
sectionRun.SetFontSize(14 * 2);
sectionRun.SetBold(true);
sectionRun.SetColor(128, 0, 255);
sectionRun.SetFontFamily("Arial");
shapeContent.Push(sectionPara);

// 表单字段
shapeContent.Push(createFormRow("姓名", "full_name", "请输入您的全名", 100, true, false));
shapeContent.Push(createFormRow("电子邮箱", "email", "your.email@example.com", 80, true, false));
shapeContent.Push(createFormRow("电话", "phone", "+86 138 0000 0000", 20, false, false));
shapeContent.Push(createFormRow("公司", "company", "您的公司名称", 60, false, false));
shapeContent.Push(createFormRow("职位", "job_title", "您的职位", 50, false, false));

// 会议偏好部分
sectionPara = Api.CreateParagraph();
sectionPara.SetSpacingBefore(300);
sectionPara.SetSpacingAfter(150);
sectionPara.SetIndLeft(400);
sectionRun = sectionPara.AddText("会议偏好");
sectionRun.SetFontSize(14 * 2);
sectionRun.SetBold(true);
sectionRun.SetColor(128, 0, 255);
sectionRun.SetFontFamily("Arial");
shapeContent.Push(sectionPara);

// 兴趣多行字段
let interestsPara = Api.CreateParagraph();
interestsPara.SetSpacingBefore(150);
interestsPara.SetSpacingAfter(100);
interestsPara.SetIndLeft(400);
interestsPara.SetIndRight(400);

let interestsLabel = interestsPara.AddText("感兴趣的主题：");
interestsLabel.SetFontSize(11 * 2);
interestsLabel.SetBold(true);
interestsLabel.SetColor(80, 80, 80);
interestsLabel.SetFontFamily("Arial");

let interestsForm = Api.CreateTextForm({
  key: "interests",
  required: false,
  placeholder: "人工智能/机器学习、云计算、网络安全、DevOps等",
  maxCharacters: 300,
  multiLine: true,
  autoFit: false,
});
interestsForm.SetBorderColor(128, 0, 255);
let interestsTextPr = Api.CreateTextPr();
interestsTextPr.SetColor(0, 0, 0);
interestsForm.SetTextPr(interestsTextPr);
interestsPara.AddElement(interestsForm);
shapeContent.Push(interestsPara);

// 饮食要求
shapeContent.Push(createFormRow("饮食要求", "dietary", "素食、纯素、过敏等", 100, false, false));

// 同意声明部分
sectionPara = Api.CreateParagraph();
sectionPara.SetSpacingBefore(300);
sectionPara.SetSpacingAfter(150);
sectionPara.SetIndLeft(400);
sectionRun = sectionPara.AddText("同意声明");
sectionRun.SetFontSize(14 * 2);
sectionRun.SetBold(true);
sectionRun.SetColor(128, 0, 255);
sectionRun.SetFontFamily("Arial");
shapeContent.Push(sectionPara);

// 数据处理同意复选框
let consentPara = Api.CreateParagraph();
consentPara.SetSpacingBefore(100);
consentPara.SetIndLeft(400);
consentPara.SetIndRight(400);

let consentCheckbox = Api.CreateCheckBoxForm({
  key: "consent_data",
  required: true,
  tip: "同意数据处理",
  checked: false
});
consentPara.AddElement(consentCheckbox);

let consentText = consentPara.AddText(" 我同意为会议注册目的处理我的个人数据。");
consentText.SetFontSize(10 * 2);
consentText.SetColor(80, 80, 80);
consentText.SetFontFamily("Arial");
shapeContent.Push(consentPara);

// 拍照/录像同意复选框
let photoConsentPara = Api.CreateParagraph();
photoConsentPara.SetSpacingBefore(100);
photoConsentPara.SetIndLeft(400);
photoConsentPara.SetIndRight(400);

let photoConsentCheckbox = Api.CreateCheckBoxForm({
  key: "consent_photo",
  required: false,
  tip: "同意拍照/录像",
  checked: false
});
photoConsentPara.AddElement(photoConsentCheckbox);

let photoConsentText = photoConsentPara.AddText(" 我同意在活动期间被拍照/录像。");
photoConsentText.SetFontSize(10 * 2);
photoConsentText.SetColor(80, 80, 80);
photoConsentText.SetFontFamily("Arial");
shapeContent.Push(photoConsentPara);

// 订阅通讯复选框
let newsletterPara = Api.CreateParagraph();
newsletterPara.SetSpacingBefore(100);
newsletterPara.SetIndLeft(400);
newsletterPara.SetIndRight(400);

let newsletterCheckbox = Api.CreateCheckBoxForm({
  key: "newsletter",
  required: false,
  tip: "订阅通讯",
  checked: false
});
newsletterPara.AddElement(newsletterCheckbox);

let newsletterText = newsletterPara.AddText(" 订阅IT未来大会通讯以获取最新资讯。");
newsletterText.SetFontSize(10 * 2);
newsletterText.SetColor(80, 80, 80);
newsletterText.SetFontFamily("Arial");
shapeContent.Push(newsletterPara);

// 页脚
let footerPara = Api.CreateParagraph();
footerPara.SetJc("center");
footerPara.SetSpacingBefore(400);
let footerRun = footerPara.AddText("www.itfutureconference.com | contact@itfutureconference.com");
footerRun.SetFontSize(9 * 2);
footerRun.SetColor(128, 0, 255);
footerRun.SetFontFamily("Arial");
shapeContent.Push(footerPara);

// 将内容形状添加到文档
paragraph.AddDrawing(contentShape);
```
