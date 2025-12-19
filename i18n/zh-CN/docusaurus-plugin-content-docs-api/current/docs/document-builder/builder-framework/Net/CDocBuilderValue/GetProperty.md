# GetProperty（获取属性）

返回 `CDocBuilderValue` 对象的属性。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.GetProperty` 方法。

## 语法

```cs
CDocBuilderValue^ GetProperty(String^ sName);
```

## 参数

| 参数   | 类型     | 描述                                 |
| ------ | -------- | ------------------------------------ |
| sName  | String^  | `CDocBuilderValue` 对象的属性名称。 |

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
CValue oDocPr = oDocument.GetProperty("color");
CDocBuilder.Destroy();
```

获取 `CDocBuilderValue` 对象的属性还有另外两种方式：

1. 使用接受字符串格式参数的 `Get` 方法：

   ```cs
   CDocBuilderValue^ Get(String^ name);
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
   CValue oDocPr = oDocument.Get("color");
   CDocBuilder.Destroy();
   ```

2. 使用接受字符串格式参数的 `default[]` 后缀表达式：

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
   CValue oDocPr = oDocument["color"];
   CDocBuilder.Destroy();
   ```