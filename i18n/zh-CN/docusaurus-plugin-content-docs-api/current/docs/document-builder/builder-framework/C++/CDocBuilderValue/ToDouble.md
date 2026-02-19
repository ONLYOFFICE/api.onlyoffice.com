# ToDouble（转换为双精度浮点数）

将 `CDocBuilderValue` 对象转换为双精度浮点数。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToDouble` 方法。

## 语法

```cpp
double ToDouble();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
double dGlobal = oGlobal.ToDouble();
CDocBuilder::Dispose();
```