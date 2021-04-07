import Stats from 'stats.js';
import { resizeCanvasToDisplaySize, hexToRgb } from './helpers.js';
import Triangles from './triangles/index.js';

class Game {
	constructor() {
		this.canvas = document.querySelector('#canvas');

		/** @type {WebGL2RenderingContext} */
		this.gl = this.canvas.getContext('webgl2');
	}

	async setupGl() {
		resizeCanvasToDisplaySize(this.gl.canvas, 2);

		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	}

	async start() {
		await this.setupGl();

		this.stats = new Stats();
		this.stats.showPanel(0);
		document.body.appendChild(this.stats.dom);

		this.triangles = new Triangles(this.gl);

		const backgroundColorRgb = hexToRgb('#000000');
		this.gl.clearColor(
			backgroundColorRgb.r,
			backgroundColorRgb.g,
			backgroundColorRgb.b,
			1.0
		);

		this.draw();
	}

	draw() {
		this.stats.begin();
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);

		this.triangles.draw();

		this.stats.end();
		requestAnimationFrame(this.draw.bind(this));
	}
}

const game = new Game();
game.start();
