!function(t){var n={};function c(l){if(n[l])return n[l].exports;var d=n[l]={i:l,l:!1,exports:{}};return t[l].call(d.exports,d,d.exports,c),d.l=!0,d.exports}c.m=t,c.c=n,c.d=function(t,n,l){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:l})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(c.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var d in t)c.d(l,d,function(n){return t[n]}.bind(null,d));return l},c.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/",c(c.s=1)}([function(module,exports,__webpack_require__){eval('// stats.js - http://github.com/mrdoob/stats.js\n(function(f,e){ true?module.exports=e():undefined})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();\nu(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/\n1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);\nb.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RhdHMuanMvYnVpbGQvc3RhdHMubWluLmpzPzMxOTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxlQUFlLEtBQXNELG9CQUFvQixTQUE0RCxDQUFDLGtCQUFrQixpQkFBaUIsY0FBYyxxQkFBcUIsU0FBUyxjQUFjLFlBQVksb0JBQW9CLHFEQUFxRCxJQUFJLHdDQUF3QyxnQ0FBZ0MsTUFBTSxPQUFPLGVBQWUsWUFBWSxlQUFlLHVDQUF1QztBQUNsZix5QkFBeUIsS0FBSyxtSEFBbUgsc0ZBQXNGLEtBQUssT0FBTywwREFBMEQsNEJBQTRCLGdCQUFnQixJQUFJLGdDQUFnQyxrQkFBa0IsbURBQW1ELHlCQUF5QjtBQUMzZCxtQ0FBbUMsU0FBUyxtQkFBbUIsYUFBYSwwQkFBMEIsd0JBQXdCLHdKQUF3SixVQUFVLFdBQVcsNEJBQTRCLGFBQWEseUJBQXlCLG1EQUFtRCxxQkFBcUIsY0FBYyxvQkFBb0IsY0FBYztBQUNyZSxvQkFBb0IsY0FBYyxpQkFBaUIsb0JBQW9CLE9BQU8sMkJBQTJCLGdCQUFnQixnQkFBZ0IsY0FBYyxnQkFBZ0Isb0JBQW9CLGNBQWMsa0RBQWtELHFDQUFxQyx3QkFBd0IsY0FBYyxpQkFBaUIsc0NBQXNDLFNBQVMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0YXRzLmpzIC0gaHR0cDovL2dpdGh1Yi5jb20vbXJkb29iL3N0YXRzLmpzXG4oZnVuY3Rpb24oZixlKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTpmLlN0YXRzPWUoKX0pKHRoaXMsZnVuY3Rpb24oKXt2YXIgZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7Yy5hcHBlbmRDaGlsZChhLmRvbSk7cmV0dXJuIGF9ZnVuY3Rpb24gdShhKXtmb3IodmFyIGQ9MDtkPGMuY2hpbGRyZW4ubGVuZ3RoO2QrKyljLmNoaWxkcmVuW2RdLnN0eWxlLmRpc3BsYXk9ZD09PWE/XCJibG9ja1wiOlwibm9uZVwiO2w9YX12YXIgbD0wLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMFwiO2MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpO1xudSgrK2wlYy5jaGlsZHJlbi5sZW5ndGgpfSwhMSk7dmFyIGs9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKSxnPWssYT0wLHI9ZShuZXcgZi5QYW5lbChcIkZQU1wiLFwiIzBmZlwiLFwiIzAwMlwiKSksaD1lKG5ldyBmLlBhbmVsKFwiTVNcIixcIiMwZjBcIixcIiMwMjBcIikpO2lmKHNlbGYucGVyZm9ybWFuY2UmJnNlbGYucGVyZm9ybWFuY2UubWVtb3J5KXZhciB0PWUobmV3IGYuUGFuZWwoXCJNQlwiLFwiI2YwOFwiLFwiIzIwMVwiKSk7dSgwKTtyZXR1cm57UkVWSVNJT046MTYsZG9tOmMsYWRkUGFuZWw6ZSxzaG93UGFuZWw6dSxiZWdpbjpmdW5jdGlvbigpe2s9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7YSsrO3ZhciBjPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCk7aC51cGRhdGUoYy1rLDIwMCk7aWYoYz5nKzFFMyYmKHIudXBkYXRlKDFFMyphLyhjLWcpLDEwMCksZz1jLGE9MCx0KSl7dmFyIGQ9cGVyZm9ybWFuY2UubWVtb3J5O3QudXBkYXRlKGQudXNlZEpTSGVhcFNpemUvXG4xMDQ4NTc2LGQuanNIZWFwU2l6ZUxpbWl0LzEwNDg1NzYpfXJldHVybiBjfSx1cGRhdGU6ZnVuY3Rpb24oKXtrPXRoaXMuZW5kKCl9LGRvbUVsZW1lbnQ6YyxzZXRNb2RlOnV9fTtmLlBhbmVsPWZ1bmN0aW9uKGUsZixsKXt2YXIgYz1JbmZpbml0eSxrPTAsZz1NYXRoLnJvdW5kLGE9Zyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSkscj04MCphLGg9NDgqYSx0PTMqYSx2PTIqYSxkPTMqYSxtPTE1KmEsbj03NCphLHA9MzAqYSxxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cS53aWR0aD1yO3EuaGVpZ2h0PWg7cS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6ODBweDtoZWlnaHQ6NDhweFwiO3ZhciBiPXEuZ2V0Q29udGV4dChcIjJkXCIpO2IuZm9udD1cImJvbGQgXCIrOSphK1wicHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZcIjtiLnRleHRCYXNlbGluZT1cInRvcFwiO2IuZmlsbFN0eWxlPWw7Yi5maWxsUmVjdCgwLDAscixoKTtiLmZpbGxTdHlsZT1mO2IuZmlsbFRleHQoZSx0LHYpO1xuYi5maWxsUmVjdChkLG0sbixwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkLG0sbixwKTtyZXR1cm57ZG9tOnEsdXBkYXRlOmZ1bmN0aW9uKGgsdyl7Yz1NYXRoLm1pbihjLGgpO2s9TWF0aC5tYXgoayxoKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9MTtiLmZpbGxSZWN0KDAsMCxyLG0pO2IuZmlsbFN0eWxlPWY7Yi5maWxsVGV4dChnKGgpK1wiIFwiK2UrXCIgKFwiK2coYykrXCItXCIrZyhrKStcIilcIix0LHYpO2IuZHJhd0ltYWdlKHEsZCthLG0sbi1hLHAsZCxtLG4tYSxwKTtiLmZpbGxSZWN0KGQrbi1hLG0sYSxwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkK24tYSxtLGEsZygoMS1oL3cpKnApKX19fTtyZXR1cm4gZn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/stats.js/build/stats.min.js\nvar stats_min = __webpack_require__(0);\nvar stats_min_default = /*#__PURE__*/__webpack_require__.n(stats_min);\n\n// CONCATENATED MODULE: ./src/helpers.js\nfunction createShader(\n\t/** @type {WebGL2RenderingContext} */ gl,\n\ttype,\n\tsource\n) {\n\tconst shader = gl.createShader(type);\n\n\tgl.shaderSource(shader, source);\n\tgl.compileShader(shader);\n\n\tconst success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n\n\tif (success) {\n\t\treturn shader;\n\t}\n\n\tconsole.log(gl.getShaderInfoLog(shader));\n\tgl.deleteShader(shader);\n}\n\nfunction createProgram(\n\t/** @type {WebGL2RenderingContext} */ gl,\n\tvertexShader,\n\tfragmentShader\n) {\n\tconst program = gl.createProgram();\n\n\tgl.attachShader(program, vertexShader);\n\tgl.attachShader(program, fragmentShader);\n\n\tgl.linkProgram(program);\n\n\tconst success = gl.getProgramParameter(program, gl.LINK_STATUS);\n\n\tif (success) {\n\t\treturn program;\n\t}\n\n\tconsole.log(gl.getProgramInfoLog(program));\n\tgl.deleteProgram(program);\n}\n\nfunction resizeCanvasToDisplaySize(canvas, multiplier) {\n\tmultiplier = multiplier || 1;\n\tconst width = (canvas.clientWidth * multiplier) | 0;\n\tconst height = (canvas.clientHeight * multiplier) | 0;\n\tif (canvas.width !== width || canvas.height !== height) {\n\t\tcanvas.width = width;\n\t\tcanvas.height = height;\n\t\treturn true;\n\t}\n\treturn false;\n}\n\nfunction hexToRgb(hex) {\n\tconst result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n\treturn result\n\t\t? {\n\t\t\t\tr: parseInt(result[1], 16) / 255,\n\t\t\t\tg: parseInt(result[2], 16) / 255,\n\t\t\t\tb: parseInt(result[3], 16) / 255,\n\t\t  }\n\t\t: null;\n}\n\n// CONCATENATED MODULE: ./src/gl-program/index.js\n\n\nclass gl_program_GLProgram {\n\tconstructor(gl) {\n\t\t/** @type {WebGL2RenderingContext} */\n\t\tthis.gl = gl;\n\t\tthis.attributes = {};\n\t\tthis.uniforms = {};\n\n\t\tthis.setup();\n\t}\n\n\tsetup() {\n\t\tthis.createProgram();\n\t\tthis.setupAttributes();\n\t\tthis.setupUniforms();\n\t}\n\n\tcreateProgram(vertexSource, fragmentSource) {\n\t\tconst vertexShader = createShader(\n\t\t\tthis.gl,\n\t\t\tthis.gl.VERTEX_SHADER,\n\t\t\tvertexSource\n\t\t);\n\t\tconst fragmentShader = createShader(\n\t\t\tthis.gl,\n\t\t\tthis.gl.FRAGMENT_SHADER,\n\t\t\tfragmentSource\n\t\t);\n\n\t\tthis.program = createProgram(this.gl, vertexShader, fragmentShader);\n\t\tthis.gl.useProgram(this.program);\n\n\t\tthis.buffer = this.gl.createBuffer();\n\t\tthis.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);\n\t}\n\n\tsetupAttributes() {\n\t\tthis.vao = this.gl.createVertexArray();\n\t\tthis.gl.bindVertexArray(this.vao);\n\t}\n\n\tsetupUniforms() {}\n\n\tdraw() {\n\t\tthis.gl.useProgram(this.program);\n\t\tthis.gl.bindVertexArray(this.vao);\n\t\tthis.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);\n\t}\n}\n\n// CONCATENATED MODULE: ./src/triangles/shaders/vertex.glsl\n/* harmony default export */ var vertex = (\"#version 300 es\\nin vec4 a_position;void main(){gl_Position=a_position;}\");\n// CONCATENATED MODULE: ./src/triangles/shaders/fragment.glsl\n/* harmony default export */ var fragment = (\"#version 300 es\\nprecision highp float;out vec4 outColor;uniform vec3 u_color;void main(){outColor=vec4(u_color.xyz,1);}\");\n// CONCATENATED MODULE: ./src/triangles/index.js\n\n\n\n\n\nclass triangles_Triangles extends gl_program_GLProgram {\n\tconstructor(gl) {\n\t\tsuper(gl);\n\t\t// prettier-ignore\n\t\tthis.rawData = new Float32Array([\n\t\t\t-0.5, -0.5,\n\t\t\t-0.5, 0.5,\n\t\t\t0.5, 0.5,\n\t\t\t0.5, 0.5,\n\t\t\t0.5, -0.5,\n\t\t\t-0.5, -0.5,\n\t\t]);\n\t}\n\n\tcreateProgram() {\n\t\tsuper.createProgram(vertex, fragment);\n\t}\n\n\tsetupAttributes() {\n\t\tsuper.setupAttributes();\n\n\t\tthis.attributes.positionAttributeLocation = this.gl.getAttribLocation(\n\t\t\tthis.program,\n\t\t\t'a_position'\n\t\t);\n\n\t\tthis.gl.vertexAttribPointer(\n\t\t\tthis.attributes.positionAttributeLocation,\n\t\t\t2,\n\t\t\tthis.gl.FLOAT,\n\t\t\tfalse,\n\t\t\t0,\n\t\t\t0\n\t\t);\n\n\t\tthis.gl.enableVertexAttribArray(this.attributes.positionAttributeLocation);\n\t}\n\n\tsetupUniforms() {\n\t\tsuper.setupUniforms();\n\n\t\tthis.uniforms.colorLocation = this.gl.getUniformLocation(\n\t\t\tthis.program,\n\t\t\t'u_color'\n\t\t);\n\n\t\tconst colorRgb = hexToRgb('#ffffff');\n\t\tthis.gl.uniform3f(\n\t\t\tthis.uniforms.colorLocation,\n\t\t\tcolorRgb.r,\n\t\t\tcolorRgb.g,\n\t\t\tcolorRgb.b\n\t\t);\n\t}\n\n\tdraw() {\n\t\tsuper.draw();\n\n\t\tthis.gl.bufferData(this.gl.ARRAY_BUFFER, this.rawData, this.gl.STATIC_DRAW);\n\t\tthis.gl.drawArrays(this.gl.TRIANGLES, 0, 6);\n\t}\n}\n\n// CONCATENATED MODULE: ./src/index.js\n\n\n\n\nclass src_Game {\n\tconstructor() {\n\t\tthis.canvas = document.querySelector('#canvas');\n\n\t\t/** @type {WebGL2RenderingContext} */\n\t\tthis.gl = this.canvas.getContext('webgl2');\n\t}\n\n\tasync setupGl() {\n\t\tresizeCanvasToDisplaySize(this.gl.canvas, 2);\n\n\t\tthis.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);\n\t}\n\n\tasync start() {\n\t\tawait this.setupGl();\n\n\t\tthis.stats = new stats_min_default.a();\n\t\tthis.stats.showPanel(0);\n\t\tdocument.body.appendChild(this.stats.dom);\n\n\t\tthis.triangles = new triangles_Triangles(this.gl);\n\n\t\tconst backgroundColorRgb = hexToRgb('#000000');\n\t\tthis.gl.clearColor(\n\t\t\tbackgroundColorRgb.r,\n\t\t\tbackgroundColorRgb.g,\n\t\t\tbackgroundColorRgb.b,\n\t\t\t1.0\n\t\t);\n\n\t\tthis.draw();\n\t}\n\n\tdraw() {\n\t\tthis.stats.begin();\n\t\tthis.gl.clear(this.gl.COLOR_BUFFER_BIT);\n\n\t\tthis.triangles.draw();\n\n\t\tthis.stats.end();\n\t\trequestAnimationFrame(this.draw.bind(this));\n\t}\n}\n\nconst game = new src_Game();\ngame.start();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcz9kN2MyIiwid2VicGFjazovLy8uL3NyYy9nbC1wcm9ncmFtL2luZGV4LmpzPzA3NTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyaWFuZ2xlcy9zaGFkZXJzL3ZlcnRleC5nbHNsPzRiYmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyaWFuZ2xlcy9zaGFkZXJzL2ZyYWdtZW50Lmdsc2w/MjNiNCIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpYW5nbGVzL2luZGV4LmpzP2Y3YWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTztBQUNQLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNkJBQTZCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvRDREOztBQUU3QyxNQUFNLG9CQUFTO0FBQzlCO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGFBQWE7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakRlLGdGQUFxQyxZQUFZLHdCQUF3QixDOztBQ0F6RSxxRkFBd0Msa0JBQWtCLHFCQUFxQixZQUFZLDhCQUE4QixDOztBQ0F6RjtBQUNOO0FBQ1E7QUFDSTs7QUFFdEMsTUFBTSxtQkFBUyxTQUFTLG9CQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixNQUFZLEVBQUUsUUFBYztBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQ2xFNkI7QUFDc0M7QUFDdEI7O0FBRTdDLE1BQU0sUUFBSTtBQUNWO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBLEVBQUUseUJBQXlCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFLO0FBQ3hCO0FBQ0E7O0FBRUEsdUJBQXVCLG1CQUFTOztBQUVoQyw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFFBQUk7QUFDckIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFkZXIoXG5cdC8qKiBAdHlwZSB7V2ViR0wyUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wsXG5cdHR5cGUsXG5cdHNvdXJjZVxuKSB7XG5cdGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuXHRnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuXHRnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cblx0Y29uc3Qgc3VjY2VzcyA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcblxuXHRpZiAoc3VjY2Vzcykge1xuXHRcdHJldHVybiBzaGFkZXI7XG5cdH1cblxuXHRjb25zb2xlLmxvZyhnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuXHRnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oXG5cdC8qKiBAdHlwZSB7V2ViR0wyUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wsXG5cdHZlcnRleFNoYWRlcixcblx0ZnJhZ21lbnRTaGFkZXJcbikge1xuXHRjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuXG5cdGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuXHRnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuXG5cdGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG5cdGNvbnN0IHN1Y2Nlc3MgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKTtcblxuXHRpZiAoc3VjY2Vzcykge1xuXHRcdHJldHVybiBwcm9ncmFtO1xuXHR9XG5cblx0Y29uc29sZS5sb2coZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuXHRnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShjYW52YXMsIG11bHRpcGxpZXIpIHtcblx0bXVsdGlwbGllciA9IG11bHRpcGxpZXIgfHwgMTtcblx0Y29uc3Qgd2lkdGggPSAoY2FudmFzLmNsaWVudFdpZHRoICogbXVsdGlwbGllcikgfCAwO1xuXHRjb25zdCBoZWlnaHQgPSAoY2FudmFzLmNsaWVudEhlaWdodCAqIG11bHRpcGxpZXIpIHwgMDtcblx0aWYgKGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG5cdFx0Y2FudmFzLndpZHRoID0gd2lkdGg7XG5cdFx0Y2FudmFzLmhlaWdodCA9IGhlaWdodDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcblx0Y29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG5cdHJldHVybiByZXN1bHRcblx0XHQ/IHtcblx0XHRcdFx0cjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNikgLyAyNTUsXG5cdFx0XHRcdGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpIC8gMjU1LFxuXHRcdFx0XHRiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSAvIDI1NSxcblx0XHQgIH1cblx0XHQ6IG51bGw7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTaGFkZXIsIGNyZWF0ZVByb2dyYW0gfSBmcm9tICcuLi9oZWxwZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0xQcm9ncmFtIHtcblx0Y29uc3RydWN0b3IoZ2wpIHtcblx0XHQvKiogQHR5cGUge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9ICovXG5cdFx0dGhpcy5nbCA9IGdsO1xuXHRcdHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuXHRcdHRoaXMudW5pZm9ybXMgPSB7fTtcblxuXHRcdHRoaXMuc2V0dXAoKTtcblx0fVxuXG5cdHNldHVwKCkge1xuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpO1xuXHRcdHRoaXMuc2V0dXBBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5zZXR1cFVuaWZvcm1zKCk7XG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpIHtcblx0XHRjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoXG5cdFx0XHR0aGlzLmdsLFxuXHRcdFx0dGhpcy5nbC5WRVJURVhfU0hBREVSLFxuXHRcdFx0dmVydGV4U291cmNlXG5cdFx0KTtcblx0XHRjb25zdCBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcihcblx0XHRcdHRoaXMuZ2wsXG5cdFx0XHR0aGlzLmdsLkZSQUdNRU5UX1NIQURFUixcblx0XHRcdGZyYWdtZW50U291cmNlXG5cdFx0KTtcblxuXHRcdHRoaXMucHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odGhpcy5nbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG5cdFx0dGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG5cblx0XHR0aGlzLmJ1ZmZlciA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XG5cdFx0dGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcik7XG5cdH1cblxuXHRzZXR1cEF0dHJpYnV0ZXMoKSB7XG5cdFx0dGhpcy52YW8gPSB0aGlzLmdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XG5cdFx0dGhpcy5nbC5iaW5kVmVydGV4QXJyYXkodGhpcy52YW8pO1xuXHR9XG5cblx0c2V0dXBVbmlmb3JtcygpIHt9XG5cblx0ZHJhdygpIHtcblx0XHR0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcblx0XHR0aGlzLmdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZhbyk7XG5cdFx0dGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcik7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiI3ZlcnNpb24gMzAwIGVzXFxuaW4gdmVjNCBhX3Bvc2l0aW9uO3ZvaWQgbWFpbigpe2dsX1Bvc2l0aW9uPWFfcG9zaXRpb247fVwiIiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAzMDAgZXNcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7b3V0IHZlYzQgb3V0Q29sb3I7dW5pZm9ybSB2ZWMzIHVfY29sb3I7dm9pZCBtYWluKCl7b3V0Q29sb3I9dmVjNCh1X2NvbG9yLnh5eiwxKTt9XCIiLCJpbXBvcnQgR0xQcm9ncmFtIGZyb20gJy4uL2dsLXByb2dyYW0vaW5kZXguanMnO1xuaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tICcuLi9oZWxwZXJzLmpzJztcbmltcG9ydCB2ZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL3ZlcnRleC5nbHNsJztcbmltcG9ydCBmcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvZnJhZ21lbnQuZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWFuZ2xlcyBleHRlbmRzIEdMUHJvZ3JhbSB7XG5cdGNvbnN0cnVjdG9yKGdsKSB7XG5cdFx0c3VwZXIoZ2wpO1xuXHRcdC8vIHByZXR0aWVyLWlnbm9yZVxuXHRcdHRoaXMucmF3RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuXHRcdFx0LTAuNSwgLTAuNSxcblx0XHRcdC0wLjUsIDAuNSxcblx0XHRcdDAuNSwgMC41LFxuXHRcdFx0MC41LCAwLjUsXG5cdFx0XHQwLjUsIC0wLjUsXG5cdFx0XHQtMC41LCAtMC41LFxuXHRcdF0pO1xuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHRzdXBlci5jcmVhdGVQcm9ncmFtKHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpO1xuXHR9XG5cblx0c2V0dXBBdHRyaWJ1dGVzKCkge1xuXHRcdHN1cGVyLnNldHVwQXR0cmlidXRlcygpO1xuXG5cdFx0dGhpcy5hdHRyaWJ1dGVzLnBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKFxuXHRcdFx0dGhpcy5wcm9ncmFtLFxuXHRcdFx0J2FfcG9zaXRpb24nXG5cdFx0KTtcblxuXHRcdHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcblx0XHRcdHRoaXMuYXR0cmlidXRlcy5wb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLFxuXHRcdFx0Mixcblx0XHRcdHRoaXMuZ2wuRkxPQVQsXG5cdFx0XHRmYWxzZSxcblx0XHRcdDAsXG5cdFx0XHQwXG5cdFx0KTtcblxuXHRcdHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hdHRyaWJ1dGVzLnBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24pO1xuXHR9XG5cblx0c2V0dXBVbmlmb3JtcygpIHtcblx0XHRzdXBlci5zZXR1cFVuaWZvcm1zKCk7XG5cblx0XHR0aGlzLnVuaWZvcm1zLmNvbG9yTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbihcblx0XHRcdHRoaXMucHJvZ3JhbSxcblx0XHRcdCd1X2NvbG9yJ1xuXHRcdCk7XG5cblx0XHRjb25zdCBjb2xvclJnYiA9IGhleFRvUmdiKCcjZmZmZmZmJyk7XG5cdFx0dGhpcy5nbC51bmlmb3JtM2YoXG5cdFx0XHR0aGlzLnVuaWZvcm1zLmNvbG9yTG9jYXRpb24sXG5cdFx0XHRjb2xvclJnYi5yLFxuXHRcdFx0Y29sb3JSZ2IuZyxcblx0XHRcdGNvbG9yUmdiLmJcblx0XHQpO1xuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRzdXBlci5kcmF3KCk7XG5cblx0XHR0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMucmF3RGF0YSwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG5cdFx0dGhpcy5nbC5kcmF3QXJyYXlzKHRoaXMuZ2wuVFJJQU5HTEVTLCAwLCA2KTtcblx0fVxufVxuIiwiaW1wb3J0IFN0YXRzIGZyb20gJ3N0YXRzLmpzJztcbmltcG9ydCB7IHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUsIGhleFRvUmdiIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBUcmlhbmdsZXMgZnJvbSAnLi90cmlhbmdsZXMvaW5kZXguanMnO1xuXG5jbGFzcyBHYW1lIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyk7XG5cblx0XHQvKiogQHR5cGUge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9ICovXG5cdFx0dGhpcy5nbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xuXHR9XG5cblx0YXN5bmMgc2V0dXBHbCgpIHtcblx0XHRyZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKHRoaXMuZ2wuY2FudmFzLCAyKTtcblxuXHRcdHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy5nbC5jYW52YXMud2lkdGgsIHRoaXMuZ2wuY2FudmFzLmhlaWdodCk7XG5cdH1cblxuXHRhc3luYyBzdGFydCgpIHtcblx0XHRhd2FpdCB0aGlzLnNldHVwR2woKTtcblxuXHRcdHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcblx0XHR0aGlzLnN0YXRzLnNob3dQYW5lbCgwKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3RhdHMuZG9tKTtcblxuXHRcdHRoaXMudHJpYW5nbGVzID0gbmV3IFRyaWFuZ2xlcyh0aGlzLmdsKTtcblxuXHRcdGNvbnN0IGJhY2tncm91bmRDb2xvclJnYiA9IGhleFRvUmdiKCcjMDAwMDAwJyk7XG5cdFx0dGhpcy5nbC5jbGVhckNvbG9yKFxuXHRcdFx0YmFja2dyb3VuZENvbG9yUmdiLnIsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3JSZ2IuZyxcblx0XHRcdGJhY2tncm91bmRDb2xvclJnYi5iLFxuXHRcdFx0MS4wXG5cdFx0KTtcblxuXHRcdHRoaXMuZHJhdygpO1xuXHR9XG5cblx0ZHJhdygpIHtcblx0XHR0aGlzLnN0YXRzLmJlZ2luKCk7XG5cdFx0dGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuXG5cdFx0dGhpcy50cmlhbmdsZXMuZHJhdygpO1xuXG5cdFx0dGhpcy5zdGF0cy5lbmQoKTtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3LmJpbmQodGhpcykpO1xuXHR9XG59XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuZ2FtZS5zdGFydCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n")}]);