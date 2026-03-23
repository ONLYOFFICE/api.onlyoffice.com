# FormData

表单数据。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| format | string | 日期格式字符串（例如 **MM/DD/YYYY**）。仅适用于日期选择器字段。 |
| key | string | 表单键。如果当前表单是单选按钮，则此字段包含组键。 |
| label | string | 复选框标签。仅适用于复选框字段。 |
| lang | string | 日期语言/区域设置名称（例如 **en-US**）。仅适用于日期选择器字段。 |
| options | &#123;value: string, label: string&#125;[] \| boolean[] | 字段的可用选项列表。适用于复选框、单选按钮组、下拉列表和组合框。对于**复选框**为 **[true, false]**。对于**单选按钮**、**下拉列表**和**组合框**，每个条目包含一个 **value**（存储值）和一个 **label**（显示文本）。 |
| role | string | 表单角色。 |
| roleColor | string | 十六进制格式的表单角色颜色。 |
| tag | string | 表单标记。 |
| type | [FormSpecificType](../Enumeration/FormSpecificType.md) | 表单类型。 |
| value | string \| boolean | 当前字段值。 |


## 示例

Specify the form data that can be used to create the form.

```javascript editor-docx
// How to create a form data indicating its key and value.

// Create a data to add it to the form.

let formData = {
	key: "CompanyName",
	value: "OnlyOffice",
	type: "text"
};

```
