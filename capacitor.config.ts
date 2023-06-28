import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'xyz.ahmadnf.callme',
  appName: 'CallMe',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
