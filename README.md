# nckh

My web app built to store and draw real-time graphs of electric current and voltage sent from an Arduino Monitoring System.

- Frontend: React
- Backend: Node.js

## Development

1. Clone this project

   ```
   git clone https://github.com/vietduc01100001/nckh
   ```

2. Set these environment variables

   ```
   REACT_APP_SERVER_URL=localhost:3000
   PORT=3000
   REDIS_URI=redis://localhost:6379
   DATA_DIR=./data
   CORS_ORIGIN=*
   ```

3. Start the client

   ```
   cd client
   npm start
   ```

4. Start the server

   ```
   cd server
   npm run dev
   ```

## Deployment

1. Build the app

   ```
   ./build.sh
   ```

2. Set these environment variables

   ```
   REACT_APP_SERVER_URL=localhost:3000
   PORT=3000
   REDIS_URI=redis://localhost:6379
   DATA_DIR=./data
   CORS_ORIGIN=*
   ```

3. Run the client

   ```
   cd client
   npx serve -s build
   ```

4. Run the server

   ```
   cd server
   npm start
   ```
