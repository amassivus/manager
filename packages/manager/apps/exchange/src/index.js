import 'regenerator-runtime/runtime';
import 'script-loader!filesize/lib/filesize.js'; // eslint-disable-line
import 'script-loader!urijs/src/URI.min.js'; // eslint-disable-line
import 'script-loader!jquery'; // eslint-disable-line
import 'whatwg-fetch';
import { bootstrapApplication } from '@ovh-ux/manager-core';

bootstrapApplication('exchange').then((environment) => {
  environment.setVersion(__VERSION__);

  import(`./config-${environment.getRegion()}`)
    .catch(() => {})
    .then(() => import('./app.module'))
    .then(({ default: startApplication }) => {
      startApplication(document.body, environment);
    });
});
