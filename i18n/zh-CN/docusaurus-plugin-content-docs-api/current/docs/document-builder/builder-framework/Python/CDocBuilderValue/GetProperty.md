# GetProperty（获取属性）

返回`CDocBuilderValue`对象的属性。

> 请注意，在`.docbuilder`文件中，不使用`CDocBuilderValue.GetProperty`方法。

## 语法

```py
def GetProperty(self, str name);
```

## 参数

| 参数   | 类型 | 描述                                       |
| ------ | ---- | ------------------------------------------ |
| name   | str  | `CDocBuilderValue`对象的属性名称。         |

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.GetDocument()
docPr = document.GetProperty("color")
```

获取`CDocBuilderValue`对象的属性还有另外两种方式：

1. 使用接受字符串格式参数的`Get`方法：

   ```py
   def Get(self, name);
   ```

   ## 示例

   ### Python

   ```py
   builder = docbuilder.CDocBuilder()
   context = builder.GetContext()
   globalObj = context.GetGlobal()
   api = globalObj["Api"]
   document = api.GetDocument()
   docPr = document.Get("color")
   ```

2. 使用接受字符串格式参数的`default[]`后缀表达式：

   ```py
   property CDocBuilderValue default[str]
   ```

   ## 示例

   ### Python

   ```py
   builder = docbuilder.CDocBuilder()
   context = builder.GetContext()
   globalObj = context.GetGlobal()
   api = globalObj["Api"]
   document = api.GetDocument()
   docPr = document["color"]
   ```