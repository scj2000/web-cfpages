import{_ as N,a as w}from"./TagCloud.vue.fe621038.js";import{_ as y}from"./ArticleCard.vue.34902667.js";import{a as b,w as E,e as k,o as f,f as g,j as c,h as _,u as p,F as O,r as T,b as x,c as R}from"./entry.2991447d.js";var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_FRONTPAGE"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"frontpage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"welcome_message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:401}};u.loc.source={body:`query GET_FRONTPAGE {
  frontpage {
	  id
    welcome_message
    articles(filter: {status: {_eq: "published"}}) {
        id
        title
        cover_image {
            id
            folder {
                name
            }
            filename_disk
            filename_download
            type
            description
            filesize
        }
        summary
        slug
    }
  }
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function m(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){m(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){m(a,n)}),e.definitions&&e.definitions.forEach(function(a){m(a,n)})}var v={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;m(n,i),v[n.name.value]=i}})})();function h(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function A(e,n){var i={kind:e.kind,definitions:[h(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=v[n]||new Set,o=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var l=d;d=new Set,l.forEach(function(t){if(!o.has(t)){o.add(t);var s=v[t]||new Set;s.forEach(function(r){d.add(r)})}})}return o.forEach(function(t){var s=h(e,t);s&&i.definitions.push(s)}),i}A(u,"GET_FRONTPAGE");const D={class:"grid grid-cols-12 gap-2"},G={class:"hidden lg:col-span-3 2xl:col-span-2 lg:block mx-2 lg:mr-0 bg-gray-500 shadow-lg h-full"},V={class:"p-2"},j={class:"p-2"},q={class:"col-span-12 my-2 lg:m-2 p-2 bg-gray-100 shadow-lg lg:col-span-9 2xl:col-span-10 lg:ml-0"},B=["innerHTML"],C={class:"grid grid-cols-1 gap-2 md:grid-cols-2 text-sm"},z=b({__name:"index",async setup(e){let n,i;const{data:a}=([n,i]=E(()=>x(u)),n=await n,i(),n),o=k(()=>{var l,t,s;return(s=(t=(l=a.value)==null?void 0:l.frontpage)==null?void 0:t.articles)==null?void 0:s.map(r=>r)}),d=k(()=>{var l,t;return(t=(l=a.value)==null?void 0:l.frontpage)==null?void 0:t.welcome_message});return(l,t)=>{const s=N,r=w,F=y;return f(),g("div",D,[c("div",G,[c("section",V,[_(s)]),c("section",j,[_(r)])]),c("div",q,[c("div",{innerHTML:p(d),class:"my-6"},null,8,B),c("div",C,[(f(!0),g(O,null,T(p(o),S=>(f(),R(F,{data:S},null,8,["data"]))),256))])])])}}});export{z as default};
