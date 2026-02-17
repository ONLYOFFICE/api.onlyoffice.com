# CreateUndefined

创建一个未定义的值，类似于 JavaScript 中的 `undefined`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateUndefined` 方法。

## 语法

```cs
CDocBuilderValue^ CreateUndefined(String^ sFolder);
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oUndefined = oContext.CreateUndefined();
CDocBuilder.Destroy();
```