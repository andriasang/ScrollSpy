/*
---
description:     ScrollSpy

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - ScrollSpy
...
*/
var ScrollSpy=new Class({Implements:[Options,Events],options:{min:0,mode:"vertical",max:0,container:window,onEnter:$empty,onLeave:$empty,onTick:$empty},initialize:function(a){this.setOptions(a);this.container=document.id(this.options.container);this.enters=this.leaves=0;this.max=this.options.max;if(this.max==0){var b=this.container.getScrollSize();this.max=this.options.mode=="vertical"?b.y:b.x;}this.addListener();},addListener:function(){this.inside=false;this.container.addEvent("scroll",function(){var a=this.container.getScroll();var b=this.options.mode=="vertical"?a.y:a.x;if(b>=this.options.min&&b<=this.max){if(!this.inside){this.inside=true;this.enters++;this.fireEvent("enter",[a,this.enters]);}this.fireEvent("tick",[a,this.inside,this.enters,this.leaves]);}else{if(this.inside){this.inside=false;this.leaves++;this.fireEvent("leave",[a,this.leaves]);}}}.bind(this));}});