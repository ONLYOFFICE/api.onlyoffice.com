# CreateObject（创建对象）

创建一个空对象，类似于 JavaScript 中的 `{}`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateObject` 方法。

## 语法

```cs
CDocBuilderValue^ CreateObject();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oObject = oContext.CreateObject();
CDocBuilder.Destroy();
```