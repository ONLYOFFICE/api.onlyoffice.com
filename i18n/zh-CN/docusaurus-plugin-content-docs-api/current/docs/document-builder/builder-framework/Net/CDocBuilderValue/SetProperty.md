# SetProperty（设置属性）

为 `CDocBuilderValue` 对象设置一个属性。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.SetProperty` 方法。

## 语法

```cs
void SetProperty(String^ sName, CDocBuilderValue^ sValue);
```

## 参数

| 参数     | 类型                                                         | 描述                                        |
| -------- | ------------------------------------------------------------ | ------------------------------------------- |
| sName    | String^                                                      | `CDocBuilderValue` 对象属性的名称。         |
| sValue   | [CDocBuilderValue^](../CDocBuilderValue/CDocBuilderValue.md) | `CDocBuilderValue` 对象属性的值。           |

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
oDocument.SetProperty("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
CDocBuilder.Destroy();
```

为 `CDocBuilderValue` 对象设置属性还有另外两种方法：

1. 使用 `Set` 方法，该方法接收对象属性名和值作为参数：

   ```cs
   void Set(String^ name, CDocBuilderValue^ value);
   ```

   ## 示例

   ### .Net

   ```cs
   string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
   CDocBuilder.Initialize(workDirectory);
   CDocBuilder oBuilder = new CDocBuilder();
   CContext oContext = oBuilder.GetContext();
   CValue oGlobal = oContext.GetGlobal();
   CValue oApi = oGlobal["Api"];
   CValue oDocument = oApi.Call("GetDocument");
   oDocument.Set("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
   CDocBuilder.Destroy();
   ```

2. 使用 `default[]` 后缀表达式：

   ```cs
   property CDocBuilderValue^ default[String^]
   ```

   ## 示例

   ### .Net

   ```cs
   string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
   CDocBuilder.Initialize(workDirectory);
   CDocBuilder oBuilder = new CDocBuilder();
   CContext oContext = oBuilder.GetContext();
   CValue oGlobal = oContext.GetGlobal();
   CValue oApi = oGlobal["Api"];
   CValue oDocument = oApi.Call("GetDocument");
   oDocument["color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"}];
   CDocBuilder.Destroy();
   ```