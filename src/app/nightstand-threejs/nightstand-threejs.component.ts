import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-nightstand-threejs',
  templateUrl: './nightstand-threejs.component.html',
  styleUrls: ['./nightstand-threejs.component.scss']
})
export class NightstandThreejsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Source: https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var cube_geometry = new THREE.BoxGeometry(1, 1, 1);
    var cube_material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
    var cube = new THREE.Mesh(cube_geometry, cube_material);
    scene.add(cube);
    //var cone_geometry = new THREE.ConeGeometry(1, 2, 3);
    //var cone_material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
    //var cone = new THREE.Mesh(cone_geometry, cone_material);
    //scene.add(cone);
    var cylinder_geometry = new THREE.CylinderGeometry(1, 1, 2, 16);
    var cylinder_material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
    var cylinder = new THREE.Mesh(cylinder_geometry, cylinder_material);
    scene.add(cylinder);

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.03;
      cube.rotation.y += 0.03;
      //cone.rotation.x += 0.01;
      //cone.rotation.y += 0.01;
      cylinder.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }

}
