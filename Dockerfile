FROM node:18

# Set the working directory in the container
RUN mkdir /opt/userscrud
RUN mkdir /opt/userscrud/fe
WORKDIR /opt/userscrud/fe

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["yarn", "dev"]

