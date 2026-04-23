# ApiDocument

表示 ApiDocument 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [ClearAllFields](./Methods/ClearAllFields.md) | boolean | 清除文档中的所有表单。 |
| [GetAllForms](./Methods/GetAllForms.md) | [ApiForm](../Enumeration/ApiForm.md)[] | 返回文档中所有现有表单。 |
| [GetFormKeysByRole](./Methods/GetFormKeysByRole.md) | string[] | 返回附加到指定角色的所有表单键的列表。 |
| [GetFormRoles](./Methods/GetFormRoles.md) | [ApiFormRoles](../ApiFormRoles/ApiFormRoles.md) | 返回表单角色集合。 |
| [GetFormValueByKey](./Methods/GetFormValueByKey.md) | null \| boolean \| string | 返回指定键的表单值。对于一组单选按钮，返回 Choice，即所选项目的名称。 |
| [GetFormsByKey](./Methods/GetFormsByKey.md) | [ApiForm](../Enumeration/ApiForm.md)[] | 返回文档中具有指定键的所有表单的列表。 |
| [GetFormsByRole](./Methods/GetFormsByRole.md) | [ApiForm](../Enumeration/ApiForm.md)[] | 返回文档中具有指定角色名称的所有表单的列表。 |
| [GetFormsByTag](./Methods/GetFormsByTag.md) | [ApiForm](../Enumeration/ApiForm.md)[] | 返回文档中具有指定标签名称的所有表单的列表。 |
| [GetFormsData](./Methods/GetFormsData.md) | [FormData](../Enumeration/FormData.md)[] | 返回当前文档中所有表单的数据。如果表单已创建但未分配到文档的任何部分，则不会出现在此列表中。 |
| [GetTagsOfAllForms](./Methods/GetTagsOfAllForms.md) | String[] | 返回文档中所有表单使用的所有标签的列表。 |
| [InsertTextForm](./Methods/InsertTextForm.md) | [ApiTextForm](../ApiTextForm/ApiTextForm.md) | 在选定文本上方插入具有指定文本框属性的文本框。 |
| [SetFormsData](./Methods/SetFormsData.md) | boolean | 将数据设置到指定的表单。 |
| [SetFormsHighlight](./Methods/SetFormsHighlight.md) | boolean | 为文档中的表单设置突出显示。 |
