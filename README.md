# Git-app

This is a simple front-end App built using ReactJS and Vite, consuming the Github API (https://docs.github.com/es/rest).

In order to run the app there is a few steps you need to fulfill first.

First of all you need to have Node (16.x +) and Npm installed on your machine (https://nodejs.org/es/).
Then you have to create a folder and inside that folder clone the repository.

Next go to the folder created with the clone operation (it is the project root folder) and inside of it, create a .env file
with the following contents:

![image](https://user-images.githubusercontent.com/71454879/167316094-17b9989d-e6e9-4cfe-b008-6c50bd727fcf.png)

In "YOUR_GITTOKEN" you have to put your own authentication Github token, in the next section you will see how to do that.

After you have ready your .env file all you have to do is in your terminal (being in the project root folder) run:
```console
npm install 

```

And that is all, you are ready to run the app, to run the app. 
Vite provides us with a few different commands in order to run the app (https://vitejs.dev/guide/#command-line-interface).
In this case I suggest you to use the "dev" command to run the app:
```console
npm run dev

```

## Get the authentication Github token.

The Github API requires to be used by an authenticated user in order to use most of its functionalities, so for this project it is required for 
you to have your own Token.
You can do it in this link: https://github.com/settings/tokens
Use the "Generate new token" button, after this you need to create your token with the following permissions:
![image](https://user-images.githubusercontent.com/71454879/167316467-aff7256e-c4ef-4605-bd7b-cf183400564b.png)
![image](https://user-images.githubusercontent.com/71454879/167316487-bb00e2b3-2813-4904-8eae-cc4e760a2f12.png)

After this click on generate token and you will be done creating your authentication token.
