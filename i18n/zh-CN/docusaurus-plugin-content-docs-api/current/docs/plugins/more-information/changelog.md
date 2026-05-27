---
sidebar_position: 2
---

# 更新日志

ONLYOFFICE 插件与宏 API 的变更列表。

## 版本 9.2 {#version-92}

- 为文本文档 API 添加了 [AnnotateParagraph](/docs/plugins/interacting-with-editors/document-api/Methods/AnnotateParagraph) 方法。
- 为文本文档 API 添加了 [RemoveAnnotationRange](/docs/plugins/interacting-with-editors/document-api/Methods/RemoveAnnotationRange) 方法。
- 为文本文档 API 添加了 [SelectAnnotationRange](/docs/plugins/interacting-with-editors/document-api/Methods/SelectAnnotationRange) 方法。
- 为文本文档 API 添加了 [onBlurAnnotation](/docs/plugins/interacting-with-editors/document-api/Events/onBlurAnnotation) 事件。
- 为文本文档 API 添加了 [onClickAnnotation](/docs/plugins/interacting-with-editors/document-api/Events/onClickAnnotation) 事件。
- 为文本文档 API 添加了 [onFocusAnnotation](/docs/plugins/interacting-with-editors/document-api/Events/onFocusAnnotation) 事件。
- 为文本文档 API 添加了 [onParagraphText](/docs/plugins/interacting-with-editors/document-api/Events/onParagraphText) 事件。
- 根据帮助中心信息更新了[为所有用户通过插件管理器添加插件](/docs/plugins/development-workflow/installing-and-testing/docs-on-premises-installation)的说明。

## 版本 9.1 {#version-91}

- 为电子表格 API 的 *window.Asc.plugin.executeMethod* 添加了 [RemoveOleObject](/docs/plugins/interacting-with-editors/spreadsheet-api/Methods/RemoveOleObject) 方法。
- 为演示文稿 API 的 *window.Asc.plugin.executeMethod* 添加了 [RemoveOleObject](/docs/plugins/interacting-with-editors/presentation-api/Methods/RemoveOleObject) 方法。

## 版本 9.0 {#version-90}

