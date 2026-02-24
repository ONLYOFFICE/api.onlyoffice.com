---
hide_table_of_contents: true
---

# 获取所有表单值

在表单填写完成后，将所有表单字段值收集到单个JSON对象中，用于分析、服务器提交或数据库存储：

- 创建包含多种字段类型（包括单选按钮）的综合表单（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)、[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md)）；
- 使用示例数据预填充表单字段（[ApiTextForm/SetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)、[ApiCheckBoxForm/SetChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md)）；
- 将所有表单值收集到JSON对象中（[ApiDocument/GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)、[ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md)、[ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 创建表单标题
let paragraph = doc.GetElement(0);
paragraph.AddText("活动报名表");
paragraph.SetFontSize(20 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// 个人信息部分
paragraph = Api.CreateParagraph();
paragraph.AddText("个人信息");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 姓名字段
paragraph = Api.CreateParagraph();
paragraph.AddText("姓名：");
paragraph.SetFontSize(12 * 2);
let nameForm = Api.CreateTextForm({
  key: "full_name",
  required: true,
  placeholder: "请输入您的姓名",
  maxCharacters: 100,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(nameForm);
doc.Push(paragraph);

// 电子邮件字段
paragraph = Api.CreateParagraph();
paragraph.AddText("电子邮件：");
paragraph.SetFontSize(12 * 2);
let emailForm = Api.CreateTextForm({
  key: "email",
  required: true,
  placeholder: "请输入电子邮件地址",
  maxCharacters: 100,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(emailForm);
doc.Push(paragraph);

// 经验级别下拉框
paragraph = Api.CreateParagraph();
paragraph.AddText("经验级别：");
paragraph.SetFontSize(12 * 2);
let experienceForm = Api.CreateComboBoxForm({
  key: "experience_level",
  required: false,
  placeholder: "请选择您的级别",
  editable: false,
  autoFit: true,
  items: ["初级", "中级", "高级", "专家"]
});
paragraph.AddElement(experienceForm);
doc.Push(paragraph);

// 场次偏好部分
paragraph = Api.CreateParagraph();
paragraph.AddText("场次偏好");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 场次时间单选按钮组
paragraph = Api.CreateParagraph();
paragraph.AddText("首选场次：");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

let sessionOptions = ["上午场 (9:00)", "下午场 (14:00)", "晚间场 (18:00)"];
for (let i = 0; i < sessionOptions.length; i++) {
  paragraph = Api.CreateParagraph();
  let radioButton = Api.CreateCheckBoxForm({
    key: "session_" + String.fromCharCode(65 + i),
    tip: "选择 " + sessionOptions[i],
    required: false,
    radio: true
  });
  radioButton.SetRadioGroup("session_preference");
  paragraph.AddElement(radioButton);
  paragraph.AddText(" " + sessionOptions[i]);
  paragraph.SetFontSize(11 * 2);
  doc.Push(paragraph);
}

// 附加选项部分
paragraph = Api.CreateParagraph();
paragraph.AddText("附加选项");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 新闻通讯复选框
paragraph = Api.CreateParagraph();
let newsletterCheckbox = Api.CreateCheckBoxForm({
  key: "newsletter",
  required: false,
  tip: "订阅新闻通讯"
});
paragraph.AddElement(newsletterCheckbox);
paragraph.AddText(" 订阅活动新闻通讯");
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// 午餐复选框
paragraph = Api.CreateParagraph();
let lunchCheckbox = Api.CreateCheckBoxForm({
  key: "lunch",
  required: false,
  tip: "预订午餐"
});
paragraph.AddElement(lunchCheckbox);
paragraph.AddText(" 包含午餐（提供素食选项）");
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// 备注字段
paragraph = Api.CreateParagraph();
paragraph.AddText("其他备注：");
paragraph.SetFontSize(12 * 2);
let commentsForm = Api.CreateTextForm({
  key: "comments",
  required: false,
  placeholder: "任何特殊要求...",
  maxCharacters: 500,
  multiLine: true,
  autoFit: true,
});
paragraph.AddElement(commentsForm);
doc.Push(paragraph);

// 使用示例数据预填充表单以进行演示
let forms = doc.GetAllForms();
for (let form of forms) {
  let key = form.GetFormKey();
  let formType = form.GetFormType();

  if (formType === "textForm") {
    if (key === "full_name") form.SetText("张明");
    else if (key === "email") form.SetText("zhang.ming@example.com");
    else if (key === "comments") form.SetText("期待参加这次活动！");
  } else if (formType === "comboBoxForm") {
    if (key === "experience_level") form.SetText("中级");
  } else if (formType === "checkBoxForm") {
    if (key === "session_B") form.SetChecked(true);
    else if (key === "newsletter") form.SetChecked(true);
    else if (key === "lunch") form.SetChecked(true);
  }
}

// 将所有表单值收集到JSON的函数
function collectAllFormValues() {
  let formData = {};
  let forms = doc.GetAllForms();

  for (let form of forms) {
    let key = form.GetFormKey();
    let formType = form.GetFormType();

    if (formType === "textForm") {
      formData[key] = form.GetText() || "";
    } else if (formType === "checkBoxForm") {
      formData[key] = form.IsChecked();
    } else if (formType === "comboBoxForm") {
      formData[key] = form.GetText() || "";
    }
  }

  return formData;
}

// 从单选按钮组获取已选选项的函数
function getSelectedRadioOption(radioGroupPrefix, optionLabels) {
  let forms = doc.GetAllForms();
  for (let i = 0; i < optionLabels.length; i++) {
    let key = radioGroupPrefix + "_" + String.fromCharCode(65 + i);
    for (let form of forms) {
      if (form.GetFormKey() === key && form.GetFormType() === "checkBoxForm") {
        if (form.IsChecked()) {
          return optionLabels[i];
        }
      }
    }
  }
  return "未选择";
}

// 收集并显示表单数据
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("收集的表单数据");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 获取所有表单值
let allFormData = collectAllFormValues();
let selectedSession = getSelectedRadioOption("session", sessionOptions);

// 显示格式化摘要
paragraph = Api.CreateParagraph();
paragraph.AddText("报名摘要：");
paragraph.SetFontSize(13 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("姓名：" + allFormData["full_name"]);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("电子邮件：" + allFormData["email"]);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("经验级别：" + allFormData["experience_level"]);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("首选场次：" + selectedSession);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("新闻通讯：" + (allFormData["newsletter"] ? "是" : "否"));
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("午餐：" + (allFormData["lunch"] ? "是" : "否"));
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("备注：" + (allFormData["comments"] || "无"));
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// 显示原始JSON
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("原始JSON数据：");
paragraph.SetFontSize(13 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 将场次偏好添加到最终数据
allFormData["session_preference"] = selectedSession;

paragraph = Api.CreateParagraph();
paragraph.AddText(JSON.stringify(allFormData, null, 2));
paragraph.SetFontSize(10 * 2);
paragraph.SetFontFamily("Courier New");
doc.Push(paragraph);
```
