# Add

使用自动类型检测向文档添加自定义属性。

## 语法

```javascript
expression.Add(name, value);
```

`expression` - 表示 [ApiCustomProperties](../ApiCustomProperties.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 自定义属性名称。 |
| value | 必需 | string \| number \| boolean \| Date |  | 自定义属性值。 |

## 返回值

boolean

## 示例

此示例演示如何向文档添加字符串自定义属性。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();

customProps.Add("CompanyName", "ONLYOFFICE");
const companyName = customProps.Get("CompanyName");

customProps.Add("trueBool", true);
const trueBool = customProps.Get("trueBool");

customProps.Add("NumberInt", 3.0);
customProps.Add("NumberReal", 3.14);
const numberInt = customProps.Get("NumberInt");
const numberReal = customProps.Get("NumberReal");

customProps.Add("BirthDate", new Date("20 January 2000"));
const birthDate = new Date(customProps.Get("BirthDate"));
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

const fill = Api.CreateSolidFill(Api.RGB(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Company Name: " + companyName + " (" + typeof companyName + ")");
paragraph.AddLineBreak();

paragraph.AddText("\nTrue Boolean: " + trueBool + " (" + typeof trueBool + ")");
paragraph.AddLineBreak();

paragraph.AddText("\nNumber Int: " + numberInt + " (" + typeof numberInt + ")");
paragraph.AddText("\nNumber Real: " + numberReal + " (" + typeof numberReal + ")");
paragraph.AddLineBreak();

paragraph.AddText("\nBirth Date: " + birthDate.toDateString() + " (" + typeof birthDate + ")");
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);

```
