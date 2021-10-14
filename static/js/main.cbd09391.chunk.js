(this["webpackJsonpcreate-react-app-template"]=this["webpackJsonpcreate-react-app-template"]||[]).push([[0],{10:function(e,t,a){e.exports={loader:"ImageGallery_loader__4tsAz",gallery:"ImageGallery_gallery__w6oSY"}},11:function(e,t,a){e.exports={item:"ImageGalleryItem_item__2Me1V",image:"ImageGalleryItem_image__5_D0z"}},12:function(e,t,a){e.exports={container:"Button_container__qIv0h",button:"Button_button__3niCH"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__2eOqq",modal:"Modal_modal__2AzXi"}},20:function(e,t,a){},21:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=(a(20),a(3)),s=a(4),l=a(6),u=a(5),h=(a(21),a(7)),d=a.n(h),p=a(1),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.onQueryInputChange=function(t){var a=t.target.value;e.setState({query:a})},e.onQueryFormSubmit=function(t){t.preventDefault();var a=e.state.query;a.trim().length<1||e.props.onSubmit(a.toLowerCase().trim())},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(p.jsx)("header",{className:d.a.searchbar,children:Object(p.jsxs)("form",{className:d.a.form,onSubmit:this.onQueryFormSubmit,children:[Object(p.jsx)("button",{type:"submit",className:d.a.button,disabled:!e.trim().length>0,children:Object(p.jsx)("span",{className:d.a.label,children:"Search"})}),Object(p.jsx)("input",{className:d.a.input,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onQueryInputChange})]})})}}]),a}(n.Component),g=m,b=a(14),j=a(8),f=a.n(j),y=a(10),v=a.n(y),O=a(11),_=a.n(O),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onModalClick,n=e.source,r=e.alt,o=e.largeImageSrc;return Object(p.jsx)("li",{className:_.a.item,onClick:a,children:Object(p.jsx)("img",{src:n,alt:r,"data-source":o,className:_.a.image})},t)}}]),a}(n.Component),w=S,x=a(12),k=a.n(x),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isImageLoading,a=e.handleLoading;return Object(p.jsx)("div",{className:k.a.container,children:t?Object(p.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3}):Object(p.jsx)("button",{type:"button",className:k.a.button,onClick:a,children:"Load more"})})}}]),a}(n.Component),M=C,I=a(13),L=a.n(I),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleEscapeKeydown=function(t){"Escape"===t.code&&e.props.onModalClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onModalClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscapeKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscapeKeydown)}},{key:"render",value:function(){var e=this.props,t=e.source,a=e.descr;return Object(p.jsx)("div",{className:L.a.overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:L.a.modal,children:Object(p.jsx)("img",{src:t,alt:a})})})}}]),a}(n.Component),F=N;var q=function(e){return fetch(e).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong. Try later"))}))};var D=function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},B="23015734-ca5f063b9797e09c36ee88a0d",E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:null,error:null,loading:!1,isModalShown:!1,largeImageData:{}},e.onLoadMoreButtonClick=function(){e.setState((function(e){return{page:e.page+1,loading:!0}}),(function(){var t=e.props.keyword,a=e.state.page,n="https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat(B,"&image_type=photo&orientation=horizontal&per_page=12");q(n).then((function(t){var a=t.hits;return e.setState((function(e){var t=e.images;return{images:[].concat(Object(b.a)(t),Object(b.a)(a))}}))})).then((function(){D()})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})}))}))},e.toggleModalState=function(t){e.setState((function(e){return{isModalShown:!e.isModalShown}}),(function(){e.state.isModalShown&&e.getLargeImageData(t.target)}))},e.getLargeImageData=function(t){e.setState({largeImageData:{source:t.dataset.source,alt:t.alt}})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.keyword!==this.props.keyword&&this.setState({images:[],page:1,loading:!0},(function(){var e=a.props.keyword,t=a.state.page,n="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(B,"&image_type=photo&orientation=horizontal&per_page=12");q(n).then((function(e){var t=e.hits;return a.setState({images:t})})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({loading:!1})}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,r=t.images,o=t.isModalShown,c=t.largeImageData;return Object(p.jsxs)(n.Fragment,{children:[a&&Object(p.jsx)("div",{className:v.a.loader,children:Object(p.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})}),r.length>0&&Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("ul",{className:v.a.gallery,children:r.map((function(t,a){var n=t.id,r=t.webformatURL,o=t.largeImageURL,c=t.tags;return Object(p.jsx)(w,{onModalClick:e.toggleModalState,id:n,source:r,alt:c,largeImageSrc:o},a)}))}),Object(p.jsx)(M,{handleLoading:this.onLoadMoreButtonClick,isImageLoading:a}),o&&Object(p.jsx)(F,{source:c.source,descr:c.alt,onModalClose:this.toggleModalState})]})]})}}]),a}(n.Component),A=E,Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleQueryFormSubmit=function(t){e.setState({query:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"AppContainer",children:[Object(p.jsx)(g,{onSubmit:this.handleQueryFormSubmit}),Object(p.jsx)(A,{keyword:this.state.query})]})}}]),a}(n.Component),z=Q;c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__2cjDv",form:"Searchbar_form__MgPRJ",button:"Searchbar_button__36jzd",label:"Searchbar_label__2gQYP",input:"Searchbar_input__3mw-x"}}},[[43,1,2]]]);
//# sourceMappingURL=main.cbd09391.chunk.js.map