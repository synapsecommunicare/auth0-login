### **Final Guide: Building an Angular Login Screen with Auth0 Authentication**

This guide provides step-by-step instructions to build an Angular login page and flow for an application with **Auth0 authentication**. The application includes a **login screen** and **responsive design** for both desktop and mobile screens.

---

### **Table of Contents**

1. [Setting Up Auth0](#1-setting-up-auth0)
2. [Adding auth0 details](#2-adding-auth0-details)
3. [Troubleshooting](#3-troubleshooting)

---

### **1. Setting Up Auth0**

1. **Create an Auth0 Account**:
   - Sign up at [Auth0](https://auth0.com/).

2. **Create a New Application**:
   - Go to **Applications** > **Create Application**.
   - Choose **Single Page Web Applications**.

3. **Configure Auth0 Settings**:
   - Set **Allowed Callback URLs**:
     ```
     http://localhost:4200
     http://localhost:4200/
     ```
   - Set **Allowed Logout URLs**:
     ```
     http://localhost:4200
     http://localhost:4200/
     ```
   - Set **Allowed Web Origins**:
     ```
     http://localhost:4200
     ```

4. **Get Auth0 Credentials**:
   - Note down your **Domain** and **Client ID**.

---

### **2. Adding auth0 details**

After obtaining your **Domain** and **Client ID** from the Auth0 dashboard, you need to add these credentials to your Angular application's `main.ts` file. Follow these steps:

1. Open your Angular project and navigate to the `main.ts` file located in the `src` folder.

2. Add credentials(ideally via a keyvault service)
---

### **3. Troubleshooting**

#### **Angular dependancies**:
- example: use npm install @auth0/auth0-angular for auth0

#### **Callback URL Mismatch**:
- Ensure the `redirect_uri` in Angular matches the **Allowed Callback URLs** in Auth0.

#### **Infinite Redirect Loop**:
- Verify that the `AppComponent` correctly handles the authentication state.

#### **Check Browser Console**:
- Look for errors related to Auth0 or routing.

#### **Check Auth0 Logs**:
- Go to **Monitoring > Logs** in the Auth0 dashboard for detailed error information.

---