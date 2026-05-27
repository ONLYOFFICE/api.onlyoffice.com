# Permissions

The permissions section defines the document permission parameters.

## chat

**type:** `boolean` | **default:** `true`

Whether to enable the chat functionality in the document. In case the chat permission is set to `true`, the **Chat** menu button will be displayed.

**Example**: `true`

## comment

**type:** `boolean` | **default:** the value of the [edit](#edit) parameter

Whether to allow commenting on the document. In case the commenting permission is set to `true` the document **sidebar** will contain the **Comment** menu option; the document commenting will only be available for the document editor if the [mode](../editor/editor.md#mode) parameter is set to `edit`.

:::note
In case `edit` is set to `true` and `comment` is also set to `true`, the user will be able to edit the document and comment. In case `edit` is set to `true` and `comment` is set to `false`, the user will be able to edit only, the corresponding commenting functionality will be available for viewing only, the adding and editing of comments will be unavailable. In case `edit` is set to `false` and `comment` is set to `true`, the document will be available for commenting only. In case `edit` is set to `false` and `review` is set to `false` and `comment` is set to `true` the `fillForms` value is not considered and filling the forms is not available.
:::

**Example**: `true`

![Comment](/assets/images/editor/comment.png#gh-light-mode-only)![Comment](/assets/images/editor/comment.dark.png#gh-dark-mode-only)

## commentGroups

**type:** `object`

The [groups](../editor/editor.md#user) whose comments the user can edit, remove and/or view.

The `[""]` value means that the user can edit/remove/view comments made by someone who belongs to none of these groups (for example, if the document is reviewed in third-party editors). If the value is `[]`, the user cannot edit/remove/view comments made by any group. If the `commentGroups.edit`, `commentGroups.remove` and `commentGroups.view` parameters are not specified, then the user can view/edit/remove comments made by any user.

**Example**:

```ts
const config = {
  edit: ["Group2", ""],
  remove: [""],
  view: [""],
}
```

### commentGroups.edit

**type:** `string[]`

The user can edit comments made by other users.

**Example**: `["Group2", ""]`

### commentGroups.remove

**type:** `string[]`

The user can remove comments made by other users.

**Example**: `[]`

### commentGroups.view

**type:** `string[]`

The user can view comments made by other users.

**Example**: `[""]`

## copy

**type:** `boolean` | **default:** `true`

Whether to allow copying content to the clipboard. In case the parameter is set to `false`, pasting the content will be available within the current document editor only.

**Example**: `true`

## deleteCommentAuthorOnly

**type:** `boolean` | **default:** `false`

Whether the user can delete only their comments.

**Example**: `true`

## download

**type:** `boolean` | **default:** `true`

Whether to allow downloading the document or only viewing or editing it online. In case the downloading permission is set to `false` the **Download as...** menu option will be absent from the **File** menu.

**Example**: `true`

![Download document](/assets/images/editor/download.png#gh-light-mode-only)![Download document](/assets/images/editor/download.dark.png#gh-dark-mode-only)

## edit

**type:** `boolean` | **default:** `true`

Whether to allow editing the document or only viewing it. In case the editing permission is set to `true` the **File** menu will contain the **Edit Document** menu option; please note that if the editing permission is set to `false` the document will be opened in viewer and you will **not** be able to switch it to the editor even if the [mode](../editor/editor.md#mode) parameter is set to `edit`.

**Example**: `true`

![Edit document](/assets/images/editor/edit.png#gh-light-mode-only)![Edit document](/assets/images/editor/edit.dark.png#gh-dark-mode-only)

## editCommentAuthorOnly

**type:** `boolean` | **default:** `false`

Whether the user can edit only their comments.

**Example**: `true`

## fillForms

**type:** `boolean` | **default:** the value of the [edit](#edit) or the [review](#review) parameter

Whether to allow filling forms. Filling in forms will only be available for the document and pdf editors if the [mode](../editor/editor.md#mode) parameter is set to `edit`.

:::note
In case `edit` is set to `true` or `review` is set to `true`, the `fillForms` value is not considered and the form filling is possible. In case `edit` is set to `false` and `review` is set to `false` and `fillForms` is also set to `true`, the user can only fill forms in the document. In case `edit` is set to `false` and `review` is set to `false` and `fillForms` is set to `true` the `comment` value is not considered and the commenting is not available. The form filling only mode is currently available for the **document** and **pdf** editors only.
:::

**Example**: `true`

![Fill forms](/assets/images/editor/fill-forms.png#gh-light-mode-only)![Fill forms](/assets/images/editor/fill-forms.dark.png#gh-dark-mode-only)

## modifyContentControl

**type:** `boolean` | **default:** `true`

Whether to allow changing content control settings. Content control modification will only be available for the document editor if the [mode](../editor/editor.md#mode) parameter is set to `edit`.

**Example**: `true`

## modifyFilter

**type:** `boolean` | **default:** `true`

Whether to apply the filter globally (`true`) affecting all the other users, or locally (`false`), i.e. for the current user only. Filter modification will only be available for the spreadsheet editor if the [mode](../editor/editor.md#mode) parameter is set to `edit`.

:::note
In case the document is edited by a user with the full access rights, the filters applied by such a user will be visible to all other users despite their local settings.
:::

**Example**: `true`

## print

**type:** `boolean` | **default:** `true`

Whether to allow printing the document. In case the printing permission is set to `false` the **Print** menu option will be absent from the **File** menu.

**Example**: `true`

![Print document](/assets/images/editor/print.png#gh-light-mode-only)![Print document](/assets/images/editor/print.dark.png#gh-dark-mode-only)

## protect

**type:** `boolean` | **default:** `true`

Whether to display the **Protection** tab on the toolbar and the **Protect** button in the left menu (`true`) or hide them (`false`).

**Example**: `true`

![Protect document](/assets/images/editor/protect.png#gh-light-mode-only)![Protect document](/assets/images/editor/protect.dark.png#gh-dark-mode-only)

## review

**type:** `boolean` | **default:** the value of the [edit](#edit) parameter

Whether to allow reviewing the document. In case the reviewing permission is set to `true` the document **status bar** will contain the **Review** menu option; the document review will only be available for the document editor if the [mode](../editor/editor.md#mode) parameter is set to `edit`.

:::note
In case `edit` is set to `true` and `review` is also set to `true`, the user will be able to edit the document, accept/reject the changes made and switch to the review mode themselves. In case `edit` is set to `true` and `review` is set to `false`, the user will be able to edit only. In case `edit` is set to `false` and `review` is set to `true`, the document will be available in review mode only.
:::

**Example**: `true`

![Review document](/assets/images/editor/review.png#gh-light-mode-only)![Review document](/assets/images/editor/review.dark.png#gh-dark-mode-only)

## reviewGroups

**type:** `string[]`

The [groups](../editor/editor.md#user) whose changes the user can accept/reject. The `[""]` value means that the user can review changes made by someone who belongs to none of these groups (for example, if the document is reviewed in third-party editors). If the value is `[]`, the user cannot review changes made by any group. If the value is `""` or not specified, then the user can review changes made by any user.

**Example**: `["Group1", "Group2", ""]`

## userInfoGroups

**type:** `string[]`

The groups of users whose information is displayed in the editors:

- the usernames are displayed in the list of the editing users in the editor header;
- when typing text, the user cursors and tooltips with their names are displayed;
- when locking objects in the strict co-editing mode, the usernames are displayed.

The `["Group1", ""]` means that the information about users from Group1 and users who don't belong to any group is displayed. The `[]` means that no user information is displayed at all. The `undefined` or `""` values mean that the information about all users is displayed.

**Example**: `["Group1", ""]`

## Example

```ts
const config = {
  // ...
  document: {
    // ...
    permissions: {
      chat: true,
      comment: true,
      copy: true,
      commentGroups: {
        edit: ["Group2", ""],
        remove: [""],
        view: [""],
      },
      deleteCommentAuthorOnly: false,
      download: true,
      edit: true,
      editCommentAuthorOnly: false,
      fillForms: true,
      modifyContentControl: true,
      modifyFilter: true,
      print: true,
      protect: true,
      review: false,
      reviewGroups: ["Group1", "Group2", ""],
      userInfoGroups: ["Group1", ""],
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
