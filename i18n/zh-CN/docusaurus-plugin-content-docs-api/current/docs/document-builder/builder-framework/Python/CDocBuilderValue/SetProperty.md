# SetProperty（设置属性）

为 `CDocBuilderValue` 对象设置一个属性。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.SetProperty` 方法。

## 语法

```py
def SetProperty(self, str name, CDocBuilderValue value);
```

## 参数

| 参数   | 类型                                                         | 描述                                        |
| ------ | ------------------------------------------------------------ | ------------------------------------------- |
| name   | str                                                          | `CDocBuilderValue` 对象属性的名称。         |
| value  | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) | `CDocBuilderValue` 对象属性的值。           |

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.Call("GetDocument")
document.SetProperty("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"})
```

还有另外两种为 `CDocBuilderValue` 对象设置属性的方法：

1. 使用 `Set` 方法，该方法接收对象属性名称和值作为参数：

   ```py
   def Set(self, name, value);
   ```

   ### 示例

   ### Python

   ```py
   builder = docbuilder.CDocBuilder()
   context = builder.GetContext()
   globalObj = context.GetGlobal()
   api = globalObj["Api"]
   document = api.Call("GetDocument")
   document.Set("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"})
   ```

2. 使用 `default[]` 后缀表达式：

   ```py
   property CDocBuilderValue default[str]
   ```

   ### 示例

   ### Python

   ```py
   builder = docbuilder.CDocBuilder()
   context = builder.GetContext()
   globalObj = context.GetGlobal()
   api = globalObj["Api"]
   document = api.Call("GetDocument")
   document["color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"}]
   ```