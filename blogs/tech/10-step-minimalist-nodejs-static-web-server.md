---
title: 10 Step Minimalist NodeJs Static Web Server
description: 10 Step Minimalist NodeJs Static Web Server or less by Nilay Vishwakarma
image: https://miro.medium.com/max/1200/1*5YnaGQGUna24GZvcaFAfrQ.png
style: blogs
---

# 10 Step Minimalist NodeJs Static Web Server

- ```mkdir my-hello-world```
- ```cd my-hello-world```
- ```npm init -y```
- ```npm I -D typescript concurrently live-server```
- ```mkdir public```
- ```*. touch public/index.html```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="./app.js"></script>
</head>
<body onload="myFunction()">
    <canvas id="myCanvas"></canvas>
</body>
</html>
```
- ```touch app.ts```
```js
function myFunction() {
    let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    canvas.style.backgroundColor = 'red';
}
```
- ```touch tsconfig.json```
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "none",
    "strict": true,
    "outDir": "public"
  },
  "include": [
    "app.ts"
  ],
  "exclude": [
    "node_modules",
    "public"
  ]
}
```
- Add new npm scripts
```json
{
  "name": "my-canvas",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "tsc --watch",
    "start": "live-server public",
    "live": "concurrently \"npm run build\" \"npm run start\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^3.5.1",
    "live-server": "^1.2.0"
  }
}
```
- ```npm run live```

> touch: This command is POSIX equivalent of create new file. You can use ‘New-Item’ in powershell or ‘type’ from Windows Command prompt