# SetPropertyW

设置可以在 [CDocBuilder.ExecuteCommand](./ExecuteCommand.md) 方法之外传递给程序的 Unicode 格式参数，即作为运行 ONLYOFFICE Document Builder 可执行文件时的附加属性，或作为程序代码的一部分，但不包含在文档文件脚本中。

:::note
此方法仅适用于 C++。对于 `.docbuilder` 文件，不直接使用 `CDocBuilder.SetPropertyW` 方法。
:::

## 语法

```cpp
void SetPropertyW(const wchar_t* sParam, const wchar_t* sValue);
```

## 参数

| 名称   | 类型           | 描述                                                              |
| ------ | -------------- | ------------------------------------------------------------------------ |
| sParam | const wchar_t* | Unicode 格式的参数名称，值始终为 `--argument`。 |
| sValue | const wchar_t* | 将在文档中使用的 Unicode 格式参数值。 |

## 支持的属性

请参阅 [SetProperty](SetProperty.md#支持的属性) 以获取支持的属性列表。

## 示例

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
oBuilder.SetPropertyW(L"--argument", L"{\"name\":\"ONLYOFFICE\"}");
CDocBuilder::Dispose();
```
