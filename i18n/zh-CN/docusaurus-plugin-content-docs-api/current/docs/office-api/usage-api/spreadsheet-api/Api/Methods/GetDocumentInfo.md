# GetDocumentInfo

返回文档信息：
-**Application** - 创建文档的应用程序。
-**CreatedRaw** - 文件创建的日期和时间。
-**Created** - 解析后的文件创建日期和时间。
-**LastModifiedRaw** - 文件最后修改的日期和时间。
-**LastModified** - 解析后的文件最后修改日期和时间。
-**LastModifiedBy** - 对文档进行最新更改的用户名称。
-**Authors** - 创建文件的人员。
-**Title** - 此属性可简化文档分类。
-**Tags** - 此属性可简化文档分类。
-**Subject** - 此属性可简化文档分类。
-**Comment** - 此属性可简化文档分类。

## 语法

```javascript
expression.GetDocumentInfo();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

object

## 示例

此示例演示如何获取表示为对象的文档信息并将应用程序名称粘贴到「A1」单元格。

```javascript editor-xlsx
// How to get document info and iys application name.

// Get application name using document info.

let docInfo = Api.GetDocumentInfo();
let range = Api.GetActiveSheet().GetRange('A1');
range.SetValue('This document has been created with: ' + docInfo.Application);
```
