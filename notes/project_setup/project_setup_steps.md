# Github
1. git init
2. git add .
3. git commit -m "initialized repository"
4. git remote add origin https://github.com/DouglasDunn/FitForm.git
5. git push -u origin master
6. .gitignore

# mLab
1. + Create New
2. amazon free web services, free sandbox
3. US East
4. Database name
5. click on Database
6. Users tab, add user

# node.js
1. npm init
2. description: simple, easy to use application to help you reach your fitness goals.
entry point: server.js
3. author: Douglas Dunn
4. npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcrypt validator
5. npm i -D nodemon
6. npm run server
7. update scripts value in package.json

# react.js
1. npm i -g create-react-app
2. create-react-app client
3. client package.json proxy value
4. server package.json scripts value
5. npm run dev

# Front End Setup
1. delete client/src/logo.svg.
2. In client/src/App.js delete imported logo and everything inside the .App div.
3. Delete everything in client/src/App.css and create your own global css.
4. Go to boostrap, get the css cdn, and in client/public/index.html in the head tag, replace the Notice comment with the cdn.
5. Also, get the 3 JavaScript script tags and replace the This HTML comment with the script tags at the end of the body tag.
6. Go to font awesome, select the svg and js tab, and put the script tag under the bootstrap link tag in head.
