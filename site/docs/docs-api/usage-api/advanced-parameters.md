---
sidebar_position: -5
---

# Advanced parameters

The parameters, which can be changed for ONLYOFFICE Docs, can be subdivided into the following main sections:

[**config**](./config/config.md) - allows to change the platform type used, document display size (width and height) and type of the document opened;

- [**document**](./config/document/document.md) - contains all the parameters pertaining to the document (title, url, file type, etc.);

  - [**info**](./config/document/info.md) - contains additional parameters for the document (document owner, folder where the document is stored, uploading date, sharing settings);
  - [**permissions**](./config/document/permissions.md) - defines whether the document can be edited and downloaded or not;

- [**editorConfig**](./config/editor/editor.md) - defines parameters pertaining to the editor interface: opening mode (viewer or editor), interface language, additional buttons, etc.;

  - [**customization**](./config/editor/customization/customization-standard-branding.md) - allows to customize the editor interface so that it looked like your other products (if there are any) and change the presence or absence of the additional buttons, links, change logos and editor owner details;
  - [**embedded**](./config/editor/embedded.md) - is used for the embedded document type only and allows to change the behavior of the buttons used to control the embedded mode;
  - [**plugins**](./config/editor/plugins.md) - is used to connect the necessary [plugins](../../plugin-and-macros/get-started/get-started.md) to your ONLYOFFICE Docs, so that they become visible to all document editor users;

- [**events**](./config/events.md) - is the list of special events called when some action is applied to the document (when it is loaded, modified, etc.).

The complete *config* with all the additional parameters looks the following way:

``` ts
const config = {
  document: {
    fileType: "docx",
    isForm: true,
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
        featuresTips: true,
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
      showHorizontalScroll: true,
      showVerticalScroll: true,
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

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.
