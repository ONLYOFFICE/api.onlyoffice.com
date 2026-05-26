# SetGroupValue

选择组中具有指定选项名称的单选按钮。

## 语法

```javascript
expression.SetGroupValue(value);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string |  | 要选择的单选按钮的选项名称。 |

## 返回值

boolean

## 示例

```javascript editor-docx
// The SetGroupValue method changes which radio button is selected across all buttons in the same group.

// Create two radio buttons in the same group, then select one using SetGroupValue.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let radio1 = Api.CreateCheckBoxForm({"tip": "Select your gender", "required": true, "placeholder": "Gender", "radio": true});
radio1.SetRadioGroup("Gender");
radio1.SetChoiceName("Male");
paragraph.AddElement(radio1);
paragraph.AddText(" Male");
paragraph.AddLineBreak();
let radio2 = Api.CreateCheckBoxForm({"tip": "Select your gender", "required": true, "placeholder": "Gender", "radio": true});
radio2.SetRadioGroup("Gender");
radio2.SetChoiceName("Female");
paragraph.AddElement(radio2);
paragraph.AddText(" Female");
radio1.SetGroupValue("Female");
```
