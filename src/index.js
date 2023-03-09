import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from "./store/store";
import "./index.css";
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt/QHRqVVhlX1pAaVddX2NLfUN3R2lYdlRxckU3HVdTRHRcQl5jQH5TdEFnWXlddnI=;Mgo+DSMBPh8sVXJ0S0J+XE9BdVRGQmtWfFN0RnNYfVRxfV9HZkwgOX1dQl9gSX1Tf0VjW3tacHJQRmY=;ORg4AjUWIQA/Gnt2VVhkQlFac1xJWXxBYVF2R2BJflx6dVxMYVpBNQtUQF1hSn5QdkxjWX1adHRTQGRa;MTI4NTIyMUAzMjMwMmUzNDJlMzBPSE51anMvbEZ4ZzJCRWNlV3NuVThySXNielZyTjZHWmszTUx1WnNvdWY0PQ==;MTI4NTIyMkAzMjMwMmUzNDJlMzBoT2pnMVVhR0h3dE5abjNsSGd6RXZHKzVMZXg4T3VQMzJCdHlFb2VWZXk0PQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpBVmdWdkx0RWFab19yflRPal1XVAciSV9jS31TdUVqWX9cdHBVQWJZVw==;MTI4NTIyNEAzMjMwMmUzNDJlMzBCMjJTMTIrNi96bjYxMWQzQjQvbWJkN0k1ZUZHbTUyR3MvQW1abGNqSzhFPQ==;MTI4NTIyNUAzMjMwMmUzNDJlMzBBbWFvV1RBUEF6d2Y1UjgycklqWnY2OUh3ckpISTNmeG5mRXlLeW0rNXRNPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac1xJWXxBYVF2R2BJflx6dVxMYVpBNQtUQF1hSn5QdkxjWX1adHRdQ2Za;MTI4NTIyN0AzMjMwMmUzNDJlMzBmRmJZcTlpYTJqc1daMUJRa2RycmhRckNmQi92bDdtOTFlb0kxWHJUd0xBPQ==;MTI4NTIyOEAzMjMwMmUzNDJlMzBHbklFckR3eUhkbEgrNit4L0xjVWI1bzhXTW84SGN0YjcvZUt0aURzMDI4PQ==;MTI4NTIyOUAzMjMwMmUzNDJlMzBCMjJTMTIrNi96bjYxMWQzQjQvbWJkN0k1ZUZHbTUyR3MvQW1abGNqSzhFPQ==');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App></App>
  </Provider>
);
