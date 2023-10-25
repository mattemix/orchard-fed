import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import { SettingsService } from "./settings/SettingsService";
import { getContainer, wireApplication } from "./ioc/IOCSetup";

async function rederApp(): Promise<any> {
  let content;
  try {
    content = await getContent();
  } catch (e) {
    console.error(e);
  }

  let settingsServices = SettingsService.getInstance();
  settingsServices.setComponent1(content.component1);
  wireApplication();
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

}

rederApp();

async function getContent(): Promise<any> {
  let http = axios.create({
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  });
  return http.get("/content/component-content.json").then(r => r.data);
}