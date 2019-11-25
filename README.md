### Start Network:
    Start by changing into the "Project" directory:
      ```
      cd Project
      ```
    
    Next, StartFabric network:
      ```
      ./startFabric.sh registration
      ```

Next, use the node applications to interact with the deployed node contract.
The node applications are available in multiple programming languages.
Follow the instructions for the programming language of your choice:

### JavaScript:

  Start by changing into the "javascript" directory:
    ```
    cd registration
    ```

  Next, install all required packages:
    ```
    npm install
    ```

  Then run the following applications to enroll the admin user, and register a new user
  called user1 which will be used by the other applications to interact with the deployed
  node contract:
    ```
    node root.js
    ```
    ```
    node registeringUser.js
    ```

  You can run the invoke application as follows. By default, the invoke application will
  create a new user, but you can update the application to submit other transactions:
    ```
    node creatstate.js
    ```

  You can run the query application as follows. By default, the query application will
  return specific user, but you can update the application to evaluate other transactions:
    ```
    node query.js
    ```

### Chaincode:

  You can register user with username,phone,address,etc.. fields.
  
  queryUser() will return the specific user data.

  regUser() will create a new user.