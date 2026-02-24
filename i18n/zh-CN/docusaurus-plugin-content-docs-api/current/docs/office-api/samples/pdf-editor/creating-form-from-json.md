---
hide_table_of_contents: true
---

# 从JSON创建表单

根据数据上下文和值自动确定字段类型和结构，从简单的JSON对象自动创建表单：

- 分析JSON数据并确定适当的字段类型（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)、[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md)）；
- 通过智能类型检测生成表单字段（[ApiDocument/Push](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md)、[ApiParagraph/AddElement](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md)）；
- 从JSON结构创建标签和初始值（[Api/CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md)、[ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 来自不同来源的示例JSON数据
let employeeData = {
  "name": "张明",
  "email": "zhang.ming@company.com",
  "phone": "+86-138-0000-1234",
  "start_date": "2024-09-01",
  "department": "Engineering",
  "salary": 75000,
  "is_manager": false,
  "subscribe_newsletter": true,
  "emergency_contact": "张伟",
  "notes": "具有React专业知识的资深软件开发工程师",
  "years_experience": 5,
  "remote_work": true
};

let projectData = {
  "project_name": "移动应用重新设计",
  "description": "移动应用用户界面的全面重新设计",
  "start_date": "2024-10-15",
  "end_date": "2025-03-30",
  "budget": 150000,
  "priority": "High",
  "is_confidential": true,
  "team_size": 8,
  "client_email": "client@example.com",
  "requires_approval": false
};

// 分析值并确定字段类型的函数
function determineFieldType(key, value) {
  // 首先按值类型检查
  if (typeof value === 'boolean') {
    return 'checkbox';
  }

  if (typeof value === 'number') {
    return 'number';
  }

  if (typeof value === 'string') {
    // 检查键模式以获取更具体的类型
    let lowerKey = key.toLowerCase();

    if (lowerKey.includes('email')) {
      return 'email';
    }

    if (lowerKey.includes('phone') || lowerKey.includes('tel')) {
      return 'phone';
    }

    if (lowerKey.includes('date')) {
      return 'date';
    }

    if (lowerKey.includes('password')) {
      return 'password';
    }

    if (lowerKey.includes('url') || lowerKey.includes('website')) {
      return 'url';
    }

    if (lowerKey.includes('description') || lowerKey.includes('notes') || lowerKey.includes('comment')) {
      return 'textarea';
    }

    // 根据键检查预定义选项
    if (lowerKey.includes('priority')) {
      return 'select';
    }

    if (lowerKey.includes('department')) {
      return 'select';
    }

    // 检查字符串长度以确定文本区域或文本
    if (value.length > 100) {
      return 'textarea';
    }

    return 'text';
  }

  return 'text'; // 默认回退
}

// 从键生成人类可读标签的函数
function generateLabel(key) {
  return key
    .replace(/_/g, ' ')           // 将下划线替换为空格
    .replace(/([A-Z])/g, ' $1')   // 在大写字母前添加空格
    .replace(/\b\w/g, l => l.toUpperCase()) // 将每个单词的首字母大写
    .trim();
}

// 根据字段类型和键获取占位符文本的函数
function generatePlaceholder(key, fieldType) {
  let lowerKey = key.toLowerCase();

  switch (fieldType) {
    case 'email':
      return '请输入电子邮件地址';
    case 'phone':
      return '请输入电话号码';
    case 'date':
      return 'YYYY-MM-DD';
    case 'number':
      if (lowerKey.includes('salary') || lowerKey.includes('budget')) {
        return '请输入金额';
      }
      if (lowerKey.includes('year')) {
        return '请输入年份';
      }
      return '请输入数字';
    case 'textarea':
      return '请输入详细信息...';
    case 'url':
      return 'https://example.com';
    case 'password':
      return '请输入密码';
    default:
      return `请输入${generateLabel(key).toLowerCase()}`;
  }
}

// 根据键获取选择选项的函数
function getSelectOptions(key) {
  let lowerKey = key.toLowerCase();

  if (lowerKey.includes('priority')) {
    return ['低', '中', '高', '紧急'];
  }

  if (lowerKey.includes('department')) {
    return ['工程部', '市场部', '销售部', '人力资源部', '财务部', '运营部'];
  }

  if (lowerKey.includes('status')) {
    return ['活跃', '非活跃', '待处理', '已完成'];
  }

  return [];
}

// 根据类型创建表单字段的函数
function createFormField(key, value, fieldType) {
  let label = generateLabel(key);
  let placeholder = generatePlaceholder(key, fieldType);

  switch (fieldType) {
    case 'checkbox':
      return Api.CreateCheckBoxForm({
        key: key,
        required: false,
        tip: `切换${label.toLowerCase()}`,
        checked: Boolean(value)
      });

    case 'select':
      let options = getSelectOptions(key);
      return Api.CreateComboBoxForm({
        key: key,
        required: false,
        placeholder: placeholder,
        editable: false,
        autoFit: true,
        items: options
      });

    case 'textarea':
      return Api.CreateTextForm({
        key: key,
        required: false,
        placeholder: placeholder,
        maxCharacters: 500,
        multiLine: true,
        autoFit: true
      });

    case 'number':
      return Api.CreateTextForm({
        key: key,
        required: false,
        placeholder: placeholder,
        maxCharacters: 20,
        multiLine: false,
        autoFit: true
      });

    default: // text, email, phone, date, url, password
      return Api.CreateTextForm({
        key: key,
        required: false,
        placeholder: placeholder,
        maxCharacters: fieldType === 'email' ? 80 : 100,
        multiLine: false,
        autoFit: true
      });
  }
}

// 从JSON数据生成表单的函数
function generateFormFromJSON(jsonData, formTitle) {
  // 创建表单标题
  let paragraph = doc.GetElement(0);
  paragraph.AddText(formTitle);
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // 添加表单生成信息
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`从JSON自动生成（${Object.keys(jsonData).length}个字段）`);
  paragraph.SetFontSize(12 * 2);
  paragraph.SetJc("center");
  paragraph.SetColor(128, 128, 128);
  doc.Push(paragraph);

  // 添加间距
  paragraph = Api.CreateParagraph();
  paragraph.AddText("");
  doc.Push(paragraph);

  let fieldCount = 0;
  let fieldTypes = {};

  // 处理每个键值对
  for (let [key, value] of Object.entries(jsonData)) {
    let fieldType = determineFieldType(key, value);
    let label = generateLabel(key);

    fieldTypes[key] = fieldType;
    fieldCount++;

    // 创建标签段落
    paragraph = Api.CreateParagraph();

    if (fieldType === 'checkbox') {
      // 对于复选框，先创建复选框，然后添加标签文本
      let checkboxForm = createFormField(key, value, fieldType);
      paragraph.AddElement(checkboxForm);
      paragraph.AddText(` ${label}`);
    } else {
      // 对于其他字段，先添加标签文本，然后添加表单字段
      paragraph.AddText(`${label}: `);
      let formField = createFormField(key, value, fieldType);
      paragraph.AddElement(formField);
    }

    paragraph.SetFontSize(12 * 2);
    doc.Push(paragraph);

    // 如果不是复选框，则设置初始值
    if (fieldType !== 'checkbox' && value !== null && value !== undefined) {
      let forms = doc.GetFormsByKey(key);
      if (forms.length > 0) {
        let form = forms[0];
        if (fieldType === 'select') {
          // 对于选择字段，如果值存在于选项中则设置该值
          let options = getSelectOptions(key);
          if (options.includes(String(value))) {
            form.SetText(String(value));
          }
        } else {
          form.SetText(String(value));
        }
      }
    }
  }

  return { fieldCount, fieldTypes };
}

