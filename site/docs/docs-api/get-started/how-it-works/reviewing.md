---
sidebar_position: -15
---

# Reviewing

The **Review option** allows you to review a document, change sentences, phrases and other page elements, correct spelling, etc. without actually editing it. All the changes will be recorded and shown to the user who created the document.

![Review scheme](/assets/images/editor/review.png)

## Review access rights

In order to enable the review option, the [review](../../usage-api/config/document/permissions.md#review) parameter in the permissions section of the document initialization must be set to **true**. The document **status bar** will contain the **Review** menu option.

In case the *edit* parameter is set to **true** and the *review* parameter is also set to **true**, the user will be able to edit the document, accept or reject the changes and switch to the review mode him/herself.

![Reviewing](/assets/images/editor/accept_reject.png)

In case the *edit* parameter is set to **false** and the *review* parameter is set to **true**, the document will be available for reviewing only.

``` ts
const config = {
  document: {
    permissions: {
      edit: false,
      review: true,
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

> Please note that the document review will only be available for the document editor if the [mode](../../usage-api/config/editor/editor.md#mode) parameter is set to **edit**.

## Differentiation of reviewing rights by groups

1. Specify the group (or several groups separated with commas) the user belongs to by adding the field *group* to the [user](../../usage-api/config/editor/editor.md#user) parameter in the editorConfig section.

  ``` ts
  const condig = {
    editorConfig: {
      user: [{
        id: "78e1e841",
        name: "John Smith",
        group: "Group1,Group2",
      },
      {
        id: "78e1e841",
        name: "John Smith",
        group: "Group1,Group2",
      }],
    },
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

2. Specify the access rights using the [reviewGroups](../../usage-api/config/document/permissions.md#reviewgroups) parameter in the permissions section of the editor initialization.

   > If the **reviewGroups** parameter is specified in the editor config, the access rights to reviewing all changes are disabled. Otherwise, if the current user does not belong to any of the groups, he or she can review documents of all groups.

   ``` ts
   const config = {
     document: {
       permissions: {
         reviewGroups: ["Group1", "Group2"],
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   *\["Group1", "Group2"]* means that user can review changes made by users from *Group1* and *Group2*.

   The [reviewGroups](../../usage-api/config/document/permissions.md#reviewgroups) parameter can take the value of an empty group. This means that the user can review changes made by users who do not belong to any of the groups (for example, the document that is reviewed in third-party editors).

   ``` ts
   const config = {
     document: {
       permissions: {
         reviewGroups: ["Group2", ""],
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   *\["Group2", ""]* means that user can review changes made by users from *Group2* and users who do not belong to any of the groups.
