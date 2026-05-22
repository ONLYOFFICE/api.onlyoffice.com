# SetRole

为当前表单设置角色。

继承自 [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md)。

## 示例

为文档中的表单字段分配角色以控制填写者。

```javascript editor-forms
// How do I associate a form field with a specific role in a document?

// Restrict which signers or participants are responsible for a given field.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const roles = doc.GetFormRoles();
const rolePr = { "color": "#ffefbf" };
roles.Add("MY_ROLE", rolePr);

const textForm = Api.CreateTextForm({
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
});
paragraph.AddElement(textForm);

textForm.SetRole("MY_ROLE");
const role = textForm.GetRole();

paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
