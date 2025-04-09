---
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage User Contacts

This example demonstrates how to create and retrieve user contacts in ONLYOFFICE DocSpace using API requests. Managing user contacts is crucial for maintaining accurate and up-to-date communication details within the system.

The script is divided into two key steps: create or update contacts and retrieve contacts:
- Create or Update Contacts – Adds new contact details such as email and phone number.
- Print Contacts – Fetches stored contacts for a specific user.

<Tabs>
  <TabItem value="py" label="Python">
    ```py
    import requests
 
    # Set API base URL
    BASE_URL = 'https://yourportal.onlyoffice.com'
    API_KEY = 'your_api_key'
    
    # Headers with API key for authentication
    HEADERS = {
        'Accept': 'application/json',
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
 
    # Step 1: Create or update user contacts
    def set_user_contacts(userid, contacts):
        url = f'{BASE_URL}/api/2.0/people/{userid}/contacts'
        data = {'contacts': contacts}
        response = requests.put(url, json=data, headers=HEADERS)
        if response.status_code == 200:
            print(f'Contacts updated successfully for user {userid}')
        else:
            print(f'Failed to update contacts: {response.status_code} - {response.text}')

    # Step 2: Print user contacts
    def print_user_contacts(userid):
        url = f'{BASE_URL}/api/2.0/people/{userid}'
        response = requests.get(url, headers=HEADERS)
        if response.status_code == 200:
            user_data = response.json()
            try:
                print(user_data['response']['contacts'])
            except:
                print(f'No contact found for user {userid}')
        else:
            print(f'Failed to retrieve user contacts: {response.status_code} - {response.text}')

    if __name__ == '__main__':
        userid = '00000000-0000-0000-0000-000000000000'

        # Step 1: Create or update user contacts
        contacts = [{'type': 'GTalk', 'value': 'my@gmail.com'}]
        set_user_contacts(userid, contacts)
        
        # Step 2: Print user contacts
        print_user_contacts(userid)
    ```
  </TabItem>
</Tabs>

## Before you start

1.	Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary permissions to perform user operations.
2.	Before you can make requests to the API, you need to authenticate. Check out the [`authentication example`](../../../../docspace/api-backend/get-started/samples/authentication.md) to learn how to obtain and use access tokens.

## Step 1: Create or Update Contacts
Use a [`PUT /api/2.0/people/{userid}/contacts`](../../../../docspace/api-backend/usage-api/update-member-contacts.api.mdx) request to update user contacts.
<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def set_user_contacts(userid, contacts):
        url = f'{BASE_URL}/api/2.0/people/{userid}/contacts'
        data = {'contacts': contacts}
        response = requests.put(url, json=data, headers=HEADERS)
        if response.status_code == 200:
            print(f'Contacts updated successfully for user {userid}')
        else:
            print(f'Failed to update contacts: {response.status_code} - {response.text}')
    ```
  </TabItem>
</Tabs>

## Step 2: Retrieve a User by ID and Print Contacts 
Use a [`GET /api/2.0/people/{userid}`](../../../../docspace/api-backend/usage-api/get-by-id.api.mdx) request to fetch user data and print contacts.
<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def print_user_contacts(userid):
        url = f'{BASE_URL}/api/2.0/people/{userid}'
        response = requests.get(url, headers=HEADERS)
        if response.status_code == 200:
            user_data = response.json()
            try:
                print(user_data['response']['contacts'])
            except:
                print(f'No contact found for user {userid}')
        else:
            print(f'Failed to retrieve user contacts: {response.status_code} - {response.text}')
    ```
  </TabItem>
</Tabs>