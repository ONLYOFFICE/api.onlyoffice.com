# Close (关闭)

关闭当前作用域。此方法将在析构函数执行时自动调用。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContextScope.Close` 方法。

## 语法

```cpp
void Close();
```

## 示例

### C++

```cpp
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CContextScope oScope = oContext.CreateScope();
oScope.Close();
CDocBuilder.Destroy();
```