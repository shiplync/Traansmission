FROM node:4
EXPOSE 8080
COPY server.js .
COPY index.html .
CMD node server.js