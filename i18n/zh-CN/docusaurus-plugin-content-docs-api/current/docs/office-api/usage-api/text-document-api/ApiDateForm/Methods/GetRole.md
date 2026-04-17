# GetRole

返回当前表单的角色。

Inherited from [ApiFormBase.GetRole](../../ApiFormBase/Methods/GetRole.md).

## 示例

此示例展示如何获取表单元素的角色。

```javascript editor-docx
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

