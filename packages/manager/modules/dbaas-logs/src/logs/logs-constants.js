export default {
  LDP_PLAN_CODE: 'logs-account',
  LDP_PLAN_CODE_ENTERPRISE: 'logs-enterprise',
  COLDSTORAGE: 'COLDSTORAGE',
  DESCRIPTION_MIN_LENGTH: 3,
  EXPOSED_PORT_MIN: 514,
  EXPOSED_PORT_MAX: 65535,
  NB_INSTANCE_MIN: 1,
  NB_INSTANCE_MAX: 30,
  NB_SHARD_MIN: 1,
  NB_SHARD_MAX: 16,
  DISPLAY_NAME_MAX_LENGTH: 255,
  DEFAULT_LINE_NUMBER: 5,
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
  suffixPattern: '^[a-z0-9_-]+$',
  LOGS_DOCS_NAME: 'logs-data-platform',
  LOGS_PRODUCT_URL: '/data-platforms/logs/',
  OPENSEARCH_API_URL: 'OPENSEARCH_API',
  SERVICE_STATE_TO_CONFIG: 'TO_CONFIG',
  SERVICE_STATE_DISABLED: 'DISABLED',
  SERVICE_STATE_ENABLED: 'ENABLED',
  PASSWORD_SPECIAL_CHARACTERS: '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~',
  MESSAGE_THRESHOLD: 1000,
  WEB_SOCKET_URL: 'WEB_SOCKET',
  RFC_URL: 'TCP_TLS_RFC5424',
  LTSV_URL: 'TCP_TLS_LTSV_NUL',
  GELF_URL: 'TCP_TLS_GELF',
  GELF: 'GELF',
  LTSV: 'LTSV',
  RFC5424: 'RFC5424',
  OSD_WEBUI: 'OSD_WEBUI',
  GRAYLOG_WEBUI: 'GRAYLOG_WEBUI',
  X_OVH_TOKEN: 'X-OVH-TOKEN',
  GZIP: 'GZIP',
  DEFLATED: 'DEFLATED',
  LZMA: 'LZMA',
  ZSTD: 'ZSTD',
  PCA: 'PCA',
  PCS: 'PCS',
  CONTENT_ALL: 'ALL',
  CONTENT_PLAIN: 'PLAIN',
  CONTENT_GELF: 'GELF',
  LOGS_PRO: 'logs-pro',
  TITLE_MIN_LENGTH: 3,
  TITLE_MAX_LENGTH: 255,
  FIELD_MIN_LENGTH: 3,
  FIELD_MAX_LENGTH: 50,
  VALUE_MIN_LENGTH: 1,
  VALUE_MAX_LENGTH: 50,
  TIME_PERIOD_MIN_IN_SECONDS: 1,
  TIME_PERIOD_MAX_IN_SECONDS: 3600,
  THRESHOLD_MIN: 0,
  GRACE_PERIOD_MIN_IN_MINUTES: 1,
  GRACE_PERIOD_MAX_IN_MINUTES: 60,
  BACKLOG_MIN: 1,
  BACKLOG_MAX: 20,
  expirationInSeconds: 86400,
  indexStorage: {
    success: 'success',
    error: 'error',
    warning: 'warning',
  },
  alertType: {
    counter: 'MESSAGE_COUNT',
    numeric: 'FIELD_VALUE',
    textual: 'FIELD_CONTENT_VALUE',
  },
  thresholdType: {
    more: 'GT',
    higher: 'GTE',
    equal: 'EQ',
    lower: 'LTE',
    less: 'LT',
  },
  constraintType: {
    mean: 'MEAN',
    min: 'MIN',
    max: 'MAX',
    sum: 'SUM',
    sd: 'STDDEV',
  },
  state: {
    SEALED: 'sealed',
    UNSEALED: 'unsealed',
    UNSEALING: 'unsealing',
  },
  stateType: {
    sealed: 'info',
    unsealed: 'success',
    unsealing: 'warning',
  },
  URLS: {
    GRAYLOG_WEBUI: 'GRAYLOG_WEBUI',
    GRAYLOG_API: 'GRAYLOG_API',
    ELASTICSEARCH_API: 'ELASTICSEARCH_API',
  },
  PORT_TYPES: {
    TCP_TLS: 'TCP/TLS',
    TCP: 'TCP',
    UDP: 'UDP',
  },
  MESSAGE_TYPES: {
    GELF: 'Gelf',
    RFC5424: 'Syslog RFC5424',
    LTSV_LINE: 'LTSV line',
    LTSV_NUL: 'LTSV nul',
    CAP_N_PROTO: 'Cap’n’Proto',
    BEATS: 'Beats',
  },
  PERMISSION_TYPES: {
    RO: 'READ_ONLY',
    RW: 'READ_WRITE',
  },
  URL_TYPES: {
    TCP_TLS_GELF: {
      PORT: 'TCP_TLS',
      MESSAGE: 'GELF',
    },
    TCP_GELF: {
      PORT: 'TCP',
      MESSAGE: 'GELF',
    },
    UDP_GELF: {
      PORT: 'UDP',
      MESSAGE: 'GELF',
    },
    TCP_TLS_RFC5424: {
      PORT: 'TCP_TLS',
      MESSAGE: 'RFC5424',
    },
    TCP_RFC5424: {
      PORT: 'TCP',
      MESSAGE: 'RFC5424',
    },
    UDP_RFC5424: {
      PORT: 'UDP',
      MESSAGE: 'RFC5424',
    },
    TCP_TLS_LTSV_LINE: {
      PORT: 'TCP_TLS',
      MESSAGE: 'LTSV_LINE',
    },
    TCP_LTSV_LINE: {
      PORT: 'TCP',
      MESSAGE: 'LTSV_LINE',
    },
    UDP_LTSV_LINE: {
      PORT: 'UDP',
      MESSAGE: 'LTSV_LINE',
    },
    TCP_TLS_LTSV_NUL: {
      PORT: 'TCP_TLS',
      MESSAGE: 'LTSV_NUL',
    },
    TCP_LTSV_NUL: {
      PORT: 'TCP',
      MESSAGE: 'LTSV_NUL',
    },
    UDP_LTSV_NUL: {
      PORT: 'UDP',
      MESSAGE: 'LTSV_NUL',
    },
    TCP_TLS_CAP_N_PROTO: {
      PORT: 'TCP_TLS',
      MESSAGE: 'CAP_N_PROTO',
    },
    TCP_CAP_N_PROTO: {
      PORT: 'TCP',
      MESSAGE: 'CAP_N_PROTO',
    },
    UDP_CAP_N_PROTO: {
      PORT: 'UDP',
      MESSAGE: 'CAP_N_PROTO',
    },
    TCP_TLS_BEATS: {
      PORT: 'TCP_TLS',
      MESSAGE: 'BEATS',
    },
  },
  DATA_STORAGE: {
    TIME_PERIOD_MONTHS: 10,
    MS_FOR_A_SEC: 1000,
    METRICS: {
      STREAM_SIZE: 'ldp.service.stream.total',
      INDEX_SIZE: 'ldp.service.indice.total',
      COLD_STORAGE_TOTAL: 'ldp.service.coldstorage.total',
    },
    AGGREGATORS: {
      ZIMSUM: 'zimsum',
    },
    DOWNSAMPLING_MODE: {
      '24H_MAX': '24h-max-none',
    },
  },
  RETENTION: {
    FORTY_FIVE_DAYS: 'P45D',
  },
  OFFER_STORAGE_MULTIPLIER: 1073741824,
  CHART_SETTINGS: {
    MAX_TICKS_LIMIT: 12,
    TOOLTIPS: {
      backgroundColor: 'rgba(256,256,256,0.8)',
      titleFontColor: '#113f6d',
      bodyFontColor: '#113f6d',
      borderColor: '#bbbdbf',
      borderWidth: 1,
      mode: 'index',
      intersect: false,
    },
    HOVER: {
      mode: 'nearest',
      intersect: true,
    },
    COLORS: [
      {
        backgroundColor: 'rgba(89,210,239, 0.4)',
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: '#59d2ef',
        borderColor: '#59d2ef',
        pointBorderColor: 'transparent',
        pointHoverBorderColor: '#fff',
      },
    ],
  },
  inputStatus: {
    PROCESSING: 'PROCESSING',
    INIT: 'INIT',
    PENDING: 'PENDING',
    RUNNING: 'RUNNING',
  },
  inputState: {
    PROCESSING: 'processing',
    RESTART_REQUIRED: 'restart_required',
    TO_CONFIGURE: 'to_configure',
    PENDING: 'pending',
    RUNNING: 'running',
    UNKNOWN: 'unknown',
  },
  inputStateType: {
    processing: 'info',
    restart_required: 'info',
    to_configure: 'warning',
    pending: 'info',
    running: 'success',
    unknown: 'error',
  },
  osdStateType: {
    DELIVERING: 'info',
    READY: 'success',
    DELETING: 'warning',
  },
  INPUT_DEFAULT_PORT: 6514,
  INPUT_DEFAULT_NB_INSTANCE: 2,
  INPUT_DEFAULT_AUTOSCALE: false,
  INPUT_DEFAULT_AUTOSCALE_MIN_INSTANCE: 2,
  INPUT_DEFAULT_AUTOSCALE_MAX_INSTANCE: 4,
  ADD_ON_FAMILY: {
    NEW: 'NEW',
  },
  CONSUMPTION_CAPACITY: 'consumption',
  CONSUMPTION_REFERENCE: {
    COLDSTORAGE_PCA: 'logs-coldstorage-pca-in-gb',
    COLDSTORAGE_PCS: 'logs-coldstorage-pcs-in-gb',
    NB_INSTANCE: 'logs-input-container-unit',
    NB_SHARD: 'logs-index-shards-unit',
    INDEXED_DOCUMENTS: 'logs-index-documents-in-gb',
    KIBANA: 'logs-osd-unit',
    STREAM: 'logs-indexed-in-gb',
  },
  COLDSTORAGE_INCREMENT: 1,
  INDEXING_TIERING: 100,
  productName: 'logs',
  logstash: 'LOGSTASH',
  flowgger: 'FLOWGGER',
  patternRowFill: 5,
  ENCRYPTION_KEY_FINGERPRINT_LENGTH: 40,
  ENCRYPTION_KEY_TITLE_MIN_LENGTH: 3,
  ENCRYPTION_KEY_TITLE_MAX_LENGTH: 50,
  ENCRYPTION_KEY_TITLE_PLACEHOLDER: 'My work laptop PGP key',
  ENCRYPTION_KEY_FINGERPRINT_PLACEHOLDER:
    '46DA7E800B7D9CF8A0A1AD1557353365699DDF39',
  ENCRYPTION_KEY_CONTENT_PLACEHOLDER:
    '-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nmDMEYxiLtxYJKwYBBAHaRw8BAQdAy4ggQveZ1367awSh4HdpeYokD4Rs16hfqUTU\nK+NZYYW0H1JvYmVydG8gQ2FybG9zIDxyb2JlcnRAY2FybC5vcz6IkAQTFggAOBYh\nBEbafoALfZz4oKGtFVc1M2Vpnd85BQJjGIu3AhsDBQsJCAcCBhUKCQgLAgQWAgMB\nAh4BAheAAAoJEFc1M2Vpnd85CV4BAMclcRA6QfiHrtgGRiOgx1XuqSfV3245VtDl\nhqkiuyJWAP0XBTkgqUmQ3QSoE+fYOpnWpHt6n1m7FikkadOrrOmaCLg4BGMYi7cS\nCisGAQQBl1UBBQEBB0Ct7vcRp8DniPIvkMREAikuZBlWnJv8TyzSK4JtIcCXIwMB\nCAeIeAQYFggAIBYhBEbafoALfZz4oKGtFVc1M2Vpnd85BQJjGIu3AhsMAAoJEFc1\nM2Vpnd85ZnYA/jQ9zyXG2WYT6OoaDdk2/g4uIA5qaF0VZM207GFpCFuQAQDrJFhQ\ngzZPPx4UmQYPpVJO+uH1ZxKWIzZfVZAFZJw+Bg==\n=Q81L\n\n-----END PGP PUBLIC KEY BLOCK-----',
  MAX_ENCRYPTION_KEY_PER_STREAM: 5,
};
