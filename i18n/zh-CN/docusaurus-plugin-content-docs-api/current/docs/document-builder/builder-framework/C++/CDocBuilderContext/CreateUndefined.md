# CreateUndefined

创建一个未定义值，类似于 JavaScript 中的 `undefined`。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderContext.CreateUndefined` 方法。

## 语法

```cpp
CDocBuilderValue CreateUndefined();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oUndefined = oContext.CreateUndefined();
CDocBuilder::Dispose();
```