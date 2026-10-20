---
sidebar_position: -5
---

# Editing OAuth app

To edit the application settings:

1. Left-click the application in the list.

   ![OAuth app](/assets/images/docspace/oauth-app.png#gh-light-mode-only)![OAuth app](/assets/images/docspace/oauth-app.dark.png#gh-dark-mode-only)

   or

2. Click ![More icon](/assets/images/docspace/more-icon.png#gh-light-mode-only)![More icon](/assets/images/docspace/more-icon.dark.png#gh-dark-mode-only) to open the context menu and choose **Edit**.

   ![Edit button](/assets/images/docspace/edit-button.png#gh-light-mode-only)![Edit button](/assets/images/docspace/edit-button.dark.png#gh-dark-mode-only)

Edit the desired settings and click **Save**.

![Editing app](/assets/images/docspace/editing-app.png#gh-light-mode-only)![Editing app](/assets/images/docspace/editing-app.dark.png#gh-dark-mode-only)

Clicking **Reset** next to the client secret generates a new one. The previous secret stops working immediately, so update it in your application. Tokens that have already been issued remain valid. You can also regenerate the secret by sending a PATCH request to the [`api/2.0/oauth2/clients/{clientId}/regenerate`](../../../../../docspace/api-backend/usage-api/oauth-2-0/client-management/regenerate-secret.md) address.

## Disabling the app

Disabling the app stops all active sessions.

To disable the application:

1. Click the toggle button next to the application in the list.

   ![Disable toggle button](/assets/images/docspace/disable-toggle-button.png#gh-light-mode-only)![Disable toggle button](/assets/images/docspace/disable-toggle-button.dark.png#gh-dark-mode-only)

   or

2. Click ![More icon](/assets/images/docspace/more-icon.png#gh-light-mode-only)![More icon](/assets/images/docspace/more-icon.dark.png#gh-dark-mode-only) to open the context menu and choose **Disable**.

   ![Disable button](/assets/images/docspace/disable-button.png#gh-light-mode-only)![Disable button](/assets/images/docspace/disable-button.dark.png#gh-dark-mode-only)

## Deleting the app

To delete the application, click ![More icon](/assets/images/docspace/more-icon.png#gh-light-mode-only)![More icon](/assets/images/docspace/more-icon.dark.png#gh-dark-mode-only) to open the context menu and choose **Delete**.

![Delete button](/assets/images/docspace/delete-button.png#gh-light-mode-only)![Delete button](/assets/images/docspace/delete-button.dark.png#gh-dark-mode-only)

This action stops and deletes all active sessions.
