(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{18:function(t,e,a){},19:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){},23:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),s=a(12),i=a.n(s),d=(a(18),a(7)),c=a(13),r=a(10),l=a(3),j=a(4),u=a(6),h=a(5),b=a(2),f=(a(19),a(0)),O=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={task:t.props.task,editing:!1},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.editTodo({task:t.state.task,id:t.props.id}),t.handleEdit()},t.handleEdit=function(){t.setState({editing:!t.state.editing})},t.handleDelete=function(e){e.preventDefault(),t.props.removeTodo(t.props.id)},t.handleStrike=function(e){e.preventDefault(),t.props.toggleStrike(t.props.id)},t}return Object(j.a)(a,[{key:"render",value:function(){var t=this.props.task;return this.state.editing?Object(f.jsx)("div",{className:"Todo-editing",children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:"Todo-editing-content",children:[Object(f.jsx)("input",{type:"text",id:"task",name:"task",value:this.state.task,onChange:this.handleChange,className:"Todo-editing-form"}),Object(f.jsx)("div",{className:"Todo-editing-button",children:Object(f.jsx)("button",{children:Object(f.jsx)("i",{class:"fa fa-check","aria-hidden":"true"})})})]})}):Object(f.jsx)("div",{className:this.props.done?"Todo-finished":"Todo-rendered",children:Object(f.jsxs)("div",{className:"Todo-rendered-content",children:[Object(f.jsx)("li",{onClick:this.handleStrike,children:t}),Object(f.jsxs)("div",{className:"Todo-rendered-buttons",children:[Object(f.jsx)("button",{onClick:this.handleEdit,children:Object(f.jsx)("i",{class:"fa fa-pen","aria-hidden":"true"})}),Object(f.jsx)("button",{onClick:this.handleDelete,children:Object(f.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"})})]})]})})}}]),a}(n.Component),p=a(25),m=(a(21),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={task:""},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(Object(d.a)(Object(d.a)({},t.state),{},{id:Object(p.a)(),done:!1})),t.setState({task:""})},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"TodoForm",children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"task"}),Object(f.jsx)("input",{className:"TodoForm-input",type:"text",id:"task",name:"task",value:this.state.task,placeholder:"New Task",onChange:this.handleChange}),Object(f.jsx)("button",{className:"TodoForm-button",children:"Submit!"})]})})}}]),a}(n.Component)),v=(a(22),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.addTodo=function(e){t.setState({todos:[].concat(Object(r.a)(t.state.todos),[e])})},t.removeTodo=function(e){t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})},t.editTodo=function(e){var a,n=Object(r.a)(t.state.todos),o=Object(c.a)(n);try{for(o.s();!(a=o.n()).done;){var s=a.value;if(s.id===e.id){s.task=e.task;break}}}catch(i){o.e(i)}finally{o.f()}t.setState({todos:Object(r.a)(n)})},t.toggleStrike=function(e){var a=t.state.todos.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{done:!t.done}):t}));t.setState({todos:a})},t}return Object(j.a)(a,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{className:"TodoList",children:[Object(f.jsx)("h1",{className:"TodoList-title",children:"Todo List"}),Object(f.jsx)("ul",{className:"TodoList-list",children:this.state.todos.map((function(e){return Object(f.jsx)(O,{id:e.id,task:e.task,done:e.done,removeTodo:t.removeTodo,editTodo:t.editTodo,toggleStrike:t.toggleStrike},e.id)}))}),Object(f.jsx)("div",{className:"TodoList-form",children:Object(f.jsx)(m,{addTodo:this.addTodo})})]})}}]),a}(n.Component));var k=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(v,{})})};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a62edcdd.chunk.js.map