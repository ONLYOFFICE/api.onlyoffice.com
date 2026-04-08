---
hide_table_of_contents: true
---

# 创建多个保密协议文档

在一个文件中生成多个个性化的保密协议（NDA）文档，为不同用户创建独立的部分：

- 创建具有 A4 页面大小和自定义边距的文档（[ApiDocument/CreateSection](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateSection.md)、[ApiSection/SetPageSize](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetPageSize.md)、[ApiSection/SetPageMargins](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetPageMargins.md)）；
- 创建预填充用户特定数据的内联文本表单字段（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)）；
- 添加手动签名行并使用分页符分隔每个保密协议（[ApiParagraph/AddPageBreak](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddPageBreak.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 个性化保密协议的用户数据
let users = [
  { name: "张三", company: "科技解决方案有限公司", date: "2025-01-15" },
  { name: "李四", company: "数字动力有限公司", date: "2025-01-16" },
  { name: "王芳", company: "创新实验室有限责任公司", date: "2025-01-17" }
];

// 创建预填充值的文本表单的辅助函数
function createPrefilledTextForm(key, placeholder, value, maxChars) {
  let textForm = Api.CreateTextForm({
    key: key,
    required: true,
    placeholder: placeholder,
    maxCharacters: maxChars || 50,
    multiLine: false,
    autoFit: true,
  });
  textForm.SetText(value);
  return textForm;
}

// 向段落添加样式文本的辅助函数
function addStyledText(paragraph, text, fontSize, isBold, isItalic) {
  let run = Api.CreateRun();
  run.AddText(text);
  run.SetFontSize(fontSize);
  run.SetBold(isBold || false);
  run.SetItalic(isItalic || false);
  paragraph.AddElement(run);
}

// 为每个用户创建保密协议部分
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  let isFirstUser = i === 0;

  // 获取或创建第一个段落
  let titleParagraph;
  if (isFirstUser) {
    titleParagraph = doc.GetElement(0);
  } else {
    titleParagraph = Api.CreateParagraph();
    doc.Push(titleParagraph);
  }

  // 保密协议标题
  titleParagraph.AddText("保密协议");
  titleParagraph.SetFontSize(28);
  titleParagraph.SetBold(true);
  titleParagraph.SetJc("center");
  titleParagraph.SetSpacingAfter(400);

  // 协议各方部分
  let partiesParagraph = Api.CreateParagraph();
  partiesParagraph.AddText("协议各方");
  partiesParagraph.SetFontSize(24);
  partiesParagraph.SetBold(true);
  partiesParagraph.SetSpacingAfter(200);
  doc.Push(partiesParagraph);

  // 披露方
  let disclosingParagraph = Api.CreateParagraph();
  disclosingParagraph.SetFontSize(22);
  addStyledText(disclosingParagraph, "披露方：", 22, true, false);
  disclosingParagraph.AddElement(createPrefilledTextForm(
    `disclosing_party_${i}`,
    "公司名称",
    user.company,
    60
  ));
  doc.Push(disclosingParagraph);

  // 接收方
  let receivingParagraph = Api.CreateParagraph();
  receivingParagraph.SetFontSize(22);
  addStyledText(receivingParagraph, "接收方：", 22, true, false);
  receivingParagraph.AddElement(createPrefilledTextForm(
    `receiving_party_${i}`,
    "全名",
    user.name,
    50
  ));
  receivingParagraph.SetSpacingAfter(300);
  doc.Push(receivingParagraph);

  // 生效日期
  let dateParagraph = Api.CreateParagraph();
  dateParagraph.SetFontSize(22);
  addStyledText(dateParagraph, "生效日期：", 22, true, false);
  dateParagraph.AddElement(createPrefilledTextForm(
    `effective_date_${i}`,
    "年-月-日",
    user.date,
    12
  ));
  dateParagraph.SetSpacingAfter(400);
  doc.Push(dateParagraph);

  // 协议条款标题
  let termsHeader = Api.CreateParagraph();
  termsHeader.AddText("条款和条件");
  termsHeader.SetFontSize(24);
  termsHeader.SetBold(true);
  termsHeader.SetSpacingAfter(200);
  doc.Push(termsHeader);

  // 条款 1
  let term1 = Api.CreateParagraph();
  term1.AddText("1. 保密信息");
  term1.SetFontSize(22);
  term1.SetBold(true);
  doc.Push(term1);

  let term1Text = Api.CreateParagraph();
  term1Text.AddText("接收方同意对披露方披露的所有专有信息、商业秘密、技术数据和商业信息予以保密。");
  term1Text.SetFontSize(22);
  term1Text.SetSpacingAfter(200);
  doc.Push(term1Text);

  // 条款 2
  let term2 = Api.CreateParagraph();
  term2.AddText("2. 保密义务");
  term2.SetFontSize(22);
  term2.SetBold(true);
  doc.Push(term2);

  let term2Text = Api.CreateParagraph();
  term2Text.AddText("未经披露方事先书面同意，接收方不得向第三方披露任何保密信息。");
  term2Text.SetFontSize(22);
  term2Text.SetSpacingAfter(200);
  doc.Push(term2Text);

  // 条款 3
  let term3 = Api.CreateParagraph();
  term3.AddText("3. 期限和终止");
  term3.SetFontSize(22);
  term3.SetBold(true);
  doc.Push(term3);

  let term3Text = Api.CreateParagraph();
  term3Text.AddText("本协议自生效日期起有效期为两（2）年，除非双方书面同意提前终止。");
  term3Text.SetFontSize(22);
  term3Text.SetSpacingAfter(400);
  doc.Push(term3Text);

  // 签名部分标题
  let sigHeader = Api.CreateParagraph();
  sigHeader.AddText("签名");
  sigHeader.SetFontSize(24);
  sigHeader.SetBold(true);
  sigHeader.SetSpacingAfter(300);
  doc.Push(sigHeader);

  // 披露方签名
  let disclosingSigLabel = Api.CreateParagraph();
  disclosingSigLabel.AddText("披露方代表：");
  disclosingSigLabel.SetFontSize(22);
  disclosingSigLabel.SetBold(true);
  doc.Push(disclosingSigLabel);

  let disclosingSigLine = Api.CreateParagraph();
  disclosingSigLine.AddText("签名：_________________________________");
  disclosingSigLine.SetFontSize(22);
  doc.Push(disclosingSigLine);

  let disclosingNameLine = Api.CreateParagraph();
  disclosingNameLine.AddText("姓名：_____________________________________");
  disclosingNameLine.SetFontSize(22);
  doc.Push(disclosingNameLine);

  let disclosingDateLine = Api.CreateParagraph();
  disclosingDateLine.AddText("日期：_____________________________________");
  disclosingDateLine.SetFontSize(22);
  disclosingDateLine.SetSpacingAfter(300);
  doc.Push(disclosingDateLine);

  // 接收方签名
  let receivingSigLabel = Api.CreateParagraph();
  receivingSigLabel.AddText("接收方代表：");
  receivingSigLabel.SetFontSize(22);
  receivingSigLabel.SetBold(true);
  doc.Push(receivingSigLabel);

  let receivingSigLine = Api.CreateParagraph();
  receivingSigLine.AddText("签名：_________________________________");
  receivingSigLine.SetFontSize(22);
  doc.Push(receivingSigLine);

  let receivingNameLine = Api.CreateParagraph();
  receivingNameLine.SetFontSize(22);
  addStyledText(receivingNameLine, "姓名：", 22, false, false);
  receivingNameLine.AddElement(createPrefilledTextForm(
    `signature_name_${i}`,
    "全名",
    user.name,
    50
  ));
  doc.Push(receivingNameLine);

  let receivingDateLine = Api.CreateParagraph();
  receivingDateLine.AddText("日期：_____________________________________");
  receivingDateLine.SetFontSize(22);
  doc.Push(receivingDateLine);

  // 在保密协议之间添加分页符（最后一个除外）
  if (i < users.length - 1) {
    let pageBreakParagraph = Api.CreateParagraph();
    pageBreakParagraph.AddPageBreak();
    doc.Push(pageBreakParagraph);
  }
}

// 为最终部分设置 A4 页面大小和自定义边距
let finalParagraph = Api.CreateParagraph();
doc.Push(finalParagraph);
let section = doc.CreateSection(finalParagraph);
section.SetPageSize(11906, 16838); // A4：210mm x 297mm（以缇为单位）
section.SetPageMargins(1440, 1440, 1440, 1440); // 1 英寸边距（1440 缇）
```
