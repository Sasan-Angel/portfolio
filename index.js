! function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 1)
}([function(e, t, n) {
  var r;
  ! function(t, n) {
    "use strict";
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, function(n, i) {
    "use strict";
    var o = [],
      s = n.document,
      a = Object.getPrototypeOf,
      l = o.slice,
      u = o.concat,
      c = o.push,
      f = o.indexOf,
      d = {},
      h = d.toString,
      p = d.hasOwnProperty,
      g = p.toString,
      m = g.call(Object),
      v = {},
      y = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
      },
      _ = function(e) {
        return null != e && e === e.window
      },
      b = {
        type: !0,
        src: !0,
        noModule: !0
      };

    function w(e, t, n) {
      var r, i = (t = t || s).createElement("script");
      if (i.text = e, n)
        for (r in b) n[r] && (i[r] = n[r]);
      t.head.appendChild(i).parentNode.removeChild(i)
    }

    function E(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e
    }
    var T = function(e, t) {
        return new T.fn.init(e, t)
      },
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(e) {
      var t = !!e && "length" in e && e.length,
        n = E(e);
      return !y(e) && !_(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    T.fn = T.prototype = {
      jquery: "3.3.1",
      constructor: T,
      length: 0,
      toArray: function() {
        return l.call(this)
      },
      get: function(e) {
        return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
        var t = T.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function(e) {
        return T.each(this, e)
      },
      map: function(e) {
        return this.pushStack(T.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function() {
        return this.pushStack(l.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: c,
      sort: o.sort,
      splice: o.splice
    }, T.extend = T.fn.extend = function() {
      var e, t, n, r, i, o, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;
      for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
        if (null != (e = arguments[a]))
          for (t in e) n = s[t], s !== (r = e[t]) && (u && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && T.isPlainObject(n) ? n : {}, s[t] = T.extend(u, o, r)) : void 0 !== r && (s[t] = r));
      return s
    }, T.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(!e || "[object Object]" !== h.call(e)) && (!(t = a(e)) || "function" == typeof(n = p.call(t, "constructor") && t.constructor) && g.call(n) === m)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function(e) {
        w(e)
      },
      each: function(e, t) {
        var n, r = 0;
        if (x(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else
          for (r in e)
            if (!1 === t.call(e[r], r, e[r])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(C, "")
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (x(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : f.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return e.length = i, e
      },
      grep: function(e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
        return r
      },
      map: function(e, t, n) {
        var r, i, o = 0,
          s = [];
        if (x(e))
          for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
        else
          for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return u.apply([], s)
      },
      guid: 1,
      support: v
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      d["[object " + t + "]"] = t.toLowerCase()
    });
    var A = function(e) {
      var t, n, r, i, o, s, a, l, u, c, f, d, h, p, g, m, v, y, _, b = "sizzle" + 1 * new Date,
        w = e.document,
        E = 0,
        T = 0,
        C = se(),
        x = se(),
        A = se(),
        S = function(e, t) {
          return e === t && (f = !0), 0
        },
        D = {}.hasOwnProperty,
        N = [],
        I = N.pop,
        O = N.push,
        k = N.push,
        L = N.slice,
        j = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
          return -1
        },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        H = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        q = new RegExp(H + "+", "g"),
        B = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
        F = new RegExp("^" + H + "*," + H + "*"),
        U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
        V = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
        K = new RegExp(W),
        $ = new RegExp("^" + R + "$"),
        Q = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + M),
          PSEUDO: new RegExp("^" + W),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + P + ")$", "i"),
          needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
        },
        Y = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        z = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
        ee = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        re = function() {
          d()
        },
        ie = ye(function(e) {
          return !0 === e.disabled && ("form" in e || "label" in e)
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        k.apply(N = L.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
      } catch (e) {
        k = {
          apply: N.length ? function(e, t) {
            O.apply(e, L.call(t))
          } : function(e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];);
            e.length = n - 1
          }
        }
      }

      function oe(e, t, r, i) {
        var o, a, u, c, f, p, v, y = t && t.ownerDocument,
          E = t ? t.nodeType : 9;
        if (r = r || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return r;
        if (!i && ((t ? t.ownerDocument || t : w) !== h && d(t), t = t || h, g)) {
          if (11 !== E && (f = X.exec(e)))
            if (o = f[1]) {
              if (9 === E) {
                if (!(u = t.getElementById(o))) return r;
                if (u.id === o) return r.push(u), r
              } else if (y && (u = y.getElementById(o)) && _(t, u) && u.id === o) return r.push(u), r
            } else {
              if (f[2]) return k.apply(r, t.getElementsByTagName(e)), r;
              if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(o)), r
            } if (n.qsa && !A[e + " "] && (!m || !m.test(e))) {
            if (1 !== E) y = t, v = e;
            else if ("object" !== t.nodeName.toLowerCase()) {
              for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), a = (p = s(e)).length; a--;) p[a] = "#" + c + " " + ve(p[a]);
              v = p.join(","), y = J.test(e) && ge(t.parentNode) || t
            }
            if (v) try {
              return k.apply(r, y.querySelectorAll(v)), r
            } catch (e) {} finally {
              c === b && t.removeAttribute("id")
            }
          }
        }
        return l(e.replace(B, "$1"), t, r, i)
      }

      function se() {
        var e = [];
        return function t(n, i) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
        }
      }

      function ae(e) {
        return e[b] = !0, e
      }

      function le(e) {
        var t = h.createElement("fieldset");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function ue(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
      }

      function ce(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function fe(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }

      function de(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function he(e) {
        return function(t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
        }
      }

      function pe(e) {
        return ae(function(t) {
          return t = +t, ae(function(n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
          })
        })
      }

      function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }
      for (t in n = oe.support = {}, o = oe.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
        }, d = oe.setDocument = function(e) {
          var t, i, s = e ? e.ownerDocument || e : w;
          return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !o(h), w !== h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = le(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), n.getElementsByTagName = le(function(e) {
            return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
          }), n.getElementsByClassName = z.test(h.getElementsByClassName), n.getById = le(function(e) {
            return p.appendChild(e).id = b, !h.getElementsByName || !h.getElementsByName(b).length
          }), n.getById ? (r.filter.ID = function(e) {
            var t = e.replace(Z, ee);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }, r.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && g) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }) : (r.filter.ID = function(e) {
            var t = e.replace(Z, ee);
            return function(e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }, r.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && g) {
              var n, r, i, o = t.getElementById(e);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
              }
              return []
            }
          }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var n, r = [],
              i = 0,
              o = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = o[i++];) 1 === n.nodeType && r.push(n);
              return r
            }
            return o
          }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
          }, v = [], m = [], (n.qsa = z.test(h.querySelectorAll)) && (le(function(e) {
            p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
          }), le(function(e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = h.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
          })), (n.matchesSelector = z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function(e) {
            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", W)
          }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = z.test(p.compareDocumentPosition), _ = t || z.test(p.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, S = t ? function(e, t) {
            if (e === t) return f = !0, 0;
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === h || e.ownerDocument === w && _(w, e) ? -1 : t === h || t.ownerDocument === w && _(w, t) ? 1 : c ? j(c, e) - j(c, t) : 0 : 4 & r ? -1 : 1)
          } : function(e, t) {
            if (e === t) return f = !0, 0;
            var n, r = 0,
              i = e.parentNode,
              o = t.parentNode,
              s = [e],
              a = [t];
            if (!i || !o) return e === h ? -1 : t === h ? 1 : i ? -1 : o ? 1 : c ? j(c, e) - j(c, t) : 0;
            if (i === o) return ce(e, t);
            for (n = e; n = n.parentNode;) s.unshift(n);
            for (n = t; n = n.parentNode;) a.unshift(n);
            for (; s[r] === a[r];) r++;
            return r ? ce(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0
          }, h) : h
        }, oe.matches = function(e, t) {
          return oe(e, null, null, t)
        }, oe.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== h && d(e), t = t.replace(V, "='$1']"), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
            var r = y.call(e, t);
            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (e) {}
          return oe(t, h, null, [e]).length > 0
        }, oe.contains = function(e, t) {
          return (e.ownerDocument || e) !== h && d(e), _(e, t)
        }, oe.attr = function(e, t) {
          (e.ownerDocument || e) !== h && d(e);
          var i = r.attrHandle[t.toLowerCase()],
            o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function(e) {
          return (e + "").replace(te, ne)
        }, oe.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function(e) {
          var t, r = [],
            i = 0,
            o = 0;
          if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) {
            for (; t = e[o++];) t === e[o] && (i = r.push(o));
            for (; i--;) e.splice(r[i], 1)
          }
          return c = null, e
        }, i = oe.getText = function(e) {
          var t, n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
            } else if (3 === o || 4 === o) return e.nodeValue
          } else
            for (; t = e[r++];) n += i(t);
          return n
        }, (r = oe.selectors = {
          cacheLength: 50,
          createPseudo: ae,
          match: Q,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(e) {
              return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, n = !e[6] && e[2];
              return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && K.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(Z, ee).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function(e) {
              var t = C[e + " "];
              return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && C(e, function(e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
            },
            ATTR: function(e, t, n) {
              return function(r) {
                var i = oe.attr(r, e);
                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
              }
            },
            CHILD: function(e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === r && 0 === i ? function(e) {
                return !!e.parentNode
              } : function(t, n, l) {
                var u, c, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  _ = !1;
                if (m) {
                  if (o) {
                    for (; g;) {
                      for (d = t; d = d[g];)
                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                      p = g = "only" === e && !p && "nextSibling"
                    }
                    return !0
                  }
                  if (p = [s ? m.firstChild : m.lastChild], s && y) {
                    for (_ = (h = (u = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (_ = h = 0) || p.pop();)
                      if (1 === d.nodeType && ++_ && d === t) {
                        c[e] = [E, h, _];
                        break
                      }
                  } else if (y && (_ = h = (u = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]), !1 === _)
                    for (;
                      (d = ++h && d && d[g] || (_ = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [E, _]), d !== t)););
                  return (_ -= i) === r || _ % r == 0 && _ / r >= 0
                }
              }
            },
            PSEUDO: function(e, t) {
              var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
              return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                for (var r, o = i(e, t), s = o.length; s--;) e[r = j(e, o[s])] = !(n[r] = o[s])
              }) : function(e) {
                return i(e, 0, n)
              }) : i
            }
          },
          pseudos: {
            not: ae(function(e) {
              var t = [],
                n = [],
                r = a(e.replace(B, "$1"));
              return r[b] ? ae(function(e, t, n, i) {
                for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
              }) : function(e, i, o) {
                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
              }
            }),
            has: ae(function(e) {
              return function(t) {
                return oe(e, t).length > 0
              }
            }),
            contains: ae(function(e) {
              return e = e.replace(Z, ee),
                function(t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                }
            }),
            lang: ae(function(e) {
              return $.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                function(t) {
                  var n;
                  do {
                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            }),
            target: function(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            },
            root: function(e) {
              return e === p
            },
            focus: function(e) {
              return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: he(!1),
            disabled: he(!0),
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) {
              return !r.pseudos.empty(e)
            },
            header: function(e) {
              return G.test(e.nodeName)
            },
            input: function(e) {
              return Y.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: pe(function() {
              return [0]
            }),
            last: pe(function(e, t) {
              return [t - 1]
            }),
            eq: pe(function(e, t, n) {
              return [n < 0 ? n + t : n]
            }),
            even: pe(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            }),
            odd: pe(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            }),
            lt: pe(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
              return e
            }),
            gt: pe(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
              return e
            })
          }
        }).pseudos.nth = r.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) r.pseudos[t] = fe(t);
      for (t in {
          submit: !0,
          reset: !0
        }) r.pseudos[t] = de(t);

      function me() {}

      function ve(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
      }

      function ye(e, t, n) {
        var r = t.dir,
          i = t.next,
          o = i || r,
          s = n && "parentNode" === o,
          a = T++;
        return t.first ? function(t, n, i) {
          for (; t = t[r];)
            if (1 === t.nodeType || s) return e(t, n, i);
          return !1
        } : function(t, n, l) {
          var u, c, f, d = [E, a];
          if (l) {
            for (; t = t[r];)
              if ((1 === t.nodeType || s) && e(t, n, l)) return !0
          } else
            for (; t = t[r];)
              if (1 === t.nodeType || s)
                if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                else {
                  if ((u = c[o]) && u[0] === E && u[1] === a) return d[2] = u[2];
                  if (c[o] = d, d[2] = e(t, n, l)) return !0
                } return !1
        }
      }

      function _e(e) {
        return e.length > 1 ? function(t, n, r) {
          for (var i = e.length; i--;)
            if (!e[i](t, n, r)) return !1;
          return !0
        } : e[0]
      }

      function be(e, t, n, r, i) {
        for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a)));
        return s
      }

      function we(e, t, n, r, i, o) {
        return r && !r[b] && (r = we(r)), i && !i[b] && (i = we(i, o)), ae(function(o, s, a, l) {
          var u, c, f, d = [],
            h = [],
            p = s.length,
            g = o || function(e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
              return n
            }(t || "*", a.nodeType ? [a] : a, []),
            m = !e || !o && t ? g : be(g, d, e, a, l),
            v = n ? i || (o ? e : p || r) ? [] : s : m;
          if (n && n(m, v, a, l), r)
            for (u = be(v, h), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
          if (o) {
            if (i || e) {
              if (i) {
                for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                i(null, v = [], u, l)
              }
              for (c = v.length; c--;)(f = v[c]) && (u = i ? j(o, f) : d[c]) > -1 && (o[u] = !(s[u] = f))
            }
          } else v = be(v === s ? v.splice(p, v.length) : v), i ? i(null, s, v, l) : k.apply(s, v)
        })
      }

      function Ee(e) {
        for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, c = ye(function(e) {
            return e === t
          }, a, !0), f = ye(function(e) {
            return j(t, e) > -1
          }, a, !0), d = [function(e, n, r) {
            var i = !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
            return t = null, i
          }]; l < o; l++)
          if (n = r.relative[e[l].type]) d = [ye(_e(d), n)];
          else {
            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
              for (i = ++l; i < o && !r.relative[e[i].type]; i++);
              return we(l > 1 && _e(d), l > 1 && ve(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(B, "$1"), n, l < i && Ee(e.slice(l, i)), i < o && Ee(e = e.slice(i)), i < o && ve(e))
            }
            d.push(n)
          } return _e(d)
      }
      return me.prototype = r.filters = r.pseudos, r.setFilters = new me, s = oe.tokenize = function(e, t) {
        var n, i, o, s, a, l, u, c = x[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, l = [], u = r.preFilter; a;) {
          for (s in n && !(i = F.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = U.exec(a)) && (n = i.shift(), o.push({
              value: n,
              type: i[0].replace(B, " ")
            }), a = a.slice(n.length)), r.filter) !(i = Q[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(), o.push({
            value: n,
            type: s,
            matches: i
          }), a = a.slice(n.length));
          if (!n) break
        }
        return t ? a.length : a ? oe.error(e) : x(e, l).slice(0)
      }, a = oe.compile = function(e, t) {
        var n, i = [],
          o = [],
          a = A[e + " "];
        if (!a) {
          for (t || (t = s(e)), n = t.length; n--;)(a = Ee(t[n]))[b] ? i.push(a) : o.push(a);
          (a = A(e, function(e, t) {
            var n = t.length > 0,
              i = e.length > 0,
              o = function(o, s, a, l, c) {
                var f, p, m, v = 0,
                  y = "0",
                  _ = o && [],
                  b = [],
                  w = u,
                  T = o || i && r.find.TAG("*", c),
                  C = E += null == w ? 1 : Math.random() || .1,
                  x = T.length;
                for (c && (u = s === h || s || c); y !== x && null != (f = T[y]); y++) {
                  if (i && f) {
                    for (p = 0, s || f.ownerDocument === h || (d(f), a = !g); m = e[p++];)
                      if (m(f, s || h, a)) {
                        l.push(f);
                        break
                      } c && (E = C)
                  }
                  n && ((f = !m && f) && v--, o && _.push(f))
                }
                if (v += y, n && y !== v) {
                  for (p = 0; m = t[p++];) m(_, b, s, a);
                  if (o) {
                    if (v > 0)
                      for (; y--;) _[y] || b[y] || (b[y] = I.call(l));
                    b = be(b)
                  }
                  k.apply(l, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                }
                return c && (E = C, u = w), _
              };
            return n ? ae(o) : o
          }(o, i))).selector = e
        }
        return a
      }, l = oe.select = function(e, t, n, i) {
        var o, l, u, c, f, d = "function" == typeof e && e,
          h = !i && s(e = d.selector || e);
        if (n = n || [], 1 === h.length) {
          if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
            if (!(t = (r.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])) return n;
            d && (t = t.parentNode), e = e.slice(l.shift().value.length)
          }
          for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]);)
            if ((f = r.find[c]) && (i = f(u.matches[0].replace(Z, ee), J.test(l[0].type) && ge(t.parentNode) || t))) {
              if (l.splice(o, 1), !(e = i.length && ve(l))) return k.apply(n, i), n;
              break
            }
        }
        return (d || a(e, h))(i, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n
      }, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!f, d(), n.sortDetached = le(function(e) {
        return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
      }), le(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || ue("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), n.attributes && le(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || ue("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), le(function(e) {
        return null == e.getAttribute("disabled")
      }) || ue(P, function(e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), oe
    }(n);
    T.find = A, T.expr = A.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = A.uniqueSort, T.text = A.getText, T.isXMLDoc = A.isXML, T.contains = A.contains, T.escapeSelector = A.escape;
    var S = function(e, t, n) {
        for (var r = [], i = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (i && T(e).is(n)) break;
            r.push(e)
          } return r
      },
      D = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      N = T.expr.match.needsContext;

    function I(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function k(e, t, n) {
      return y(t) ? T.grep(e, function(e, r) {
        return !!t.call(e, r, e) !== n
      }) : t.nodeType ? T.grep(e, function(e) {
        return e === t !== n
      }) : "string" != typeof t ? T.grep(e, function(e) {
        return f.call(t, e) > -1 !== n
      }) : T.filter(t, e, n)
    }
    T.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, T.fn.extend({
      find: function(e) {
        var t, n, r = this.length,
          i = this;
        if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
          for (t = 0; t < r; t++)
            if (T.contains(i[t], this)) return !0
        }));
        for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
        return r > 1 ? T.uniqueSort(n) : n
      },
      filter: function(e) {
        return this.pushStack(k(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(k(this, e || [], !0))
      },
      is: function(e) {
        return !!k(this, "string" == typeof e && N.test(e) ? T(e) : e || [], !1).length
      }
    });
    var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || L, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), O.test(r[1]) && T.isPlainObject(t))
            for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return (i = s.getElementById(r[2])) && (this[0] = i, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
    }).prototype = T.fn, L = T(s);
    var P = /^(?:parents|prev(?:Until|All))/,
      H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function R(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }
    T.fn.extend({
      has: function(e) {
        var t = T(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (T.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        var n, r = 0,
          i = this.length,
          o = [],
          s = "string" != typeof e && T(e);
        if (!N.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                o.push(n);
                break
              } return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o)
      },
      index: function(e) {
        return e ? "string" == typeof e ? f.call(T(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), T.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return S(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return S(e, "parentNode", n)
      },
      next: function(e) {
        return R(e, "nextSibling")
      },
      prev: function(e) {
        return R(e, "previousSibling")
      },
      nextAll: function(e) {
        return S(e, "nextSibling")
      },
      prevAll: function(e) {
        return S(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return S(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return S(e, "previousSibling", n)
      },
      siblings: function(e) {
        return D((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return D(e.firstChild)
      },
      contents: function(e) {
        return I(e, "iframe") ? e.contentDocument : (I(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
      }
    }, function(e, t) {
      T.fn[e] = function(n, r) {
        var i = T.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), this.length > 1 && (H[e] || T.uniqueSort(i), P.test(e) && i.reverse()), this.pushStack(i)
      }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function W(e) {
      return e
    }

    function q(e) {
      throw e
    }

    function B(e, t, n, r) {
      var i;
      try {
        e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
      } catch (e) {
        n.apply(void 0, [e])
      }
    }
    T.Callbacks = function(e) {
      e = "string" == typeof e ? function(e) {
        var t = {};
        return T.each(e.match(M) || [], function(e, n) {
          t[n] = !0
        }), t
      }(e) : T.extend({}, e);
      var t, n, r, i, o = [],
        s = [],
        a = -1,
        l = function() {
          for (i = i || e.once, r = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
          e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        },
        u = {
          add: function() {
            return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
              T.each(n, function(n, r) {
                y(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== E(r) && t(r)
              })
            }(arguments), n && !t && l()), this
          },
          remove: function() {
            return T.each(arguments, function(e, t) {
              for (var n;
                (n = T.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
            }), this
          },
          has: function(e) {
            return e ? T.inArray(e, o) > -1 : o.length > 0
          },
          empty: function() {
            return o && (o = []), this
          },
          disable: function() {
            return i = s = [], o = n = "", this
          },
          disabled: function() {
            return !o
          },
          lock: function() {
            return i = s = [], n || t || (o = n = ""), this
          },
          locked: function() {
            return !!i
          },
          fireWith: function(e, n) {
            return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
          },
          fire: function() {
            return u.fireWith(this, arguments), this
          },
          fired: function() {
            return !!r
          }
        };
      return u
    }, T.extend({
      Deferred: function(e) {
        var t = [
            ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
            ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
          ],
          r = "pending",
          i = {
            state: function() {
              return r
            },
            always: function() {
              return o.done(arguments).fail(arguments), this
            },
            catch: function(e) {
              return i.then(null, e)
            },
            pipe: function() {
              var e = arguments;
              return T.Deferred(function(n) {
                T.each(t, function(t, r) {
                  var i = y(e[r[4]]) && e[r[4]];
                  o[r[1]](function() {
                    var e = i && i.apply(this, arguments);
                    e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            then: function(e, r, i) {
              var o = 0;

              function s(e, t, r, i) {
                return function() {
                  var a = this,
                    l = arguments,
                    u = function() {
                      var n, u;
                      if (!(e < o)) {
                        if ((n = r.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                        u = n && ("object" == typeof n || "function" == typeof n) && n.then, y(u) ? i ? u.call(n, s(o, t, W, i), s(o, t, q, i)) : (o++, u.call(n, s(o, t, W, i), s(o, t, q, i), s(o, t, W, t.notifyWith))) : (r !== W && (a = void 0, l = [n]), (i || t.resolveWith)(a, l))
                      }
                    },
                    c = i ? u : function() {
                      try {
                        u()
                      } catch (n) {
                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== q && (a = void 0, l = [n]), t.rejectWith(a, l))
                      }
                    };
                  e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c))
                }
              }
              return T.Deferred(function(n) {
                t[0][3].add(s(0, n, y(i) ? i : W, n.notifyWith)), t[1][3].add(s(0, n, y(e) ? e : W)), t[2][3].add(s(0, n, y(r) ? r : q))
              }).promise()
            },
            promise: function(e) {
              return null != e ? T.extend(e, i) : i
            }
          },
          o = {};
        return T.each(t, function(e, n) {
          var s = n[2],
            a = n[5];
          i[n[1]] = s.add, a && s.add(function() {
            r = a
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function() {
            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
          }, o[n[0] + "With"] = s.fireWith
        }), i.promise(o), e && e.call(o, o), o
      },
      when: function(e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = l.call(arguments),
          o = T.Deferred(),
          s = function(e) {
            return function(n) {
              r[e] = this, i[e] = arguments.length > 1 ? l.call(arguments) : n, --t || o.resolveWith(r, i)
            }
          };
        if (t <= 1 && (B(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();
        for (; n--;) B(i[n], s(n), o.reject);
        return o.promise()
      }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(e, t) {
      n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, T.readyException = function(e) {
      n.setTimeout(function() {
        throw e
      })
    };
    var U = T.Deferred();

    function V() {
      s.removeEventListener("DOMContentLoaded", V), n.removeEventListener("load", V), T.ready()
    }
    T.fn.ready = function(e) {
      return U.then(e).catch(function(e) {
        T.readyException(e)
      }), this
    }, T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || U.resolveWith(s, [T]))
      }
    }), T.ready.then = U.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(T.ready) : (s.addEventListener("DOMContentLoaded", V), n.addEventListener("load", V));
    var K = function(e, t, n, r, i, o, s) {
        var a = 0,
          l = e.length,
          u = null == n;
        if ("object" === E(n))
          for (a in i = !0, n) K(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, y(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
            return u.call(T(e), n)
          })), t))
          for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
      },
      $ = /^-ms-/,
      Q = /-([a-z])/g;

    function Y(e, t) {
      return t.toUpperCase()
    }

    function G(e) {
      return e.replace($, "ms-").replace(Q, Y)
    }
    var z = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function X() {
      this.expando = T.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var r, i = this.cache(e);
        if ("string" == typeof t) i[G(t)] = n;
        else
          for (r in t) i[G(r)] = t[r];
        return i
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
      },
      access: function(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
            for (; n--;) delete r[t[n]]
          }(void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !T.isEmptyObject(t)
      }
    };
    var J = new X,
      Z = new X,
      ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      te = /[A-Z]/g;

    function ne(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
        if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
          try {
            n = function(e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
            }(n)
          } catch (e) {}
          Z.set(e, t, n)
        } else n = void 0;
      return n
    }
    T.extend({
      hasData: function(e) {
        return Z.hasData(e) || J.hasData(e)
      },
      data: function(e, t, n) {
        return Z.access(e, t, n)
      },
      removeData: function(e, t) {
        Z.remove(e, t)
      },
      _data: function(e, t, n) {
        return J.access(e, t, n)
      },
      _removeData: function(e, t) {
        J.remove(e, t)
      }
    }), T.fn.extend({
      data: function(e, t) {
        var n, r, i, o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (this.length && (i = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
            J.set(o, "hasDataAttrs", !0)
          }
          return i
        }
        return "object" == typeof e ? this.each(function() {
          Z.set(this, e)
        }) : K(this, function(t) {
          var n;
          if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
          this.each(function() {
            Z.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          Z.remove(this, e)
        })
      }
    }), T.extend({
      queue: function(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, T.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = T.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = T._queueHooks(e, t);
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
          T.dequeue(e, t)
        }, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return J.get(e, n) || J.access(e, n, {
          empty: T.Callbacks("once memory").add(function() {
            J.remove(e, [t + "queue", n])
          })
        })
      }
    }), T.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var n = T.queue(this, e, t);
          T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          T.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, r = 1,
          i = T.Deferred(),
          o = this,
          s = this.length,
          a = function() {
            --r || i.resolveWith(o, [o])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = J.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
        return a(), i.promise(t)
      }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display")
      },
      ae = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
        return i
      };

    function le(e, t, n, r) {
      var i, o, s = 20,
        a = r ? function() {
          return r.cur()
        } : function() {
          return T.css(e, t, "")
        },
        l = a(),
        u = n && n[3] || (T.cssNumber[t] ? "" : "px"),
        c = (T.cssNumber[t] || "px" !== u && +l) && ie.exec(T.css(e, t));
      if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; s--;) T.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
        c *= 2, T.style(e, t, c + u), n = n || []
      }
      return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    var ue = {};

    function ce(e) {
      var t, n = e.ownerDocument,
        r = e.nodeName,
        i = ue[r];
      return i || (t = n.body.appendChild(n.createElement(r)), i = T.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i)
    }

    function fe(e, t) {
      for (var n, r, i = [], o = 0, s = e.length; o < s; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && se(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
      for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
      return e
    }
    T.fn.extend({
      show: function() {
        return fe(this, !0)
      },
      hide: function() {
        return fe(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          se(this) ? T(this).show() : T(this).hide()
        })
      }
    });
    var de = /^(?:checkbox|radio)$/i,
      he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      pe = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function me(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && I(e, t) ? T.merge([e], n) : n
    }

    function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, _e, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
      for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
        if ((o = e[h]) || 0 === o)
          if ("object" === E(o)) T.merge(d, o.nodeType ? [o] : o);
          else if (be.test(o)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (he.exec(o) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
        T.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
      } else d.push(t.createTextNode(o));
      for (f.textContent = "", h = 0; o = d[h++];)
        if (r && T.inArray(o, r) > -1) i && i.push(o);
        else if (u = T.contains(o.ownerDocument, o), s = me(f.appendChild(o), "script"), u && ve(s), n)
        for (c = 0; o = s[c++];) pe.test(o.type || "") && n.push(o);
      return f
    }
    ye = s.createDocumentFragment().appendChild(s.createElement("div")), (_e = s.createElement("input")).setAttribute("type", "radio"), _e.setAttribute("checked", "checked"), _e.setAttribute("name", "t"), ye.appendChild(_e), v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ee = s.documentElement,
      Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      xe = /^([^.]*)(?:\.(.+)|)/;

    function Ae() {
      return !0
    }

    function Se() {
      return !1
    }

    function De() {
      try {
        return s.activeElement
      } catch (e) {}
    }

    function Ne(e, t, n, r, i, o) {
      var s, a;
      if ("object" == typeof t) {
        for (a in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, a, n, r, t[a], o);
        return e
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
      else if (!i) return e;
      return 1 === o && (s = i, (i = function(e) {
        return T().off(e), s.apply(this, arguments)
      }).guid = s.guid || (s.guid = T.guid++)), e.each(function() {
        T.event.add(this, t, i, r, n)
      })
    }
    T.event = {
      global: {},
      add: function(e, t, n, r, i) {
        var o, s, a, l, u, c, f, d, h, p, g, m = J.get(e);
        if (m)
          for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(Ee, i), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
              return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
            }), u = (t = (t || "").match(M) || [""]).length; u--;) h = g = (a = xe.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = T.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = T.event.special[h] || {}, c = T.extend({
            type: h,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && T.expr.match.needsContext.test(i),
            namespace: p.join(".")
          }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), T.event.global[h] = !0)
      },
      remove: function(e, t, n, r, i) {
        var o, s, a, l, u, c, f, d, h, p, g, m = J.hasData(e) && J.get(e);
        if (m && (l = m.events)) {
          for (u = (t = (t || "").match(M) || [""]).length; u--;)
            if (h = g = (a = xe.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
              for (f = T.event.special[h] || {}, d = l[h = (r ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
              s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || T.removeEvent(e, h, m.handle), delete l[h])
            } else
              for (h in l) T.event.remove(e, h + t[u], n, r, !0);
          T.isEmptyObject(l) && J.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        var t, n, r, i, o, s, a = T.event.fix(e),
          l = new Array(arguments.length),
          u = (J.get(this, "events") || {})[a.type] || [],
          c = T.event.special[a.type] || {};
        for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
          for (s = T.event.handlers.call(this, a, u), t = 0;
            (i = s[t++]) && !a.isPropagationStopped();)
            for (a.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, a), a.result
        }
      },
      handlers: function(e, t) {
        var n, r, i, o, s, a = [],
          l = t.delegateCount,
          u = e.target;
        if (l && u.nodeType && !("click" === e.type && e.button >= 1))
          for (; u !== this; u = u.parentNode || this)
            if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
              for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? T(i, this).index(u) > -1 : T.find(i, this, null, [u]).length), s[i] && o.push(r);
              o.length && a.push({
                elem: u,
                handlers: o
              })
            } return u = this, l < t.length && a.push({
          elem: u,
          handlers: t.slice(l)
        }), a
      },
      addProp: function(e, t) {
        Object.defineProperty(T.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: y(t) ? function() {
            if (this.originalEvent) return t(this.originalEvent)
          } : function() {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            })
          }
        })
      },
      fix: function(e) {
        return e[T.expando] ? e : new T.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== De() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === De() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if ("checkbox" === this.type && this.click && I(this, "input")) return this.click(), !1
          },
          _default: function(e) {
            return I(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, T.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, T.Event = function(e, t) {
      if (!(this instanceof T.Event)) return new T.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, T.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
        var t = e.button;
        return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, T.event.addProp), T.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      T.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, r = e.relatedTarget,
            i = e.handleObj;
          return r && (r === this || T.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), T.fn.extend({
      on: function(e, t, n, r) {
        return Ne(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
        return Ne(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
          T.event.remove(this, e, n, t)
        })
      }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Oe = /<script|<style|<link/i,
      ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
      return I(e, "table") && I(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }

    function Pe(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Re(e, t) {
      var n, r, i, o, s, a, l, u;
      if (1 === t.nodeType) {
        if (J.hasData(e) && (o = J.access(e), s = J.set(t, o), u = o.events))
          for (i in delete s.handle, s.events = {}, u)
            for (n = 0, r = u[i].length; n < r; n++) T.event.add(t, i, u[i][n]);
        Z.hasData(e) && (a = Z.access(e), l = T.extend({}, a), Z.set(t, l))
      }
    }

    function Me(e, t, n, r) {
      t = u.apply([], t);
      var i, o, s, a, l, c, f = 0,
        d = e.length,
        h = d - 1,
        p = t[0],
        g = y(p);
      if (g || d > 1 && "string" == typeof p && !v.checkClone && ke.test(p)) return e.each(function(i) {
        var o = e.eq(i);
        g && (t[0] = p.call(this, i, o.html())), Me(o, t, n, r)
      });
      if (d && (o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
        for (a = (s = T.map(me(i, "script"), Pe)).length; f < d; f++) l = i, f !== h && (l = T.clone(l, !0, !0), a && T.merge(s, me(l, "script"))), n.call(e[f], l, f);
        if (a)
          for (c = s[s.length - 1].ownerDocument, T.map(s, He), f = 0; f < a; f++) l = s[f], pe.test(l.type || "") && !J.access(l, "globalEval") && T.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : w(l.textContent.replace(Le, ""), c, l))
      }
      return e
    }

    function We(e, t, n) {
      for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(me(r)), r.parentNode && (n && T.contains(r.ownerDocument, r) && ve(me(r, "script")), r.parentNode.removeChild(r));
      return e
    }
    T.extend({
      htmlPrefilter: function(e) {
        return e.replace(Ie, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var r, i, o, s, a, l, u, c = e.cloneNode(!0),
          f = T.contains(e.ownerDocument, e);
        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
          for (s = me(c), r = 0, i = (o = me(e)).length; r < i; r++) a = o[r], l = s[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
        if (t)
          if (n)
            for (o = o || me(e), s = s || me(c), r = 0, i = o.length; r < i; r++) Re(o[r], s[r]);
          else Re(e, c);
        return (s = me(c, "script")).length > 0 && ve(s, !f && me(e, "script")), c
      },
      cleanData: function(e) {
        for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (z(n)) {
            if (t = n[J.expando]) {
              if (t.events)
                for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
              n[J.expando] = void 0
            }
            n[Z.expando] && (n[Z.expando] = void 0)
          }
      }
    }), T.fn.extend({
      detach: function(e) {
        return We(this, e, !0)
      },
      remove: function(e) {
        return We(this, e)
      },
      text: function(e) {
        return K(this, function(e) {
          return void 0 === e ? T.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return Me(this, arguments, function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
        })
      },
      prepend: function() {
        return Me(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return Me(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return Me(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(me(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return T.clone(this, e, t)
        })
      },
      html: function(e) {
        return K(this, function(e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !Oe.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = T.htmlPrefilter(e);
            try {
              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(me(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return Me(this, arguments, function(t) {
          var n = this.parentNode;
          T.inArray(this, e) < 0 && (T.cleanData(me(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), T.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      T.fn[e] = function(e) {
        for (var n, r = [], i = T(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), T(i[s])[t](n), c.apply(r, n.get());
        return this.pushStack(r)
      }
    });
    var qe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      Be = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
      },
      Fe = new RegExp(oe.join("|"), "i");

    function Ue(e, t, n) {
      var r, i, o, s, a = e.style;
      return (n = n || Be(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (s = T.style(e, t)), !v.pixelBoxStyles() && qe.test(s) && Fe.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Ve(e, t) {
      return {
        get: function() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get
        }
      }
    }! function() {
      function e() {
        if (c) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ee.appendChild(u).appendChild(c);
          var e = n.getComputedStyle(c);
          r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 36 === c.offsetWidth || "absolute", Ee.removeChild(u), c = null
        }
      }

      function t(e) {
        return Math.round(parseFloat(e))
      }
      var r, i, o, a, l, u = s.createElement("div"),
        c = s.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(v, {
        boxSizingReliable: function() {
          return e(), i
        },
        pixelBoxStyles: function() {
          return e(), a
        },
        pixelPosition: function() {
          return e(), r
        },
        reliableMarginLeft: function() {
          return e(), l
        },
        scrollboxSize: function() {
          return e(), o
        }
      }))
    }();
    var Ke = /^(none|table(?!-c[ea]).+)/,
      $e = /^--/,
      Qe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Ye = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Ge = ["Webkit", "Moz", "ms"],
      ze = s.createElement("div").style;

    function Xe(e) {
      var t = T.cssProps[e];
      return t || (t = T.cssProps[e] = function(e) {
        if (e in ze) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
          if ((e = Ge[n] + t) in ze) return e
      }(e) || e), t
    }

    function Je(e, t, n) {
      var r = ie.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
      var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; s < 4; s += 2) "margin" === n && (l += T.css(e, n + oe[s], !0, i)), r ? ("content" === n && (l -= T.css(e, "padding" + oe[s], !0, i)), "margin" !== n && (l -= T.css(e, "border" + oe[s] + "Width", !0, i))) : (l += T.css(e, "padding" + oe[s], !0, i), "padding" !== n ? l += T.css(e, "border" + oe[s] + "Width", !0, i) : a += T.css(e, "border" + oe[s] + "Width", !0, i));
      return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function et(e, t, n) {
      var r = Be(e),
        i = Ue(e, t, r),
        o = "border-box" === T.css(e, "boxSizing", !1, r),
        s = o;
      if (qe.test(i)) {
        if (!n) return i;
        i = "auto"
      }
      return s = s && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === T.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
    }

    function tt(e, t, n, r, i) {
      return new tt.prototype.init(e, t, n, r, i)
    }
    T.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = Ue(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i, o, s, a = G(t),
            l = $e.test(t),
            u = e.style;
          if (l || (t = Xe(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
          "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (T.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
        }
      },
      css: function(e, t, n, r) {
        var i, o, s, a = G(t);
        return $e.test(t) || (t = Xe(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ue(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
      }
    }), T.each(["height", "width"], function(e, t) {
      T.cssHooks[t] = {
        get: function(e, n, r) {
          if (n) return !Ke.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ae(e, Qe, function() {
            return et(e, t, r)
          })
        },
        set: function(e, n, r) {
          var i, o = Be(e),
            s = "border-box" === T.css(e, "boxSizing", !1, o),
            a = r && Ze(e, t, r, s, o);
          return s && v.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), a && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), Je(0, n, a)
        }
      }
    }), T.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px"
    }), T.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      T.cssHooks[e + t] = {
        expand: function(n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i
        }
      }, "margin" !== e && (T.cssHooks[e + t].set = Je)
    }), T.fn.extend({
      css: function(e, t) {
        return K(this, function(e, t, n) {
          var r, i, o = {},
            s = 0;
          if (Array.isArray(t)) {
            for (r = Be(e), i = t.length; s < i; s++) o[t[s]] = T.css(e, t[s], !1, r);
            return o
          }
          return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
        }, e, t, arguments.length > 1)
      }
    }), T.Tween = tt, tt.prototype = {
      constructor: tt,
      init: function(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = tt.propHooks[this.prop];
        return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
      }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
          T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, T.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, T.fx = tt.prototype.init, T.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

    function st() {
      rt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, T.fx.interval), T.fx.tick())
    }

    function at() {
      return n.setTimeout(function() {
        nt = void 0
      }), nt = Date.now()
    }

    function lt(e, t) {
      var n, r = 0,
        i = {
          height: e
        };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
      for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, s = i.length; o < s; o++)
        if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
      var r, i, o = 0,
        s = ct.prefilters.length,
        a = T.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (i) return !1;
          for (var t = nt || at(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(r);
          return a.notifyWith(e, [u, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
        },
        u = a.promise({
          elem: e,
          props: T.extend({}, t),
          opts: T.extend(!0, {
            specialEasing: {},
            easing: T.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: nt || at(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var r = T.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(r), r
          },
          stop: function(t) {
            var n = 0,
              r = t ? u.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) u.tweens[n].run(1);
            return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
          }
        }),
        c = u.props;
      for (! function(e, t) {
          var n, r, i, o, s;
          for (n in e)
            if (i = t[r = G(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = T.cssHooks[r]) && "expand" in s)
              for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
            else t[r] = i
        }(c, u.opts.specialEasing); o < s; o++)
        if (r = ct.prefilters[o].call(u, e, c, u.opts)) return y(r.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
      return T.map(c, ut, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      })), u
    }
    T.Animation = T.extend(ct, {
        tweeners: {
          "*": [function(e, t) {
            var n = this.createTween(e, t);
            return le(n.elem, e, ie.exec(t), n), n
          }]
        },
        tweener: function(e, t) {
          y(e) ? (t = e, e = ["*"]) : e = e.match(M);
          for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
          var r, i, o, s, a, l, u, c, f = "width" in t || "height" in t,
            d = this,
            h = {},
            p = e.style,
            g = e.nodeType && se(e),
            m = J.get(e, "fxshow");
          for (r in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
              s.unqueued || a()
            }), s.unqueued++, d.always(function() {
              d.always(function() {
                s.unqueued--, T.queue(e, "fx").length || s.empty.fire()
              })
            })), t)
            if (i = t[r], it.test(i)) {
              if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !m || void 0 === m[r]) continue;
                g = !0
              }
              h[r] = m && m[r] || T.style(e, r)
            } if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
            for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = J.get(e, "display")), "none" === (c = T.css(e, "display")) && (u ? c = u : (fe([e], !0), u = e.style.display || u, c = T.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (d.done(function() {
                p.display = u
              }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
              })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
              display: u
            }), o && (m.hidden = !g), g && fe([e], !0), d.done(function() {
              for (r in g || fe([e]), J.remove(e, "fxshow"), h) T.style(e, r, h[r])
            })), l = ut(g ? m[r] : 0, r, d), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
          t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
      }), T.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? T.extend({}, e) : {
          complete: n || !n && t || y(e) && e,
          duration: e,
          easing: n && t || t && !y(t) && t
        };
        return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
          y(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
        }, r
      }, T.fn.extend({
        fadeTo: function(e, t, n, r) {
          return this.filter(se).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r)
        },
        animate: function(e, t, n, r) {
          var i = T.isEmptyObject(e),
            o = T.speed(t, n, r),
            s = function() {
              var t = ct(this, T.extend({}, e), o);
              (i || J.get(this, "finish")) && t.stop(!0)
            };
          return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
          var r = function(e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = T.timers,
              s = J.get(this);
            if (i) s[i] && s[i].stop && r(s[i]);
            else
              for (i in s) s[i] && s[i].stop && ot.test(i) && r(s[i]);
            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
            !t && n || T.dequeue(this, e)
          })
        },
        finish: function(e) {
          return !1 !== e && (e = e || "fx"), this.each(function() {
            var t, n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = T.timers,
              s = r ? r.length : 0;
            for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
          })
        }
      }), T.each(["toggle", "show", "hide"], function(e, t) {
        var n = T.fn[t];
        T.fn[t] = function(e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i)
        }
      }), T.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        T.fn[e] = function(e, n, r) {
          return this.animate(t, e, n, r)
        }
      }), T.timers = [], T.fx.tick = function() {
        var e, t = 0,
          n = T.timers;
        for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(), nt = void 0
      }, T.fx.timer = function(e) {
        T.timers.push(e), T.fx.start()
      }, T.fx.interval = 13, T.fx.start = function() {
        rt || (rt = !0, st())
      }, T.fx.stop = function() {
        rt = null
      }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, T.fn.delay = function(e, t) {
        return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
          var i = n.setTimeout(t, e);
          r.stop = function() {
            n.clearTimeout(i)
          }
        })
      },
      function() {
        var e = s.createElement("input"),
          t = s.createElement("select").appendChild(s.createElement("option"));
        e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
      }();
    var ft, dt = T.expr.attrHandle;
    T.fn.extend({
      attr: function(e, t) {
        return K(this, T.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          T.removeAttr(this, e)
        })
      }
    }), T.extend({
      attr: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!v.radioValue && "radio" === t && I(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType)
          for (; n = i[r++];) e.removeAttribute(n)
      }
    }), ft = {
      set: function(e, t, n) {
        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = dt[t] || T.find.attr;
      dt[t] = function(e, t, r) {
        var i, o, s = t.toLowerCase();
        return r || (o = dt[s], dt[s] = i, i = null != n(e, t, r) ? s : null, dt[s] = o), i
      }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
      pt = /^(?:a|area)$/i;

    function gt(e) {
      return (e.match(M) || []).join(" ")
    }

    function mt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
    }
    T.fn.extend({
      prop: function(e, t) {
        return K(this, T.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[T.propFix[e] || e]
        })
      }
    }), T.extend({
      prop: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = T.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ht.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), v.optSelected || (T.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
      addClass: function(e) {
        var t, n, r, i, o, s, a, l = 0;
        if (y(e)) return this.each(function(t) {
          T(this).addClass(e.call(this, t, mt(this)))
        });
        if ((t = vt(e)).length)
          for (; n = this[l++];)
            if (i = mt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
              for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (a = gt(r)) && n.setAttribute("class", a)
            } return this
      },
      removeClass: function(e) {
        var t, n, r, i, o, s, a, l = 0;
        if (y(e)) return this.each(function(t) {
          T(this).removeClass(e.call(this, t, mt(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = vt(e)).length)
          for (; n = this[l++];)
            if (i = mt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
              for (s = 0; o = t[s++];)
                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
              i !== (a = gt(r)) && n.setAttribute("class", a)
            } return this
      },
      toggleClass: function(e, t) {
        var n = typeof e,
          r = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function(n) {
          T(this).toggleClass(e.call(this, n, mt(this), t), t)
        }) : this.each(function() {
          var t, i, o, s;
          if (r)
            for (i = 0, o = T(this), s = vt(e); t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++];)
          if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var yt = /\r/g;
    T.fn.extend({
      val: function(e) {
        var t, n, r, i = this[0];
        return arguments.length ? (r = y(e), this.each(function(n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function(e) {
            return null == e ? "" : e + ""
          })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
        })) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
      }
    }), T.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = T.find.attr(e, "value");
            return null != t ? t : gt(T.text(e))
          }
        },
        select: {
          get: function(e) {
            var t, n, r, i = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : i.length;
            for (r = o < 0 ? l : s ? o : 0; r < l; r++)
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                if (t = T(n).val(), s) return t;
                a.push(t)
              } return a
          },
          set: function(e, t) {
            for (var n, r, i = e.options, o = T.makeArray(t), s = i.length; s--;)((r = i[s]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o
          }
        }
      }
    }), T.each(["radio", "checkbox"], function() {
      T.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1
        }
      }, v.checkOn || (T.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    }), v.focusin = "onfocusin" in n;
    var _t = /^(?:focusinfocus|focusoutblur)$/,
      bt = function(e) {
        e.stopPropagation()
      };
    T.extend(T.event, {
      trigger: function(e, t, r, i) {
        var o, a, l, u, c, f, d, h, g = [r || s],
          m = p.call(e, "type") ? e.type : e,
          v = p.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = h = l = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !_t.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[T.expando] ? e : new T.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : T.makeArray(t, [e]), d = T.event.special[m] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
          if (!i && !d.noBubble && !_(r)) {
            for (u = d.delegateType || m, _t.test(u + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
            l === (r.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n)
          }
          for (o = 0;
            (a = g[o++]) && !e.isPropagationStopped();) h = a, e.type = o > 1 ? u : d.bindType || m, (f = (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) && f.apply(a, t), (f = c && a[c]) && f.apply && z(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
          return e.type = m, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !z(r) || c && y(r[m]) && !_(r) && ((l = r[c]) && (r[c] = null), T.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, bt), r[m](), e.isPropagationStopped() && h.removeEventListener(m, bt), T.event.triggered = void 0, l && (r[c] = l)), e.result
        }
      },
      simulate: function(e, t, n) {
        var r = T.extend(new T.Event, n, {
          type: e,
          isSimulated: !0
        });
        T.event.trigger(r, null, t)
      }
    }), T.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          T.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return T.event.trigger(e, t, n, !0)
      }
    }), v.focusin || T.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        T.event.simulate(t, e.target, T.event.fix(e))
      };
      T.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this,
            i = J.access(r, t);
          i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
        },
        teardown: function() {
          var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;
          i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
        }
      }
    });
    var wt = n.location,
      Et = Date.now(),
      Tt = /\?/;
    T.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
    };
    var Ct = /\[\]$/,
      xt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      St = /^(?:input|select|textarea|keygen)/i;

    function Dt(e, t, n, r) {
      var i;
      if (Array.isArray(t)) T.each(t, function(t, i) {
        n || Ct.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
      });
      else if (n || "object" !== E(t)) r(e, t);
      else
        for (i in t) Dt(e + "[" + i + "]", t[i], n, r)
    }
    T.param = function(e, t) {
      var n, r = [],
        i = function(e, t) {
          var n = y(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
        i(this.name, this.value)
      });
      else
        for (n in e) Dt(n, e[n], t, i);
      return r.join("&")
    }, T.fn.extend({
      serialize: function() {
        return T.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !T(this).is(":disabled") && St.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
        }).map(function(e, t) {
          var n = T(this).val();
          return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(xt, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(xt, "\r\n")
          }
        }).get()
      }
    });
    var Nt = /%20/g,
      It = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      jt = /^\/\//,
      Pt = {},
      Ht = {},
      Rt = "*/".concat("*"),
      Mt = s.createElement("a");

    function Wt(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r, i = 0,
          o = t.toLowerCase().match(M) || [];
        if (y(n))
          for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
    }

    function qt(e, t, n, r) {
      var i = {},
        o = e === Ht;

      function s(a) {
        var l;
        return i[a] = !0, T.each(e[a] || [], function(e, a) {
          var u = a(t, n, r);
          return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
        }), l
      }
      return s(t.dataTypes[0]) || !i["*"] && s("*")
    }

    function Bt(e, t) {
      var n, r, i = T.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && T.extend(!0, e, r), e
    }
    Mt.href = wt.href, T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? Bt(Bt(e, T.ajaxSettings), t) : Bt(T.ajaxSettings, e)
      },
      ajaxPrefilter: Wt(Pt),
      ajaxTransport: Wt(Ht),
      ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var r, i, o, a, l, u, c, f, d, h, p = T.ajaxSetup({}, t),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? T(g) : T.event,
          v = T.Deferred(),
          y = T.Callbacks("once memory"),
          _ = p.statusCode || {},
          b = {},
          w = {},
          E = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (c) {
                if (!a)
                  for (a = {}; t = kt.exec(o);) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return c ? o : null
            },
            setRequestHeader: function(e, t) {
              return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
            },
            overrideMimeType: function(e) {
              return null == c && (p.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (c) C.always(e[C.status]);
                else
                  for (t in e) _[t] = [_[t], e[t]];
              return this
            },
            abort: function(e) {
              var t = e || E;
              return r && r.abort(t), x(0, t), this
            }
          };
        if (v.promise(C), p.url = ((e || p.url || wt.href) + "").replace(jt, wt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""], null == p.crossDomain) {
          u = s.createElement("a");
          try {
            u.href = p.url, u.href = u.href, p.crossDomain = Mt.protocol + "//" + Mt.host != u.protocol + "//" + u.host
          } catch (e) {
            p.crossDomain = !0
          }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)), qt(Pt, p, t, C), c) return C;
        for (d in (f = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Lt.test(p.type), i = p.url.replace(It, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Nt, "+")) : (h = p.url.slice(i.length), p.data && (p.processData || "string" == typeof p.data) && (i += (Tt.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (i = i.replace(Ot, "$1"), h = (Tt.test(i) ? "&" : "?") + "_=" + Et++ + h), p.url = i + h), p.ifModified && (T.lastModified[i] && C.setRequestHeader("If-Modified-Since", T.lastModified[i]), T.etag[i] && C.setRequestHeader("If-None-Match", T.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(d, p.headers[d]);
        if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || c)) return C.abort();
        if (E = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), r = qt(Ht, p, t, C)) {
          if (C.readyState = 1, f && m.trigger("ajaxSend", [C, p]), c) return C;
          p.async && p.timeout > 0 && (l = n.setTimeout(function() {
            C.abort("timeout")
          }, p.timeout));
          try {
            c = !1, r.send(b, x)
          } catch (e) {
            if (c) throw e;
            x(-1, e)
          }
        } else x(-1, "No Transport");

        function x(e, t, s, a) {
          var u, d, h, b, w, E = t;
          c || (c = !0, l && n.clearTimeout(l), r = void 0, o = a || "", C.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (b = function(e, t, n) {
            for (var r, i, o, s, a = e.contents, l = e.dataTypes;
              "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
              for (i in a)
                if (a[i] && a[i].test(r)) {
                  l.unshift(i);
                  break
                } if (l[0] in n) o = l[0];
            else {
              for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                  o = i;
                  break
                }
                s || (s = i)
              }
              o = o || s
            }
            if (o) return o !== l[0] && l.unshift(o), n[o]
          }(p, C, s)), b = function(e, t, n, r) {
            var i, o, s, a, l, u = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
            for (o = c.shift(); o;)
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
              if (!(s = u[l + " " + o] || u["* " + o]))
                for (i in u)
                  if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                    !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));
                    break
                  } if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                  t = s(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + o
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(p, b, C, u), u ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (T.lastModified[i] = w), (w = C.getResponseHeader("etag")) && (T.etag[i] = w)), 204 === e || "HEAD" === p.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = b.state, d = b.data, u = !(h = b.error))) : (h = E, !e && E || (E = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || E) + "", u ? v.resolveWith(g, [d, E, C]) : v.rejectWith(g, [C, E, h]), C.statusCode(_), _ = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? d : h]), y.fireWith(g, [C, E]), f && (m.trigger("ajaxComplete", [C, p]), --T.active || T.event.trigger("ajaxStop")))
        }
        return C
      },
      getJSON: function(e, t, n) {
        return T.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return T.get(e, void 0, t, "script")
      }
    }), T.each(["get", "post"], function(e, t) {
      T[t] = function(e, n, r, i) {
        return y(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
          url: e,
          type: t,
          dataType: i,
          data: n,
          success: r
        }, T.isPlainObject(e) && e))
      }
    }), T._evalUrl = function(e) {
      return T.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }, T.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this
      },
      wrapInner: function(e) {
        return y(e) ? this.each(function(t) {
          T(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = T(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = y(e);
        return this.each(function(n) {
          T(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          T(this).replaceWith(this.childNodes)
        }), this
      }
    }), T.expr.pseudos.hidden = function(e) {
      return !T.expr.pseudos.visible(e)
    }, T.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, T.ajaxSettings.xhr = function() {
      try {
        return new n.XMLHttpRequest
      } catch (e) {}
    };
    var Ft = {
        0: 200,
        1223: 204
      },
      Ut = T.ajaxSettings.xhr();
    v.cors = !!Ut && "withCredentials" in Ut, v.ajax = Ut = !!Ut, T.ajaxTransport(function(e) {
      var t, r;
      if (v.cors || Ut && !e.crossDomain) return {
        send: function(i, o) {
          var s, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) a[s] = e.xhrFields[s];
          for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(s, i[s]);
          t = function(e) {
            return function() {
              t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()))
            }
          }, a.onload = t(), r = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
            4 === a.readyState && n.setTimeout(function() {
              t && r()
            })
          }, t = t("abort");
          try {
            a.send(e.hasContent && e.data || null)
          } catch (e) {
            if (t) throw e
          }
        },
        abort: function() {
          t && t()
        }
      }
    }), T.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
    }), T.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return T.globalEval(e), e
        }
      }
    }), T.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), T.ajaxTransport("script", function(e) {
      var t, n;
      if (e.crossDomain) return {
        send: function(r, i) {
          t = T("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function(e) {
            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
          }), s.head.appendChild(t[0])
        },
        abort: function() {
          n && n()
        }
      }
    });
    var Vt, Kt = [],
      $t = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Kt.pop() || T.expando + "_" + Et++;
        return this[e] = !0, e
      }
    }), T.ajaxPrefilter("json jsonp", function(e, t, r) {
      var i, o, s, a = !1 !== e.jsonp && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace($t, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
        return s || T.error(i + " was not called"), s[0]
      }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
        s = arguments
      }, r.always(function() {
        void 0 === o ? T(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Kt.push(i)), s && y(o) && o(s[0]), s = o = void 0
      }), "script"
    }), v.createHTMLDocument = ((Vt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), T.parseHTML = function(e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(r)) : t = s), i = O.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && T(o).remove(), T.merge([], i.childNodes)));
      var r, i, o
    }, T.fn.load = function(e, t, n) {
      var r, i, o, s = this,
        a = e.indexOf(" ");
      return a > -1 && (r = gt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && T.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        o = arguments, s.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
        s.each(function() {
          n.apply(this, o || [e.responseText, t, e])
        })
      }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      T.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), T.expr.pseudos.animated = function(e) {
      return T.grep(T.timers, function(t) {
        return e === t.elem
      }).length
    }, T.offset = {
      setOffset: function(e, t, n) {
        var r, i, o, s, a, l, u = T.css(e, "position"),
          c = T(e),
          f = {};
        "static" === u && (e.style.position = "relative"), a = c.offset(), o = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), y(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
      }
    }, T.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          T.offset.setOffset(this, e, t)
        });
        var t, n, r = this[0];
        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function() {
        if (this[0]) {
          var e, t, n, r = this[0],
            i = {
              top: 0,
              left: 0
            };
          if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0), i.left += T.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - i.top - T.css(r, "marginTop", !0),
            left: t.left - i.left - T.css(r, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
          return e || Ee
        })
      }
    }), T.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var n = "pageYOffset" === t;
      T.fn[e] = function(r) {
        return K(this, function(e, r, i) {
          var o;
          if (_(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
          o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
        }, e, r, arguments.length)
      }
    }), T.each(["top", "left"], function(e, t) {
      T.cssHooks[t] = Ve(v.pixelPosition, function(e, n) {
        if (n) return n = Ue(e, t), qe.test(n) ? T(e).position()[t] + "px" : n
      })
    }), T.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      T.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, r) {
        T.fn[r] = function(i, o) {
          var s = arguments.length && (n || "boolean" != typeof i),
            a = n || (!0 === i || !0 === o ? "margin" : "border");
          return K(this, function(t, n, i) {
            var o;
            return _(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, a) : T.style(t, n, i, a)
          }, t, s ? i : void 0, s)
        }
      })
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      T.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), T.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), T.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    }), T.proxy = function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = l.call(arguments, 2), (i = function() {
        return e.apply(t || this, r.concat(l.call(arguments)))
      }).guid = e.guid = e.guid || T.guid++, i
    }, T.holdReady = function(e) {
      e ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = I, T.isFunction = y, T.isWindow = _, T.camelCase = G, T.type = E, T.now = Date.now, T.isNumeric = function(e) {
      var t = T.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, void 0 === (r = function() {
      return T
    }.apply(t, [])) || (e.exports = r);
    var Qt = n.jQuery,
      Yt = n.$;
    return T.noConflict = function(e) {
      return n.$ === T && (n.$ = Yt), e && n.jQuery === T && (n.jQuery = Qt), T
    }, i || (n.jQuery = n.$ = T), T
  })
}, function(e, t, n) {
  n(2), e.exports = n(6)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(0),
    i = (n.n(r), n(3)),
    o = (n.n(i), document.querySelectorAll(".has-dropdown")),
    s = document.querySelectorAll(".dropdown-toggle"),
    a = !0,
    l = !1,
    u = void 0;
  try {
    for (var c, f = s[Symbol.iterator](); !(a = (c = f.next()).done); a = !0) {
      c.value.addEventListener("click", function() {
        window.location.href = this.href
      })
    }
  } catch (e) {
    l = !0, u = e
  } finally {
    try {
      !a && f.return && f.return()
    } finally {
      if (l) throw u
    }
  }
  if (o) {
    var d = !0,
      h = !1,
      p = void 0;
    try {
      for (var g, m = o[Symbol.iterator](); !(d = (g = m.next()).done); d = !0) {
        var v = g.value.querySelector(".navbar-nav");
        v && (v.className = "dropdown-menu", v.querySelectorAll(".nav-item").className = "dropdown-item")
      }
    } catch (e) {
      h = !0, p = e
    } finally {
      try {
        !d && m.return && m.return()
      } finally {
        if (h) throw p
      }
    }
  }
}, function(e, t, n) {
  (function(e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function i(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e
    }

    function o() {
      return (o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = function(e) {
        var t = !1;

        function n(t) {
          var n = this,
            i = !1;
          return e(this).one(r.TRANSITION_END, function() {
            i = !0
          }), setTimeout(function() {
            i || r.triggerTransitionEnd(n)
          }, t), this
        }
        var r = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function(e) {
            do {
              e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
          },
          getSelectorFromElement: function(t) {
            var n = t.getAttribute("data-target");
            n && "#" !== n || (n = t.getAttribute("href") || ""), "#" === n.charAt(0) && (n = function(t) {
              return t = "function" == typeof e.escapeSelector ? e.escapeSelector(t).substr(1) : t.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")
            }(n));
            try {
              return e(document).find(n).length > 0 ? n : null
            } catch (e) {
              return null
            }
          },
          reflow: function(e) {
            return e.offsetHeight
          },
          triggerTransitionEnd: function(n) {
            e(n).trigger(t.end)
          },
          supportsTransitionEnd: function() {
            return Boolean(t)
          },
          isElement: function(e) {
            return (e[0] || e).nodeType
          },
          typeCheckConfig: function(e, t, n) {
            for (var i in n)
              if (Object.prototype.hasOwnProperty.call(n, i)) {
                var o = n[i],
                  s = t[i],
                  a = s && r.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
              } var l
          }
        };
        return t = ("undefined" == typeof window || !window.QUnit) && {
          end: "transitionend"
        }, e.fn.emulateTransitionEnd = n, r.supportsTransitionEnd() && (e.event.special[r.TRANSITION_END] = {
          bindType: t.end,
          delegateType: t.end,
          handle: function(t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
          }
        }), r
      }(t),
      a = function(e) {
        var t = e.fn.alert,
          n = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
          },
          r = "alert",
          o = "fade",
          a = "show",
          l = function() {
            function t(e) {
              this._element = e
            }
            var l = t.prototype;
            return l.close = function(e) {
              e = e || this._element;
              var t = this._getRootElement(e);
              this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, l.dispose = function() {
              e.removeData(this._element, "bs.alert"), this._element = null
            }, l._getRootElement = function(t) {
              var n = s.getSelectorFromElement(t),
                i = !1;
              return n && (i = e(n)[0]), i || (i = e(t).closest("." + r)[0]), i
            }, l._triggerCloseEvent = function(t) {
              var r = e.Event(n.CLOSE);
              return e(t).trigger(r), r
            }, l._removeElement = function(t) {
              var n = this;
              e(t).removeClass(a), s.supportsTransitionEnd() && e(t).hasClass(o) ? e(t).one(s.TRANSITION_END, function(e) {
                return n._destroyElement(t, e)
              }).emulateTransitionEnd(150) : this._destroyElement(t)
            }, l._destroyElement = function(t) {
              e(t).detach().trigger(n.CLOSED).remove()
            }, t._jQueryInterface = function(n) {
              return this.each(function() {
                var r = e(this),
                  i = r.data("bs.alert");
                i || (i = new t(this), r.data("bs.alert", i)), "close" === n && i[n](this)
              })
            }, t._handleDismiss = function(e) {
              return function(t) {
                t && t.preventDefault(), e.close(this)
              }
            }, i(t, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }]), t
          }();
        return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l)), e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function() {
          return e.fn.alert = t, l._jQueryInterface
        }, l
      }(t),
      l = function(e) {
        var t = "button",
          n = e.fn[t],
          r = "active",
          o = "btn",
          s = "focus",
          a = '[data-toggle^="button"]',
          l = '[data-toggle="buttons"]',
          u = "input",
          c = ".active",
          f = ".btn",
          d = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
          },
          h = function() {
            function t(e) {
              this._element = e
            }
            var n = t.prototype;
            return n.toggle = function() {
              var t = !0,
                n = !0,
                i = e(this._element).closest(l)[0];
              if (i) {
                var o = e(this._element).find(u)[0];
                if (o) {
                  if ("radio" === o.type)
                    if (o.checked && e(this._element).hasClass(r)) t = !1;
                    else {
                      var s = e(i).find(c)[0];
                      s && e(s).removeClass(r)
                    } if (t) {
                    if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
                    o.checked = !e(this._element).hasClass(r), e(o).trigger("change")
                  }
                  o.focus(), n = !1
                }
              }
              n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(r)), t && e(this._element).toggleClass(r)
            }, n.dispose = function() {
              e.removeData(this._element, "bs.button"), this._element = null
            }, t._jQueryInterface = function(n) {
              return this.each(function() {
                var r = e(this).data("bs.button");
                r || (r = new t(this), e(this).data("bs.button", r)), "toggle" === n && r[n]()
              })
            }, i(t, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }]), t
          }();
        return e(document).on(d.CLICK_DATA_API, a, function(t) {
          t.preventDefault();
          var n = t.target;
          e(n).hasClass(o) || (n = e(n).closest(f)), h._jQueryInterface.call(e(n), "toggle")
        }).on(d.FOCUS_BLUR_DATA_API, a, function(t) {
          var n = e(t.target).closest(f)[0];
          e(n).toggleClass(s, /^focus(in)?$/.test(t.type))
        }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function() {
          return e.fn[t] = n, h._jQueryInterface
        }, h
      }(t),
      u = function(e) {
        var t = "carousel",
          n = "bs.carousel",
          r = "." + n,
          a = e.fn[t],
          l = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
          },
          u = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
          },
          c = "next",
          f = "prev",
          d = "left",
          h = "right",
          p = {
            SLIDE: "slide" + r,
            SLID: "slid" + r,
            KEYDOWN: "keydown" + r,
            MOUSEENTER: "mouseenter" + r,
            MOUSELEAVE: "mouseleave" + r,
            TOUCHEND: "touchend" + r,
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
          },
          g = "carousel",
          m = "active",
          v = "slide",
          y = "carousel-item-right",
          _ = "carousel-item-left",
          b = "carousel-item-next",
          w = "carousel-item-prev",
          E = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
          },
          T = function() {
            function a(t, n) {
              this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(E.INDICATORS)[0], this._addEventListeners()
            }
            var T = a.prototype;
            return T.next = function() {
              this._isSliding || this._slide(c)
            }, T.nextWhenVisible = function() {
              !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
            }, T.prev = function() {
              this._isSliding || this._slide(f)
            }, T.pause = function(t) {
              t || (this._isPaused = !0), e(this._element).find(E.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, T.cycle = function(e) {
              e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, T.to = function(t) {
              var n = this;
              this._activeElement = e(this._element).find(E.ACTIVE_ITEM)[0];
              var r = this._getItemIndex(this._activeElement);
              if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding) e(this._element).one(p.SLID, function() {
                  return n.to(t)
                });
                else {
                  if (r === t) return this.pause(), void this.cycle();
                  var i = t > r ? c : f;
                  this._slide(i, this._items[t])
                }
            }, T.dispose = function() {
              e(this._element).off(r), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, T._getConfig = function(e) {
              return e = o({}, l, e), s.typeCheckConfig(t, e, u), e
            }, T._addEventListeners = function() {
              var t = this;
              this._config.keyboard && e(this._element).on(p.KEYDOWN, function(e) {
                return t._keydown(e)
              }), "hover" === this._config.pause && (e(this._element).on(p.MOUSEENTER, function(e) {
                return t.pause(e)
              }).on(p.MOUSELEAVE, function(e) {
                return t.cycle(e)
              }), "ontouchstart" in document.documentElement && e(this._element).on(p.TOUCHEND, function() {
                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                  return t.cycle(e)
                }, 500 + t._config.interval)
              }))
            }, T._keydown = function(e) {
              if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next()
              }
            }, T._getItemIndex = function(t) {
              return this._items = e.makeArray(e(t).parent().find(E.ITEM)), this._items.indexOf(t)
            }, T._getItemByDirection = function(e, t) {
              var n = e === c,
                r = e === f,
                i = this._getItemIndex(t),
                o = this._items.length - 1;
              if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
              var s = (i + (e === f ? -1 : 1)) % this._items.length;
              return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, T._triggerSlideEvent = function(t, n) {
              var r = this._getItemIndex(t),
                i = this._getItemIndex(e(this._element).find(E.ACTIVE_ITEM)[0]),
                o = e.Event(p.SLIDE, {
                  relatedTarget: t,
                  direction: n,
                  from: i,
                  to: r
                });
              return e(this._element).trigger(o), o
            }, T._setActiveIndicatorElement = function(t) {
              if (this._indicatorsElement) {
                e(this._indicatorsElement).find(E.ACTIVE).removeClass(m);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && e(n).addClass(m)
              }
            }, T._slide = function(t, n) {
              var r, i, o, a = this,
                l = e(this._element).find(E.ACTIVE_ITEM)[0],
                u = this._getItemIndex(l),
                f = n || l && this._getItemByDirection(t, l),
                g = this._getItemIndex(f),
                T = Boolean(this._interval);
              if (t === c ? (r = _, i = b, o = d) : (r = y, i = w, o = h), f && e(f).hasClass(m)) this._isSliding = !1;
              else if (!this._triggerSlideEvent(f, o).isDefaultPrevented() && l && f) {
                this._isSliding = !0, T && this.pause(), this._setActiveIndicatorElement(f);
                var C = e.Event(p.SLID, {
                  relatedTarget: f,
                  direction: o,
                  from: u,
                  to: g
                });
                s.supportsTransitionEnd() && e(this._element).hasClass(v) ? (e(f).addClass(i), s.reflow(f), e(l).addClass(r), e(f).addClass(r), e(l).one(s.TRANSITION_END, function() {
                  e(f).removeClass(r + " " + i).addClass(m), e(l).removeClass(m + " " + i + " " + r), a._isSliding = !1, setTimeout(function() {
                    return e(a._element).trigger(C)
                  }, 0)
                }).emulateTransitionEnd(600)) : (e(l).removeClass(m), e(f).addClass(m), this._isSliding = !1, e(this._element).trigger(C)), T && this.cycle()
              }
            }, a._jQueryInterface = function(t) {
              return this.each(function() {
                var r = e(this).data(n),
                  i = o({}, l, e(this).data());
                "object" == typeof t && (i = o({}, i, t));
                var s = "string" == typeof t ? t : i.slide;
                if (r || (r = new a(this, i), e(this).data(n, r)), "number" == typeof t) r.to(t);
                else if ("string" == typeof s) {
                  if (void 0 === r[s]) throw new TypeError('No method named "' + s + '"');
                  r[s]()
                } else i.interval && (r.pause(), r.cycle())
              })
            }, a._dataApiClickHandler = function(t) {
              var r = s.getSelectorFromElement(this);
              if (r) {
                var i = e(r)[0];
                if (i && e(i).hasClass(g)) {
                  var l = o({}, e(i).data(), e(this).data()),
                    u = this.getAttribute("data-slide-to");
                  u && (l.interval = !1), a._jQueryInterface.call(e(i), l), u && e(i).data(n).to(u), t.preventDefault()
                }
              }
            }, i(a, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }, {
              key: "Default",
              get: function() {
                return l
              }
            }]), a
          }();
        return e(document).on(p.CLICK_DATA_API, E.DATA_SLIDE, T._dataApiClickHandler), e(window).on(p.LOAD_DATA_API, function() {
          e(E.DATA_RIDE).each(function() {
            var t = e(this);
            T._jQueryInterface.call(t, t.data())
          })
        }), e.fn[t] = T._jQueryInterface, e.fn[t].Constructor = T, e.fn[t].noConflict = function() {
          return e.fn[t] = a, T._jQueryInterface
        }, T
      }(t),
      c = function(e) {
        var t = "collapse",
          n = "bs.collapse",
          r = e.fn[t],
          a = {
            toggle: !0,
            parent: ""
          },
          l = {
            toggle: "boolean",
            parent: "(string|element)"
          },
          u = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
          },
          c = "show",
          f = "collapse",
          d = "collapsing",
          h = "collapsed",
          p = "width",
          g = "height",
          m = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
          },
          v = function() {
            function r(t, n) {
              this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
              for (var r = e(m.DATA_TOGGLE), i = 0; i < r.length; i++) {
                var o = r[i],
                  a = s.getSelectorFromElement(o);
                null !== a && e(a).filter(t).length > 0 && (this._selector = a, this._triggerArray.push(o))
              }
              this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var v = r.prototype;
            return v.toggle = function() {
              e(this._element).hasClass(c) ? this.hide() : this.show()
            }, v.show = function() {
              var t, i, o = this;
              if (!this._isTransitioning && !e(this._element).hasClass(c) && (this._parent && 0 === (t = e.makeArray(e(this._parent).find(m.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (i = e(t).not(this._selector).data(n)) && i._isTransitioning))) {
                var a = e.Event(u.SHOW);
                if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                  t && (r._jQueryInterface.call(e(t).not(this._selector), "hide"), i || e(t).data(n, null));
                  var l = this._getDimension();
                  e(this._element).removeClass(f).addClass(d), this._element.style[l] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);
                  var p = function() {
                    e(o._element).removeClass(d).addClass(f).addClass(c), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger(u.SHOWN)
                  };
                  if (s.supportsTransitionEnd()) {
                    var g = "scroll" + (l[0].toUpperCase() + l.slice(1));
                    e(this._element).one(s.TRANSITION_END, p).emulateTransitionEnd(600), this._element.style[l] = this._element[g] + "px"
                  } else p()
                }
              }
            }, v.hide = function() {
              var t = this;
              if (!this._isTransitioning && e(this._element).hasClass(c)) {
                var n = e.Event(u.HIDE);
                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                  var r = this._getDimension();
                  if (this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", s.reflow(this._element), e(this._element).addClass(d).removeClass(f).removeClass(c), this._triggerArray.length > 0)
                    for (var i = 0; i < this._triggerArray.length; i++) {
                      var o = this._triggerArray[i],
                        a = s.getSelectorFromElement(o);
                      if (null !== a) e(a).hasClass(c) || e(o).addClass(h).attr("aria-expanded", !1)
                    }
                  this.setTransitioning(!0);
                  var l = function() {
                    t.setTransitioning(!1), e(t._element).removeClass(d).addClass(f).trigger(u.HIDDEN)
                  };
                  this._element.style[r] = "", s.supportsTransitionEnd() ? e(this._element).one(s.TRANSITION_END, l).emulateTransitionEnd(600) : l()
                }
              }
            }, v.setTransitioning = function(e) {
              this._isTransitioning = e
            }, v.dispose = function() {
              e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, v._getConfig = function(e) {
              return (e = o({}, a, e)).toggle = Boolean(e.toggle), s.typeCheckConfig(t, e, l), e
            }, v._getDimension = function() {
              return e(this._element).hasClass(p) ? p : g
            }, v._getParent = function() {
              var t = this,
                n = null;
              s.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
              var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
              return e(n).find(i).each(function(e, n) {
                t._addAriaAndCollapsedClass(r._getTargetFromElement(n), [n])
              }), n
            }, v._addAriaAndCollapsedClass = function(t, n) {
              if (t) {
                var r = e(t).hasClass(c);
                n.length > 0 && e(n).toggleClass(h, !r).attr("aria-expanded", r)
              }
            }, r._getTargetFromElement = function(t) {
              var n = s.getSelectorFromElement(t);
              return n ? e(n)[0] : null
            }, r._jQueryInterface = function(t) {
              return this.each(function() {
                var i = e(this),
                  s = i.data(n),
                  l = o({}, a, i.data(), "object" == typeof t && t);
                if (!s && l.toggle && /show|hide/.test(t) && (l.toggle = !1), s || (s = new r(this, l), i.data(n, s)), "string" == typeof t) {
                  if (void 0 === s[t]) throw new TypeError('No method named "' + t + '"');
                  s[t]()
                }
              })
            }, i(r, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }, {
              key: "Default",
              get: function() {
                return a
              }
            }]), r
          }();
        return e(document).on(u.CLICK_DATA_API, m.DATA_TOGGLE, function(t) {
          "A" === t.currentTarget.tagName && t.preventDefault();
          var r = e(this),
            i = s.getSelectorFromElement(this);
          e(i).each(function() {
            var t = e(this),
              i = t.data(n) ? "toggle" : r.data();
            v._jQueryInterface.call(t, i)
          })
        }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function() {
          return e.fn[t] = r, v._jQueryInterface
        }, v
      }(t),
      f = function(e) {
        var t = "dropdown",
          r = "bs.dropdown",
          a = "." + r,
          l = e.fn[t],
          u = new RegExp("38|40|27"),
          c = {
            HIDE: "hide" + a,
            HIDDEN: "hidden" + a,
            SHOW: "show" + a,
            SHOWN: "shown" + a,
            CLICK: "click" + a,
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
          },
          f = "disabled",
          d = "show",
          h = "dropup",
          p = "dropright",
          g = "dropleft",
          m = "dropdown-menu-right",
          v = "dropdown-menu-left",
          y = "position-static",
          _ = '[data-toggle="dropdown"]',
          b = ".dropdown form",
          w = ".dropdown-menu",
          E = ".navbar-nav",
          T = ".dropdown-menu .dropdown-item:not(.disabled)",
          C = "top-start",
          x = "top-end",
          A = "bottom-start",
          S = "bottom-end",
          D = "right-start",
          N = "left-start",
          I = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
          },
          O = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)"
          },
          k = function() {
            function l(e, t) {
              this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var b = l.prototype;
            return b.toggle = function() {
              if (!this._element.disabled && !e(this._element).hasClass(f)) {
                var t = l._getParentFromElement(this._element),
                  r = e(this._menu).hasClass(d);
                if (l._clearMenus(), !r) {
                  var i = {
                      relatedTarget: this._element
                    },
                    o = e.Event(c.SHOW, i);
                  if (e(t).trigger(o), !o.isDefaultPrevented()) {
                    if (!this._inNavbar) {
                      if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                      var s = this._element;
                      e(t).hasClass(h) && (e(this._menu).hasClass(v) || e(this._menu).hasClass(m)) && (s = t), "scrollParent" !== this._config.boundary && e(t).addClass(y), this._popper = new n(s, this._menu, this._getPopperConfig())
                    }
                    "ontouchstart" in document.documentElement && 0 === e(t).closest(E).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(d), e(t).toggleClass(d).trigger(e.Event(c.SHOWN, i))
                  }
                }
              }
            }, b.dispose = function() {
              e.removeData(this._element, r), e(this._element).off(a), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, b.update = function() {
              this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, b._addEventListeners = function() {
              var t = this;
              e(this._element).on(c.CLICK, function(e) {
                e.preventDefault(), e.stopPropagation(), t.toggle()
              })
            }, b._getConfig = function(n) {
              return n = o({}, this.constructor.Default, e(this._element).data(), n), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
            }, b._getMenuElement = function() {
              if (!this._menu) {
                var t = l._getParentFromElement(this._element);
                this._menu = e(t).find(w)[0]
              }
              return this._menu
            }, b._getPlacement = function() {
              var t = e(this._element).parent(),
                n = A;
              return t.hasClass(h) ? (n = C, e(this._menu).hasClass(m) && (n = x)) : t.hasClass(p) ? n = D : t.hasClass(g) ? n = N : e(this._menu).hasClass(m) && (n = S), n
            }, b._detectNavbar = function() {
              return e(this._element).closest(".navbar").length > 0
            }, b._getPopperConfig = function() {
              var e = this,
                t = {};
              return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {}), t
              } : t.offset = this._config.offset, {
                placement: this._getPlacement(),
                modifiers: {
                  offset: t,
                  flip: {
                    enabled: this._config.flip
                  },
                  preventOverflow: {
                    boundariesElement: this._config.boundary
                  }
                }
              }
            }, l._jQueryInterface = function(t) {
              return this.each(function() {
                var n = e(this).data(r);
                if (n || (n = new l(this, "object" == typeof t ? t : null), e(this).data(r, n)), "string" == typeof t) {
                  if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                  n[t]()
                }
              })
            }, l._clearMenus = function(t) {
              if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var n = e.makeArray(e(_)), i = 0; i < n.length; i++) {
                  var o = l._getParentFromElement(n[i]),
                    s = e(n[i]).data(r),
                    a = {
                      relatedTarget: n[i]
                    };
                  if (s) {
                    var u = s._menu;
                    if (e(o).hasClass(d) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
                      var f = e.Event(c.HIDE, a);
                      e(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[i].setAttribute("aria-expanded", "false"), e(u).removeClass(d), e(o).removeClass(d).trigger(e.Event(c.HIDDEN, a)))
                    }
                  }
                }
            }, l._getParentFromElement = function(t) {
              var n, r = s.getSelectorFromElement(t);
              return r && (n = e(r)[0]), n || t.parentNode
            }, l._dataApiKeydownHandler = function(t) {
              if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(w).length)) : u.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(f))) {
                var n = l._getParentFromElement(this),
                  r = e(n).hasClass(d);
                if ((r || 27 === t.which && 32 === t.which) && (!r || 27 !== t.which && 32 !== t.which)) {
                  var i = e(n).find(T).get();
                  if (0 !== i.length) {
                    var o = i.indexOf(t.target);
                    38 === t.which && o > 0 && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                  }
                } else {
                  if (27 === t.which) {
                    var s = e(n).find(_)[0];
                    e(s).trigger("focus")
                  }
                  e(this).trigger("click")
                }
              }
            }, i(l, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }, {
              key: "Default",
              get: function() {
                return I
              }
            }, {
              key: "DefaultType",
              get: function() {
                return O
              }
            }]), l
          }();
        return e(document).on(c.KEYDOWN_DATA_API, _, k._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, w, k._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, k._clearMenus).on(c.CLICK_DATA_API, _, function(t) {
          t.preventDefault(), t.stopPropagation(), k._jQueryInterface.call(e(this), "toggle")
        }).on(c.CLICK_DATA_API, b, function(e) {
          e.stopPropagation()
        }), e.fn[t] = k._jQueryInterface, e.fn[t].Constructor = k, e.fn[t].noConflict = function() {
          return e.fn[t] = l, k._jQueryInterface
        }, k
      }(t),
      d = function(e) {
        var t = "modal",
          n = ".bs.modal",
          r = e.fn.modal,
          a = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
          },
          l = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
          },
          u = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
          },
          c = "modal-scrollbar-measure",
          f = "modal-backdrop",
          d = "modal-open",
          h = "fade",
          p = "show",
          g = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
          },
          m = function() {
            function r(t, n) {
              this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }
            var m = r.prototype;
            return m.toggle = function(e) {
              return this._isShown ? this.hide() : this.show(e)
            }, m.show = function(t) {
              var n = this;
              if (!this._isTransitioning && !this._isShown) {
                s.supportsTransitionEnd() && e(this._element).hasClass(h) && (this._isTransitioning = !0);
                var r = e.Event(u.SHOW, {
                  relatedTarget: t
                });
                e(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(d), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(u.CLICK_DISMISS, g.DATA_DISMISS, function(e) {
                  return n.hide(e)
                }), e(this._dialog).on(u.MOUSEDOWN_DISMISS, function() {
                  e(n._element).one(u.MOUSEUP_DISMISS, function(t) {
                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                  })
                }), this._showBackdrop(function() {
                  return n._showElement(t)
                }))
              }
            }, m.hide = function(t) {
              var n = this;
              if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                var r = e.Event(u.HIDE);
                if (e(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                  this._isShown = !1;
                  var i = s.supportsTransitionEnd() && e(this._element).hasClass(h);
                  i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(u.FOCUSIN), e(this._element).removeClass(p), e(this._element).off(u.CLICK_DISMISS), e(this._dialog).off(u.MOUSEDOWN_DISMISS), i ? e(this._element).one(s.TRANSITION_END, function(e) {
                    return n._hideModal(e)
                  }).emulateTransitionEnd(300) : this._hideModal()
                }
              }
            }, m.dispose = function() {
              e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, m.handleUpdate = function() {
              this._adjustDialog()
            }, m._getConfig = function(e) {
              return e = o({}, a, e), s.typeCheckConfig(t, e, l), e
            }, m._showElement = function(t) {
              var n = this,
                r = s.supportsTransitionEnd() && e(this._element).hasClass(h);
              this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, r && s.reflow(this._element), e(this._element).addClass(p), this._config.focus && this._enforceFocus();
              var i = e.Event(u.SHOWN, {
                  relatedTarget: t
                }),
                o = function() {
                  n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(i)
                };
              r ? e(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(300) : o()
            }, m._enforceFocus = function() {
              var t = this;
              e(document).off(u.FOCUSIN).on(u.FOCUSIN, function(n) {
                document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
              })
            }, m._setEscapeEvent = function() {
              var t = this;
              this._isShown && this._config.keyboard ? e(this._element).on(u.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(), t.hide())
              }) : this._isShown || e(this._element).off(u.KEYDOWN_DISMISS)
            }, m._setResizeEvent = function() {
              var t = this;
              this._isShown ? e(window).on(u.RESIZE, function(e) {
                return t.handleUpdate(e)
              }) : e(window).off(u.RESIZE)
            }, m._hideModal = function() {
              var t = this;
              this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                e(document.body).removeClass(d), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(u.HIDDEN)
              })
            }, m._removeBackdrop = function() {
              this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
            }, m._showBackdrop = function(t) {
              var n = this,
                r = e(this._element).hasClass(h) ? h : "";
              if (this._isShown && this._config.backdrop) {
                var i = s.supportsTransitionEnd() && r;
                if (this._backdrop = document.createElement("div"), this._backdrop.className = f, r && e(this._backdrop).addClass(r), e(this._backdrop).appendTo(document.body), e(this._element).on(u.CLICK_DISMISS, function(e) {
                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                  }), i && s.reflow(this._backdrop), e(this._backdrop).addClass(p), !t) return;
                if (!i) return void t();
                e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(150)
              } else if (!this._isShown && this._backdrop) {
                e(this._backdrop).removeClass(p);
                var o = function() {
                  n._removeBackdrop(), t && t()
                };
                s.supportsTransitionEnd() && e(this._element).hasClass(h) ? e(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o()
              } else t && t()
            }, m._adjustDialog = function() {
              var e = this._element.scrollHeight > document.documentElement.clientHeight;
              !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, m._resetAdjustments = function() {
              this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, m._checkScrollbar = function() {
              var e = document.body.getBoundingClientRect();
              this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, m._setScrollbar = function() {
              var t = this;
              if (this._isBodyOverflowing) {
                e(g.FIXED_CONTENT).each(function(n, r) {
                  var i = e(r)[0].style.paddingRight,
                    o = e(r).css("padding-right");
                  e(r).data("padding-right", i).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                }), e(g.STICKY_CONTENT).each(function(n, r) {
                  var i = e(r)[0].style.marginRight,
                    o = e(r).css("margin-right");
                  e(r).data("margin-right", i).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                }), e(g.NAVBAR_TOGGLER).each(function(n, r) {
                  var i = e(r)[0].style.marginRight,
                    o = e(r).css("margin-right");
                  e(r).data("margin-right", i).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight,
                  r = e("body").css("padding-right");
                e("body").data("padding-right", n).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
              }
            }, m._resetScrollbar = function() {
              e(g.FIXED_CONTENT).each(function(t, n) {
                var r = e(n).data("padding-right");
                void 0 !== r && e(n).css("padding-right", r).removeData("padding-right")
              }), e(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function(t, n) {
                var r = e(n).data("margin-right");
                void 0 !== r && e(n).css("margin-right", r).removeData("margin-right")
              });
              var t = e("body").data("padding-right");
              void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
            }, m._getScrollbarWidth = function() {
              var e = document.createElement("div");
              e.className = c, document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t
            }, r._jQueryInterface = function(t, n) {
              return this.each(function() {
                var i = e(this).data("bs.modal"),
                  s = o({}, r.Default, e(this).data(), "object" == typeof t && t);
                if (i || (i = new r(this, s), e(this).data("bs.modal", i)), "string" == typeof t) {
                  if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                  i[t](n)
                } else s.show && i.show(n)
              })
            }, i(r, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }, {
              key: "Default",
              get: function() {
                return a
              }
            }]), r
          }();
        return e(document).on(u.CLICK_DATA_API, g.DATA_TOGGLE, function(t) {
          var n, r = this,
            i = s.getSelectorFromElement(this);
          i && (n = e(i)[0]);
          var a = e(n).data("bs.modal") ? "toggle" : o({}, e(n).data(), e(this).data());
          "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
          var l = e(n).one(u.SHOW, function(t) {
            t.isDefaultPrevented() || l.one(u.HIDDEN, function() {
              e(r).is(":visible") && r.focus()
            })
          });
          m._jQueryInterface.call(e(n), a, this)
        }), e.fn.modal = m._jQueryInterface, e.fn.modal.Constructor = m, e.fn.modal.noConflict = function() {
          return e.fn.modal = r, m._jQueryInterface
        }, m
      }(t),
      h = function(e) {
        var t = "tooltip",
          r = ".bs.tooltip",
          a = e.fn[t],
          l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          u = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
          },
          c = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
          },
          f = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
          },
          d = "show",
          h = "out",
          p = {
            HIDE: "hide" + r,
            HIDDEN: "hidden" + r,
            SHOW: "show" + r,
            SHOWN: "shown" + r,
            INSERTED: "inserted" + r,
            CLICK: "click" + r,
            FOCUSIN: "focusin" + r,
            FOCUSOUT: "focusout" + r,
            MOUSEENTER: "mouseenter" + r,
            MOUSELEAVE: "mouseleave" + r
          },
          g = "fade",
          m = "show",
          v = ".tooltip-inner",
          y = ".arrow",
          _ = "hover",
          b = "focus",
          w = "click",
          E = "manual",
          T = function() {
            function a(e, t) {
              if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
              this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var T = a.prototype;
            return T.enable = function() {
              this._isEnabled = !0
            }, T.disable = function() {
              this._isEnabled = !1
            }, T.toggleEnabled = function() {
              this._isEnabled = !this._isEnabled
            }, T.toggle = function(t) {
              if (this._isEnabled)
                if (t) {
                  var n = this.constructor.DATA_KEY,
                    r = e(t.currentTarget).data(n);
                  r || (r = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
                } else {
                  if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                  this._enter(null, this)
                }
            }, T.dispose = function() {
              clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, T.show = function() {
              var t = this;
              if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
              var r = e.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                e(this.element).trigger(r);
                var i = e.contains(this.element.ownerDocument.documentElement, this.element);
                if (r.isDefaultPrevented() || !i) return;
                var o = this.getTipElement(),
                  l = s.getUID(this.constructor.NAME);
                o.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(o).addClass(g);
                var u = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                  c = this._getAttachment(u);
                this.addAttachmentClass(c);
                var f = !1 === this.config.container ? document.body : e(this.config.container);
                e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(f), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                  placement: c,
                  modifiers: {
                    offset: {
                      offset: this.config.offset
                    },
                    flip: {
                      behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                      element: y
                    },
                    preventOverflow: {
                      boundariesElement: this.config.boundary
                    }
                  },
                  onCreate: function(e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                  },
                  onUpdate: function(e) {
                    t._handlePopperPlacementChange(e)
                  }
                }), e(o).addClass(m), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                var d = function() {
                  t.config.animation && t._fixTransition();
                  var n = t._hoverState;
                  t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === h && t._leave(null, t)
                };
                s.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(this.tip).one(s.TRANSITION_END, d).emulateTransitionEnd(a._TRANSITION_DURATION) : d()
              }
            }, T.hide = function(t) {
              var n = this,
                r = this.getTipElement(),
                i = e.Event(this.constructor.Event.HIDE),
                o = function() {
                  n._hoverState !== d && r.parentNode && r.parentNode.removeChild(r), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                };
              e(this.element).trigger(i), i.isDefaultPrevented() || (e(r).removeClass(m), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[w] = !1, this._activeTrigger[b] = !1, this._activeTrigger[_] = !1, s.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(r).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
            }, T.update = function() {
              null !== this._popper && this._popper.scheduleUpdate()
            }, T.isWithContent = function() {
              return Boolean(this.getTitle())
            }, T.addAttachmentClass = function(t) {
              e(this.getTipElement()).addClass("bs-tooltip-" + t)
            }, T.getTipElement = function() {
              return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, T.setContent = function() {
              var t = e(this.getTipElement());
              this.setElementContent(t.find(v), this.getTitle()), t.removeClass(g + " " + m)
            }, T.setElementContent = function(t, n) {
              var r = this.config.html;
              "object" == typeof n && (n.nodeType || n.jquery) ? r ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[r ? "html" : "text"](n)
            }, T.getTitle = function() {
              var e = this.element.getAttribute("data-original-title");
              return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, T._getAttachment = function(e) {
              return c[e.toUpperCase()]
            }, T._setListeners = function() {
              var t = this;
              this.config.trigger.split(" ").forEach(function(n) {
                if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                  return t.toggle(e)
                });
                else if (n !== E) {
                  var r = n === _ ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                    i = n === _ ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                  e(t.element).on(r, t.config.selector, function(e) {
                    return t._enter(e)
                  }).on(i, t.config.selector, function(e) {
                    return t._leave(e)
                  })
                }
                e(t.element).closest(".modal").on("hide.bs.modal", function() {
                  return t.hide()
                })
              }), this.config.selector ? this.config = o({}, this.config, {
                trigger: "manual",
                selector: ""
              }) : this._fixTitle()
            }, T._fixTitle = function() {
              var e = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, T._enter = function(t, n) {
              var r = this.constructor.DATA_KEY;
              (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, n)), t && (n._activeTrigger["focusin" === t.type ? b : _] = !0), e(n.getTipElement()).hasClass(m) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                n._hoverState === d && n.show()
              }, n.config.delay.show) : n.show())
            }, T._leave = function(t, n) {
              var r = this.constructor.DATA_KEY;
              (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, n)), t && (n._activeTrigger["focusout" === t.type ? b : _] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                n._hoverState === h && n.hide()
              }, n.config.delay.hide) : n.hide())
            }, T._isWithActiveTrigger = function() {
              for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
              return !1
            }, T._getConfig = function(n) {
              return "number" == typeof(n = o({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
                show: n.delay,
                hide: n.delay
              }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
            }, T._getDelegateConfig = function() {
              var e = {};
              if (this.config)
                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
              return e
            }, T._cleanTipClass = function() {
              var t = e(this.getTipElement()),
                n = t.attr("class").match(l);
              null !== n && n.length > 0 && t.removeClass(n.join(""))
            }, T._handlePopperPlacementChange = function(e) {
              this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, T._fixTransition = function() {
              var t = this.getTipElement(),
                n = this.config.animation;
              null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, a._jQueryInterface = function(t) {
              return this.each(function() {
                var n = e(this).data("bs.tooltip"),
                  r = "object" == typeof t && t;
                if ((n || !/dispose|hide/.test(t)) && (n || (n = new a(this, r), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                  if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                  n[t]()
                }
              })
            }, i(a, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }, {
              key: "Default",
              get: function() {
                return f
              }
            }, {
              key: "NAME",
              get: function() {
                return t
              }
            }, {
              key: "DATA_KEY",
              get: function() {
                return "bs.tooltip"
              }
            }, {
              key: "Event",
              get: function() {
                return p
              }
            }, {
              key: "EVENT_KEY",
              get: function() {
                return r
              }
            }, {
              key: "DefaultType",
              get: function() {
                return u
              }
            }]), a
          }();
        return e.fn[t] = T._jQueryInterface, e.fn[t].Constructor = T, e.fn[t].noConflict = function() {
          return e.fn[t] = a, T._jQueryInterface
        }, T
      }(t),
      p = function(e) {
        var t = "popover",
          n = ".bs.popover",
          r = e.fn[t],
          s = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          a = o({}, h.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
          }),
          l = o({}, h.DefaultType, {
            content: "(string|element|function)"
          }),
          u = "fade",
          c = "show",
          f = ".popover-header",
          d = ".popover-body",
          p = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            INSERTED: "inserted" + n,
            CLICK: "click" + n,
            FOCUSIN: "focusin" + n,
            FOCUSOUT: "focusout" + n,
            MOUSEENTER: "mouseenter" + n,
            MOUSELEAVE: "mouseleave" + n
          },
          g = function(r) {
            var o, h;

            function g() {
              return r.apply(this, arguments) || this
            }
            h = r, (o = g).prototype = Object.create(h.prototype), o.prototype.constructor = o, o.__proto__ = h;
            var m = g.prototype;
            return m.isWithContent = function() {
              return this.getTitle() || this._getContent()
            }, m.addAttachmentClass = function(t) {
              e(this.getTipElement()).addClass("bs-popover-" + t)
            }, m.getTipElement = function() {
              return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, m.setContent = function() {
              var t = e(this.getTipElement());
              this.setElementContent(t.find(f), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(d), n), t.removeClass(u + " " + c)
            }, m._getContent = function() {
              return this.element.getAttribute("data-content") || this.config.content
            }, m._cleanTipClass = function() {
              var t = e(this.getTipElement()),
                n = t.attr("class").match(s);
              null !== n && n.length > 0 && t.removeClass(n.join(""))
            }, g._jQueryInterface = function(t) {
              return this.each(function() {
                var n = e(this).data("bs.popover"),
                  r = "object" == typeof t ? t : null;
                if ((n || !/destroy|hide/.test(t)) && (n || (n = new g(this, r), e(this).data("bs.popover", n)), "string" == typeof t)) {
                  if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                  n[t]()
                }
              })
            }, i(g, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }, {
              key: "Default",
              get: function() {
                return a
              }
            }, {
              key: "NAME",
              get: function() {
                return t
              }
            }, {
              key: "DATA_KEY",
              get: function() {
                return "bs.popover"
              }
            }, {
              key: "Event",
              get: function() {
                return p
              }
            }, {
              key: "EVENT_KEY",
              get: function() {
                return n
              }
            }, {
              key: "DefaultType",
              get: function() {
                return l
              }
            }]), g
          }(h);
        return e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function() {
          return e.fn[t] = r, g._jQueryInterface
        }, g
      }(t),
      g = function(e) {
        var t = "scrollspy",
          n = e.fn[t],
          r = {
            offset: 10,
            method: "auto",
            target: ""
          },
          a = {
            offset: "number",
            method: "string",
            target: "(string|element)"
          },
          l = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
          },
          u = "dropdown-item",
          c = "active",
          f = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
          },
          d = "offset",
          h = "position",
          p = function() {
            function n(t, n) {
              var r = this;
              this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function(e) {
                return r._process(e)
              }), this.refresh(), this._process()
            }
            var p = n.prototype;
            return p.refresh = function() {
              var t = this,
                n = this._scrollElement === this._scrollElement.window ? d : h,
                r = "auto" === this._config.method ? n : this._config.method,
                i = r === h ? this._getScrollTop() : 0;
              this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function(t) {
                var n, o = s.getSelectorFromElement(t);
                if (o && (n = e(o)[0]), n) {
                  var a = n.getBoundingClientRect();
                  if (a.width || a.height) return [e(n)[r]().top + i, o]
                }
                return null
              }).filter(function(e) {
                return e
              }).sort(function(e, t) {
                return e[0] - t[0]
              }).forEach(function(e) {
                t._offsets.push(e[0]), t._targets.push(e[1])
              })
            }, p.dispose = function() {
              e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, p._getConfig = function(n) {
              if ("string" != typeof(n = o({}, r, n)).target) {
                var i = e(n.target).attr("id");
                i || (i = s.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
              }
              return s.typeCheckConfig(t, n, a), n
            }, p._getScrollTop = function() {
              return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, p._getScrollHeight = function() {
              return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, p._getOffsetHeight = function() {
              return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, p._process = function() {
              var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
              if (this._scrollHeight !== t && this.refresh(), e >= n) {
                var r = this._targets[this._targets.length - 1];
                this._activeTarget !== r && this._activate(r)
              } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (var i = this._offsets.length; i--;) {
                  this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                }
              }
            }, p._activate = function(t) {
              this._activeTarget = t, this._clear();
              var n = this._selector.split(",");
              n = n.map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              });
              var r = e(n.join(","));
              r.hasClass(u) ? (r.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c), r.addClass(c)) : (r.addClass(c), r.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(c), r.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(c)), e(this._scrollElement).trigger(l.ACTIVATE, {
                relatedTarget: t
              })
            }, p._clear = function() {
              e(this._selector).filter(f.ACTIVE).removeClass(c)
            }, n._jQueryInterface = function(t) {
              return this.each(function() {
                var r = e(this).data("bs.scrollspy");
                if (r || (r = new n(this, "object" == typeof t && t), e(this).data("bs.scrollspy", r)), "string" == typeof t) {
                  if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                  r[t]()
                }
              })
            }, i(n, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }, {
              key: "Default",
              get: function() {
                return r
              }
            }]), n
          }();
        return e(window).on(l.LOAD_DATA_API, function() {
          for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--;) {
            var r = e(t[n]);
            p._jQueryInterface.call(r, r.data())
          }
        }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function() {
          return e.fn[t] = n, p._jQueryInterface
        }, p
      }(t),
      m = function(e) {
        var t = e.fn.tab,
          n = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
          },
          r = "dropdown-menu",
          o = "active",
          a = "disabled",
          l = "fade",
          u = "show",
          c = ".dropdown",
          f = ".nav, .list-group",
          d = ".active",
          h = "> li > .active",
          p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          g = ".dropdown-toggle",
          m = "> .dropdown-menu .active",
          v = function() {
            function t(e) {
              this._element = e
            }
            var p = t.prototype;
            return p.show = function() {
              var t = this;
              if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(o) || e(this._element).hasClass(a))) {
                var r, i, l = e(this._element).closest(f)[0],
                  u = s.getSelectorFromElement(this._element);
                if (l) {
                  var c = "UL" === l.nodeName ? h : d;
                  i = (i = e.makeArray(e(l).find(c)))[i.length - 1]
                }
                var p = e.Event(n.HIDE, {
                    relatedTarget: this._element
                  }),
                  g = e.Event(n.SHOW, {
                    relatedTarget: i
                  });
                if (i && e(i).trigger(p), e(this._element).trigger(g), !g.isDefaultPrevented() && !p.isDefaultPrevented()) {
                  u && (r = e(u)[0]), this._activate(this._element, l);
                  var m = function() {
                    var r = e.Event(n.HIDDEN, {
                        relatedTarget: t._element
                      }),
                      o = e.Event(n.SHOWN, {
                        relatedTarget: i
                      });
                    e(i).trigger(r), e(t._element).trigger(o)
                  };
                  r ? this._activate(r, r.parentNode, m) : m()
                }
              }
            }, p.dispose = function() {
              e.removeData(this._element, "bs.tab"), this._element = null
            }, p._activate = function(t, n, r) {
              var i = this,
                o = ("UL" === n.nodeName ? e(n).find(h) : e(n).children(d))[0],
                a = r && s.supportsTransitionEnd() && o && e(o).hasClass(l),
                u = function() {
                  return i._transitionComplete(t, o, r)
                };
              o && a ? e(o).one(s.TRANSITION_END, u).emulateTransitionEnd(150) : u()
            }, p._transitionComplete = function(t, n, i) {
              if (n) {
                e(n).removeClass(u + " " + o);
                var a = e(n.parentNode).find(m)[0];
                a && e(a).removeClass(o), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
              }
              if (e(t).addClass(o), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), s.reflow(t), e(t).addClass(u), t.parentNode && e(t.parentNode).hasClass(r)) {
                var l = e(t).closest(c)[0];
                l && e(l).find(g).addClass(o), t.setAttribute("aria-expanded", !0)
              }
              i && i()
            }, t._jQueryInterface = function(n) {
              return this.each(function() {
                var r = e(this),
                  i = r.data("bs.tab");
                if (i || (i = new t(this), r.data("bs.tab", i)), "string" == typeof n) {
                  if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                  i[n]()
                }
              })
            }, i(t, null, [{
              key: "VERSION",
              get: function() {
                return "4.0.0"
              }
            }]), t
          }();
        return e(document).on(n.CLICK_DATA_API, p, function(t) {
          t.preventDefault(), v._jQueryInterface.call(e(this), "show")
        }), e.fn.tab = v._jQueryInterface, e.fn.tab.Constructor = v, e.fn.tab.noConflict = function() {
          return e.fn.tab = t, v._jQueryInterface
        }, v
      }(t);
    ! function(e) {
      if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var t = e.fn.jquery.split(" ")[0].split(".");
      if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = s, e.Alert = a, e.Button = l, e.Carousel = u, e.Collapse = c, e.Dropdown = f, e.Modal = d, e.Popover = p, e.Scrollspy = g, e.Tab = m, e.Tooltip = h, Object.defineProperty(e, "__esModule", {
      value: !0
    })
  })(t, n(0), n(4))
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    function(e) {
      for (var n = "undefined" != typeof window && "undefined" != typeof document, r = ["Edge", "Trident", "Firefox"], i = 0, o = 0; o < r.length; o += 1)
        if (n && navigator.userAgent.indexOf(r[o]) >= 0) {
          i = 1;
          break
        } var s = n && window.Promise ? function(e) {
        var t = !1;
        return function() {
          t || (t = !0, window.Promise.resolve().then(function() {
            t = !1, e()
          }))
        }
      } : function(e) {
        var t = !1;
        return function() {
          t || (t = !0, setTimeout(function() {
            t = !1, e()
          }, i))
        }
      };

      function a(e) {
        return e && "[object Function]" === {}.toString.call(e)
      }

      function l(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
      }

      function u(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
      }

      function c(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;
          case "#document":
            return e.body
        }
        var t = l(e),
          n = t.overflow,
          r = t.overflowX,
          i = t.overflowY;
        return /(auto|scroll)/.test(n + i + r) ? e : c(u(e))
      }

      function f(e) {
        var t = e && e.offsetParent,
          n = t && t.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === l(t, "position") ? f(t) : t : e ? e.ownerDocument.documentElement : document.documentElement
      }

      function d(e) {
        return null !== e.parentNode ? d(e.parentNode) : e
      }

      function h(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          r = n ? e : t,
          i = n ? t : e,
          o = document.createRange();
        o.setStart(r, 0), o.setEnd(i, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || r.contains(i)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && f(s.firstElementChild) !== s ? f(l) : l;
        var u = d(e);
        return u.host ? h(u.host, t) : h(e, d(t).host)
      }

      function p(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
          n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
          var r = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || r)[t]
        }
        return e[t]
      }

      function g(e, t) {
        var n = "x" === t ? "Left" : "Top",
          r = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
      }
      var m = void 0,
        v = function() {
          return void 0 === m && (m = -1 !== navigator.appVersion.indexOf("MSIE 10")), m
        };

      function y(e, t, n, r) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], v() ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
      }

      function _() {
        var e = document.body,
          t = document.documentElement,
          n = v() && getComputedStyle(t);
        return {
          height: y("Height", e, t, n),
          width: y("Width", e, t, n)
        }
      }
      var b = function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        w = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        E = function(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        },
        T = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        };

      function C(e) {
        return T({}, e, {
          right: e.left + e.width,
          bottom: e.top + e.height
        })
      }

      function x(e) {
        var t = {};
        if (v()) try {
          t = e.getBoundingClientRect();
          var n = p(e, "top"),
            r = p(e, "left");
          t.top += n, t.left += r, t.bottom += n, t.right += r
        } catch (e) {} else t = e.getBoundingClientRect();
        var i = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
          },
          o = "HTML" === e.nodeName ? _() : {},
          s = o.width || e.clientWidth || i.right - i.left,
          a = o.height || e.clientHeight || i.bottom - i.top,
          u = e.offsetWidth - s,
          c = e.offsetHeight - a;
        if (u || c) {
          var f = l(e);
          u -= g(f, "x"), c -= g(f, "y"), i.width -= u, i.height -= c
        }
        return C(i)
      }

      function A(e, t) {
        var n = v(),
          r = "HTML" === t.nodeName,
          i = x(e),
          o = x(t),
          s = c(e),
          a = l(t),
          u = parseFloat(a.borderTopWidth, 10),
          f = parseFloat(a.borderLeftWidth, 10),
          d = C({
            top: i.top - o.top - u,
            left: i.left - o.left - f,
            width: i.width,
            height: i.height
          });
        if (d.marginTop = 0, d.marginLeft = 0, !n && r) {
          var h = parseFloat(a.marginTop, 10),
            g = parseFloat(a.marginLeft, 10);
          d.top -= u - h, d.bottom -= u - h, d.left -= f - g, d.right -= f - g, d.marginTop = h, d.marginLeft = g
        }
        return (n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (d = function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = p(t, "top"),
            i = p(t, "left"),
            o = n ? -1 : 1;
          return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
        }(d, t)), d
      }

      function S(e, t, n, r) {
        var i = {
            top: 0,
            left: 0
          },
          o = h(e, t);
        if ("viewport" === r) i = function(e) {
          var t = e.ownerDocument.documentElement,
            n = A(e, t),
            r = Math.max(t.clientWidth, window.innerWidth || 0),
            i = Math.max(t.clientHeight, window.innerHeight || 0),
            o = p(t),
            s = p(t, "left");
          return C({
            top: o - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: r,
            height: i
          })
        }(o);
        else {
          var s = void 0;
          "scrollParent" === r ? "BODY" === (s = c(u(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === r ? e.ownerDocument.documentElement : r;
          var a = A(s, o);
          if ("HTML" !== s.nodeName || function e(t) {
              var n = t.nodeName;
              return "BODY" !== n && "HTML" !== n && ("fixed" === l(t, "position") || e(u(t)))
            }(o)) i = a;
          else {
            var f = _(),
              d = f.height,
              g = f.width;
            i.top += a.top - a.marginTop, i.bottom = d + a.top, i.left += a.left - a.marginLeft, i.right = g + a.left
          }
        }
        return i.left += n, i.top += n, i.right -= n, i.bottom -= n, i
      }

      function D(e, t, n, r, i) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = S(n, r, o, i),
          a = {
            top: {
              width: s.width,
              height: t.top - s.top
            },
            right: {
              width: s.right - t.right,
              height: s.height
            },
            bottom: {
              width: s.width,
              height: s.bottom - t.bottom
            },
            left: {
              width: t.left - s.left,
              height: s.height
            }
          },
          l = Object.keys(a).map(function(e) {
            return T({
              key: e
            }, a[e], {
              area: (t = a[e], t.width * t.height)
            });
            var t
          }).sort(function(e, t) {
            return t.area - e.area
          }),
          u = l.filter(function(e) {
            var t = e.width,
              r = e.height;
            return t >= n.clientWidth && r >= n.clientHeight
          }),
          c = u.length > 0 ? u[0].key : l[0].key,
          f = e.split("-")[1];
        return c + (f ? "-" + f : "")
      }

      function N(e, t, n) {
        return A(n, h(t, n))
      }

      function I(e) {
        var t = getComputedStyle(e),
          n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
          r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
          width: e.offsetWidth + r,
          height: e.offsetHeight + n
        }
      }

      function O(e) {
        var t = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
          return t[e]
        })
      }

      function k(e, t, n) {
        n = n.split("-")[0];
        var r = I(e),
          i = {
            width: r.width,
            height: r.height
          },
          o = -1 !== ["right", "left"].indexOf(n),
          s = o ? "top" : "left",
          a = o ? "left" : "top",
          l = o ? "height" : "width",
          u = o ? "width" : "height";
        return i[s] = t[s] + t[l] / 2 - r[l] / 2, i[a] = n === a ? t[a] - r[u] : t[O(a)], i
      }

      function L(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
      }

      function j(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
          if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === n
          });
          var r = L(e, function(e) {
            return e[t] === n
          });
          return e.indexOf(r)
        }(e, "name", n))).forEach(function(e) {
          e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var n = e.function || e.fn;
          e.enabled && a(n) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = n(t, e))
        }), t
      }

      function P(e, t) {
        return e.some(function(e) {
          var n = e.name;
          return e.enabled && n === t
        })
      }

      function H(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length - 1; r++) {
          var i = t[r],
            o = i ? "" + i + n : e;
          if (void 0 !== document.body.style[o]) return o
        }
        return null
      }

      function R(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
      }

      function M(e, t, n, r) {
        n.updateBound = r, R(e).addEventListener("resize", n.updateBound, {
          passive: !0
        });
        var i = c(e);
        return function e(t, n, r, i) {
          var o = "BODY" === t.nodeName,
            s = o ? t.ownerDocument.defaultView : t;
          s.addEventListener(n, r, {
            passive: !0
          }), o || e(c(s.parentNode), n, r, i), i.push(s)
        }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
      }

      function W() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, R(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
          e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
      }

      function q(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
      }

      function B(e, t) {
        Object.keys(t).forEach(function(n) {
          var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (r = "px"), e.style[n] = t[n] + r
        })
      }

      function F(e, t, n) {
        var r = L(e, function(e) {
            return e.name === t
          }),
          i = !!r && e.some(function(e) {
            return e.name === n && e.enabled && e.order < r.order
          });
        if (!i) {
          var o = "`" + t + "`",
            s = "`" + n + "`";
          console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return i
      }
      var U = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        V = U.slice(3);

      function K(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = V.indexOf(e),
          r = V.slice(n + 1).concat(V.slice(0, n));
        return t ? r.reverse() : r
      }
      var $ = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
      };

      function Q(e, t, n, r) {
        var i = [0, 0],
          o = -1 !== ["right", "left"].indexOf(r),
          s = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
          }),
          a = s.indexOf(L(s, function(e) {
            return -1 !== e.search(/,|\s/)
          }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
          u = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (u = u.map(function(e, r) {
          var i = (1 === r ? !o : o) ? "height" : "width",
            s = !1;
          return e.reduce(function(e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
          }, []).map(function(e) {
            return function(e, t, n, r) {
              var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +i[1],
                s = i[2];
              if (!o) return e;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = r
                }
                return C(a)[t] / 100 * o
              }
              if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
              return o
            }(e, i, t, n)
          })
        })).forEach(function(e, t) {
          e.forEach(function(n, r) {
            q(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
          })
        }), i
      }
      var Y = {
          placement: "bottom",
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function() {},
          onUpdate: function() {},
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn: function(e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  r = t.split("-")[1];
                if (r) {
                  var i = e.offsets,
                    o = i.reference,
                    s = i.popper,
                    a = -1 !== ["bottom", "top"].indexOf(n),
                    l = a ? "left" : "top",
                    u = a ? "width" : "height",
                    c = {
                      start: E({}, l, o[l]),
                      end: E({}, l, o[l] + o[u] - s[u])
                    };
                  e.offsets.popper = T({}, s, c[r])
                }
                return e
              }
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function(e, t) {
                var n = t.offset,
                  r = e.placement,
                  i = e.offsets,
                  o = i.popper,
                  s = i.reference,
                  a = r.split("-")[0],
                  l = void 0;
                return l = q(+n) ? [+n, 0] : Q(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
              },
              offset: 0
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function(e, t) {
                var n = t.boundariesElement || f(e.instance.popper);
                e.instance.reference === n && (n = f(n));
                var r = S(e.instance.popper, e.instance.reference, t.padding, n);
                t.boundaries = r;
                var i = t.priority,
                  o = e.offsets.popper,
                  s = {
                    primary: function(e) {
                      var n = o[e];
                      return o[e] < r[e] && !t.escapeWithReference && (n = Math.max(o[e], r[e])), E({}, e, n)
                    },
                    secondary: function(e) {
                      var n = "right" === e ? "left" : "top",
                        i = o[n];
                      return o[e] > r[e] && !t.escapeWithReference && (i = Math.min(o[n], r[e] - ("right" === e ? o.width : o.height))), E({}, n, i)
                    }
                  };
                return i.forEach(function(e) {
                  var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                  o = T({}, o, s[t](e))
                }), e.offsets.popper = o, e
              },
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function(e) {
                var t = e.offsets,
                  n = t.popper,
                  r = t.reference,
                  i = e.placement.split("-")[0],
                  o = Math.floor,
                  s = -1 !== ["top", "bottom"].indexOf(i),
                  a = s ? "right" : "bottom",
                  l = s ? "left" : "top",
                  u = s ? "width" : "height";
                return n[a] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[u]), n[l] > o(r[a]) && (e.offsets.popper[l] = o(r[a])), e
              }
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function(e, t) {
                var n;
                if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
                var r = t.element;
                if ("string" == typeof r) {
                  if (!(r = e.instance.popper.querySelector(r))) return e
                } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                var i = e.placement.split("-")[0],
                  o = e.offsets,
                  s = o.popper,
                  a = o.reference,
                  u = -1 !== ["left", "right"].indexOf(i),
                  c = u ? "height" : "width",
                  f = u ? "Top" : "Left",
                  d = f.toLowerCase(),
                  h = u ? "left" : "top",
                  p = u ? "bottom" : "right",
                  g = I(r)[c];
                a[p] - g < s[d] && (e.offsets.popper[d] -= s[d] - (a[p] - g)), a[d] + g > s[p] && (e.offsets.popper[d] += a[d] + g - s[p]), e.offsets.popper = C(e.offsets.popper);
                var m = a[d] + a[c] / 2 - g / 2,
                  v = l(e.instance.popper),
                  y = parseFloat(v["margin" + f], 10),
                  _ = parseFloat(v["border" + f + "Width"], 10),
                  b = m - e.offsets.popper[d] - y - _;
                return b = Math.max(Math.min(s[c] - g, b), 0), e.arrowElement = r, e.offsets.arrow = (E(n = {}, d, Math.round(b)), E(n, h, ""), n), e
              },
              element: "[x-arrow]"
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function(e, t) {
                if (P(e.instance.modifiers, "inner")) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                var n = S(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                  r = e.placement.split("-")[0],
                  i = O(r),
                  o = e.placement.split("-")[1] || "",
                  s = [];
                switch (t.behavior) {
                  case $.FLIP:
                    s = [r, i];
                    break;
                  case $.CLOCKWISE:
                    s = K(r);
                    break;
                  case $.COUNTERCLOCKWISE:
                    s = K(r, !0);
                    break;
                  default:
                    s = t.behavior
                }
                return s.forEach(function(a, l) {
                  if (r !== a || s.length === l + 1) return e;
                  r = e.placement.split("-")[0], i = O(r);
                  var u = e.offsets.popper,
                    c = e.offsets.reference,
                    f = Math.floor,
                    d = "left" === r && f(u.right) > f(c.left) || "right" === r && f(u.left) < f(c.right) || "top" === r && f(u.bottom) > f(c.top) || "bottom" === r && f(u.top) < f(c.bottom),
                    h = f(u.left) < f(n.left),
                    p = f(u.right) > f(n.right),
                    g = f(u.top) < f(n.top),
                    m = f(u.bottom) > f(n.bottom),
                    v = "left" === r && h || "right" === r && p || "top" === r && g || "bottom" === r && m,
                    y = -1 !== ["top", "bottom"].indexOf(r),
                    _ = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                  (d || v || _) && (e.flipped = !0, (d || v) && (r = s[l + 1]), _ && (o = function(e) {
                    return "end" === e ? "start" : "start" === e ? "end" : e
                  }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = T({}, e.offsets.popper, k(e.instance.popper, e.offsets.reference, e.placement)), e = j(e.instance.modifiers, e, "flip"))
                }), e
              },
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport"
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function(e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  r = e.offsets,
                  i = r.popper,
                  o = r.reference,
                  s = -1 !== ["left", "right"].indexOf(n),
                  a = -1 === ["top", "left"].indexOf(n);
                return i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0), e.placement = O(t), e.offsets.popper = C(i), e
              }
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function(e) {
                if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
                var t = e.offsets.reference,
                  n = L(e.instance.modifiers, function(e) {
                    return "preventOverflow" === e.name
                  }).boundaries;
                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                  if (!0 === e.hide) return e;
                  e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                } else {
                  if (!1 === e.hide) return e;
                  e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                }
                return e
              }
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function(e, t) {
                var n = t.x,
                  r = t.y,
                  i = e.offsets.popper,
                  o = L(e.instance.modifiers, function(e) {
                    return "applyStyle" === e.name
                  }).gpuAcceleration;
                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                var s = void 0 !== o ? o : t.gpuAcceleration,
                  a = x(f(e.instance.popper)),
                  l = {
                    position: i.position
                  },
                  u = {
                    left: Math.floor(i.left),
                    top: Math.floor(i.top),
                    bottom: Math.floor(i.bottom),
                    right: Math.floor(i.right)
                  },
                  c = "bottom" === n ? "top" : "bottom",
                  d = "right" === r ? "left" : "right",
                  h = H("transform"),
                  p = void 0,
                  g = void 0;
                if (g = "bottom" === c ? -a.height + u.bottom : u.top, p = "right" === d ? -a.width + u.right : u.left, s && h) l[h] = "translate3d(" + p + "px, " + g + "px, 0)", l[c] = 0, l[d] = 0, l.willChange = "transform";
                else {
                  var m = "bottom" === c ? -1 : 1,
                    v = "right" === d ? -1 : 1;
                  l[c] = g * m, l[d] = p * v, l.willChange = c + ", " + d
                }
                var y = {
                  "x-placement": e.placement
                };
                return e.attributes = T({}, y, e.attributes), e.styles = T({}, l, e.styles), e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles), e
              },
              gpuAcceleration: !0,
              x: "bottom",
              y: "right"
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function(e) {
                var t, n;
                return B(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                }), e.arrowElement && Object.keys(e.arrowStyles).length && B(e.arrowElement, e.arrowStyles), e
              },
              onLoad: function(e, t, n, r, i) {
                var o = N(0, t, e),
                  s = D(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                return t.setAttribute("x-placement", s), B(t, {
                  position: "absolute"
                }), n
              },
              gpuAcceleration: void 0
            }
          }
        },
        G = function() {
          function e(t, n) {
            var r = this,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            b(this, e), this.scheduleUpdate = function() {
              return requestAnimationFrame(r.update)
            }, this.update = s(this.update.bind(this)), this.options = T({}, e.Defaults, i), this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: []
            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, e.Defaults.modifiers, i.modifiers)).forEach(function(t) {
              r.options.modifiers[t] = T({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
              return T({
                name: e
              }, r.options.modifiers[e])
            }).sort(function(e, t) {
              return e.order - t.order
            }), this.modifiers.forEach(function(e) {
              e.enabled && a(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
            }), this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), this.state.eventsEnabled = o
          }
          return w(e, [{
            key: "update",
            value: function() {
              return function() {
                if (!this.state.isDestroyed) {
                  var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                  };
                  e.offsets.reference = N(this.state, this.popper, this.reference), e.placement = D(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = k(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = j(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                }
              }.call(this)
            }
          }, {
            key: "destroy",
            value: function() {
              return function() {
                return this.state.isDestroyed = !0, P(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
              }.call(this)
            }
          }, {
            key: "enableEventListeners",
            value: function() {
              return function() {
                this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
              }.call(this)
            }
          }, {
            key: "disableEventListeners",
            value: function() {
              return W.call(this)
            }
          }]), e
        }();
      G.Utils = ("undefined" != typeof window ? window : e).PopperUtils, G.placements = U, G.Defaults = Y, t.default = G
    }.call(t, n(5))
}, function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t) {}]);
