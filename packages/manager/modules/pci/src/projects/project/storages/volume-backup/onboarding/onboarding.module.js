import angular from 'angular';
import '@ovh-ux/ng-translate-async-loader';
import '@uirouter/angularjs';
import 'angular-translate';
import '@ovh-ux/ui-kit';
import { OnboardingLayoutHelper } from '@ovh-ux/manager-ng-layout-helpers';

import routing from './onboarding.routing';
import component from './onboarding.component';

const moduleName = 'ovhManagerPciProjectStoragesVolumeBackupOnboarding';

angular
  .module(moduleName, [
    'ui.router',
    'oui',
    'ngTranslateAsyncLoader',
    'pascalprecht.translate',
    OnboardingLayoutHelper,
  ])
  .config(routing)
  .component(
    'ovhManagerPciProjectsProjectStoragesVolumeBackupOnboarding',
    component,
  )
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;