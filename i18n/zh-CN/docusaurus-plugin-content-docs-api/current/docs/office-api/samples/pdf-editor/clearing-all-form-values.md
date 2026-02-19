---
hide_table_of_contents: true
---

# 清除所有表单值

重置所有已填写的表单字段，将表单恢复到初始状态，以便重新使用、取消输入或快速清除：

- 创建包含各种字段类型和默认值的表单（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)、[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md)）；
- 实现表单清除功能（[ApiDocument/GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md)、[ApiTextForm/SetText](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/SetText.md)、[ApiCheckBoxForm/SetChecked](/docs/office-api/usage-api/text-document-api/ApiCheckBoxForm/Methods/SetChecked.md)）；
- 将字段恢复到默认状态（[ApiFormBase/GetFormType](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormType.md)、[ApiComboBoxForm/SetText](/docs/office-api/usage-api/text-document-api/ApiComboBoxForm/Methods/SetText.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 创建包含各种字段类型的注册表单
function createRegistrationForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("用户注册表单");
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // 个人信息部分
  paragraph = Api.CreateParagraph();
  paragraph.AddText("个人信息");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // 全名字段
  paragraph = Api.CreateParagraph();
  paragraph.AddText("全名：");
  paragraph.SetFontSize(12 * 2);
  let nameForm = Api.CreateTextForm({
    key: "full_name",
    required: true,
    placeholder: "请输入您的全名",
    maxCharacters: 50,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(nameForm);
  doc.Push(paragraph);

  // 电子邮箱字段
  paragraph = Api.CreateParagraph();
  paragraph.AddText("电子邮箱：");
  paragraph.SetFontSize(12 * 2);
  let emailForm = Api.CreateTextForm({
    key: "email",
    required: true,
    placeholder: "your.email@example.com",
    maxCharacters: 60,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emailForm);
  doc.Push(paragraph);

  // 国家选择
  paragraph = Api.CreateParagraph();
  paragraph.AddText("国家：");
  paragraph.SetFontSize(12 * 2);
  let countryForm = Api.CreateComboBoxForm({
    key: "country",
    required: false,
    placeholder: "选择您的国家",
    editable: false,
    autoFit: true,
    items: ["美国", "加拿大", "英国", "德国", "法国", "其他"]
  });
  paragraph.AddElement(countryForm);
  doc.Push(paragraph);

  // 订阅通讯（默认选中）
  paragraph = Api.CreateParagraph();
  let newsletterCheckbox = Api.CreateCheckBoxForm({
    key: "newsletter",
    required: false,
    tip: "订阅通讯",
    checked: true
  });
  paragraph.AddElement(newsletterCheckbox);
  paragraph.AddText(" 订阅通讯（推荐）");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // 营销邮件（默认未选中）
  paragraph = Api.CreateParagraph();
  let marketingCheckbox = Api.CreateCheckBoxForm({
    key: "marketing",
    required: false,
    tip: "接收营销邮件",
    checked: false
  });
  paragraph.AddElement(marketingCheckbox);
  paragraph.AddText(" 接收促销优惠");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // 条款协议（必填，默认未选中）
  paragraph = Api.CreateParagraph();
  let termsCheckbox = Api.CreateCheckBoxForm({
    key: "terms_agreed",
    required: true,
    tip: "您必须同意条款",
    checked: false
  });
  paragraph.AddElement(termsCheckbox);
  paragraph.AddText(" 我同意条款和条件（必填）");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);
}

// 清除所有表单值并恢复到初始状态的函数
function clearAllFormValues() {
  let forms = doc.GetAllForms();
  let clearedCount = 0;

  // 定义复选框的初始/默认值
  let defaultCheckboxValues = {
    "newsletter": true,        // 通讯默认应选中
    "marketing": false,        // 营销默认应未选中
    "terms_agreed": false      // 条款初始应未选中
  };

  for (let form of forms) {
    let key = form.GetFormKey();
    let formType = form.GetFormType();

    if (formType === "textForm") {
      // 清除文本表单 - 将显示占位符文本
      form.SetText("");
      clearedCount++;
    } else if (formType === "checkBoxForm") {
      // 将复选框重置为初始状态
      let initialState = defaultCheckboxValues[key] !== undefined ? defaultCheckboxValues[key] : false;
      form.SetChecked(initialState);
      clearedCount++;
    } else if (formType === "comboBoxForm") {
      // 清除组合框选择 - 将显示占位符
      form.SetText("");
      clearedCount++;
    }
  }

  return clearedCount;
}

// 用示例数据填充表单的函数（用于演示）
function fillFormWithSampleData() {
  let forms = doc.GetAllForms();

  let sampleData = {
    "full_name": "张三",
    "email": "zhangsan@email.com",
    "country": "美国",
    "newsletter": false,
    "marketing": true,
    "terms_agreed": true
  };

  for (let form of forms) {
    let key = form.GetFormKey();
    let formType = form.GetFormType();

    if (formType === "textForm" && sampleData[key]) {
      form.SetText(sampleData[key]);
    } else if (formType === "checkBoxForm" && sampleData[key] !== undefined) {
      form.SetChecked(sampleData[key]);
    } else if (formType === "comboBoxForm" && sampleData[key]) {
      form.SetText(sampleData[key]);
    }
  }
}

// 创建注册表单
createRegistrationForm();

// 添加间距
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// 添加重置按钮部分
paragraph = Api.CreateParagraph();
paragraph.AddText("表单控制");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 步骤1：用示例数据填充表单
paragraph = Api.CreateParagraph();
paragraph.AddText("步骤1：表单已填充示例数据");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

fillFormWithSampleData();

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 示例数据已输入到所有表单字段");
paragraph.SetFontSize(12 * 2);
paragraph.SetColor(0, 128, 0);
doc.Push(paragraph);

// 添加间距
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// 步骤2：重置按钮功能
paragraph = Api.CreateParagraph();
paragraph.AddText("步骤2：重置按钮 - 清除所有值");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let clearedCount = clearAllFormValues();

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 重置完成 - 已清除 ${clearedCount} 个字段`);
paragraph.SetFontSize(12 * 2);
paragraph.SetColor(0, 128, 0);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 文本字段：已清除（显示占位符文本）");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 复选框：重置为初始状态");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 组合框：选择已清除（显示占位符）");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// 添加实现指南
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("实现指南：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("1. 添加重置按钮");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 将按钮放置在表单底部或控制面板中");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 将按钮连接到 clearAllFormValues() 函数");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. 重置所有字段");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 文本字段：SetText('') - 显示占位符");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 复选框：SetChecked(defaultValue) - 恢复到初始状态");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 组合框：SetText('') - 显示占位符");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. 表单更新");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 重置后表单显示为空状态");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 准备好接收新输入或重新使用");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 保持原始表单结构和验证规则");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);
```
