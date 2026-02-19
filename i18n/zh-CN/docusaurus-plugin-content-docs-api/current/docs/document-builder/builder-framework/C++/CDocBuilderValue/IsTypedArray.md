# IsTypedArray

如果 `CDocBuilderValue` 对象是一个类型化数组，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsTypedArray` 方法。

## 语法

```cpp
bool IsTypedArray();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bTypedArray = oGlobal.IsTypedArray();
CDocBuilder::Dispose();
```