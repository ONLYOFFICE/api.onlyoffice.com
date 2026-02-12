# 文档信息

文档信息部分允许更改文档的其他参数（文档所有者、存储文档的文件夹、上传日期、共享设置）。

## 作者 {#author}

`类型: string`

定义文档作者/创建者的姓名。

:::danger[Deprecated]
定义文档作者/创建者的名称。自 5.4 版起已弃用，请改用[所有者](#owner)。
:::

**示例**: `"John Smith"`

## 创建 {#created}

`类型: string`

定义文档的创建日期。

:::danger[Deprecated]
定义文档创建日期。自 5.4 版起已弃用，请改用[已上传](#uploaded)。
:::

**示例**: `"2010-07-07 3:46 PM"`

## 收藏 {#favorite}

`类型: boolean`

定义*收藏*图标的高亮状态。当用户单击图标时，将调用 [onMetaChange](../events.md#onmetachange)事件。如果参数*未定义*，则*收藏*图标不会显示在编辑器窗口标题处。

**示例**: `true`

![收藏](/assets/images/editor/favorite.png)

## 文件夹

`类型: string`

定义存储文档的文件夹（如果文档存储在根文件夹中，则可以为空）。

示例: `"Example Files"`

## 所有者 {#owner}

`类型: string`

定义文档所有者/创建者的名称。

**示例**: `"John Smith"`

## sharingSettings

`类型: array of object`

显示有关允许与其他用户共享文档的设置的信息。

**示例**:

``` ts
[
  {
    permissions: "Full Access",
    user: "John Smith",
  },
]
```

### sharingSettings.isLink

`类型: boolean`

将用户图标更改为链接图标。

**示例**: `false`

### sharingSettings.permissions

`类型: string`

具有上述名称的用户的访问权限。可以是**完全访问**、**只读**或**拒绝访问**

**示例**: `"完全访问"`

### sharingSettings.user

`类型: string`

文档将与之共享的用户的名称。

**示例**: `"John Smith"`

![共享设置](/assets/images/editor/sharing-settings.png#gh-light-mode-only)![共享设置](/assets/images/editor/sharing-settings.dark.png#gh-dark-mode-only)

## 已上传 {#uploaded}

`类型: string`

定义文档上传日期。

**示例**: `"2010-07-07 3:46 PM"`

![文档信息](/assets/images/editor/info.png#gh-light-mode-only)![文档信息](/assets/images/editor/info.dark.png#gh-dark-mode-only)

## 示例

``` ts
const config = {
  document: {
    info: {
      favorite: false,
      folder: "Example Files",
      owner: "John Smith",
      sharingSettings: [
        {
          permissions: "Full Access",
          user: "John Smith",
        },
      ],
      uploaded: "2010-07-07 3:46 PM",
    }
    ,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
