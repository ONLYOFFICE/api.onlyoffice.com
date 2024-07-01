To access the editor features in your mobile application, integrate it with ONLYOFFICE editors via the WebView component - a system component that is responsible for opening web pages within applications. After that, users will be able to view, create and edit text documents, spreadsheets, and presentations, fill out and read PDFs directly on their iOS or Android devices.

Please note that ONLYOFFICE mobile web editors are available only for commercial builds of [Enterprise](https://www.onlyoffice.com/docs-enterprise.aspx) and [Developer](https://www.onlyoffice.com/developer-edition.aspx) editions.

* iOS
* Android

In this section, we will look at the integration process via [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) using the mobile demo sample for iOS which is available on [GitHub](https://github.com/ONLYOFFICE/editors-webview-ios).

## Integration based on the ONLYOFFICE test sample

This example demonstrates how to integrate ONLYOFFICE mobile web editors with the ONLYOFFICE [test or DMS sample](/editors/demopreview).

![iOS integration via test sample](/content/img/editor/ios-test-sample.png)

**Opening ONLYOFFICE editors**

1. Download and install ONLYOFFICE Docs [Enterprise](https://www.onlyoffice.com/docs-enterprise.aspx) or [Developer](https://www.onlyoffice.com/developer-edition.aspx) edition.

2. Download the mobile demo sample for iOS from [GitHub](https://github.com/ONLYOFFICE/editors-webview-ios).

3. Open the *EditorWebViewDemo.xcodeproj* project with [Xcode](https://developer.apple.com/xcode/) to modify code fragments of this example for your DMS to work correctly.

4. To display the main page of your DMS, specify the address of the ONLYOFFICE Docs web interface in the value of the **DocumentServerURL** property in the *Info.plist* file:

   ```
   <dict>
       ...
       <key>DocumentServerURL</key>
       <string>https://documentserver/</string>
   </dict>
   ```

   where the **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

   If **DocumentServerURL** is specified, the DMS main page is loaded. Otherwise, an error occurs:

   ```
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

   ![iOS error](/content/img/editor/ios-error.png)

   **DocumentServerURL is not specified**

   ![iOS managing](/content/img/editor/ios-managing.png)

   **DocumentServerURL is specified**

5. Use the **DocumentServerViewController** controller to open the editors correctly on iOS devices. In this controller, define a function to open a document via WKWebView component. First, request an absolute URL and check if it contains the *"/editor?"* string. If so, add an additional query parameter (the mobile platform type) to the link:

   ```
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

6. In the **DocumentServerViewController** controller, create the navigation actions available on the DMS main page. For example, in our test sample, they are specified with the interface elements such as the **Reload**, **Back**, and **Forward** buttons.

7. For easy interaction with the editor, define the **Activity Indicator** and **Progress View** UI components.

   The full code for **DocumentServerViewController** can be found [here](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/DocumentServerDemo/DocumentServerViewController.swift).

   ![Activity indicator](/content/img/editor/activity-indicator.png)

   **Activity Indicator**

   ![Progress view](/content/img/editor/progress-view.png)

   **Progress View**

   ![Buttons](/content/img/editor/buttons.png)

   **Buttons**

8. To start working with documents, display the ONLYOFFICE editor on your mobile device via the WKWebView component. To do this, set up WKWebView and layout in the **DocumentServerEditorViewController** controller as follows:

   ```
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
   ...
   }
   ```

9. In the Xcode toolbar, select a build scheme and a device where the app will be run. After that, choose **Product -> Run**, or click the **Run** button in the project toolbar to build and run your code.

10. On the main screen of the application, select the **Using DocumentServer** option to demonstrate an example of integrating ONLYOFFICE mobile web editors with the ONLYOFFICE test or DMS sample.

\


**Closing ONLYOFFICE editors**

Use the **DocumentServerEditorViewController** controller to exit from the editor. For example, in the current test samples the **Go back** button is created to navigate to the previous screen:

```
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

![Go back](/content/img/editor/exit-button.png)

**Button to exit the editor**

The full code for **DocumentServerEditorViewController** can be found [here](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/DocumentServerEditor/DocumentServerEditorViewController.swift).

## Integration based on the ONLYOFFICE Docs API

This example demonstrates how to open the ONLYOFFICE editors via WKWebView using the editor configuration described in the [API documentation](/editors/basic) and the [configuration examples](/editors/try).

![iOS integration via api](/content/img/editor/ios-api-config.png)

**Opening ONLYOFFICE editors**

1. Download and install ONLYOFFICE Docs [Enterprise](https://www.onlyoffice.com/docs-enterprise.aspx) or [Developer](https://www.onlyoffice.com/developer-edition.aspx) edition.

2. Download the mobile demo sample for iOS from [GitHub](https://github.com/ONLYOFFICE/editors-webview-ios).

3. Open the *EditorWebViewDemo.xcodeproj* project with [Xcode](https://developer.apple.com/xcode/) to modify code fragments of this example for your DMS to work correctly.

4. Create an empty *html* file. The demo project [editor.html](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/Resources/editor.html) resource is used as a template.

5. Add the *div* element as shown below:

   ```
   <div id="placeholder"></div>
   ```

6. Specify your ONLYOFFICE Docs link with the JavaScript API that will be used for your website:

   ```
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   where the **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

7. Add the script initializing the **Document Editor** for the *div* element with the configuration for the document you want to open:

   ```
   window.docEditor = new DocsAPI.DocEditor("placeholder",
       {
           {external_config},
           "type": "mobile",
           "events": {
               "onAppReady": onAppReady,
               "onDocumentReady": onDocumentReady,
               "onDownloadAs": onDownloadAs,
               "onError": onError,
               "onInfo": onInfo,
               "onRequestClose": onRequestClose,
               "onRequestInsertImage": onRequestInsertImage,
               "onRequestUsers": onRequestUsers,
               "onWarning": onWarning,
           }
       });
   ```

8. To start working with documents, display the ONLYOFFICE editor on your mobile device via the WKWebView component. To do this, specify the **EditorViewController** controller. Request the URL to the *editor.html* file, get its contents and replace the *"{external\_config}"* parameter with a config from the *samples.plist* file where all the sample configurations are categorized according to [API documentation Try page](/editors/try):

   ```
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

   ![Editor samples](/content/img/editor/editor-samples.png)

   **ONLYOFFICE Editor Samples**

   The full code for **EditorViewController** can be found [here](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/Editor/EditorViewController.swift).

9. In the Xcode toolbar, select a build scheme and a device where the app will be run. After that, choose **Product -> Run**, or click the **Run** button in the project toolbar to build and run your code.

10. On the main screen of the application, select the **Using API Configuration** option to demonstrate how to open the ONLYOFFICE mobile web editors using the editor configuration described in the API documentation and the configuration examples.

11. On the next page, choose one of the configuration samples to open the resulting HTML in the WKWebView component.

\


**Working with documents**

To work with documents (open, download, insert images, mention other users, etc.), use the API documentation with its events and methods:

1. To track events and call appropriate methods, handle the [events](/editors/config/events) of ONLYOFFICE editors in native code by the **EditorEventsHandler** controller and then delegate them to **EditorViewController**:

   ```
   var delegate: EditorEventsDelegate?

   convenience init(configuration: WKWebViewConfiguration) {
       self.init()
      
       configuration.userContentController.add(self, name: EditorEvent.onDownloadAs.rawValue)
       ....
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
           ...
           }
       }
   }
   ```

   Let's consider the [onDownloadAs](/editors/config/events#onDownloadAs) event as an example. Register an object as a handler for a particular message by calling *configuration.userContentController.add(self, name: messageName)* during the WKWebView configuration. Get the event parameters (file type and URL) and delegate the event handling to **EditorViewController**:

   ```
   func onDownloadAs(fileType: String, url: String) {
       print("⚡ ONLYOFFICE Document Editor create file: \(url)")
   }
   ```

2. Define the **callMethod** function to call [API methods](/editors/methods) from native code. It can take string, boolean or object values as arguments. This function adds the method name and its arguments to the string with the JavaScript code and then evaluates JavaScript in the WKWebView component with the *evaluateJavaScript* method:

   ```
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

   The full code for **EditorEventsHandler** can be found [here](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/Editor/EditorEventsHandler.swift).

3. To display the result of downloading and printing a document, use the **PreviewController** controller. This controller is based on **QLPreviewController**. Download a document by its URL and set the *dataSource* and *delegate* properties to **QLPreviewController**:

   ```
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

   The full code for **PreviewController** can be found [here](https://github.com/ONLYOFFICE/editors-webview-ios/blob/ad146259742d0cecb7b10e67e19b4594730663e0/EditorWebViewDemo/PresentationLayer/UserStories/Editor/PreviewController.swift).

In this section, we will look at the integration process via [WebView](https://developer.android.com/reference/android/webkit/WebView) using the mobile demo sample for Android which is available on [GitHub](https://github.com/ONLYOFFICE/editors-webview-android).

## Integration based on the ONLYOFFICE test sample

This example demonstrates how to integrate ONLYOFFICE mobile web editors with the ONLYOFFICE [test or DMS sample](/editors/demopreview).

![Android integration via test sample](/content/img/editor/android-test-sample.png)

**Opening ONLYOFFICE editors**

1. Download and install ONLYOFFICE Docs [Enterprise](https://www.onlyoffice.com/docs-enterprise.aspx) or [Developer](https://www.onlyoffice.com/developer-edition.aspx) edition.

2. Download the mobile demo sample for Android from [GitHub](https://github.com/ONLYOFFICE/editors-webview-android).

3. Open the top-level *build.gradle* file with [Android Studio](https://developer.android.com/studio) to modify code fragments of this example for your DMS to work correctly.

4. To display the main page of your DMS, specify the address of the ONLYOFFICE Docs web interface in the value of the **DOCUMENT\_SERVER\_URL** property in the module-level *build.gradle* file:

   ```
   buildConfigField("String", "DOCUMENT_SERVER_URL", "https://documentserver/")
   ```

   where the **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

   If **DOCUMENT\_SERVER\_URL** is specified, the DMS main page is loaded. Otherwise, an error occurs:

   ```
   private fun showDialog() {
       AlertDialog.Builder(requireContext())
       .setMessage("Document server url is empty.\nYou must specify the address in build.gradle")
       .setPositiveButton("Ok") { dialog, _ ->
           dialog.dismiss()
           requireActivity().finish()
       }
       .create()
       .show()
   }
   ```

   ![Android error](/content/img/editor/android-error.png)

   **DocumentServerURL is not specified**

   ![Android managing](/content/img/editor/android-managing.png)

   **DocumentServerURL is specified**

5. Use the **MainFragment.kt** controller to open the editors correctly on Android devices. In this controller, define a function to open a document via WebView component. Request a URL and check if it contains the *"editor"* string which specifies that the document will be opened:

   ```
   private class MainWebViewClient(private val navController: NavController) : WebViewClient() {

       override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
           val url = request?.url
           if (url != null) {
               val path = url.path
               if (path?.contains("editor") == true) {
                   navController.navigate(R.id.action_mainFragment_to_editorFragment, Bundle(1).apply {
                       putString("document_url", url.toString())
                   })
                   return true
               }
               return false
           }
           return super.shouldOverrideUrlLoading(view, request)
       }

   }
   ```

   The full code for **MainFragment.kt** can be found [here](https://github.com/ONLYOFFICE/editors-webview-android/blob/fd8f9809441fab9653140cf2e51a1303e2edd774/app/src/main/java/ru/mike/florida/MainFragment.kt).

6. To start working with documents, display the ONLYOFFICE editor on your mobile device via the WebView component. To do this, set up WebView and layout in the **EditorFragment.kt** controller as follows:

   ```
   @SuppressLint("SetJavaScriptEnabled")
   private fun setSettings() {
       webView?.settings?.apply {
           javaScriptEnabled = true
           javaScriptCanOpenWindowsAutomatically = true
           loadWithOverviewMode = true
           cacheMode = WebSettings.LOAD_NO_CACHE
           domStorageEnabled = true
       }
       webView?.webViewClient = EditorWebViewClient(findNavController())
   }
   ```

7. In the Android Studio toolbar, select your application and the device where the app will be run. After that, click the **Run** button in the project toolbar to build and run your code.

8. The application will be opened to demonstrate an example of integrating ONLYOFFICE mobile web editors with the ONLYOFFICE test or DMS sample.

\


**Closing ONLYOFFICE editors**

Use the **EditorFragment.kt** controller to exit from the editor:

```
private class EditorWebViewClient(private val navController: NavController) : WebViewClient() {

    override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
        request?.url?.let { url ->
            if (!url.toString().contains("editor")) {
                navController.popBackStack()
                return true
            }
        }
        return super.shouldOverrideUrlLoading(view, request)
    }

}
```

The full code for **EditorFragment.kt** can be found [here](https://github.com/ONLYOFFICE/editors-webview-android/blob/fd8f9809441fab9653140cf2e51a1303e2edd774/app/src/main/java/ru/mike/florida/EditorFragment.kt).
