# SetVersion

设置文档版本。

## 语法

```javascript
expression.SetVersion(sVersion);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sVersion | 必需 | string |  | 文档版本。 |

## 返回值

此方法不返回任何数据。

## 示例

设置电子表格核心属性中存储的文档版本。

```javascript editor-xlsx
// How do I record a version number in the document metadata in a spreadsheet?

// Store a custom version label alongside the file's built-in properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetVersion("v9.0");
const version = core.GetVersion();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Version: " + version);
```
