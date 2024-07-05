The parameters, which can be changed for ONLYOFFICE Docs, can be subdivided into the following main sections:

[**config**](/editors/config/) - allows to change the platform type used, document display size (width and height) and type of the document opened;

* [**document**](/editors/config/document) - contains all the parameters pertaining to the document (title, url, file type, etc.);

  * [**info**](/editors/config/document/info) - contains additional parameters for the document (document owner, folder where the document is stored, uploading date, sharing settings);
  * [**permissions**](/editors/config/document/permissions) - defines whether the document can be edited and downloaded or not;

* [**editorConfig**](/editors/config/editor) - defines parameters pertaining to the editor interface: opening mode (viewer or editor), interface language, additional buttons, etc.);

  * [**customization**](/editors/config/editor/customization) - allows to customize the editor interface so that it looked like your other products (if there are any) and change the presence or absence of the additional buttons, links, change logos and editor owner details;
  * [**embedded**](/editors/config/editor/embedded) - is used for the embedded document type only and allows to change the behavior of the buttons used to control the embedded mode;
  * [**plugins**](/editors/config/editor/plugins) - is used to connect the necessary [plugins](/plugin/basic) to your ONLYOFFICE Docs, so that they become visible to all document editor users;

* [**events**](/editors/config/events) - is the list of special events called when some action is applied to the document (when it is loaded, modified, etc.).

The complete *config* with all the additional parameters looks the following way:

