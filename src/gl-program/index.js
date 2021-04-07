import { createShader, createProgram } from '../helpers.js';

export default class GLProgram {
	constructor(gl) {
		/** @type {WebGL2RenderingContext} */
		this.gl = gl;
		this.attributes = {};
		this.uniforms = {};

		this.loading = this.setup();
	}

	async setup() {
		await this.createProgram();
		this.setupAttributes();
		this.setupUniforms();
	}

	async createProgram(vertexUrl, fragmentUrl) {
		const vertexShaderSource = await fetch(vertexUrl).then((response) =>
			response.text()
		);
		const fragmentShaderSource = await fetch(fragmentUrl).then((response) =>
			response.text()
		);

		const vertexShader = createShader(
			this.gl,
			this.gl.VERTEX_SHADER,
			vertexShaderSource
		);
		const fragmentShader = createShader(
			this.gl,
			this.gl.FRAGMENT_SHADER,
			fragmentShaderSource
		);

		this.program = createProgram(this.gl, vertexShader, fragmentShader);
		this.gl.useProgram(this.program);

		this.buffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
	}

	setupAttributes() {
		this.vao = this.gl.createVertexArray();
		this.gl.bindVertexArray(this.vao);
	}

	setupUniforms() {}

	draw() {
		this.gl.useProgram(this.program);
		this.gl.bindVertexArray(this.vao);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
	}
}
