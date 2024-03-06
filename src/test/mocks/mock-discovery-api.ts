export const discoveryTraffic = {
  'name': 'Akamai CDN traffic report data',
  'metrics': [
    {
      'name': 'edgeBytesSum',
      'type': 'LONG'
    },
    {
      'name': 'edgeBitsPerSecond',
      'type': 'DOUBLE'
    },
    {
      'name': 'edgeBytesMax',
      'type': 'LONG'
    },
    {
      'name': 'edgeHitsSum',
      'type': 'LONG'
    },
    {
      'name': 'edgeHitsPerSecond',
      'type': 'DOUBLE'
    },
    {
      'name': 'edgeHitsMax',
      'type': 'LONG'
    },
    {
      'name': 'edgeResponseBytesSum',
      'type': 'LONG'
    },
    {
      'name': 'edgeResponseBitsPerSecond',
      'type': 'DOUBLE'
    },
    {
      'name': 'edgeRequestBytesSum',
      'type': 'LONG'
    },
    {
      'name': 'edgeRequestBitsPerSecond',
      'type': 'DOUBLE'
    },
    {
      'name': 'originBytesSum',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'originBitsPerSecond',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    },
    {
      'name': 'originBytesMax',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'originHitsSum',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'originHitsPerSecond',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    },
    {
      'name': 'originHitsMax',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'originResponseBytesSum',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'originResponseBitsPerSecond',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    },
    {
      'name': 'originRequestBytesSum',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'originRequestBitsPerSecond',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressBytesSum',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressBitsPerSecond',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressBytesMax',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressHitsSum',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressHitsPerSecond',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressHitsMax',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressResponseBytesSum',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressResponseBitsPerSecond',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressRequestBytesSum',
      'type': 'LONG',
      'status': 'ALPHA'
    },
    {
      'name': 'midgressRequestBitsPerSecond',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    },
    {
      'name': 'hitsOffloadedPercentage',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    },
    {
      'name': 'bytesOffloadedPercentage',
      'type': 'DOUBLE',
      'status': 'ALPHA'
    }
  ],
  'dimensions': [
    {
      'name': 'time5minutes',
      'type': 'LONG',
      'filterable': true,
      'filterType': 'TEXT',
      'authorizable': false
    },
    {
      'name': 'time1hour',
      'type': 'LONG',
      'filterable': true,
      'filterType': 'TEXT',
      'authorizable': false
    },
    {
      'name': 'time1day',
      'type': 'LONG',
      'filterable': true,
      'filterType': 'TEXT',
      'authorizable': false
    },
    {
      'name': 'cpcode',
      'type': 'LONG',
      'filterable': true,
      'filterType': 'TEXT',
      'authorizable': true
    },
    {
      'name': 'hostname',
      'type': 'STRING',
      'filterable': true,
      'filterType': 'TEXT',
      'authorizable': false
    },
    {
      'name': 'responseCode',
      'type': 'LONG',
      'filterable': true,
      'filterType': 'TEXT',
      'authorizable': false
    },
    {
      'name': 'responseClass',
      'type': 'STRING',
      'filterable': true,
      'filterType': 'ENUM',
      'filterEnumValues': [
        '0xx',
        '1xx',
        '2xx',
        '3xx',
        '4xx',
        '5xx',
        '6xx'
      ],
      'authorizable': false
    },
    {
      'name': 'responseStatus',
      'type': 'STRING',
      'filterable': true,
      'filterType': 'ENUM',
      'filterEnumValues': [
        'error',
        'success'
      ],
      'authorizable': false
    },
    {
      'name': 'httpMethod',
      'type': 'STRING',
      'filterable': true,
      'filterType': 'ENUM',
      'filterEnumValues': [
        'get_head',
        'put_post'
      ],
      'authorizable': false
    },
    {
      'name': 'deliveryType',
      'type': 'STRING',
      'filterable': true,
      'filterType': 'ENUM',
      'filterEnumValues': [
        'non_secure',
        'secure'
      ],
      'authorizable': false
    },
    {
      'name': 'cacheability',
      'type': 'STRING',
      'filterable': true,
      'filterType': 'ENUM',
      'filterEnumValues': [
        'cacheable',
        'non_cacheable'
      ],
      'authorizable': false
    },
    {
      'name': 'ipVersion',
      'type': 'STRING',
      'filterable': true,
      'filterType': 'ENUM',
      'filterEnumValues': [
        'ipv4',
        'ipv6'
      ],
      'authorizable': false
    },
    {
      'name': 'httpProtocol',
      'type': 'STRING',
      'filterable': true,
      'filterType': 'ENUM',
      'filterEnumValues': [
        'http1.1',
        'https1.1',
        'http2',
        'http3'
      ],
      'authorizable': false
    }
  ]
};
