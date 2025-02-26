---
sidebar_position: -5
---

# Advanced parameters

ONLYOFFICE 文档可以更改的参数可以细分为以下主要部分：

[**config**](./config/config.md) - 允许更改使用的平台类型、文档显示大小（宽度和高度）和打开文档的类型；

- [**document**](./config/document/document.md) - 包含与文档有关的所有参数（标题、网址、文件类型等）；

  - [**info**](./config/document/info.md) - 包含文档的附加参数（文档所有者、存储文档的文件夹、上传日期、共享设置）；
  - [**permissions**](./config/document/permissions.md) - 定义是否可以编辑和下载文档；

- [**editorConfig**](./config/editor/editor.md) - 定义与编辑器界面有关的参数：打开模式（查看器或编辑器）、界面语言、附加按钮等）；

  - [**customization**](./config/editor/customization/customization-standard-branding.md) - 允许自定义编辑器界面，使其看起来像您的其他产品（如果有），并更改附加按钮、链接、更改徽标和编辑器所有者详细信息的显示或不显示；
  - [**embedded**](./config/editor/embedded.md) - 仅用于嵌入式文档类型，并允许更改用于控制嵌入式模式的按钮的行为；
  - [**plugins**](./config/editor/plugins.md)- 用于将必要的[plugins](../../plugin-and-macros/get-started/overview.md)连接到您的文档，以便它们对所有文档编辑器用户可见；

- [**events**](./config/events.md) - 是在对文档进行某些操作时调用的特殊事件列表，这些操作包括加载、修改等。

包含所有附加参数的完整 *config* 如下所示：

