# SearchAndReplace

在演示文稿中查找并替换文本。

## 语法

```javascript
expression.SearchAndReplace(properties);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| properties | 必需 | Object |  | 查找和替换的属性。 |
| properties.searchString | 必需 | string |  | 搜索字符串。 |
| properties.replaceString | 必需 | string |  | 替换字符串。 |
| properties.matchCase | 可选 | boolean | false | 是否区分大小写。 |
| properties.wholeWords | 可选 | boolean | false | 是否仅搜索全字匹配。 |

## 返回值

boolean

## 示例

在整个演示文稿中替换某个单词，同时保留源形状的未修改副本以供比较。

```javascript editor-pptx
// The copy is duplicated before the replacement and added to the slide afterwards, so it keeps the original text.

// Add a shape, copy it aside, replace "first" with "final", then place the untouched copy above the replaced result.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const shape = Api.CreateShape("rect", 8000000, 900000);
shape.SetPosition(600000, 3200000);
slide.AddObject(shape);
shape.GetTextRange().SetText("The first draft. The first review. The first release.");

const original = shape.Copy();

presentation.SearchAndReplace({"searchString": "first", "replaceString": "final"});

original.SetPosition(600000, 1000000);
slide.AddObject(original);
```
