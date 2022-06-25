import './style.css'
import * as THREE from 'three';
import { Player } from './game/player/player';
import { GameObject } from './core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Global } from './core/globals/lib/global';
import { GlobalToken } from './global-token';

const gameObjects: GameObject[] = [];
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let camera: THREE.Camera;
let axesHelper: THREE.AxesHelper;
let player: Player;

function setup() {
  scene = new THREE.Scene();
  Global.set(GlobalToken.Scene, scene);
  scene.background = new THREE.Color(0xf6edee);

  player = new Player();
  gameObjects.push(player);

  // renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function start() {
  gameObjects.forEach(gameObject => {
    scene.add(gameObject);
    gameObject.start();
  });

  // helpers
  axesHelper = new THREE.AxesHelper(12);
  scene.add(axesHelper);

  camera = player.getObject(THREE.PerspectiveCamera);
  // const controls = new OrbitControls(camera, renderer.domElement);

  const gridHelper = new THREE.GridHelper(100, 25);
  scene.add(gridHelper);

}

function animate() {
  requestAnimationFrame(animate);

  gameObjects.forEach(object => object.update());

  renderer.render(scene, camera);
}

setup();
start();
animate();