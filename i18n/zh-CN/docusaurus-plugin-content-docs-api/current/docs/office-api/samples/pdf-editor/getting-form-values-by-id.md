---
hide_table_of_contents: true
---

# 通过ID获取表单值

使用唯一标识符从特定表单字段中提取值，用于验证和动态处理：

- 创建具有各种输入类型和唯一标识符的表单（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)、[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md)）；
- 通过键/ID检索特定表单值（[ApiDocument/GetFormsByKey](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetFormsByKey.md)、[ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md)）；
- 验证表单数据并高亮显示必填字段（[ApiTextForm/GetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md)、[ApiCheckBoxForm/IsChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md)、[ApiFormBase/SetBorderColor](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/SetBorderColor.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 创建包含各种字段类型的注册表单
function createRegistrationForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("用户注册表");
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // 电子邮件字段（必填）
  paragraph = Api.CreateParagraph();
  paragraph.AddText("电子邮件（必填）：");
  paragraph.SetFontSize(14 * 2);
  let emailForm = Api.CreateTextForm({
    key: "email",
    required: true,
    placeholder: "请输入您的电子邮件地址",
    maxCharacters: 50,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emailForm);
  doc.Push(paragraph);

  // 姓名字段
  paragraph = Api.CreateParagraph();
  paragraph.AddText("姓名：");
  paragraph.SetFontSize(14 * 2);
  let nameForm = Api.CreateTextForm({
    key: "full_name",
    required: false,
    placeholder: "请输入您的姓名",
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(nameForm);
  doc.Push(paragraph);

  // 年龄段选择
  paragraph = Api.CreateParagraph();
  paragraph.AddText("年龄段：");
  paragraph.SetFontSize(14 * 2);
  let ageForm = Api.CreateComboBoxForm({
    key: "age_group",
    required: false,
    placeholder: "请选择年龄段",
    editable: false,
    autoFit: true,
    items: ["18-25", "26-35", "36-45", "46-55", "55+"]
  });
  paragraph.AddElement(ageForm);
  doc.Push(paragraph);

  // 条款同意复选框（必填）
  paragraph = Api.CreateParagraph();
  let termsCheckbox = Api.CreateCheckBoxForm({
    key: "terms_agreed",
    required: true,
    tip: "您必须同意条款和条件",
    checked: false
  });
  paragraph.AddElement(termsCheckbox);
  paragraph.AddText(" 我同意条款和条件（必填）");
  paragraph.SetFontSize(14 * 2);
  doc.Push(paragraph);

  // 新闻通讯订阅复选框（可选）
  paragraph = Api.CreateParagraph();
  let newsletterCheckbox = Api.CreateCheckBoxForm({
    key: "newsletter_subscription",
    required: false,
    tip: "订阅我们的新闻通讯",
    checked: false
  });
  paragraph.AddElement(newsletterCheckbox);
  paragraph.AddText(" 订阅新闻通讯");
  paragraph.SetFontSize(14 * 2);
  doc.Push(paragraph);
}

// 通过ID验证表单并获取值的函数
function validateFormById() {
  let validationResults = {};
  let isFormValid = true;

  // 检查电子邮件字段（必填）
  let emailForms = doc.GetFormsByKey("email");
  if (emailForms.length > 0) {
    let emailValue = emailForms[0].GetText();
    validationResults.email = emailValue;

    if (!emailValue || emailValue.trim() === "") {
      // 如果为空，将字段高亮为红色
      emailForms[0].SetBorderColor(255, 0, 0);
      isFormValid = false;
    } else if (!emailValue.includes("@")) {
      // 如果格式无效，将字段高亮为橙色
      emailForms[0].SetBorderColor(255, 165, 0);
      isFormValid = false;
    } else {
      // 如果有效，设置绿色边框
      emailForms[0].SetBorderColor(0, 255, 0);
    }
  }

  // 检查姓名字段
  let nameForms = doc.GetFormsByKey("full_name");
  if (nameForms.length > 0) {
    let nameValue = nameForms[0].GetText();
    validationResults.full_name = nameValue;

    if (nameValue && nameValue.trim() !== "") {
      nameForms[0].SetBorderColor(0, 255, 0);
    }
  }

  // 检查年龄段选择
  let ageForms = doc.GetFormsByKey("age_group");
  if (ageForms.length > 0) {
    let ageValue = ageForms[0].GetText();
    validationResults.age_group = ageValue;

    if (ageValue && ageValue.trim() !== "") {
      ageForms[0].SetBorderColor(0, 255, 0);
    }
  }

  // 检查条款同意（必填）
  let termsForms = doc.GetFormsByKey("terms_agreed");
  if (termsForms.length > 0) {
    let termsChecked = termsForms[0].IsChecked();
    validationResults.terms_agreed = termsChecked;

    if (!termsChecked) {
      // 如果未勾选，将复选框高亮为红色
      termsForms[0].SetBorderColor(255, 0, 0);
      isFormValid = false;
    } else {
      // 如果已勾选，设置绿色边框
      termsForms[0].SetBorderColor(0, 255, 0);
    }
  }

  // 检查新闻通讯订阅（可选）
  let newsletterForms = doc.GetFormsByKey("newsletter_subscription");
  if (newsletterForms.length > 0) {
    let newsletterChecked = newsletterForms[0].IsChecked();
    validationResults.newsletter_subscription = newsletterChecked;

    // 可选字段始终显示绿色边框
    newsletterForms[0].SetBorderColor(0, 255, 0);
  }

  return { isValid: isFormValid, data: validationResults };
}

// 创建表单
createRegistrationForm();

// 添加一些间距
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// 添加验证部分
paragraph = Api.CreateParagraph();
paragraph.AddText("表单验证结果：");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 执行验证并显示结果
let validation = validateFormById();

paragraph = Api.CreateParagraph();
if (validation.isValid) {
  paragraph.AddText("✓ 表单有效，可以提交");
  paragraph.SetColor(0, 128, 0);
} else {
  paragraph.AddText("✗ 表单存在验证错误（请检查高亮显示的字段）");
  paragraph.SetColor(255, 0, 0);
}
paragraph.SetFontSize(14 * 2);
doc.Push(paragraph);

// 显示提取的值
paragraph = Api.CreateParagraph();
paragraph.AddText("提取的值：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

for (let key in validation.data) {
  paragraph = Api.CreateParagraph();
  let value = validation.data[key];
  if (typeof value === 'boolean') {
    value = value ? '是' : '否';
  }
  paragraph.AddText(`${key}: ${value || '未提供'}`);
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);
}
```
