# eLocal
Project developed for 2022 Talk a Bit Hackathon with Switch.

## The project
Our goal was to develop a grocery shopping website that focuses on the small market and local, less exposed, businesses.
This iniciative is extremely important to bring awareness to the consumerism and mass production of essential goods, as well as the gradual distancing from the common buyer to  both the people who work to nourish those goods (and their welfare) and the pesticides used in the mass production. Therefore, it benefits everyone:
  - the seller: these markets are generaly run by elder people, that do not have many resources, that have dedicated their lives to agriculture and do not have social security aid (refering to public local markets that allow these workers to sell their products in their facilities every week, for example), as well as people who are dedicated to create healthier and more ecological options for the customers, by selling biological products, cultivated using environmentally friendly processes. This idea allows buying directly from the producers or from commerces that practice fair trade.
  - the buyer: although buying from small, biological certified shops tends to be a bit more expensive, it is a great option to considered, both for one's health and for the environment. Furthermore, when buying directly from producers in public local markets in the designated schedule they are allowed to sell their products, the cost is unbelievably cheaper, and the quality is generally better than sold in retailers, big companies and markets (since it is free from artifical added products). 
  - the local (and national) economy: since the money flows within the local community and it is applied in national products, we are contributing for the national economy and the local ecosystem.  
Furthermore, as we are going to show in the next sections, we aim to keep this idea innovative and following the latest.

## Architecture
The project was developed using NodeJS for the server side, ReactJS for the client side and MongoDB for the database.

### Video demo
Click the following link to view our video demo:
https://drive.google.com/file/d/1ZMhkQxAK8zk99p0dIhDxG4EdvplaxCtp/view?usp=sharing

### Cool features
- Rating local vendors
- Labelling both vendors and products
- Giving higher visibility to vendors who are independent, more ethical and local.

### Future features
- Pay forward
- Customers can gain karma points to have benefits  (by donating groceries to those in need)

## Conclusion
Unfortunately, due to the ammount of college exams, reports and projects we had to develop in the last 3 days, we were not able to implement all the features we desired. However, we believe in this idea and in the impac

## Running the project 
First create a .env file inside the backend folder with the following entries:
```
DB_URI="mongodb+srv://elocal:hackathonSWITCH2022@cluster0.ev87b.mongodb.net/Prototype?retryWrites=true&w=majority"
API_PORT=5000
```

### Dependencies
You will need the Node Package Manager (npm) and Node, to run this project.

### Backend
To get the Backend up and running, insert the following commands into the terminal:

```
cd backend
npm install
npm start
```
### Frontend
To get the Frontend up and running, insert the following commands into the terminal:

```
cd frontend
npm install
npm run start
```
### Backend & Frontend - Alternative
To get the Frontend and Backend up and running at the same time, insert the following commands into the terminal:

```
npm i 
npm run start
```
