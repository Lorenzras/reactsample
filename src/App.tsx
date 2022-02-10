import React from 'react';

import './App.css';

import { KintoneRestAPIClient } from "@kintone/rest-api-client";

const client = new KintoneRestAPIClient({
  baseUrl: "https://rdmuhwtt6gx7.cybozu.com/",
  auth: {
    apiToken: process.env.KINTONE_TOKEN,
  },
});

function App() {

  const clickHandler = () => {
    console.log(process.env.KINTONE_TOKEN)
    client.record.addRecord({app: "173", record: {fullName: {value: "hello"}}})
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={clickHandler}>HELLO</button>
      </header>
    </div>
  );
}

export default App;
