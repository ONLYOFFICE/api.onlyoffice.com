# Close（关闭）

关闭当前作用域。此方法将在析构函数执行时自动调用。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContextScope.Close` 方法。

## 语法

```cs
void Close();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CContextScope oScope = oContext.CreateScope();
oScope.Close();
CDocBuilder.Destroy();
```