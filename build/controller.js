parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    JDu1: [
      function (require, module, exports) {
        'use strict';
        function e(t) {
          return (e =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(t);
        }
        function t(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function n(e) {
          for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? t(Object(o), !0).forEach(function (t) {
                  r(e, t, o[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : t(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t)
                  );
                });
          }
          return e;
        }
        function r(e, t, n) {
          return (
            (t = o(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function o(t) {
          var n = a(t, 'string');
          return 'symbol' === e(n) ? n : String(n);
        }
        function a(t, n) {
          if ('object' !== e(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(t, n || 'default');
            if ('object' !== e(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === n ? String : Number)(t);
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getData = i),
          (exports.getResults = s),
          (exports.setData = y);
        var m = {
            selectedProgram: 0.1,
            cost: 12e6,
            minPrice: 375e3,
            maxPrice: 1e8,
            minPaymentPercents: 0.15,
            maxPaymentPercents: 0.9,
            paymentPercents: 0.5,
            payment: 6e6,
            getMinPayment: function () {
              return this.cost * this.minPaymentPercents;
            },
            getMaxPayment: function () {
              return this.cost * this.maxPaymentPercents;
            },
            minYear: 1,
            maxYear: 30,
            time: 10,
            programs: { base: 0.1, it: 0.047, gov: 0.067, zero: 0.12 },
          },
          c = { rate: m.selectedProgram };
        function i() {
          return n({}, m);
        }
        function s() {
          return n({}, c);
        }
        function y(e) {
          console.log('New Data', e),
            'radioProgram' === e.onUpdate &&
              ('zero-value' === e.id
                ? (m.minPaymentPercents = 0)
                : (m.minPaymentPercents = 0.15)),
            ('inputCost' !== e.onUpdate && 'costSlider' !== e.onUpdate) ||
              (e.cost < m.minPrice && (e.cost = m.minPrice),
              e.cost > m.maxPrice && (e.cost = m.maxPrice),
              console.log(m.payment),
              console.log(m.getMaxPayment()),
              m.payment > m.getMaxPayment() &&
                (console.log('here'), (m.payment = m.getMaxPayment())),
              m.payment < m.getMinPayment() && (m.payment = m.getMinPayment()),
              (m.paymentPercents = (100 * m.payment) / e.cost / 100)),
            'inputPayment' === e.onUpdate &&
              ((e.paymentPercents = (100 * e.payment) / m.cost / 100),
              e.paymentPercents > m.maxPaymentPercents &&
                ((e.paymentPercents = m.maxPaymentPercents),
                (e.payment = m.cost * e.maxpaymentPercents)),
              e.paymentPercents < m.minPaymentPercents &&
                ((e.paymentPercents = m.minPaymentPercents),
                (e.payment = m.cost * e.minpaymentPercents))),
            'paymentSlider' === e.onUpdate &&
              ((e.paymentPercents = e.paymentPercents / 100),
              (m.payment = m.cost * e.paymentPercents)),
            'inputTime' === e.onUpdate &&
              (e.time > m.maxYear && (e.time = m.maxYear),
              e.time < m.minYear && (e.time = m.minYear)),
            (m = n(n({}, m), e)),
            (c = { rate: m.selectedProgram }),
            console.log('Updated Data', m),
            console.log('New Result', c);
        }
      },
      {},
    ],
    WpxY: [
      function (require, module, exports) {
        'use strict';
        function e(e) {
          document.querySelector('#total-percent').innerHTML =
            100 * e.rate + '%';
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var t = e;
        exports.default = t;
      },
      {},
    ],
    HRGm: [
      function (require, module, exports) {
        'use strict';
        function t(e) {
          return (t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(e);
        }
        function e(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, o);
          }
          return r;
        }
        function r(t) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? e(Object(n), !0).forEach(function (e) {
                  o(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : e(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function o(t, e, r) {
          return (
            (e = n(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function n(e) {
          var r = i(e, 'string');
          return 'symbol' === t(r) ? r : String(r);
        }
        function i(e, r) {
          if ('object' !== t(e) || null === e) return e;
          var o = e[Symbol.toPrimitive];
          if (void 0 !== o) {
            var n = o.call(e, r || 'default');
            if ('object' !== t(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === r ? String : Number)(e);
        }
        function u(t, e) {
          t.dispatchEvent(
            new CustomEvent('updateForm', { bubbles: !0, detail: r({}, e) })
          );
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var c = u;
        exports.default = c;
      },
      {},
    ],
    GLMY: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = t(require('./../utils/updateModel.js'));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t) {
          var r = document.querySelectorAll('input[name = "program"]'),
            o = t().programs,
            u = o.base,
            a = o.it,
            n = o.gov,
            l = o.zero;
          (document.querySelector('#base-value').value = u),
            (document.querySelector('#it-value').value = a),
            (document.querySelector('#gov-value').value = n),
            (document.querySelector('#zero-value').value = l),
            (document.querySelector('#base-text').innerText = 100 * u + '%'),
            (document.querySelector('#it-text').innerText = 100 * a + '%'),
            (document.querySelector('#gov-text').innerText = 100 * n + '%'),
            (document.querySelector('#zero-text').innerText = 100 * l + '%'),
            r.forEach(function (t) {
              t.addEventListener('change', function () {
                (0,
                e.default)(this, { selectedProgram: parseFloat(this.value), onUpdate: 'radioProgram', id: this.id });
              });
            });
        }
        var o = r;
        exports.default = o;
      },
      { './../utils/updateModel.js': 'HRGm' },
    ],
    QpXM: [
      function (require, module, exports) {
        'use strict';
        function e(e) {
          document.querySelector('#percents-from').innerText =
            100 * e.minPaymentPercents + '%';
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.updateMinPercents = e);
      },
      {},
    ],
    BZIA: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = a(require('./../utils/updateModel.js'));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(a) {
          var t = a(),
            r = document.querySelector('#input-cost'),
            s = new Cleave(r, {
              numeral: !0,
              numeralThousandsGroupStyle: 'thousand',
              delimiter: ' ',
            });
          return (
            s.setRawValue(t.cost),
            r.addEventListener('input', function () {
              var a = +s.getRawValue();
              (a < t.minPrice || a > t.maxPrice) &&
                r
                  .closest('.param__details')
                  .classList.add('param__details--error'),
                a >= t.minPrice &&
                  a <= t.maxPrice &&
                  r
                    .closest('.param__details')
                    .classList.remove('param__details--error'),
                (0, e.default)(r, { cost: a, onUpdate: 'inputCost' });
            }),
            r.addEventListener('change', function () {
              var a = +s.getRawValue();
              a > t.maxPrice &&
                (r
                  .closest('.param__details')
                  .classList.remove('param__details--error'),
                s.setRawValue(t.maxPrice)),
                a < t.minPrice &&
                  (r
                    .closest('.param__details')
                    .classList.remove('param__details--error'),
                  s.setRawValue(t.minPrice)),
                (0, e.default)(r, {
                  cost: +s.getRawValue(),
                  onUpdate: 'inputCost',
                });
            }),
            s
          );
        }
        var r = t;
        exports.default = r;
      },
      { './../utils/updateModel.js': 'HRGm' },
    ],
    MCNo: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = t(require('./../utils/updateModel.js'));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t) {
          var r = document.querySelector('#slider-cost'),
            o = t();
          return (
            noUiSlider.create(r, {
              start: o.cost,
              connect: 'lower',
              tooltips: !0,
              step: 1e5,
              range: {
                min: o.minPrice,
                '1%': [4e5, 1e5],
                '50%': [1e7, 5e5],
                max: o.maxPrice,
              },
              format: wNumb({ decimals: 0, thousand: ' ', suffix: '' }),
            }),
            r.noUiSlider.on('slide', function () {
              var t = r.noUiSlider.get();
              (t = t.split('.')[0]),
                (t = parseInt(String(t).replace(/ /g, ''))),
                (0, e.default)(r, { cost: t, onUpdate: 'costSlider' });
            }),
            r
          );
        }
        var o = r;
        exports.default = o;
      },
      { './../utils/updateModel.js': 'HRGm' },
    ],
    R3jP: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = a(require('../utils/updateModel.js'));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(a) {
          var t = document.querySelector('#input-downpayment'),
            n = new Cleave(t, {
              numeral: !0,
              numeralThousandsGroupStyle: 'thousand',
              delimiter: ' ',
            });
          return (
            n.setRawValue(a().payment),
            t.addEventListener('input', function () {
              var r = +n.getRawValue();
              console.log(r),
                (r < a().getMinPayment() || r > a().getMaxPayment()) &&
                  t
                    .closest('.param__details')
                    .classList.add('param__details--error'),
                r >= a().getMinPayment() &&
                  r <= a().getMaxPayment() &&
                  t
                    .closest('.param__details')
                    .classList.remove('param__details--error'),
                (0, e.default)(t, { payment: r, onUpdate: 'inputPayment' });
            }),
            t.addEventListener('change', function () {
              var r = +n.getRawValue();
              r > a().getMaxPayment() &&
                (t
                  .closest('.param__details')
                  .classList.remove('param__details--error'),
                n.setRawValue(a().getMaxPayment())),
                r < a().getMinPayment() &&
                  (t
                    .closest('.param__details')
                    .classList.remove('param__details--error'),
                  n.setRawValue(a().getMinPayment())),
                (0, e.default)(t, { payment: r, onUpdate: 'inputPayment' });
            }),
            n
          );
        }
        var n = t;
        exports.default = n;
      },
      { '../utils/updateModel.js': 'HRGm' },
    ],
    K5BG: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = t(require('./../utils/updateModel.js'));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t) {
          var r = document.querySelector('#slider-downpayment');
          return (
            noUiSlider.create(r, {
              start: 100 * t().paymentPercents,
              connect: 'lower',
              tooltips: !0,
              step: 1,
              range: {
                min: 100 * t().minPaymentPercents,
                max: 100 * t().maxPaymentPercents,
              },
              format: wNumb({ decimals: 0, thousand: ' ', suffix: '' }),
            }),
            r.noUiSlider.on('slide', function () {
              var t = r.noUiSlider.get();
              (t = t.split('.')[0]),
                (t = parseInt(String(t).replace(/ /g, ''))),
                (0, e.default)(r, {
                  paymentPercents: t,
                  onUpdate: 'paymentSlider',
                });
            }),
            r
          );
        }
        var n = r;
        exports.default = n;
      },
      { './../utils/updateModel.js': 'HRGm' },
    ],
    ahOl: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = a(require('./../utils/updateModel.js'));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(a) {
          var t = a(),
            r = document.querySelector('#input-term'),
            s = new Cleave(r, {
              numeral: !0,
              numeralThousandsGroupStyle: 'thousand',
              delimiter: ' ',
            });
          return (
            s.setRawValue(t.time),
            r.addEventListener('input', function () {
              var a = +s.getRawValue();
              console.log(a),
                (a < t.minYear || a > t.maxYear) &&
                  r
                    .closest('.param__details')
                    .classList.add('param__details--error'),
                a >= t.minYear &&
                  a <= t.maxYear &&
                  r
                    .closest('.param__details')
                    .classList.remove('param__details--error'),
                (0, e.default)(r, { time: a, onUpdate: 'inputTime' });
            }),
            r.addEventListener('change', function () {
              var a = +s.getRawValue();
              a > t.maxYear &&
                (r
                  .closest('.param__details')
                  .classList.remove('param__details--error'),
                s.setRawValue(t.maxYear)),
                a < t.minYear &&
                  (r
                    .closest('.param__details')
                    .classList.remove('param__details--error'),
                  s.setRawValue(t.minYear)),
                (0, e.default)(r, {
                  time: +s.getRawValue(),
                  onUpdate: 'inputTime',
                });
            }),
            s
          );
        }
        var r = t;
        exports.default = r;
      },
      { './../utils/updateModel.js': 'HRGm' },
    ],
    gQmY: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = void 0);
        var e = t(require('./../utils/updateModel.js'));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(t) {
          var r = document.querySelector('#slider-term'),
            i = t();
          return (
            noUiSlider.create(r, {
              start: i.time,
              connect: 'lower',
              tooltips: !0,
              step: 1,
              range: { min: i.minYear, max: i.maxYear },
              format: wNumb({ decimals: 0, thousand: ' ', suffix: '' }),
            }),
            r.noUiSlider.on('slide', function () {
              var t = r.noUiSlider.get();
              (t = t.split('.')[0]),
                (t = parseInt(String(t).replace(/ /g, ''))),
                (0, e.default)(r, { time: t, onUpdate: 'timeSlider' });
            }),
            r
          );
        }
        var i = r;
        exports.default = i;
      },
      { './../utils/updateModel.js': 'HRGm' },
    ],
    niua: [
      function (require, module, exports) {
        'use strict';
        var e = f(require('./model.js')),
          t = l(require('./view/updateResultsView.js')),
          r = l(require('./view/radioPrograms.js')),
          n = require('./view/utils.js'),
          a = l(require('./view/costInput.js')),
          i = l(require('./view/costRange.js')),
          u = l(require('./view/paymentInput.js')),
          o = l(require('./view/paymentRange.js')),
          s = l(require('./view/timeInput.js')),
          d = l(require('./view/timeRange.js'));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e) {
          if ('function' != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (p = function (e) {
            return e ? r : t;
          })(e);
        }
        function f(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e };
          var r = p(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
              u && (u.get || u.set)
                ? Object.defineProperty(n, i, u)
                : (n[i] = e[i]);
            }
          return (n.default = e), r && r.set(e, n), n;
        }
        window.onload = function () {
          var l = e.getData;
          (0, r.default)(l);
          var p = (0, a.default)(l),
            f = (0, i.default)(l),
            c = (0, u.default)(l),
            m = (0, o.default)(l),
            w = (0, s.default)(l),
            v = (0, d.default)(l);
          document.addEventListener('updateForm', function (r) {
            e.setData(r.detail);
            var a = e.getData(),
              i = e.getResults();
            !(function (e) {
              'radioProgram' === e.onUpdate &&
                ((0, n.updateMinPercents)(e),
                m.noUiSlider.updateOptions({
                  range: {
                    min: 100 * e.minPaymentPercents,
                    max: 100 * e.maxPaymentPercents,
                  },
                }));
              'inputCost' !== e.onUpdate && p.setRawValue(e.cost);
              'costSlider' !== e.onUpdate && f.noUiSlider.set(e.cost);
              'inputPayment' !== e.onUpdate && c.setRawValue(e.payment);
              'paymentSlider' !== e.onUpdate &&
                m.noUiSlider.set(100 * e.paymentPercents);
              'inputTime' !== e.onUpdate && w.setRawValue(e.time);
              'timeSlider' !== e.onUpdate && v.noUiSlider.set(e.time);
            })(a),
              (0, t.default)(i);
          });
        };
      },
      {
        './model.js': 'JDu1',
        './view/updateResultsView.js': 'WpxY',
        './view/radioPrograms.js': 'GLMY',
        './view/utils.js': 'QpXM',
        './view/costInput.js': 'BZIA',
        './view/costRange.js': 'MCNo',
        './view/paymentInput.js': 'R3jP',
        './view/paymentRange.js': 'K5BG',
        './view/timeInput.js': 'ahOl',
        './view/timeRange.js': 'gQmY',
      },
    ],
  },
  {},
  ['niua'],
  null
);
//# sourceMappingURL=/controller.js.map