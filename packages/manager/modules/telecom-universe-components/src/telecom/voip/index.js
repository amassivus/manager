import angular from 'angular';

import 'ovh-api-services';

import { TELEPHONY_ALIAS_FEATURE_TYPES, TELEPHONY_ALIAS_SPECIAL_NUMBER } from './telecom-voip.constant';

import TucVoipBillingAccount from './billingAccount/voip-billing-account.factory';
import TucVoipLinePhoneFunction from './feature/line/line/phone/function/voip-feature-line-line-phone-function.factory';
import TucVoipLinePhone from './feature/line/line/phone/voip-feature-line-line-phone.factory';
import TucVoipLine from './feature/line/line/voip-feature-line-line.factory';
import TucVoipLineFeature from './feature/line/voip-feature-line.factory';
import TucVoipFeature from './feature/voip-feature.factory';
import TucVoipServiceAlias from './service/alias/voip-service-alias.factory';
import TucVoipServiceLine from './service/line/voip-service-line.factory';
import TucVoipService from './service/voip-service.factory';
import tucVoipBillingAccount from './billingAccount/voip-billing-account.service';
import tucVoipFax from './feature/line/fax/voip-feature-line-fax.service';
import tucVoipLinePhoneFunction from './feature/line/line/phone/function/voip-feature-line-line-phone-function.service';
import tucVoipLinePhone from './feature/line/line/phone/voip-feature-line-line-phone.service';
import tucVoipLine from './feature/line/line/voip-feature-line-line.service';
import tucVoipLineFeature from './feature/line/voip-feature-line.service';
import tucVoipService from './service/voip-service.service';
import tucVoipServiceAlias from './service/alias/voip-service-alias.service';
import tucVoipServiceLine from './service/line/voip-service-line.service';
import tucTelecomVoip from './telecom-voip.service';

const moduleName = 'tucTelecomVoip';

angular
  .module(moduleName, [
    'ovh-api-services',
  ])
  .constant('TUC_TELEPHONY_ALIAS_FEATURE_TYPES', TELEPHONY_ALIAS_FEATURE_TYPES)
  .constant('TUC_TELEPHONY_ALIAS_SPECIAL_NUMBER', TELEPHONY_ALIAS_SPECIAL_NUMBER)
  .factory('TucVoipBillingAccount', TucVoipBillingAccount)
  .factory('TucVoipLinePhoneFunction', TucVoipLinePhoneFunction)
  .factory('TucVoipLinePhone', TucVoipLinePhone)
  .factory('TucVoipLine', TucVoipLine)
  .factory('TucVoipLineFeature', TucVoipLineFeature)
  .factory('TucVoipFeature', TucVoipFeature)
  .factory('TucVoipServiceAlias', TucVoipServiceAlias)
  .factory('TucVoipServiceLine', TucVoipServiceLine)
  .factory('TucVoipService', TucVoipService)
  .service('tucVoipBillingAccount', tucVoipBillingAccount)
  .service('tucVoipFax', tucVoipFax)
  .service('tucVoipLinePhoneFunction', tucVoipLinePhoneFunction)
  .service('tucVoipLinePhone', tucVoipLinePhone)
  .service('tucVoipLine', tucVoipLine)
  .service('tucVoipLineFeature', tucVoipLineFeature)
  .service('tucVoipService', tucVoipService)
  .service('tucVoipServiceAlias', tucVoipServiceAlias)
  .service('tucVoipServiceLine', tucVoipServiceLine)
  .service('tucTelecomVoip', tucTelecomVoip);

export default moduleName;
