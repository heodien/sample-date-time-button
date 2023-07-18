import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'yourapp',
  appName: 'datetime-button-project',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
