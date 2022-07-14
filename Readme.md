# Search Book

## Demo

https://user-images.githubusercontent.com/14941568/178940940-d02d2679-5f3b-4d8f-b845-3686da2b0578.mp4

## Run Locally
### Clone the project

```bash
  git clone https://github.com/MuhammadFadhiil/book-list.git
```

Go to the project directory

```bash
  cd book-list
```

### MongoDB Setup

- MongoDB running on your machine
- Create new DB with name book-list
- Update .env file on backend folder with your mongo db connection string

### Run Backend Service

```bash
  cd backend
  npm i
  source .env
  npm run start:dev
```

### Run Frontend Service

```bash
  cd frontend
  npm i
  npm run serve
```
