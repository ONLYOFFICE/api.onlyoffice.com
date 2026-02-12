---
hide_table_of_contents: true
---

# 设置默认值

根据用户身份验证数据自动填充表单字段，以减少手动输入并加速个人仪表板、内部门户和调查问卷中的表单填写：

- 从身份验证系统获取用户数据（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)、[Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md)、[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)）；
- 以编程方式填充表单字段（[ApiDocument/GetFormsByKey](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetFormsByKey.md)、[ApiTextForm/SetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)、[ApiCheckBoxForm/SetChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md)）；
- 使用适当的默认值处理不同的字段类型（[ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)、[ApiComboBoxForm/SetText](/docs/office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetText.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 模拟用户身份验证数据
let authenticatedUser = {
  id: "emp_12345",
  full_name: "张伟",
  email: "zhang.wei@example.com",
  phone: "+86-138-0013-8000",
  department: "市场部",
  position: "高级市场经理",
  employee_id: "EMP-2024-0198",
  start_date: "2022-03-15",
  manager: "李娜",
  office_location: "北京",
  work_schedule: "全职",
  has_company_car: true,
  emergency_contact: "张明",
  emergency_phone: "+86-139-0013-9000",
  preferred_language: "中文",
  newsletter_subscription: true,
  training_completed: false
};

// 附加用户偏好设置
let userPreferences = {
  notification_email: true,
  sms_alerts: false,
  work_from_home: true,
  parking_space: "A-15",
  dietary_restrictions: "素食",
  t_shirt_size: "M"
};

// 创建员工资料更新表单
function createEmployeeProfileForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("员工资料更新表");
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // 添加自动填充提示
  paragraph = Api.CreateParagraph();
  paragraph.AddText("已预填您的当前信息 - 如需修改请直接编辑");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetJc("center");
  paragraph.SetColor(128, 128, 128);
  doc.Push(paragraph);

  // 添加间距
  paragraph = Api.CreateParagraph();
  paragraph.AddText("");
  doc.Push(paragraph);

  // 个人信息部分
  paragraph = Api.CreateParagraph();
  paragraph.AddText("个人信息");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // 姓名
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

  // 电子邮件
  paragraph = Api.CreateParagraph();
  paragraph.AddText("电子邮件：");
  paragraph.SetFontSize(12 * 2);
  let emailForm = Api.CreateTextForm({
    key: "email",
    required: true,
    placeholder: "请输入您的电子邮件地址",
    maxCharacters: 80,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emailForm);
  doc.Push(paragraph);

  // 电话
  paragraph = Api.CreateParagraph();
  paragraph.AddText("电话：");
  paragraph.SetFontSize(12 * 2);
  let phoneForm = Api.CreateTextForm({
    key: "phone",
    required: false,
    placeholder: "请输入您的电话号码",
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(phoneForm);
  doc.Push(paragraph);

  // 工作信息部分
  paragraph = Api.CreateParagraph();
  paragraph.AddText("工作信息");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // 部门
  paragraph = Api.CreateParagraph();
  paragraph.AddText("部门：");
  paragraph.SetFontSize(12 * 2);
  let deptForm = Api.CreateComboBoxForm({
    key: "department",
    required: true,
    placeholder: "请选择您的部门",
    editable: false,
    autoFit: true,
    items: ["市场部", "销售部", "工程部", "人力资源部", "财务部", "运营部", "法务部"]
  });
  paragraph.AddElement(deptForm);
  doc.Push(paragraph);

  // 职位
  paragraph = Api.CreateParagraph();
  paragraph.AddText("职位：");
  paragraph.SetFontSize(12 * 2);
  let positionForm = Api.CreateTextForm({
    key: "position",
    required: true,
    placeholder: "请输入您的职位名称",
    maxCharacters: 80,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(positionForm);
  doc.Push(paragraph);

  // 员工编号
  paragraph = Api.CreateParagraph();
  paragraph.AddText("员工编号：");
  paragraph.SetFontSize(12 * 2);
  let empIdForm = Api.CreateTextForm({
    key: "employee_id",
    required: false,
    placeholder: "员工编号",
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(empIdForm);
  doc.Push(paragraph);

  // 直属经理
  paragraph = Api.CreateParagraph();
  paragraph.AddText("直属经理：");
  paragraph.SetFontSize(12 * 2);
  let managerForm = Api.CreateTextForm({
    key: "manager",
    required: false,
    placeholder: "经理姓名",
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(managerForm);
  doc.Push(paragraph);

  // 办公地点
  paragraph = Api.CreateParagraph();
  paragraph.AddText("办公地点：");
  paragraph.SetFontSize(12 * 2);
  let locationForm = Api.CreateComboBoxForm({
    key: "office_location",
    required: false,
    placeholder: "请选择办公地点",
    editable: false,
    autoFit: true,
    items: ["北京", "上海", "广州", "深圳", "杭州", "成都", "远程办公"]
  });
  paragraph.AddElement(locationForm);
  doc.Push(paragraph);

  // 工作安排
  paragraph = Api.CreateParagraph();
  paragraph.AddText("工作安排：");
  paragraph.SetFontSize(12 * 2);
  let scheduleForm = Api.CreateComboBoxForm({
    key: "work_schedule",
    required: false,
    placeholder: "请选择工作安排",
    editable: false,
    autoFit: true,
    items: ["全职", "兼职", "合同制", "实习生"]
  });
  paragraph.AddElement(scheduleForm);
  doc.Push(paragraph);

  // 偏好设置部分
  paragraph = Api.CreateParagraph();
  paragraph.AddText("偏好设置");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // 公司车辆
  paragraph = Api.CreateParagraph();
  let carCheckbox = Api.CreateCheckBoxForm({
    key: "has_company_car",
    required: false,
    tip: "已分配公司车辆",
    checked: false
  });
  paragraph.AddElement(carCheckbox);
  paragraph.AddText(" 已分配公司车辆");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // 居家办公
  paragraph = Api.CreateParagraph();
  let wfhCheckbox = Api.CreateCheckBoxForm({
    key: "work_from_home",
    required: false,
    tip: "居家办公选项",
    checked: false
  });
  paragraph.AddElement(wfhCheckbox);
  paragraph.AddText(" 启用居家办公");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // 新闻通讯订阅
  paragraph = Api.CreateParagraph();
  let newsletterCheckbox = Api.CreateCheckBoxForm({
    key: "newsletter_subscription",
    required: false,
    tip: "订阅公司新闻通讯",
    checked: false
  });
  paragraph.AddElement(newsletterCheckbox);
  paragraph.AddText(" 订阅公司新闻通讯");
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // 紧急联系人部分
  paragraph = Api.CreateParagraph();
  paragraph.AddText("紧急联系人");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // 紧急联系人姓名
  paragraph = Api.CreateParagraph();
  paragraph.AddText("联系人姓名：");
  paragraph.SetFontSize(12 * 2);
  let emergencyContactForm = Api.CreateTextForm({
    key: "emergency_contact",
    required: false,
    placeholder: "紧急联系人姓名",
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emergencyContactForm);
  doc.Push(paragraph);

  // 紧急联系电话
  paragraph = Api.CreateParagraph();
  paragraph.AddText("联系人电话：");
  paragraph.SetFontSize(12 * 2);
  let emergencyPhoneForm = Api.CreateTextForm({
    key: "emergency_phone",
    required: false,
    placeholder: "紧急联系人电话",
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emergencyPhoneForm);
  doc.Push(paragraph);

  // 其他信息
  paragraph = Api.CreateParagraph();
  paragraph.AddText("其他信息");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // T恤尺码
  paragraph = Api.CreateParagraph();
  paragraph.AddText("T恤尺码：");
  paragraph.SetFontSize(12 * 2);
  let tshirtForm = Api.CreateComboBoxForm({
    key: "t_shirt_size",
    required: false,
    placeholder: "请选择尺码",
    editable: false,
    autoFit: true,
    items: ["XS", "S", "M", "L", "XL", "XXL"]
  });
  paragraph.AddElement(tshirtForm);
  doc.Push(paragraph);

  // 饮食限制
  paragraph = Api.CreateParagraph();
  paragraph.AddText("饮食限制：");
  paragraph.SetFontSize(12 * 2);
  let dietForm = Api.CreateTextForm({
    key: "dietary_restrictions",
    required: false,
    placeholder: "任何饮食限制",
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(dietForm);
  doc.Push(paragraph);
}

// 使用用户默认值填充表单的函数
function populateFormWithDefaults(userData, preferences) {
  let populatedCount = 0;
  let allData = { ...userData, ...preferences };

  for (let [key, value] of Object.entries(allData)) {
    let forms = doc.GetFormsByKey(key);

    if (forms.length > 0) {
      let form = forms[0];
      let formType = form.GetFormType();

      if (formType === "textForm") {
        if (value !== null && value !== undefined) {
          form.SetText(String(value));
          populatedCount++;
        }
      } else if (formType === "checkBoxForm") {
        form.SetChecked(Boolean(value));
        populatedCount++;
      } else if (formType === "comboBoxForm") {
        if (value !== null && value !== undefined) {
          form.SetText(String(value));
          populatedCount++;
        }
      }
    }
  }

  return populatedCount;
}

// 获取用户数据摘要的函数
function getUserDataSummary(userData) {
  return {
    totalFields: Object.keys(userData).length,
    textFields: Object.values(userData).filter(v => typeof v === 'string').length,
    booleanFields: Object.values(userData).filter(v => typeof v === 'boolean').length,
    dateFields: Object.keys(userData).filter(k => k.includes('date')).length,
    contactFields: Object.keys(userData).filter(k => k.includes('phone') || k.includes('email')).length
  };
}

// 创建员工资料表单
createEmployeeProfileForm();

// 添加间距
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// 添加自动填充演示
paragraph = Api.CreateParagraph();
paragraph.AddText("默认值填充演示");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 第一步：用户身份验证数据
paragraph = Api.CreateParagraph();
paragraph.AddText("第一步：用户身份验证数据");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let userSummary = getUserDataSummary(authenticatedUser);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 用户：${authenticatedUser.full_name}（${authenticatedUser.employee_id}）`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 部门：${authenticatedUser.department}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 可用数据字段：${userSummary.totalFields}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 第二步：表单填充
paragraph = Api.CreateParagraph();
paragraph.AddText("第二步：自动表单填充");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let populatedCount = populateFormWithDefaults(authenticatedUser, userPreferences);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 已用默认值填充 ${populatedCount} 个表单字段`);
paragraph.SetFontSize(12 * 2);
paragraph.SetColor(0, 128, 0);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 文本字段已填入用户资料数据");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 下拉选项已设置为当前值");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 复选框已根据用户偏好设置");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 第三步：用户灵活性
paragraph = Api.CreateParagraph();
paragraph.AddText("第三步：用户修改灵活性");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 所有字段仍可供用户修改");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 预填值作为起始点");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 减少手动输入同时保持灵活性");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 添加示例数据展示
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("已应用的示例默认值：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let sampleFields = [
  ["full_name", authenticatedUser.full_name, "文本字段"],
  ["email", authenticatedUser.email, "文本字段"],
  ["department", authenticatedUser.department, "下拉列表"],
  ["has_company_car", authenticatedUser.has_company_car ? "是" : "否", "复选框"],
  ["work_from_home", userPreferences.work_from_home ? "是" : "否", "复选框"]
];

for (let [field, value, type] of sampleFields) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`• ${field}："${value}"（${type}）`);
  paragraph.SetFontSize(10 * 2);
  doc.Push(paragraph);
}

// 添加实施指南
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("实施指南：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("1. 用户数据获取");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 从身份验证系统获取用户数据");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 包含个人资料、偏好设置和系统设置");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 验证数据的完整性和准确性");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. 表单字段填充");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 使用 GetFormsByKey() 定位特定字段");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 对文本和下拉字段使用 SetText()");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 对复选框字段使用 SetChecked()");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. 保持灵活性");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 保持所有字段可供用户修改");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 明确标识预填数据");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 处理默认数据可能过时的情况");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// 添加优势部分
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("优势：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 显著减少表单填写时间");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 改善个人仪表板的用户体验");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 减少数据输入错误");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 提高表单完成率");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 提升用户对内部系统的满意度");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);
```
