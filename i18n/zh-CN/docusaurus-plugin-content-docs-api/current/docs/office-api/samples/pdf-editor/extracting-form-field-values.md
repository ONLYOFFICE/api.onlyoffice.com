---
hide_table_of_contents: true
---

# 提取表单字段值

演示如何以编程方式从表单字段中提取值：

- 创建包含文本输入框和单选按钮组的注册表单（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)、[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)）；
- 预填充表单字段的示例数据以进行演示（[ApiTextForm/SetText](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/SetText.md)）；
- 使用实用函数检索输入的数据（[ApiDocument/GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md)、[ApiFormBase/GetFormType](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormType.md)、[ApiFormBase/GetFormKey](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md)）。

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
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

// 名字字段
paragraph = Api.CreateParagraph();
paragraph.AddText("名字：");
paragraph.SetFontSize(12 * 2);
let firstNameForm = Api.CreateTextForm({
  key: "first_name",
  required: true,
  placeholder: "请输入名字",
  maxCharacters: 50,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(firstNameForm);
doc.Push(paragraph);

// 姓氏字段
paragraph = Api.CreateParagraph();
paragraph.AddText("姓氏：");
paragraph.SetFontSize(12 * 2);
let lastNameForm = Api.CreateTextForm({
  key: "last_name",
  required: true,
  placeholder: "请输入姓氏",
  maxCharacters: 50,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(lastNameForm);
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

// 活动偏好部分
paragraph = Api.CreateParagraph();
paragraph.AddText("活动偏好");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

// 场次偏好单选按钮组
paragraph = Api.CreateParagraph();
paragraph.AddText("首选场次：");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(150);
doc.Push(paragraph);

let sessionOptions = ["上午场（9:00）", "下午场（14:00）", "晚间场（18:00）"];
for (let i = 0; i < sessionOptions.length; i++) {
  paragraph = Api.CreateParagraph();
  let radioButton = Api.CreateCheckBoxForm({
    key: "session_" + String.fromCharCode(65 + i),
    tip: "选择" + sessionOptions[i],
    required: false,
    radio: true
  });
  radioButton.SetRadioGroup("session_preference");
  paragraph.AddElement(radioButton);
  paragraph.AddText(" " + sessionOptions[i]);
  paragraph.SetFontSize(11 * 2);
  paragraph.SetSpacingBefore(80);
  doc.Push(paragraph);
}

// 经验水平单选按钮组
paragraph = Api.CreateParagraph();
paragraph.AddText("经验水平：");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);

let experienceOptions = ["初级", "中级", "高级"];
for (let i = 0; i < experienceOptions.length; i++) {
  paragraph = Api.CreateParagraph();
  let radioButton = Api.CreateCheckBoxForm({
    key: "experience_" + String.fromCharCode(65 + i),
    tip: "选择" + experienceOptions[i],
    required: false,
    radio: true
  });
  radioButton.SetRadioGroup("experience_level");
  paragraph.AddElement(radioButton);
  paragraph.AddText(" " + experienceOptions[i]);
  paragraph.SetFontSize(11 * 2);
  paragraph.SetSpacingBefore(80);
  doc.Push(paragraph);
}

// 预填充表单数据以进行演示
let forms = doc.GetAllForms();
for (let form of forms) {
  let key = form.GetFormKey();
  let formType = form.GetFormType();

  // 预填充文本字段
  if (formType === "textForm") {
    if (key === "first_name") {
      form.SetText("明");
    } else if (key === "last_name") {
      form.SetText("张");
    } else if (key === "email") {
      form.SetText("zhang.ming@example.com");
    }
  }

  // 预选单选选项
  if (formType === "checkBoxForm") {
    if (key === "session_B") {
      form.SetChecked(true);
    } else if (key === "experience_B") {
      form.SetChecked(true);
    }
  }
}

// 按键获取文本字段值的实用函数
function getTextFieldValue(fieldKey) {
  let forms = doc.GetAllForms();
  for (let form of forms) {
    if (form.GetFormKey() === fieldKey && form.GetFormType() === "textForm") {
      return form.GetText() || "";
    }
  }
  return "";
}

// 从单选按钮组获取选中选项的实用函数
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

// 提取并显示表单值
paragraph = Api.CreateParagraph();
paragraph.AddText("提取的表单数据");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(400);
doc.Push(paragraph);

// 显示文本字段值
let firstName = getTextFieldValue("first_name");
let lastName = getTextFieldValue("last_name");
let email = getTextFieldValue("email");

paragraph = Api.CreateParagraph();
paragraph.AddText("姓名：" + lastName + firstName);
paragraph.SetFontSize(11 * 2);
paragraph.SetSpacingBefore(100);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("电子邮件：" + email);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// 显示单选按钮组选择
let selectedSession = getSelectedRadioOption("session", sessionOptions);
let selectedExperience = getSelectedRadioOption("experience", experienceOptions);

paragraph = Api.CreateParagraph();
paragraph.AddText("首选场次：" + selectedSession);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("经验水平：" + selectedExperience);
paragraph.SetFontSize(11 * 2);
doc.Push(paragraph);

// 以JSON格式显示原始表单数据
paragraph = Api.CreateParagraph();
paragraph.AddText("原始表单数据（JSON）：");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);

let formData = {
  first_name: firstName,
  last_name: lastName,
  email: email,
  session_preference: selectedSession,
  experience_level: selectedExperience
};

paragraph = Api.CreateParagraph();
paragraph.AddText(JSON.stringify(formData, null, 2));
paragraph.SetFontSize(10 * 2);
paragraph.SetFontFamily("Courier New");
doc.Push(paragraph);
```