```
config = {
    "document": {
        "fileType": "docx",
        "info": {
            "favorite": true,
            "folder": "Example Files",
            "owner": "John Smith",
            "sharingSettings": [
                {
                    "permissions": "Full Access",
                    "user": "John Smith"
                },
                {
                    "isLink": true,
                    "permissions": "Read Only",
                    "user": "External link"
                },
                ...
            ],
            "uploaded": "2010-07-07 3:46 PM"
        },
        "key": "Khirz6zTPdfd7",
        "permissions": {
            "chat": true,
            "comment": true,
            "commentGroups": [
                "edit": ["Group2", ""],
                "remove": [""],
                "view": ""
            ],
            "copy": true,
            "deleteCommentAuthorOnly": false,
            "download": true,
            "edit": true,
            "editCommentAuthorOnly": false,
            "fillForms": true,
            "modifyContentControl": true,
            "modifyFilter": true,
            "print": true,
            "protect": true,
            "review": true,
            "reviewGroups": ["Group1", "Group2", ""],
            "userInfoGroups": ["Group1", ""]
        },
        "referenceData": {
            "fileKey": "BCFA2CED",
            "instanceId": "https://example.com",
            "key": "Khirz6zTPdfd7"
        },
        "title": "Example Document Title.docx",
        "url": "https://example.com/url-to-example-document.docx"
    },
    "documentType": "word",
    "editorConfig": {
        "actionLink": ACTION_DATA,
        "callbackUrl": "https://example.com/url-to-callback.ashx",
        "coEditing": {
            "mode": "fast",
            "change": true
        },
        "createUrl": "https://example.com/url-to-create-document/",
        "customization": {
            "anonymous": {
                "request": true,
                "label": "Guest"
            },
            "autosave": true,
            "close": {
                "visible": true,
                "text": "Close file"
            },
            "comments": true,
            "compactHeader": false,
            "compactToolbar": false,
            "compatibleFeatures": false,
            "customer": {
                "address": "My City, 123a-45",
                "info": "Some additional information",
                "logo": "https://example.com/logo-big.png",
                "logoDark": "https://example.com/dark-logo-big.png",
                "mail": "john@example.com",
                "name": "John Smith and Co.",
                "phone": "123456789",
                "www": "example.com"
            },
            "features": {
                "roles": true,
                "spellcheck": {
                    "mode": true
                }
            },
            "feedback": {
                "url": "https://example.com",
                "visible": true
            },
            "forcesave": false,
            "goback": {
                "blank": true,
                "text": "Open file location",
                "url": "https://example.com"
            },
            "help": true,
            "hideNotes": false,
            "hideRightMenu": true,
            "hideRulers": false,
            "integrationMode": "embed",
            "logo": {
                "image": "https://example.com/logo.png",
                "imageDark": "https://example.com/dark-logo.png",
                "url": "https://example.com",
                "visible": true
            },
            "macros": true,
            "macrosMode": "warn",
            "mentionShare": true,
            "mobileForceView": true,
            "plugins": true,
            "review": {
                "hideReviewDisplay": false,
                "showReviewChanges": false,
                "reviewDisplay": "original",
                "trackChanges": true,
                "hoverMode": false
            },
            "submitForm": true,
            "toolbarHideFileName": false,
            "toolbarNoTabs": false,
            "uiTheme": "theme-dark",
            "unit": "cm",
            "zoom": 100
        },
        "embedded": {
            "embedUrl": "https://example.com/embedded?doc=exampledocument1.docx",
            "fullscreenUrl": "https://example.com/embedded?doc=exampledocument1.docx#fullscreen",
            "saveUrl": "https://example.com/download?doc=exampledocument1.docx",
            "shareUrl": "https://example.com/view?doc=exampledocument1.docx",
            "toolbarDocked": "top"
        },
        "lang": "en",
        "location": "us",
        "mode": "edit",
        "plugins": {
             "autostart": [
                 "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
                 "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
                 ...
             ],
             "pluginsData": [
                 "https://example.com/plugin1/config.json",
                 "https://example.com/plugin2/config.json",
                 ...
             ]
        },
        "recent": [
            {
                "folder": "Example Files",
                "title": "exampledocument1.docx",
                "url": "https://example.com/exampledocument1.docx"
            },
            {
                "folder": "Example Files",
                "title": "exampledocument2.docx",
                "url": "https://example.com/exampledocument2.docx"
            },
            ...
        ],
        "region": "en-US",
        "templates": [
            {
                "image": "https://example.com/exampletemplate1.png",
                "title": "exampletemplate1.docx",
                "url": "https://example.com/url-to-create-template1"
            },
            {
                "image": "https://example.com/exampletemplate2.png",
                "title": "exampletemplate2.docx",
                "url": "https://example.com/url-to-create-template2"
            },
            ...
        ],
        "user": {
            "group": "Group1,Group2",
            "id": "78e1e841",
            "image": "https://example.com/url-to-user-avatar.png",
            "name": "John Smith"
        }
    },
    "events": {
        "onAppReady": onAppReady,
        "onCollaborativeChanges": onCollaborativeChanges,
        "onDocumentReady": onDocumentReady,
        "onDocumentStateChange": onDocumentStateChange,
        "onDownloadAs": onDownloadAs,
        "onError": onError,
        "onInfo": onInfo,
        "onMetaChange": onMetaChange,
        "onOutdatedVersion": onOutdatedVersion,
        "onPluginsReady": onPluginsReady,
        "onRequestClose": onRequestClose,
        "onRequestCreateNew": onRequestCreateNew,
        "onRequestEditRights": onRequestEditRights,
        "onRequestHistory": onRequestHistory,
        "onRequestHistoryClose": onRequestHistoryClose,
        "onRequestHistoryData": onRequestHistoryData,
        "onRequestInsertImage": onRequestInsertImage,
        "onRequestMailMergeRecipients": onRequestMailMergeRecipients,
        "onRequestOpen": onRequestOpen,
        "onRequestReferenceData": onRequestReferenceData,
        "onRequestReferenceSource": onRequestReferenceSource,
        "onRequestRename": onRequestRename,
        "onRequestRestore": onRequestRestore,
        "onRequestSaveAs": onRequestSaveAs,
        "onRequestSelectDocument": onRequestSelectDocument,
        "onRequestSelectSpreadsheet": onRequestSelectSpreadsheet,
        "onRequestSendNotify": onRequestSendNotify,
        "onRequestSharingSettings": onRequestSaveAs,
        "onRequestStartFilling": onRequestStartFilling,
        "onRequestUsers": onRequestUsers,
        "onSubmit": onSubmit,
        "onWarning": onWarning
    },
    "height": "100%",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU",
    "type": "desktop",
    "width": "100%"
};
```

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](/editors/howitworks) section to find out more on ONLYOFFICE Docs service client-server interactions.