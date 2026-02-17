# IsTypedArray（是否类型化数组）

如果 `CDocBuilderValue` 对象是类型化数组，则返回 true。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.IsTypedArray` 方法。

## 语法

```cs
bool IsTypedArray();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bTypedArray = oGlobal.IsTypedArray();
CDocBuilder.Destroy();
```