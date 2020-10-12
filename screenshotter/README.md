node index.js

docker build --tag pngcrush:0.1 .

docker run -v `pwd`:/source pngcrush:0.1 screenshot.png out.png
