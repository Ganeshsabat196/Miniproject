(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[28],{407:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(22),c=n(773),i=n(940),u=n(799),l=n(5),s=n(775),f=n(776),p=n(247),d=n(818);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=regeneratorRuntime.mark(j);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,n,r,a=v(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).order_by="created_at",t.order_by_direction="desc",t}return t=c,(n=[{key:"onClickNextPage",value:function(e){var t=this.props.custom_courses_pagination.page;this.onClickPage(e,t+1)}},{key:"onClickPreviousPage",value:function(e){var t=this.props.custom_courses_pagination.page;this.onClickPage(e,t-1)}},{key:"onClickPage",value:function(e,t){var n=this.props,r=n.fetch,o=n.custom_courses_pagination,a=e.currentTarget;t=t||parseInt(a.getAttribute("data-page")),t=Math.max(t,1),(t=(t=Math.min(t,o.pageCount))||1)!=o.page&&r({page:t,order_by:this.order_by,order_by_direction:this.order_by_direction}),e.preventDefault()}},{key:"onClickOrderBy",value:function(e){var t=this.props.fetch,n=e.currentTarget.querySelector("input").getAttribute("value");this.order_by=n,t({page:1,order_by:this.order_by,order_by_direction:this.order_by_direction})}},{key:"onClickDirection",value:function(e){var t=this.props.fetch,n=e.currentTarget.querySelector("input").getAttribute("value");this.order_by_direction=n,t({page:1,order_by:this.order_by,order_by_direction:this.order_by_direction})}},{key:"renderHelmet",value:function(){return o.a.createElement(s.a,{title:"Custom Typing Courses - The Typing Cat",description:"List of typing courses created by our users. Create and share your own typing course."})}},{key:"render",value:function(){for(var e=this,t=this.props,n=t.custom_courses,r=t.custom_courses_pagination,a=void 0===r?{}:r,c=t.intl,u=a.page,s=void 0===u?1:u,f=a.pageCount,p=void 0===f?0:f,d=c.formatMessage({id:"descending",description:"Descending",defaultMessage:"Descending"}),m=c.formatMessage({id:"ascending",description:"Ascending",defaultMessage:"Ascending"}),y=o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"btn-group","data-toggle":"buttons"},o.a.createElement("label",{className:"btn btn-default text-notransform "+("created_at"===this.order_by?"active":""),title:"Hate","data-toggle":"tooltip",onClick:function(t){return e.onClickOrderBy(t)}},o.a.createElement("input",{type:"radio",name:"order_by",value:"created_at",autoComplete:"off"}),o.a.createElement(l.b,{id:"createdAt",defaultMessage:"Created at"})),o.a.createElement("label",{className:"btn btn-default text-notransform "+("like"===this.order_by?"active":""),title:"Dislike","data-toggle":"tooltip",onClick:function(t){return e.onClickOrderBy(t)}},o.a.createElement("input",{type:"radio",name:"order_by",value:"like",autoComplete:"off"}),o.a.createElement(l.b,{id:"likes",defaultMessage:"Likes"})),o.a.createElement("label",{className:"btn btn-default text-notransform "+("seen"===this.order_by?"active":""),title:"Neutral","data-toggle":"tooltip",onClick:function(t){return e.onClickOrderBy(t)}},o.a.createElement("input",{type:"radio",name:"order_by",value:"seen",autoComplete:"off"}),o.a.createElement(l.b,{id:"popularity",defaultMessage:"Popularity"})))," ",o.a.createElement("div",{className:"btn-group","data-toggle":"buttons"},o.a.createElement("label",{className:"btn btn-default text-notransform "+("desc"===this.order_by_direction?"active":""),title:d,"data-toggle":"tooltip",onClick:function(t){return e.onClickDirection(t)}},o.a.createElement("input",{type:"radio",name:"order_by_direction",value:"desc",autoComplete:"off"}),o.a.createElement("i",{className:"fa fa-sort-amount-desc","aria-hidden":"true"}),o.a.createElement("div",{className:"sr-only"},o.a.createElement(l.b,{id:"descending",defaultMessage:"Descending"}))),o.a.createElement("label",{className:"btn btn-default text-notransform "+("asc"===this.order_by_direction?"active":""),title:m,"data-toggle":"tooltip",onClick:function(t){return e.onClickDirection(t)}},o.a.createElement("input",{type:"radio",name:"order_by_direction",value:"asc",autoComplete:"off"}),o.a.createElement("i",{className:"fa fa-sort-amount-asc","aria-hidden":"true"}),o.a.createElement("div",{className:"sr-only"},o.a.createElement(l.b,{id:"ascending",defaultMessage:"Ascending"}))))),b=[],g=-3;g<=3;++g){var h=s+g;h>=1&&h<=p&&b.push(h)}var v=p?o.a.createElement("nav",{className:"row"},y," ",o.a.createElement("div",{className:"col-md-6"},o.a.createElement("ul",{className:"pagination margin-top-0 margin-bottom-0 pull-right"},o.a.createElement("li",null,o.a.createElement("a",{href:"#","aria-label":"Previous",onClick:function(t){return e.onClickPreviousPage(t)}},o.a.createElement("span",{"aria-hidden":"true"},"«"))),b.map((function(t){return o.a.createElement("li",{className:s===t?"active":"",key:t},o.a.createElement("a",{href:"#","data-page":t,onClick:function(t){return e.onClickPage(t)}},t))})),o.a.createElement("li",null,o.a.createElement("a",{href:"#","aria-label":"Next",onClick:function(t){return e.onClickNextPage(t)}},o.a.createElement("span",{"aria-hidden":"true"},"»")))))):"";return o.a.createElement("div",{className:"container typing-courses"},this.renderHelmet(),o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement(l.b,{id:"userGeneratedCourses",defaultMessage:"User-Generated Courses"}))),o.a.createElement("div",{className:"col-xs-12 margin-top-25 margin-bottom-25"},v),o.a.createElement("div",{className:"col-xs-12 list shadow"},n.map((function(e){return o.a.createElement(i.a,{data:e,key:e.slug})}))),o.a.createElement("div",{className:"col-xs-12 margin-top-25 margin-bottom-200"},v))}}])&&g(t.prototype,n),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.a.Component),w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach((function(t){b(e,t,n[t])}))}return e}({},p.a);function j(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(Object(d.a)(),"t0",1);case 1:return t.next=4,Object(c.h)(p.a.fetch);case 4:return e=t.sent,t.delegateYield(Object(d.a)(e.payload),"t1",6);case 6:t.next=1;break;case 8:case"end":return t.stop()}}),y)}t.default=Object(a.c)((function(e){return{custom_courses:Object(u.a)(e.custom_courses),custom_courses_pagination:e.custom_courses.pagination}}),w)(Object(l.f)(Object(f.a)(E,j)))},774:function(e,t,n){"use strict";var r=n(233),o=n.n(r),a=n(46),c=function(e){var t=Date.now();return o()(e.url,{method:e.method||"GET",credentials:"same-origin",headers:Object.assign({Accept:"application/json","Content-Type":"application/json"},e.headers),body:JSON.stringify(e.body)}).then((function(e){return e.text()})).then((function(n){try{Object(a.a)("send","timing","fetch",(e.method||"GET")+" "+e.url,Date.now()-t)}catch(e){console.warn(e)}try{return JSON.parse(n)}catch(e){throw e.message+="\n"+n+"\n",e}})).catch((function(t){throw t.message+=" "+JSON.stringify(e),t}))};t.a=function(e){return c(e).catch((function(){return c(e)})).catch((function(){return c(e)})).catch((function(){return c(e)})).catch((function(){return c(e)})).catch((function(){return c(e)})).catch((function(){return c(e)})).catch((function(){return c(e)})).catch((function(){return c(e)})).catch((function(){return c(e)}))}},775:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(113);t.a=function(e){var t=e.title,n=e.description;return o.a.createElement(a.Helmet,null,o.a.createElement("title",null,t),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:n}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:description",content:n}))}},776:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(162);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e,t){return function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(y,n);var r,c,f,d=s(y);function y(){var e;i(this,y);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(p(e=d.call.apply(d,[this].concat(n))),"state",{}),e}return r=y,(c=[{key:"componentDidMount",value:function(){var e,n=this.props,r=n.match,o=n.computedMatch;r&&(e=r.params),o&&(e=o.params),this.setState({saga:Object(a.d)(t,e,this.state.prevParams||{},r||o||{}),prevParams:e})}},{key:"componentDidUpdate",value:function(e){e.match===this.props.match&&e.computedMatch===this.props.computedMatch||(this.componentWillUnmount(),this.componentDidMount())}},{key:"componentWillUnmount",value:function(){this.state.saga&&this.state.saga.cancel()}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}])&&u(r.prototype,c),f&&u(r,f),Object.defineProperty(r,"prototype",{writable:!1}),y}(o.a.Component)}},818:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(774),o=n(773),a=n(784),c=n(247),i=regeneratorRuntime.mark(s);function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach((function(t){l(e,t,n[t])}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){var e,t,n,l=arguments;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e=u({page:1,pageSize:100,order_by:"created_at",order_by_direction:"desc"},e=l.length>0&&void 0!==l[0]?l[0]:{}),i.next=4,Object(o.e)(c.a.request(e));case 4:return t="/api/custom_courses?".concat(Object(a.stringify)(e)),i.next=7,Object(o.a)(r.a,{url:t});case 7:return n=i.sent,i.next=10,Object(o.e)(c.a.receive(n));case 10:case"end":return i.stop()}}),i)}}}]);