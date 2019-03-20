# nckh-client

A React web app used to visualize data received from [nckh-server](https://github.com/vietduc01100001/nckh-server) in real time.

## Development

1. Clone this project

   ```
   git clone https://github.com/vietduc01100001/nckh-client
   ```

2. Create `.env` file

   ```
   REACT_APP_SERVER_URL=<development nckh-server URL>
   ```

3. Start coding and see changes in real time

   ```
   npm start
   ```

## Deploy

1. Create `.env.production` file

   ```
   REACT_APP_SERVER_URL=<production nckh-server URL>
   ```

2. Edit `package.json`

   ```
   "homepage": "<nckh-client URL>"
   ```

3. Run the build

   ```
   npm run build
   ```

4. Deploy contents in the `build` directory
