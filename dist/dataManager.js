"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var dataCountry = {
  "BD": "BGD",
  "BE": "BEL",
  "BF": "BFA",
  "BG": "BGR",
  "BA": "BIH",
  "BB": "BRB",
  "WF": "WLF",
  "BL": "BLM",
  "BM": "BMU",
  "BN": "BRN",
  "BO": "BOL",
  "BH": "BHR",
  "BI": "BDI",
  "BJ": "BEN",
  "BT": "BTN",
  "JM": "JAM",
  "BV": "BVT",
  "BW": "BWA",
  "WS": "WSM",
  "BQ": "BES",
  "BR": "BRA",
  "BS": "BHS",
  "JE": "JEY",
  "BY": "BLR",
  "BZ": "BLZ",
  "RU": "RUS",
  "RW": "RWA",
  "RS": "SRB",
  "TL": "TLS",
  "RE": "REU",
  "TM": "TKM",
  "TJ": "TJK",
  "RO": "ROU",
  "TK": "TKL",
  "GW": "GNB",
  "GU": "GUM",
  "GT": "GTM",
  "GS": "SGS",
  "GR": "GRC",
  "GQ": "GNQ",
  "GP": "GLP",
  "JP": "JPN",
  "GY": "GUY",
  "GG": "GGY",
  "GF": "GUF",
  "GE": "GEO",
  "GD": "GRD",
  "GB": "GBR",
  "GA": "GAB",
  "SV": "SLV",
  "GN": "GIN",
  "GM": "GMB",
  "GL": "GRL",
  "GI": "GIB",
  "GH": "GHA",
  "OM": "OMN",
  "TN": "TUN",
  "JO": "JOR",
  "HR": "HRV",
  "HT": "HTI",
  "HU": "HUN",
  "HK": "HKG",
  "HN": "HND",
  "HM": "HMD",
  "VE": "VEN",
  "PR": "PRI",
  "PS": "PSE",
  "PW": "PLW",
  "PT": "PRT",
  "SJ": "SJM",
  "PY": "PRY",
  "IQ": "IRQ",
  "PA": "PAN",
  "PF": "PYF",
  "PG": "PNG",
  "PE": "PER",
  "PK": "PAK",
  "PH": "PHL",
  "PN": "PCN",
  "PL": "POL",
  "PM": "SPM",
  "ZM": "ZMB",
  "EH": "ESH",
  "EE": "EST",
  "EG": "EGY",
  "ZA": "ZAF",
  "EC": "ECU",
  "IT": "ITA",
  "VN": "VNM",
  "SB": "SLB",
  "ET": "ETH",
  "SO": "SOM",
  "ZW": "ZWE",
  "SA": "SAU",
  "ES": "ESP",
  "ER": "ERI",
  "ME": "MNE",
  "MD": "MDA",
  "MG": "MDG",
  "MF": "MAF",
  "MA": "MAR",
  "MC": "MCO",
  "UZ": "UZB",
  "MM": "MMR",
  "ML": "MLI",
  "MO": "MAC",
  "MN": "MNG",
  "MH": "MHL",
  "MK": "MKD",
  "MU": "MUS",
  "MT": "MLT",
  "MW": "MWI",
  "MV": "MDV",
  "MQ": "MTQ",
  "MP": "MNP",
  "MS": "MSR",
  "MR": "MRT",
  "IM": "IMN",
  "UG": "UGA",
  "TZ": "TZA",
  "MY": "MYS",
  "MX": "MEX",
  "IL": "ISR",
  "FR": "FRA",
  "IO": "IOT",
  "SH": "SHN",
  "FI": "FIN",
  "FJ": "FJI",
  "FK": "FLK",
  "FM": "FSM",
  "FO": "FRO",
  "NI": "NIC",
  "NL": "NLD",
  "NO": "NOR",
  "NA": "NAM",
  "VU": "VUT",
  "NC": "NCL",
  "NE": "NER",
  "NF": "NFK",
  "NG": "NGA",
  "NZ": "NZL",
  "NP": "NPL",
  "NR": "NRU",
  "NU": "NIU",
  "CK": "COK",
  "XK": "XKX",
  "CI": "CIV",
  "CH": "CHE",
  "CO": "COL",
  "CN": "CHN",
  "CM": "CMR",
  "CL": "CHL",
  "CC": "CCK",
  "CA": "CAN",
  "CG": "COG",
  "CF": "CAF",
  "CD": "COD",
  "CZ": "CZE",
  "CY": "CYP",
  "CX": "CXR",
  "CR": "CRI",
  "CW": "CUW",
  "CV": "CPV",
  "CU": "CUB",
  "SZ": "SWZ",
  "SY": "SYR",
  "SX": "SXM",
  "KG": "KGZ",
  "KE": "KEN",
  "SS": "SSD",
  "SR": "SUR",
  "KI": "KIR",
  "KH": "KHM",
  "KN": "KNA",
  "KM": "COM",
  "ST": "STP",
  "SK": "SVK",
  "KR": "KOR",
  "SI": "SVN",
  "KP": "PRK",
  "KW": "KWT",
  "SN": "SEN",
  "SM": "SMR",
  "SL": "SLE",
  "SC": "SYC",
  "KZ": "KAZ",
  "KY": "CYM",
  "SG": "SGP",
  "SE": "SWE",
  "SD": "SDN",
  "DO": "DOM",
  "DM": "DMA",
  "DJ": "DJI",
  "DK": "DNK",
  "VG": "VGB",
  "DE": "DEU",
  "YE": "YEM",
  "DZ": "DZA",
  "US": "USA",
  "UY": "URY",
  "YT": "MYT",
  "UM": "UMI",
  "LB": "LBN",
  "LC": "LCA",
  "LA": "LAO",
  "TV": "TUV",
  "TW": "TWN",
  "TT": "TTO",
  "TR": "TUR",
  "LK": "LKA",
  "LI": "LIE",
  "LV": "LVA",
  "TO": "TON",
  "LT": "LTU",
  "LU": "LUX",
  "LR": "LBR",
  "LS": "LSO",
  "TH": "THA",
  "TF": "ATF",
  "TG": "TGO",
  "TD": "TCD",
  "TC": "TCA",
  "LY": "LBY",
  "VA": "VAT",
  "VC": "VCT",
  "AE": "ARE",
  "AD": "AND",
  "AG": "ATG",
  "AF": "AFG",
  "AI": "AIA",
  "VI": "VIR",
  "IS": "ISL",
  "IR": "IRN",
  "AM": "ARM",
  "AL": "ALB",
  "AO": "AGO",
  "AQ": "ATA",
  "AS": "ASM",
  "AR": "ARG",
  "AU": "AUS",
  "AT": "AUT",
  "AW": "ABW",
  "IN": "IND",
  "AX": "ALA",
  "AZ": "AZE",
  "IE": "IRL",
  "ID": "IDN",
  "UA": "UKR",
  "QA": "QAT",
  "MZ": "MOZ"
};

