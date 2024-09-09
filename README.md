# Form and Form Server

This project demonstrates how to use forms and integrate them with a server to handle submissions. The server processes the form data, showcasing how backend and frontend interact in a simple web application.

## How to work with the server

To work with the server you have to first download this on your local machine, run 

```
git clone https://github.com/Ayomide-Philip/Form-and-Form-Server.git
```

## How to use the Server
You need to have Node on Your system, and to use the server, you need to run

```
cd "Form Server"
```
When you run that command it would change the directory to the form server directory.

## Form Server file structure

```
              |
              |---- Public 
              |        |------ Images
              |        |------ Stylesheet
              |        |------ Script
              |
              |---- Views
              |---- Index.js
```

### How to Install the required Node Module
Due to the use of NodeJS, i used some node package to run the server like:

```
    body-parser: V1.20.2
    ejs: V3.1.10,
    express: V4.19.2
```

To install all the required module you do 

```
npm i
```
By running the above command, it looks inside the package.json in the Form Server, and looks for all the package needed.

## Starting the Server
After installing all the need  package what you need to do is to start the server, In your terminal go to the directory of the "Form Server", and run 

```
node index.js
```
or 
```
nodemon index.js
```
You can only run the second command if you have nodemon installed already **(Nodemon is used for restarting a server automatically when it detect a change in the file it help us to prevent us starting and restarting the server all time using node)**.
To install nodemon use 
```
npm i -G nodemon
```

After you start the server head to:

```
http://localhost:3000/
```
you should see a page that looks like this static page i made, [Form Server Home Page](https://ayomide-philip.github.io/Form-and-Form-Server/). That is how the home page looks and Javascript was used for the form validation [The Script Used](./certificate.js)
