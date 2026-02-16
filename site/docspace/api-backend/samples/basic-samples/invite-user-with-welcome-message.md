import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Invite user with welcome message

This example demonstrates how to invite a user to ONLYOFFICE DocSpace using the API, check their registration status, and send them a welcome message after successful activation.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/invite-user-with-welcome-message.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/invite-user-with-welcome-message.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Config
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_TOKEN';
  const HEADERS = { Authorization: API_KEY };

  // Step 1: Get invitation link for a specific employee type
  function getInviteLink(employeeType = 'Guest') {
    const url = `${API_HOST}/api/2.0/portal/users/invite/${employeeType}`;
    return fetch(url, { method: 'GET', headers: HEADERS })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          console.log(`Invite link retrieval failed. Status code: ${res.status}, Message: ${t}`);
          return null;
        });
      })
      .then((data) => {
        const inviteUrl = data?.response;
        console.log(`Invite link for ${employeeType}: ${inviteUrl}`);
        return inviteUrl;
      })
      .catch((err) => {
        console.log(`Invite link retrieval error: ${err.message}`);
        return null;
      });
  }

  // Step 2: Check if the user is active
  function checkUserStatus(userId) {
    const url = `${API_HOST}/api/2.0/portal/users/${userId}`;
    return fetch(url, { method: 'GET', headers: HEADERS })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          console.log(`User info retrieval failed. Status code: ${res.status}, Message: ${t}`);
          return null;
        });
      })
      .then((data) => {
        const user = data?.response || {};
        console.log('User Info:');
        console.log(`• Name: ${user.firstName} ${user.lastName}`);
        console.log(`• Email: ${user.email}`);
        console.log(`• Active: ${user.isActive}`);
        console.log(`• Created: ${user.createDate}`);
        return user;
      })
      .catch((err) => {
        console.log(`User info retrieval error: ${err.message}`);
        return null;
      });
  }

  // Step 3: Send welcome message
  function sendCongratulations(userId, key = 'welcome_guest') {
    const params = new URLSearchParams({ Userid: userId, Key: key });
    const url = `${API_HOST}/api/2.0/portal/sendcongratulations?${params.toString()}`;

    return fetch(url, { method: 'POST', headers: HEADERS })
      .then((res) => {
        if (res.status === 200) {
          console.log('Congratulations message sent successfully.');
        } else {
          return res.text().then((t) => {
            console.log(`Congratulations send failed. Status code: ${res.status}, Message: ${t}`);
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  // Run sequence (mirrors the Python flow)
  console.log('Step 1: Generate invitation link...');
  getInviteLink('Guest').then((link) => {
    // Simulate that user registers via this link...

    console.log('\nStep 2: Check user registration status...');
    const testUserId = 'REPLACE-WITH-REAL-USER-ID';
    checkUserStatus(testUserId).then((user) => {
      if (user && user.isActive) {
        console.log('\nStep 3: Send welcome message...');
        sendCongratulations(testUserId);
      }
    });
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'YOUR_TOKEN'
  HEADERS = {'Authorization': API_KEY}

  # Step 1: Get invitation link for a specific employee type
  def get_invite_link(employee_type='Guest'):
    url = f'{API_HOST}/api/2.0/portal/users/invite/{employee_type}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      invite_url = response.json().get('response')
      print(f"Invite link for {employee_type}: {invite_url}")
      return invite_url
    print(f"Invite link retrieval failed. Status code: {response.status_code}, Message: {response.text}")
    return None

  # Step 2: Check if the user is active
  def check_user_status(user_id):
    url = f'{API_HOST}/api/2.0/portal/users/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      user = response.json().get('response', {})
      print("User Info:")
      print(f"• Name: {user.get('firstName')} {user.get('lastName')}")
      print(f"• Email: {user.get('email')}")
      print(f"• Active: {user.get('isActive')}")
      print(f"• Created: {user.get('createDate')}")
      return user
    print(f"User info retrieval failed. Status code: {response.status_code}, Message: {response.text}")
    return None

  # Step 3: Send welcome message
  def send_congratulations(user_id, key='welcome_guest'):
    url = f'{API_HOST}/api/2.0/portal/sendcongratulations'
    params = {'Userid': user_id, 'Key': key}
    response = requests.post(url, headers=HEADERS, params=params)
    if response.status_code == 200:
      print("Congratulations message sent successfully.")
    else:
      print(f"Congratulations send failed. Status code: {response.status_code}, Message: {response.text}")

  if __name__ == '__main__':
    print("Step 1: Generate invitation link...")
    link = get_invite_link('Guest')  # Can also be: 'User', 'RoomAdmin', etc.

    # Simulate that user registers via this link...

    print("\nStep 2: Check user registration status...")
    test_user_id = 'REPLACE-WITH-REAL-USER-ID'
    user = check_user_status(test_user_id)

    if user.get('isActive'):
      print("\nStep 3: Send welcome message...")
      send_congratulations(test_user_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Generate an invitation link

A GET request is sent to [/api/2.0/portal/users/invite/:employeeType](/docspace/api-backend/usage-api/get-invitation-link) to generate a unique registration link for the specified employee type:

`employeeType` — e.g. "Guest", "User", "RoomAdmin".

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function getInviteLink(employeeType = 'Guest') {
    const url = `${API_HOST}/api/2.0/portal/users/invite/${employeeType}`;
    return fetch(url, { method: 'GET', headers: HEADERS })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          console.log(`Invite link retrieval failed. Status code: ${res.status}, Message: ${t}`);
          return null;
        });
      })
      .then((data) => {
        const inviteUrl = data?.response;
        console.log(`Invite link for ${employeeType}: ${inviteUrl}`);
        return inviteUrl;
      })
      .catch((err) => {
        console.log(`Invite link retrieval error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_invite_link(employee_type='Guest'):
    url = f'{API_HOST}/api/2.0/portal/users/invite/{employee_type}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      invite_url = response.json().get('response')
      print(f"Invite link for {employee_type}: {invite_url}")
      return invite_url
    print(f"Invite link retrieval failed. Status code: {response.status_code}, Message: {response.text}")
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Check user registration status

After the user registers, a GET request is sent to [/api/2.0/portal/users/:userId](/docspace/api-backend/usage-api/get-user-by-id) to confirm that the `isActive` flag is set to `true`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function checkUserStatus(userId) {
    const url = `${API_HOST}/api/2.0/portal/users/${userId}`;
    return fetch(url, { method: 'GET', headers: HEADERS })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          console.log(`User info retrieval failed. Status code: ${res.status}, Message: ${t}`);
          return null;
        });
      })
      .then((data) => {
        const user = data?.response || {};
        console.log('User Info:');
        console.log(`• Name: ${user.firstName} ${user.lastName}`);
        console.log(`• Email: ${user.email}`);
        console.log(`• Active: ${user.isActive}`);
        console.log(`• Created: ${user.createDate}`);
        return user;
      })
      .catch((err) => {
        console.log(`User info retrieval error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def check_user_status(user_id):
    url = f'{API_HOST}/api/2.0/portal/users/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      user = response.json().get('response', {})
      print("User Info:")
      print(f"• Name: {user.get('firstName')} {user.get('lastName')}")
      print(f"• Email: {user.get('email')}")
      print(f"• Active: {user.get('isActive')}")
      print(f"• Created: {user.get('createDate')}")
      return user
    print(f"User info retrieval failed. Status code: {response.status_code}, Message: {response.text}")
    return None
  ```

  </TabItem>
</Tabs>

## Step 3: Send a welcome message

If the user is active, a POST request is sent to [/api/2.0/portal/sendcongratulations](/docspace/api-backend/usage-api/send-congratulations) with:

`Userid` — ID of the invited user.
`Key` — message template key (e.g. "welcome_guest").

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function sendCongratulations(userId, key = 'welcome_guest') {
    const params = new URLSearchParams({ Userid: userId, Key: key });
    const url = `${API_HOST}/api/2.0/portal/sendcongratulations?${params.toString()}`;

    return fetch(url, { method: 'POST', headers: HEADERS })
      .then((res) => {
        if (res.status === 200) {
          console.log('Congratulations message sent successfully.');
        } else {
          return res.text().then((t) => {
            console.log(`Congratulations send failed. Status code: ${res.status}, Message: ${t}`);
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def send_congratulations(user_id, key='welcome_guest'):
    url = f'{API_HOST}/api/2.0/portal/sendcongratulations'
    params = {'Userid': user_id, 'Key': key}
    response = requests.post(url, headers=HEADERS, params=params)
    if response.status_code == 200:
      print("Congratulations message sent successfully.")
    else:
      print(f"Congratulations send failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>