"use strict";for(var params={},queryString=location.hash.substring(1),regex=/([^&=]+)=([^&]*)/g,m;m=regex.exec(queryString);)params[decodeURIComponent(m[1])]=decodeURIComponent(m[2]);var req=new XMLHttpRequest,query="https://"+window.location.host+"?"+queryString;req.open("GET",query,!0),req.onreadystatechange=function(a){4===req.readyState&&(200===req.status?window.location=params.state:400===req.status&&window.alert("There was an error processing the token."))},angular.module("javierApp").factory("token_service",["$location","$http","$localStorage",function(a,b,c){var d={local:c.$default(params),header:null,token:null,live_token:function(){return"undefined"==typeof d.local.id_token||null===d.local.id_token?!1:(d.header=KJUR.jws.JWS.readSafeJSONString(b64utoutf8(d.local.id_token.split(".")[0])),d.token=KJUR.jws.JWS.readSafeJSONString(b64utoutf8(d.local.id_token.split(".")[1])),!0)},logout:function(){d.token=null,c.$reset(),window.location=a.absUrl()}};return d}]),angular.module("javierApp").controller("menuCtrl",["$location","$http","$scope","token_service",function(a,b,c,d){var e=[];c.actual=a.path(),c.token_service=d,c.breadcrumb=[],c.menu_service=[],b.get("http://127.0.0.1:8081/v1/menu_opcion_padre/ArbolMenus/Administrador configuración").then(function(a){c.menu_service=a.data,f(c.menu_service,""),g()});var f=function(a,b){for(var c="",d=0;d<a.length;d++)null===a[d].Opciones?(c=b+" , "+a[d].Nombre,e.push({path:a[d].Url,padre:c.split(",")})):f(a[d].Opciones,b+","+a[d].Nombre);return c},g=function(){c.breadcrumb=[""];for(var a=0;a<e.length;a++)c.actual==="/"+e[a].path?c.breadcrumb=e[a].padre:"/"===c.actual&&(c.breadcrumb=[""])};c.$on("$routeChangeStart",function(b,d){c.actual=a.path(),g()}),function(a){a(document).ready(function(){a("ul.dropdown-menu [data-toggle=dropdown]").on("click",function(b){b.preventDefault(),b.stopPropagation(),a(this).parent().siblings().removeClass("open"),a(this).parent().toggleClass("open")})})}(jQuery)}]),angular.module("javierApp").controller("footerCtrl",["$scope",function(a){a.enlaces_universitarios=[{nombre:"Transparencia",link:"#/"},{nombre:"Normatividad",link:"#/"},{nombre:"Trámites",link:"#/"},{nombre:"General",link:"#/"},{nombre:"Docente",link:"#/"},{nombre:"Académica Estudiantil ",link:"#/"},{nombre:"Derechos Pecuniarios",link:"#/"},{nombre:"Sistema de Notificaciones",link:"#/"},{nombre:"CSU",link:"#/"},{nombre:"PIGA",link:"#/"},{nombre:"Bitácora",link:"#/"},{nombre:"Noticias anterioresg",link:"#/"},{nombre:"Área de Red UDNet",link:"#/"},{nombre:"Administración PWI",link:"#/"}],a.copyright="© Copyright 1995 - 2017 - Todos los Derechos Reservados ...",a.map=[{nombre:"Preguntas Frecuentes",link:"#/"},{nombre:"Mapa del Porta",link:"#/"},{nombre:"Política de Privacidad",link:"#/"}]}]),angular.module("javierApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("javierApp").controller("CrearappCtrl",["$http","$scope","configuracionRequest",function(a,b,c){b.confirmar=function(){var a={Nombre:b.aplicacion.nombre,Descripcion:b.aplicacion.descripcion,Dominio:b.aplicacion.dominio};c.post("aplicacion",a).then(function(){alert("Guardo exitosamente"),b.aplicacion={}})},b.reset=function(a){b.aplicacion={},a&&(a.$setPristine(),a.$setUntouched())}}]),angular.module("javierApp").controller("ConsultarappCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("javierApp").controller("CrearperfilCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("javierApp").controller("ConsultarperfilCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("javierApp").controller("CrearmenuCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("javierApp").controller("ConsultarmenuCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("javierApp").controller("ConsultarparametroCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("javierApp").controller("CrearparametroCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("javierApp").factory("configuracionRequest",["$http",function(a){var b="http://127.0.0.1:8081/v1/";return{get:function(c,d){return a.get(b+c+"/?"+d)},post:function(c,d){return a.post(b+c,d)},put:function(c,d,e){return a.put(b+c+"/"+d,e)},"delete":function(c,d){return a["delete"](b+c+"/"+d)}}}]);