``` ts
const config = {
  document: {
    fileType: "docx",
    info: {
      favorite: true,
      folder: "Example Files",
      owner: "John Smith",
      sharingSettings: [
        {
          permissions: "Full Access",
          user: "John Smith",
        },
        {
          isLink: true,
          permissions: "Read Only",
          user: "External link",
        },
      ],
      uploaded: "2010-07-07 3:46 PM",
    },
    key: "Khirz6zTPdfd7",
    permissions: {
      chat: true,
      comment: true,
      commentGroups: [{
        edit: ["Group2", ""],
        remove: [""],
        view: "",
      }],
      copy: true,
      deleteCommentAuthorOnly: false,
      download: true,
      edit: true,
      editCommentAuthorOnly: false,
      fillForms: true,
      modifyContentControl: true,
      modifyFilter: true,
      print: true,
      protect: true,
      review: true,
      reviewGroups: ["Group1", "Group2", ""],
      userInfoGroups: ["Group1", ""],
    },
    referenceData: {
      fileKey: "BCFA2CED",
      instanceId: "https://example.com",
    },
    title: "Example Document Title.docx",
    url: "https://example.com/url-to-example-document.docx",
  },
  documentType: "word",
  editorConfig: {
    actionLink: ACTION_DATA,
    callbackUrl: "https://example.com/url-to-callback.ashx",
    coEditing: {
      mode: "fast",
      change: true,
    },
    createUrl: "https://example.com/url-to-create-document/",
    customization: {
      about: true,
      anonymous: {
        request: true,
        label: "Guest",
      },
      autosave: true,
      close: {
        visible: true,
        text: "Close file",
      },
      comments: true,
      compactHeader: false,
      compactToolbar: false,
      compatibleFeatures: false,
      customer: {
        address: "My City, 123a-45",
        info: "Some additional information",
        logo: "https://example.com/logo-big.png",
        logoDark: "https://example.com/dark-logo-big.png",
        mail: "john@example.com",
        name: "John Smith and Co.",
        phone: "123456789",
        www: "example.com",
      },
      features: {
        roles: true,
        spellcheck: {
          mode: true,
          change: true,
        },
        tabBackground: {
          mode: "header",
          change: true,
        },
        tabStyle: {
          mode: "fill",
          change: true,
        },
      },
      feedback: {
        url: "https://example.com",
        visible: true,
      },
      font: {
        name: "Arial",
        size: "11px",
      },
      forcesave: false,
      goback: {
        blank: true,
        text: "Open file location",
        url: "https://example.com",
      },
      help: true,
      hideNotes: false,
      hideRightMenu: true,
      hideRulers: false,
      integrationMode: "embed",
      layout: {
        header: {
          editMode: true,
          save: true,
          users: true,
        },
        leftMenu: {
          mode: true,
          navigation: true,
          spellcheck: true,
        },
        rightMenu: {
          mode: true,
        },
        statusBar: {
          actionStatus: true,
          docLang: true,
          textLang: true,
        },
        toolbar: {
          collaboration: {
            mailmerge: true,
          },
          draw: true,
          file: {
            close: true,
            info: true,
            save: true,
            settings: true,
          },
          home: {},
          layout: true,
          plugins: true,
          protect: true,
          references: true,
          save: true,
          view: {
            navigation: true,
          },
        },
      },
      loaderLogo: "https://example.com/loader-logo.png",
      loaderName: "The document is loading, please wait...",
      logo: {
        image: "https://example.com/logo.png",
        imageDark: "https://example.com/dark-logo.png",
        imageLight: "https://example.com/light-logo.png",
        url: "https://example.com",
        visible: true,
      },
      macros: true,
      macrosMode: "warn",
      mentionShare: true,
      mobile: {
        forceView: true,
        info: false,
        standardView: false,
      },
      plugins: true,
      pointerMode: "select",
      review: {
        hideReviewDisplay: false,
        showReviewChanges: false,
        reviewDisplay: "original",
        trackChanges: true,
        hoverMode: false,
      },
      slidePlayerBackground: "#000000",
      submitForm: {
        visible: true,
        resultMessage: "text",
      },
      toolbarHideFileName: false,
      uiTheme: "theme-dark",
      unit: "cm",
      wordHeadingsColor: "#00ff00",
      zoom: 100,
    },
    embedded: {
      embedUrl: "https://example.com/embedded?doc=exampledocument1.docx",
      fullscreenUrl: "https://example.com/embedded?doc=exampledocument1.docx#fullscreen",
      saveUrl: "https://example.com/download?doc=exampledocument1.docx",
      shareUrl: "https://example.com/view?doc=exampledocument1.docx",
      toolbarDocked: "top",
    },
    lang: "en",
    mode: "edit",
    plugins: {
      autostart: [
        "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
        "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
      ],
      options: {
        "all": {
          keyAll: "valueAll",
        },
        "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}": {
          keyYoutube: "valueYoutube",
        },
      },
      pluginsData: [
        "https://example.com/plugin1/config.json",
        "https://example.com/plugin2/config.json",
      ],
    },
    recent: [
      {
        folder: "Example Files",
        title: "exampledocument1.docx",
        url: "https://example.com/exampledocument1.docx",
      },
      {
        folder: "Example Files",
        title: "exampledocument2.docx",
        url: "https://example.com/exampledocument2.docx",
      },
    ],
    region: "en-US",
    templates: [
      {
        image: "https://example.com/exampletemplate1.png",
        title: "exampletemplate1.docx",
        url: "https://example.com/url-to-create-template1",
      },
      {
        image: "https://example.com/exampletemplate2.png",
        title: "exampletemplate2.docx",
        url: "https://example.com/url-to-create-template2",
      },
    ],
    user: {
      group: "Group1,Group2",
      id: "78e1e841",
      image: "https://example.com/url-to-user-avatar.png",
      name: "John Smith",
    },
  },
  events: {
    onAppReady,
    onCollaborativeChanges,
    onDocumentReady,
    onDocumentStateChange,
    onDownloadAs,
    onError,
    onInfo,
    onMetaChange,
    onOutdatedVersion,
    onPluginsReady,
    onRequestClose,
    onRequestCreateNew,
    onRequestEditRights,
    onRequestHistory,
    onRequestHistoryClose,
    onRequestHistoryData,
    onRequestInsertImage,
    onRequestMailMergeRecipients,
    onRequestOpen,
    onRequestReferenceData,
    onRequestReferenceSource,
    onRequestRefreshFile,
    onRequestRename,
    onRequestRestore,
    onRequestSaveAs,
    onRequestSelectDocument,
    onRequestSelectSpreadsheet,
    onRequestSendNotify,
    onRequestSharingSettings,
    onRequestStartFilling,
    onRequestUsers,
    onSubmit,
    onUserActionRequired,
    onWarning,
  },
  height: "100%",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU",
  type: "desktop",
  width: "100%",
}
```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关文档服务器服务客户机-服务器交互的更多信息，有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。