var dataManager = /*#__PURE__*/function () {
  function dataManager() {
    (0, _classCallCheck2["default"])(this, dataManager);
    this.countriesISO3 = dataCountry;
  }

  (0, _createClass2["default"])(dataManager, [{
    key: "_getFLagIcon",
    value: function _getFLagIcon(countryCode) {
      return "https://flagcdn.com/".concat(countryCode.toLowerCase(), ".svg");
    }
  }, {
    key: "_pibRequest",
    value: function () {
      var _pibRequest2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(countries) {
        var result, pibForEachCountry, ISOpib;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Request.send("https://stats.oecd.org/SDMX-JSON/data/SNA_TABLE1/AUS+AUT+BEL+CAN+CHL+COL+CRI+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LTU+LVA+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+NMEC+ARG+BRA+BGR+CHN+HRV+CYP+IND+IDN+MLT+PER+ROU+RUS+SAU+ZAF+FRME+DEW.B1_GE.HCPC/all?startTime=2019&endTime=2019&dimensionAtObservation=allDimensions", "GET");

              case 2:
                result = _context.sent;
                pibForEachCountry = result.dataSets[0].observations;
                ISOpib = result.structure.dimensions.observation[0].values;
                ISOpib.forEach(function (el, index) {
                  var tempo = "".concat(index, ":0:0:0");
                  var country = countries.find(function (count) {
                    return count.codePaysISO3 === el.id;
                  });
                  country.pib = Math.floor(pibForEachCountry[tempo][0]);
                });
                return _context.abrupt("return", countries);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function _pibRequest(_x) {
        return _pibRequest2.apply(this, arguments);
      }

      return _pibRequest;
    }()
  }, {
    key: "_countriesData",
    value: function () {
      var _countriesData2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this = this;

        var result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Request.send("https://api.covid19api.com/summary", "GET");

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", (0, _toConsumableArray2["default"])(result.Countries).map(function (country) {
                  return {
                    nomDuPays: country.Country,
                    codePaysISO2: country.CountryCode,
                    codePaysISO3: _this.countriesISO3[country.CountryCode],
                    flag: _this._getFLagIcon(country.CountryCode),
                    totalDeCas: country.TotalConfirmed,
                    totalDeMort: country.TotalDeaths,
                    pib: 0
                  };
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function _countriesData() {
        return _countriesData2.apply(this, arguments);
      }

      return _countriesData;
    }()
  }, {
    key: "getFullData",
    value: function () {
      var _getFullData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = this;
                _context3.next = 3;
                return this._countriesData();

              case 3:
                _context3.t1 = _context3.sent;
                _context3.next = 6;
                return _context3.t0._pibRequest.call(_context3.t0, _context3.t1);

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getFullData() {
        return _getFullData.apply(this, arguments);
      }

      return getFullData;
    }()
  }, {
    key: "order",
    value: function () {
      var _order = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(index, trie) {
        var countries;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return data.getFullData();

              case 2:
                countries = _context4.sent;

                if (index == 0) {
                  countries = trie === "Décroissant" ? decroissant(countries, "nomDuPays") : croissant(countries, "nomDuPays");
                } else if (index == 1) {
                  countries = trie === "Décroissant" ? decroissant(countries, "totalDeCas") : croissant(countries, "totalDeCas");
                } else if (index == 2) {
                  countries = trie === "Décroissant" ? decroissant(countries, "totalDeMort") : croissant(countries, "totalDeMort");
                } else if (index == 3) {
                  countries = trie === "Décroissant" ? decroissant(countries, "pib") : croissant(countries, "pib");
                }

                return _context4.abrupt("return", countries);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function order(_x2, _x3) {
        return _order.apply(this, arguments);
      }

      return order;
    }()
  }]);
  return dataManager;
}();