// 从员工数据生成表单
let employeeResult = generateFormFromJSON(employeeData, "员工信息表");

// 添加间距和分析部分
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("表单生成分析");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 步骤1：数据分析
paragraph = Api.CreateParagraph();
paragraph.AddText("步骤1：JSON数据分析");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 从JSON处理了${employeeResult.fieldCount}个字段`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 分析了数据类型和键模式");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 步骤2：字段类型检测
paragraph = Api.CreateParagraph();
paragraph.AddText("步骤2：自动字段类型检测");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let typeCount = {};
for (let fieldType of Object.values(employeeResult.fieldTypes)) {
  typeCount[fieldType] = (typeCount[fieldType] || 0) + 1;
}

for (let [type, count] of Object.entries(typeCount)) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`• ${type}：${count}个字段`);
  paragraph.SetFontSize(10 * 2);
  doc.Push(paragraph);
}

// 步骤3：表单生成
paragraph = Api.CreateParagraph();
paragraph.AddText("步骤3：动态表单创建");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 从JSON键生成标签");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 从JSON数据应用初始值");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("✓ 为每种字段类型创建适当的占位符");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 添加第二个示例：项目数据
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("第二个示例：项目数据");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let projectResult = generateFormFromJSON(projectData, "项目信息表");

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
paragraph.AddText("1. 数据接收");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 从用户输入、API或数据库接收JSON");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 验证JSON结构和数据类型");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. 分析和解释");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 分析值类型（字符串、布尔值、数字）");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 使用键模式进行智能字段类型检测");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 考虑上下文和业务逻辑");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. 表单生成");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 根据检测到的类型创建适当的表单字段");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 从键生成人类可读的标签");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 设置初始值和适当的占位符");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// 添加字段类型检测规则
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("字段类型检测规则：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let detectionRules = [
  "布尔值 → 复选框字段",
  "数字值 → 数字输入字段",
  "包含'email'的键 → 电子邮件字段",
  "包含'phone'的键 → 电话字段",
  "包含'date'的键 → 日期字段",
  "包含'description/notes'的键 → 文本区域字段",
  "包含'priority/department'的键 → 选择字段",
  "长字符串（>100字符） → 文本区域字段",
  "默认 → 文本输入字段"
];

for (let rule of detectionRules) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText(`• ${rule}`);
  paragraph.SetFontSize(10 * 2);
  doc.Push(paragraph);
}

// 添加优势
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("优势：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 从现有数据快速创建表单原型");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 自动字段类型检测减少手动工作");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 跨应用程序一致的表单生成");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 易于与API和数据库集成");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);
```
