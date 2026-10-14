# SetPathList

设置墨迹路径列表。

## 语法

```javascript
expression.SetPathList(inkPaths);
```

`expression` - 表示 [ApiInkAnnotation](../ApiInkAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| inkPaths | 必需 | [PathList](../../Enumeration/PathList.md) |  | 墨迹路径列表 |

## 返回值

boolean

## 示例

设置 PDF 中墨迹注释的路径列表。

```javascript editor-pdf
// Useful for changing the lines that make up an ink drawing in a PDF.

// Replace the path coordinates for an ink annotation in a PDF.

let doc = Api.GetDocument();
let inkPaths = [[{x: 328.002, y: 222.017}, {x: 328.648, y: 222.017}, {x: 329.294, y: 222.017}]];
let inkAnnot = Api.CreateInkAnnot([10, 10, 160, 32], inkPaths);
inkAnnot.SetBorderColor(Api.RGB(255, 0, 0));
inkAnnot.SetPathList([[{x: 10, y: 10}, {x: 50, y: 50}]]);
let page = doc.GetPage(0);
page.AddObject(inkAnnot);
console.log("We set path list to ink annot");
```