- 添加了使用**宏**插件为电子表格添加[异步自定义函数](/docs/macros/macros/adding-custom-functions#asynchronous-functions)的功能。
- 添加了使用 AI 插件将 VBA 代码[自动转换](/docs/macros/macros/converting-vba-macros#automatic-conversion-using-ai-plugin)为 ONLYOFFICE 宏的功能。
- 添加了使用 AI 插件[自动生成](/docs/macros/macros/writing-macros#generating-macros-using-ai-plugin) ONLYOFFICE 宏的功能。
- 添加了使用插件为内容控件添加自定义[按钮](/docs/plugins/customization/content-control-buttons)的功能。
- 为文本文档 API 的 window.Asc.plugin.executeMethod 添加了[获取当前书签](/docs/plugins/interacting-with-editors/document-api/Methods/GetCurrentBookmark)方法。
- 为演示文稿 API 的 window.Asc.plugin.executeMethod 添加了[前往幻灯片页面](/docs/plugins/interacting-with-editors/presentation-api/Methods/GoToSlide)方法。
- 添加了[内容控件列表元素](/docs/plugins/interacting-with-editors/document-api/Enumeration/ContentControlListElement)枚举。

## 版本 8.3 {#version-83}

- 向 *window.Asc.plugin.executeMethod* 添加了[获取选中内容](/docs/plugins/interacting-with-editors/document-api/Methods/GetSelectedContent)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[显示错误](/docs/plugins/interacting-with-editors/document-api/Methods/ShowError)方法。
- 向[内容控件属性](/docs/plugins/interacting-with-editors/document-api/Enumeration/ContentControlProperties)对象添加了 *Shd* 和 *Border* 属性。
- 向[面板设置](/docs/plugins/customization/windows-and-panels#creating-a-window)添加了 *isActivated* 参数。

## 版本 8.2

- 添加了表单提事件。
- 向 Document API 中的 *window.Asc.plugin.executeMethod* 添加了判断是否可以重做方法。
- 向 Document API 中的 *window.Asc.plugin.executeMethod* 添加了判断是否可以撤销方法。
- 向 Document API 中的 *window.Asc.plugin.executeMethod* 添加了执行重做操作方法。
- 向 Document API 中的 *window.Asc.plugin.executeMethod* 添加了执行撤销操作方法。

## 版本 8.1

- 添加了通过**宏插件**向电子表格中[添加自定义函数](/docs/macros/macros/adding-custom-functions)的功能。
- 添加了为插件[添加工具栏菜单项](/docs/plugins/customization/toolbar)的功能。
- 添加了创建[多个左侧面板](/docs/plugins/fundamentals/configuration/variations)的功能。
- 添加了关于插件触发上下文菜单事件时的位置的信息。
- 添加了**工具栏菜单点击**事件。
- 向 *window.Asc.plugin.executeMethod* 添加了[激活窗口](/docs/plugins/customization/windows-and-panels#activating-a-window)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[添加工具栏菜单项](/docs/plugins/customization/toolbar#addtoolbarmenuitem)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[获取选中的 OLE 对象](/docs/plugins/interacting-with-editors/document-api/Methods/GetSelectedOleObjects)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[设置插件选项](/docs/plugins/interacting-with-editors/document-api/Methods/SetPluginsOptions)方法。
- 向电子表格 API 中的 *window.Asc.plugin.executeMethod* 添加了**获取所有评论**方法。
- 向电子表格 API 中的 *window.Asc.plugin.executeMethod* 添加了**获取自定义函数**方法。
- 向电子表格 API 中的 *window.Asc.plugin.executeMethod* 添加了**设置自定义函数**方法。
- 向演示文稿 API 中的 *window.Asc.plugin.executeMethod* 添加了**获取所有评论**方法。
- 在简单类型定义中添加了 [OLE 属性](/docs/plugins/interacting-with-editors/document-api/Enumeration/OLEProperties)类型。
- 在简单类型定义中添加了[插件选项](/docs/plugins/interacting-with-editors/document-api/Enumeration/PluginOptions)类型。
- 在简单类型定义中添加了[工具栏菜单项](/docs/plugins/customization/toolbar#toolbarmenuitem) 类型。
- 在简单类型定义中添加了[工具栏菜单主项](/docs/plugins/customization/toolbar#toolbarmenumainitem)类型。
- 在简单类型定义中添加了[工具栏菜单选项卡](/docs/plugins/customization/toolbar#toolbarmenutab)类型。
- 在简单类型定义中添加了[工具栏菜单项类型](/docs/plugins/customization/toolbar#toolbarmenuitemtype)类型。
- 向[上下文菜单项](/docs/plugins/customization/context-menu#contextmenuitem)对象中添加了**图标**和**数据**参数。
- 添加了[菜单](/docs/plugins/fundamentals/configuration/config-json#variationsmenu)配置参数。

## 版本 8.0

- 向 *window.Asc.plugin.executeMethod* 添加了搜索下一个方法。
- 向 *window.Asc.plugin.executeMethod* 添加了结束幻灯片放映方法。
- 向 *window.Asc.plugin.executeMethod* 添加了幻灯片放映中跳转到下一张幻灯片方法。
- 向 *window.Asc.plugin.executeMethod* 添加了幻灯片放映中跳转到上一张幻灯片方法。
- 向 *window.Asc.plugin.executeMethod* 添加了幻灯片放映中跳转到指定幻灯片方法。
- 向 *window.Asc.plugin.executeMethod* 添加了暂停幻灯片放映方法。
- 向 *window.Asc.plugin.executeMethod* 添加了恢复幻灯片放映方法。
- 向 *window.Asc.plugin.executeMethod* 添加了开始幻灯片放映方法。

## 版本 7.5

- 向 *window.Asc.plugin.executeMethod* 的[显示按钮](/docs/plugins/interacting-with-editors/document-api/Methods/ShowButton)方法添加了**对齐**参数。

## 版本 7.4

- 在 ONLYOFFICE 桌面编辑器中添加了从 [ONLYOFFICE 插件市场](/docs/plugins/development-workflow/installing-and-testing/desktop-editors-installation)下载现成插件的功能。
- 向**插件**对象添加了[发送到插件](/docs/plugins/customization/windows-and-panels#interacting-with-a-window)方法。
- 添加了右键菜单点击事件。
- 添加了右键菜单显示事件。
- 向 *window.Asc.plugin.executeMethod* 添加了[添加右键菜单项](/docs/plugins/customization/context-menu#creating-a-context-menu-item)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[关闭窗口](/docs/plugins/customization/windows-and-panels#closing-a-window)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了获取当前句子方法。
- 向 *window.Asc.plugin.executeMethod* 添加了获取当前单词方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[获取文档语言](/docs/plugins/interacting-with-editors/document-api/Methods/GetDocumentLang)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[鼠标移动窗口](/docs/plugins/interacting-with-editors/document-api/Methods/MouseMoveWindow)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[鼠标释放窗口](/docs/plugins/interacting-with-editors/document-api/Methods/MouseUpWindow)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了替换当前句子方法。
- 向 *window.Asc.plugin.executeMethod* 添加了替换当前单词方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[调整窗口大小](/docs/plugins/customization/windows-and-panels#interacting-with-a-window)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[发送到窗口](/docs/plugins/customization/windows-and-panels#interacting-with-a-window)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[显示窗口](/docs/plugins/customization/windows-and-panels#showing-a-window)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[更新右键菜单项](/docs/plugins/customization/context-menu#updating-a-context-menu-item)方法。
- 向 *window.Asc.plugin.executeMethod* 的[移除插件](/docs/plugins/interacting-with-editors/document-api/Methods/RemovePlugin)方法添加了备份参数。
- 向 *window.Asc.plugin.executeMethod* 的[获取选中文本](/docs/plugins/interacting-with-editors/document-api/Methods/GetSelectedText)方法添加了换行符分隔参数。
- 向[图像数据](/docs/plugins/interacting-with-editors/document-api/Enumeration/ImageData)对象添加了替换模式参数。

## 版本 7.3

- 向[初始化数据类型](/docs/plugins/fundamentals/configuration/config-json#variationsinitdatatype)配置参数添加了签名类型。
- 向 *window.Asc.plugin.executeMethod* 添加了添加加载项字段方法。
- 向 *window.Asc.plugin.executeMethod* 添加了获取所有加载项字段方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[获取 VBA 宏](/docs/plugins/interacting-with-editors/document-api/Methods/GetVBAMacros)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[拖放事件](/docs/plugins/interacting-with-editors/document-api/Methods/OnDropEvent)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了移除字段包装器方法。
- 向 *window.Asc.plugin.executeMethod* 添加了设置编辑限制方法。
- 向 *window.Asc.plugin.executeMethod* 添加了更新加载项字段方法。
- 向 *window.Asc.plugin.executeMethod* 添加了电子表格 API 方法。
- 向 *window.Asc.plugin.executeMethod* 添加了演示文稿 API 方法。

## 版本 7.2

- 添加了**添加评论事件**。
- 添加了**更改评论数据事件**。
- 添加了**移除评论事件**。
- 向 *window.Asc.plugin.executeMethod* 添加了接受修订更改方法。
- 向 *window.Asc.plugin.executeMethod* 添加了跳转到下一个修订更改方法。
- 向 *window.Asc.plugin.executeMethod* 添加了拒绝修订更改方法。
- 更改了插件的[本地化](/docs/plugins/fundamentals/configuration/localization)方案。
- 添加了 [ONLYOFFICE 插件市场](/docs/plugins/development-workflow/installing-and-testing/docs-on-premises-installation)。
- 向 *window.Asc.plugin.executeMethod* 添加了更改 OLE 对象方法。
- 向 *window.Asc.plugin.executeMethod* 添加了获取所有表单方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[获取下载文件](/docs/plugins/interacting-with-editors/document-api/Methods/GetFileToDownload)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了通过标签获取表单方法。
- 向 *window.Asc.plugin.executeMethod* 添加了获取表单值方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[从选区获取图像数据](/docs/plugins/interacting-with-editors/document-api/Methods/GetImageDataFromSelection)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[获取已安装插件](/docs/plugins/interacting-with-editors/document-api/Methods/GetInstalledPlugins)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[安装插件](/docs/plugins/interacting-with-editors/document-api/Methods/InstallPlugin)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[将图像数据插入选区](/docs/plugins/interacting-with-editors/document-api/Methods/PutImageDataToSelection)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[移除插件](/docs/plugins/interacting-with-editors/document-api/Methods/RemovePlugin)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了设置表单值方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[显示按钮](/docs/plugins/interacting-with-editors/document-api/Methods/ShowButton)方法。
- 向 *window.Asc.plugin.executeMethod* 添加了[更新插件](/docs/plugins/interacting-with-editors/document-api/Methods/UpdatePlugin)方法。
- 添加了**失去焦点事件**。
- 添加了**内容控件变更事件**。
- 添加了**获得焦点事件**。
