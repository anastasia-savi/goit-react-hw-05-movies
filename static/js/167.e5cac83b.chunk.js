"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[167],{8167:function(A,e,t){t.r(e),t.d(e,{default:function(){return M}});var n=t(5861),c=t(9439),i=t(4687),r=t.n(i),a=t(2791),m=t(7689),u=t(1087),b=t(1243);b.Z.defaults.headers.common.accept="application/json",b.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjE4ZDMxY2Y5NWY3MzRhNjkyMTdiZDcxMjY3YTc5YSIsInN1YiI6IjY0Y2E0ZGNhZGQ4M2ZhMDExYzg3MTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T5GujH5fhmYRNEQEfX2T8JNYEfA5YJXbvdxmehC3Gpw";var o=function(){var A=(0,n.Z)(r().mark((function A(){var e;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?language=en-US",A.next=3,b.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US");case 3:return e=A.sent,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),p=t(8500),x=t(6278),l=t(653),s=t(575),N="Home_header__6gPPp",Y="Home_list__88Uf4",f="Home_item__CFHi-",R=t(1272),I=t(184),M=function(){var A=(0,a.useState)([]),e=(0,c.Z)(A,2),t=e[0],i=e[1],b=(0,m.TH)();return(0,a.useEffect)((function(){function A(){return(A=(0,n.Z)(r().mark((function A(){var e,t;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,o();case 3:e=A.sent,t=e.data.results,i(t),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),console.log("Error");case 11:case"end":return A.stop()}}),A,null,[[0,8]])})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("p",{className:N,children:"Trending Movies"}),(0,I.jsx)("ul",{className:Y,children:t.map((function(A){var e=A.id,t=A.title,n=A.name,c=A.backdrop_path;return(0,I.jsxs)(p.ZP,{className:f,component:"div",disablePadding:!0,children:[(0,I.jsx)(l.Z,{children:(0,I.jsx)(s.Z,{alt:"".concat(t||n),src:c?"https://image.tmdb.org/t/p/w500".concat(c):R,width:100})}),(0,I.jsx)(x.Z,{children:(0,I.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:b},children:t||n})})]},e)}))})]})}},1272:function(A){A.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzRUM2NkYzMEFCQzExRTY5OEY3RUZBMjFFNjEyMTg5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzRUM2NkY0MEFCQzExRTY5OEY3RUZBMjFFNjEyMTg5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTNFQzY2RjEwQUJDMTFFNjk4RjdFRkEyMUU2MTIxODkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTNFQzY2RjIwQUJDMTFFNjk4RjdFRkEyMUU2MTIxODkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"}}]);
//# sourceMappingURL=167.e5cac83b.chunk.js.map