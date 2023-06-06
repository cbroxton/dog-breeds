# Instructions

Backend and frontend can both be kicked off by running `npm start` in their corresponding directories. Backend runs on 3000, frontend on 4200.

I haven't created a self signed https cert so if chrome is redirecting you from `http://localhost:4200` to `https://localhost:4200` you may have to go to chrome://net-internals/#hsts and delete policy for "localhost".
