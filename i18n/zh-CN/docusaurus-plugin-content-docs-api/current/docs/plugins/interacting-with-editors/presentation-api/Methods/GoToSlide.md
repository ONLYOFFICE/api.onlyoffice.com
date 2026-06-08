# GoToSlide

通过索引在编辑器中设置活动幻灯片。

## 语法

```javascript
expression.GoToSlide(slideNumber);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| slideNumber | 必需 | number |  | 幻灯片索引。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
const addSlides = function () {
	const count = Asc.scope.count;
	const presentation = Api.GetPresentation();
	for (let i = 0; i < count; i += 1) {
		const slide = Api.CreateSlide();
		presentation.AddSlide(slide);
	}
};

Asc.scope.count = 1;
Asc.plugin.callCommand(addSlides);
Asc.plugin.executeMethod('GoToSlide', [2]);
```
