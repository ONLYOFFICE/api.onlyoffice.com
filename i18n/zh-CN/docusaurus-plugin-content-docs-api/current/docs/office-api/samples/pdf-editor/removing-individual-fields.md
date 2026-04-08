---
hide_table_of_contents: true
---

# 删除单个字段

通过ID或索引从表单中删除不必要的字段，用于简化界面、隐藏内部字段或根据用户角色动态自定义表单：

- 创建具有角色特定字段的表单（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)、[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md)）；
- 实现字段删除功能（[ApiDocument/GetFormsByKey](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetFormsByKey.md)、[ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md)）；
- 根据用户权限自定义表单（[ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 模拟用户身份验证和角色确定
let currentUser = {
  username: "john.employee",
  role: "employee",  // 可以是 "admin" 或 "employee"
  department: "Sales"
};

// 创建综合员工评估表单
function createEmployeeEvaluationForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("员工绩效评估");
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // 基本信息部分
  paragraph = Api.CreateParagraph();
  paragraph.AddText("基本信息");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // 员工姓名
  paragraph = Api.CreateParagraph();
  paragraph.AddText("员工姓名：");
  paragraph.SetFontSize(12 * 2);
  let nameForm = Api.CreateTextForm({
    key: "employee_name",
    required: true,
    placeholder: "请输入员工姓名",
    maxCharacters: 50,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(nameForm);
  doc.Push(paragraph);

  // 部门
  paragraph = Api.CreateParagraph();
  paragraph.AddText("部门：");
  paragraph.SetFontSize(12 * 2);
  let deptForm = Api.CreateComboBoxForm({
    key: "department",
    required: true,
    placeholder: "请选择部门",
    editable: false,
    autoFit: true,
    items: ["销售", "市场", "IT", "人力资源", "财务"]
  });
  paragraph.AddElement(deptForm);
  doc.Push(paragraph);

  // 绩效评级
  paragraph = Api.CreateParagraph();
  paragraph.AddText("综合绩效：");
  paragraph.SetFontSize(12 * 2);
  let ratingForm = Api.CreateComboBoxForm({
    key: "performance_rating",
    required: true,
    placeholder: "请选择评级",
    editable: false,
    autoFit: true,
    items: ["优秀", "良好", "合格", "需改进"]
  });
  paragraph.AddElement(ratingForm);
  doc.Push(paragraph);

  // 公开评语（所有人可见）
  paragraph = Api.CreateParagraph();
  paragraph.AddText("公开评语：");
  paragraph.SetFontSize(12 * 2);
  let publicCommentsForm = Api.CreateTextForm({
    key: "public_comments",
    required: false,
    placeholder: "输入员工可见的反馈",
    maxCharacters: 200,
    multiLine: true,
    autoFit: true,
  });
  paragraph.AddElement(publicCommentsForm);
  doc.Push(paragraph);

  // 内部备注（仅管理员可见）
  paragraph = Api.CreateParagraph();
  paragraph.AddText("内部备注（仅管理员）：");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  let internalNotesForm = Api.CreateTextForm({
    key: "internal_notes",
    required: false,
    placeholder: "仅供管理层查看的机密备注",
    maxCharacters: 300,
    multiLine: true,
    autoFit: true,
  });
  paragraph.AddElement(internalNotesForm);
  doc.Push(paragraph);

  // 薪资调整（仅管理员可见）
  paragraph = Api.CreateParagraph();
  paragraph.AddText("薪资调整：");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  let salaryForm = Api.CreateTextForm({
    key: "salary_adjustment",
    required: false,
    placeholder: "输入调整金额",
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(salaryForm);
  doc.Push(paragraph);

  // 解雇风险（仅管理员可见）
  paragraph = Api.CreateParagraph();
  let terminationCheckbox = Api.CreateCheckBoxForm({
    key: "termination_risk",
    required: false,
    tip: "员工存在解雇风险",
    checked: false
  });
  paragraph.AddElement(terminationCheckbox);
  paragraph.AddText(" 存在解雇风险（仅管理员）");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  doc.Push(paragraph);

  // 晋升候选人（仅管理员可见）
  paragraph = Api.CreateParagraph();
  let promotionCheckbox = Api.CreateCheckBoxForm({
    key: "promotion_candidate",
    required: false,
    tip: "晋升候选人",
    checked: false
  });
  paragraph.AddElement(promotionCheckbox);
  paragraph.AddText(" 晋升候选人（仅管理员）");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  doc.Push(paragraph);
}

// 根据用户角色删除字段的函数
function removeFieldsByUserRole(userRole) {
  let removedFields = [];

  // 定义应为非管理员用户删除的仅管理员字段
  let adminOnlyFields = [
    "internal_notes",
    "salary_adjustment",
    "termination_risk",
    "promotion_candidate"
  ];

  // 如果用户不是管理员，删除仅管理员字段
  if (userRole !== "admin") {
    for (let fieldKey of adminOnlyFields) {
      let removed = removeFieldByKey(fieldKey);
      if (removed) {
        removedFields.push(fieldKey);
      }
    }
  }

  return removedFields;
}

// 通过键删除特定字段的函数
function removeFieldByKey(fieldKey) {
  let forms = doc.GetFormsByKey(fieldKey);

  if (forms.length > 0) {
    let form = forms[0];
    let formType = form.GetFormType();

    // 根据表单类型标记字段已删除
    if (formType === "textForm") {
      // 对于文本表单，设置删除消息
      form.SetText("[字段已删除 - 权限不足]");
    } else if (formType === "checkBoxForm") {
      // 对于复选框，取消勾选以表示删除
      form.SetChecked(false);
    } else if (formType === "comboBoxForm") {
      // 对于组合框，设置删除消息
      form.SetText("[已删除 - 无权限]");
    }

    // 对表单的文本属性应用删除线格式
    try {
      let textPr = form.GetTextPr();
      if (textPr) {
        textPr.SetStrikeout(true);
      }
    } catch (e) {
      // 如果GetTextPr不可用，继续但不使用删除线
      console.log("此表单类型不支持删除线格式");
    }

    return true;
  }

  return false;
}

// 检查字段是否存在于表单中的函数
function checkFieldExists(fieldKey) {
  let forms = doc.GetFormsByKey(fieldKey);
  return forms.length > 0;
}

// 获取用户角色的函数（模拟身份验证）
function getUserRole(username) {
  // 根据用户名模拟角色确定
  let userRoles = {
    "admin.manager": "admin",
    "john.employee": "employee",
    "jane.supervisor": "employee",
    "mike.admin": "admin"
  };

  return userRoles[username] || "employee";
}

// 创建评估表单
createEmployeeEvaluationForm();

// 添加间距
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// 添加基于角色的字段删除演示
paragraph = Api.CreateParagraph();
paragraph.AddText("基于角色的字段管理");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 步骤1：确定用户角色
paragraph = Api.CreateParagraph();
paragraph.AddText("步骤1：用户角色确定");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let userRole = getUserRole(currentUser.username);
currentUser.role = userRole;

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 用户：${currentUser.username}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 角色：${currentUser.role}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 部门：${currentUser.department}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 步骤2：检查字段是否存在
paragraph = Api.CreateParagraph();
paragraph.AddText("步骤2：字段存在性检查");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let internalNotesExists = checkFieldExists("internal_notes");
paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 内部备注字段存在：${internalNotesExists ? "是" : "否"}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 步骤3：根据角色删除字段
paragraph = Api.CreateParagraph();
paragraph.AddText("步骤3：动态字段删除");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let removedFields = removeFieldsByUserRole(currentUser.role);

if (removedFields.length > 0) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`✓ 已删除 ${removedFields.length} 个仅管理员字段：`);
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(255, 0, 0);
  doc.Push(paragraph);

  for (let fieldKey of removedFields) {
    paragraph = Api.CreateParagraph();
    paragraph.AddText(`  • ${fieldKey}`);
    paragraph.SetFontSize(10 * 2);
    doc.Push(paragraph);
  }
} else {
  paragraph = Api.CreateParagraph();
  paragraph.AddText("✓ 未删除任何字段 - 用户具有管理员权限");
  paragraph.SetFontSize(12 * 2);
  paragraph.SetColor(0, 128, 0);
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
paragraph.AddText("1. 用户角色确定");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 验证用户身份并确定角色（管理员/员工）");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 检查用户对敏感字段的权限");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. 字段存在性检查");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 使用 GetFormsByKey() 通过ID查找字段");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 在尝试删除之前验证字段是否存在");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. 动态字段删除");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 根据用户角色删除或隐藏字段");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 维护表单结构和验证");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 提供适当的用户反馈");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// 添加用例
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("常见用例：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 对非管理员用户隐藏敏感字段");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 根据用户经验级别简化表单");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 为其他部门删除特定部门的字段");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 根据先前选择动态自定义表单");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);
```
