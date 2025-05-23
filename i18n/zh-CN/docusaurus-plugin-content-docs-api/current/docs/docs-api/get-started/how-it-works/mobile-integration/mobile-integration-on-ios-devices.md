---
sidebar_label: iOS
---

# iOS 设备上的移动集成

本节将以iOS移动演示示例为例，演示如何通过 [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) 集成 ONLYOFFICE 编辑器。示例代码已发布于 [GitHub](https://github.com/ONLYOFFICE/editors-webview-ios)。

## 基于 ONLYOFFICE 测试样本的集成

本示例演示如何将 ONLYOFFICE 移动编辑器与[测试或 DMS 样本](../../../samples/language-specific-examples/language-specific-examples.md)集成。

![iOS 测试样本集成示意图](/assets/images/editor/ios-test-sample.png)

### 打开 ONLYOFFICE 编辑器

1. 下载并安装ONLYOFFICE文档[企业版](https://www.onlyoffice.com/zh/docs-enterprise.aspx)或[开发者版](https://www.onlyoffice.com/zh/developer-edition.aspx)。

2. 从 [GitHub](https://github.com/ONLYOFFICE/editors-webview-ios) 下载 iOS 移动演示示例。

3. 使用 [Xcode](https://developer.apple.com/xcode/) 打开 *EditorWebViewDemo.xcodeproj* 项目，修改代码以适应您的DMS系统

4. 在 *Info.plist* 文件中设置 **DocumentServerURL** 属性值为 ONLYOFFICE 文档的 Web 接口地址：

   ``` xml
   <dict>
       <key>DocumentServerURL</key>
       <string>https://documentserver/</string>
   </dict>
   ```

   其中 **documentserver** 为安装 ONLYOFFICE 文档的服务器名称。

   若未指定 **DocumentServerURL** 将出现错误提示：

   ``` swift
   private func load() {
       if documentServerUrlString.isEmpty {
           showAlert(title: "Error", message: "You must specify the document server address, the \"DocumentServerURL\" value in the Info.plist file.")
           return
       }

       guard let url = URL(string: documentServerUrlString.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? "") else {
           return
       }

       webView.load(URLRequest(url: url))
   }
   ```

   <img alt="iOS error" src="/assets/images/editor/ios-error.png" width="260px" />

   <img alt="iOS managing" src="/assets/images/editor/ios-managing.png" width="260px" />

5. 使用 **DocumentServerViewController** 控制器在 iOS 设备上正确打开编辑器。在该控制器中，定义一个通过 WKWebView 组件打开文档的函数。在该控制器中，定义一个通过 WKWebView 组件打开文档的函数。首先，请求一个绝对 URL 并检查其是否包含 *"/editor?"* 字符串。如果包含，则在链接中添加一个额外的查询参数（移动平台类型）：

   ``` swift
   private var openDocumentMarker = "/editor?"
   private var additionalQueryParameters = ["type": "mobile"]

   func webView(_ webView: WKWebView,
       decidePolicyFor navigationAction:
       WKNavigationAction,
       decisionHandler: @escaping (WKNavigationActionPolicy) -> Void)
   {
       guard let urlString = navigationAction.request.url?.absoluteString else {
           decisionHandler(.cancel)
           return
       }

       if urlString.contains(openDocumentMarker),
          let redirectUrl = navigationAction.request.url?.appendingQueryParameters(additionalQueryParameters)
       {
           decisionHandler(.cancel)
           navigator.navigate(to: .documentServerEditor(url: redirectUrl))
       } else {
           reloadItem.isEnabled = true
           backItem.isEnabled = webView.canGoBack
           forwardItem.isEnabled = webView.canGoForward

           title = navigationAction.request.url?.host ?? ""

           decisionHandler(.allow)
       }

   }
   ```

6. 在 **DocumentServerViewController** 控制器中，创建文档管理系统主页上可用的导航操作。例如，在我们的测试示例中，这些操作通过界面元素**重新加载**、**返回**和**前进**按钮来实现。

7. 为了便于与编辑器进行交互，定义 **Activity Indicator** 和 **Progress View** UI 组件。

   **DocumentServerViewController** 的完整代码可以在[此处](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/DocumentServerDemo/DocumentServerViewController.swift)找到。

   <img alt="Activity indicator" src="/assets/images/editor/activity-indicator.png" width="260px" />

   <img alt="Progress view" src="/assets/images/editor/progress-view.png" width="260px" />

   <img alt="Buttons" src="/assets/images/editor/buttons.png" width="260px" />

8. 要在移动设备上通过 WKWebView 组件显示 ONLYOFFICE 编辑器并开始处理文档，请在 **DocumentServerEditorViewController** 控制器中设置 WKWebView 并布局，如下所示：

   ``` swift
   private func configureView() {
       let preferences = WKPreferences()
       let configuration = WKWebViewConfiguration()
       preferences.javaScriptEnabled = true
       configuration.preferences = preferences

       webView = WKWebView(frame: .zero, configuration: configuration)

       view.addSubview(webView)
       webView.translatesAutoresizingMaskIntoConstraints = false

       webView.navigationDelegate = self
       webView.uiDelegate = self

       if let webViewSuperview = webView.superview {
           webView.topAnchor.constraint(equalTo: webViewSuperview.topAnchor).isActive = true
           webView.leadingAnchor.constraint(equalTo: webViewSuperview.leadingAnchor).isActive = true
           webView.bottomAnchor.constraint(equalTo: webViewSuperview.bottomAnchor).isActive = true
           webView.trailingAnchor.constraint(equalTo: webViewSuperview.trailingAnchor).isActive = true
       }
   }
   ```

9. 在 Xcode 工具栏中，选择一个构建方案和一个运行应用程序的设备。之后，选择**产品 -> 运行**，或点击项目工具栏中的**运行**按钮来构建并运行你的代码。

10. 在应用程序的主页面上，选择 **Using DocumentServer** 选项，以演示将 ONLYOFFICE 移动网页编辑器与 ONLYOFFICE 测试或 DMS 示例集成的示例。

### 关闭 ONLYOFFICE 编辑器

使用 **DocumentServerEditorViewController** 控制器退出编辑器。例如，在当前测试示例中，创建了**返回**按钮以导航到上一个页面：

``` swift
private let goBackUrl = Bundle.main.object(forInfoDictionaryKey: "DocumentServerURL") as? String ?? ""

func webView(_ webView: WKWebView,
    decidePolicyFor navigationAction: WKNavigationAction,
    decisionHandler: @escaping (WKNavigationActionPolicy) -> Void)
{
    guard let urlString = navigationAction.request.url?.absoluteString else {
        decisionHandler(.cancel)
        return
    }
        
    if urlString == goBackUrl {
        decisionHandler(.cancel)
        navigationController?.popViewController(animated: true)
    } else {
        decisionHandler(.allow)
    }
}
```

<img alt="Go back" src="/assets/images/editor/exit-button.png" width="260px" />

**DocumentServerEditorViewController** 的完整代码可以在[此处](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/DocumentServerEditor/DocumentServerEditorViewController.swift)找到。

## 基于 ONLYOFFICE 文档 API 的集成

此示例展示了如何使用 WKWebView 打开 ONLYOFFICE 编辑器，并通过 [API 文档](../../basic-concepts.md)和[配置示例](../../try-docs/try-docs.md)中描述的编辑器配置来实现。

![通过 api 的 iOS 集成](/assets/images/editor/ios-api-config.png)

### 打开 ONLYOFFICE 编辑器

1. 下载并安装 ONLYOFFICE 文档[企业版](https://www.onlyoffice.com/docs-enterprise.aspx)或[开发者版](https://www.onlyoffice.com/developer-edition.aspx)。

2. 从 [GitHub](https://github.com/ONLYOFFICE/editors-webview-ios) 下载 iOS 移动演示示例。

3. 使用 [Xcode](https://developer.apple.com/xcode/) 打开 *EditorWebViewDemo.xcodeproj* 项目，修改代码以适应您的 DMS 系统

4. 创建一个空的 *html* 文件。演示项目中的 [editor.html](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/Resources/editor.html) 资源被用作模板。

5. 添加如下所示的 *div* 元素：

   ``` html
   <div id="placeholder"></div>
   ```

6. 指定您网站上将使用的 ONLYOFFICE 文档链接及 JavaScript API：

   ``` html
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

7. 添加初始化 **Document Editor** 的脚本，用于 *div* 元素，并配置您要打开的文档：

   <!-- eslint-skip -->
   ``` ts
   window.docEditor = new DocsAPI.DocEditor("placeholder", {
     {external_config},
     type: "mobile",
     events: {
       onAppReady,
       onDocumentReady,
       onDownloadAs,
       onError,
       onInfo,
       onRequestClose,
       onRequestInsertImage,
       onRequestUsers,
       onWarning,
     },
   })
   ```

8. 要开始在移动设备上处理文档，请通过 WKWebView 组件显示 ONLYOFFICE 编辑器。为此，指定 **EditorViewController** 控制器。请求 *editor.html* file, 文件的 URL，获取其内容，并将 *"\{external\_config\}"* 参数替换为 *samples.plist* 文件中的配置，其中所有示例配置均根据 [API 文档 Try 页面](../../try-docs/try-docs.md)进行分类：

   ``` swift
   private func load() {
       guard let url = Bundle.main.url(forResource: "editor", withExtension: "html") else {
           return
       }

       var html = ""

       do {
           html = try String(contentsOf: url)
       } catch {
           print(error)
       }

       html = html.replacingOccurrences(of: "{external_config}", with: config ?? "")
       webView.loadHTMLString(html, baseURL: nil)
   }
   ```

   <img alt="Editor samples" src="/assets/images/editor/editor-samples.png" width="260px" />

   **EditorViewController** 完整代码可在[此处](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/Editor/EditorViewController.swift)找到。

9. 在 Xcode 工具栏中，选择一个构建方案和一个运行应用程序的设备。然后，选择**产品 -> 运行**，或点击项目工具栏中的**运行**按钮来构建并运行你的代码。

10. 在应用程序的主屏幕上，选择**使用 API 配置**选项，以演示如何使用 API 文档和配置示例中描述的编辑器配置来打开 ONLYOFFICE 移动网页编辑器。

11. 在下一页中，选择一个配置示例，以在 WKWebView 组件中打开生成的 HTML。

### 处理文档

要处理文档（打开、下载、插入图片、提及其他用户等），请使用 API 文档及其事件和方法：

1. 为了跟踪事件并调用适当的方法，通过 **EditorEventsHandler** 控制器在原生代码中处理 ONLYOFFICE 编辑器的[事件](../../../usage-api/config/events.md)，然后将它们委托给 **EditorViewController**：

   ``` swift
   var delegate: EditorEventsDelegate?

   convenience init(configuration: WKWebViewConfiguration) {
       self.init()
      
       configuration.userContentController.add(self, name: EditorEvent.onDownloadAs.rawValue)
   }

   extension EditorEventsHandler: WKScriptMessageHandler {
       func userContentController(_ userContentController: WKUserContentController,
           didReceive message: WKScriptMessage)
       {
           let event = EditorEvent(rawValue: message.name)

           switch event {
           case .onDownloadAs:
               guard
                   let json = message.body as? [String: Any],
                   let fileType = json["fileType"] as? String,
                   let url = json["url"] as? String
               else { return }

               delegate?.onDownloadAs(fileType: fileType, url: url)
           }
       }
   }
   ```

   让我们以 [onDownloadAs](../../../usage-api/config/events.md#ondownloadas) 事件为例。在 WKWebView 配置期间，通过调用 *configuration.userContentController.add(self, name: messageName)* 将一个对象注册为特定消息的处理程序。获取事件参数（文件类型和 URL），并将事件处理委托给 **EditorViewController**：

   ``` swift
   func onDownloadAs(fileType: String, url: String) {
       print("⚡ ONLYOFFICE Document Editor create file: \(url)")
   }
   ```

2. 定义 **callMethod** 函数以从原生代码调用 [API 方法](../../../usage-api/methods.md)。该函数可以接受字符串、布尔值或对象作为参数。它将方法名称及其参数添加到 JavaScript 代码字符串中，然后使用 *evaluateJavaScript* 方法在 WKWebView 组件中执行 JavaScript：

   ``` swift
   private func callMethod(function: String, arg: Bool) {
       let javascript = "window.docEditor.\(function)(\(arg))"
       webView.evaluateJavaScript(javascript, completionHandler: nil)
   }

   private func callMethod(function: String, arg: String) {
       let javascript = "window.docEditor.\(function)(\"\(arg)\")"
       webView.evaluateJavaScript(javascript, completionHandler: nil)
   }

   private func callMethod(function: String, arg: [String: Any]) {
       guard
           let json = try? JSONSerialization.data(withJSONObject: arg, options: []),
           let jsonString = String(data: json, encoding: .utf8)
       else {
           return
       }

       let javascript = "window.docEditor.\(function)(\(jsonString))"
       webView.evaluateJavaScript(javascript, completionHandler: nil)
   }
   ```

    **EditorEventsHandler** 完整代码可在[此处](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/Editor/EditorEventsHandler.swift)找到。

3. 要显示下载和打印文档的结果，可以使用 **PreviewController** 控制器。该控制器基于 **QLPreviewController**。通过文档的 URL 下载文档，并将 *dataSource* 和 *delegate* 属性设置为 **QLPreviewController**：

   ``` swift
   func present(url: URL, in parent: UIViewController, complation: @escaping (() -> Void)) {
       download(url: url) { fileUrl in
           DispatchQueue.main.async {
               guard let fileUrl = fileUrl else {
                   complation()
                   return
               }

               self.fileUrl = fileUrl

               let quickLookController = QLPreviewController()
               quickLookController.dataSource = self
               quickLookController.delegate = self

               if QLPreviewController.canPreview(fileUrl as QLPreviewItem) {
                   quickLookController.currentPreviewItemIndex = 0
                   parent.present(quickLookController, animated: true, completion: nil)
               }
               complation()
           }
       }
   }
   ```

   **PreviewController** 完整代码可在[此处](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/Editor/PreviewController.swift)找到。
