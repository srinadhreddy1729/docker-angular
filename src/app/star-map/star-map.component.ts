import { Component, OnInit,OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-star-map',
  templateUrl: './star-map.component.html',
  styleUrl: './star-map.component.css'
})
export class StarMapComponent implements OnInit,OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef;


  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  stars: THREE.Mesh[] = [];
  yellowLines: THREE.Line[] = [];

  constructor() { }
  ngOnDestroy(): void {
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
  
  ngOnInit(): void {
    this.init();
    this.animate();
  }
  closeCard() {
    const cardElement = document.getElementById('card');
    if (cardElement) {
        cardElement.style.display = 'none'; 
        
        cardElement.innerHTML = ''; 
    }
}
ngAfterViewInit(): void {
  this.container.nativeElement.appendChild(this.renderer.domElement);
  this.renderer.domElement.style.border = '2px solid #ccc';
  this.renderer.domElement.style.margin = '115px'; 
  this.renderer.domElement.style.display = 'block';

  this.container.nativeElement.style.display = 'flex';
  this.container.nativeElement.style.justifyContent = 'center'; 
  this.container.nativeElement.style.alignItems = 'center'; 
  this.container.nativeElement.style.width = '100%'; 
  this.container.nativeElement.style.height = '100%'; 
  this.container.nativeElement.style.overflow = 'hidden'; 
}



  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    const width = window.innerWidth * 0.8;
    const height = window.innerHeight * 0.8;
    this.renderer.setSize(width, height);
    // document.body.appendChild(this.renderer.domElement);
    // this.container.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.border = '2px solid #ccc';

    const geometry = new THREE.SphereGeometry(0.5, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 50000; i++) {
      const star = new THREE.Mesh(geometry, material);
      star.position.x = Math.random() * 1000 - 500;
      star.position.y = Math.random() * 1000 - 500;
      star.position.z = Math.random() * 1000 - 500;
      this.scene.add(star);
      this.stars.push(star);
    }

    this.camera.position.z = 10;
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  async submitStarId() {
    const id = parseInt((<HTMLInputElement>document.getElementById('starIdInput')).value);
    try {
      const response = await fetch(`http://localhost:9090/getdatas?id=${id}`);
      const data = await response.json();

      if (response.ok) {
        const star = this.stars[id];
        this.clearMarks();
        this.zoomToStar(star, data);
      } else {
        document.getElementById('card')!.style.display = 'block';
        document.getElementById('starId')!.textContent = data.error || "ID does not exist.";
        document.getElementById('starName')!.textContent = "";
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById('card')!.style.display = 'block';
      document.getElementById('starId')!.textContent = "Server Error";
      document.getElementById('starName')!.textContent = "";
    }
  }

  zoomToStar(star:any, data:any) {
    document.getElementById('card')!.style.display = 'block';
    document.getElementById('starId')!.textContent = data.id;
    document.getElementById('starName')!.textContent = data.name;
    document.getElementById('starDate')!.textContent =new Date(data.DateOfRegistration).toLocaleDateString();
    document.getElementById('starRegistryNumber')!.textContent = data.RegistryNumber;
    document.getElementById('starRegisteredBy')!.textContent = data.registeredBy;
    document.getElementById('starDistance')!.textContent = data.distance;
    document.getElementById('starSpectralType')!.textContent = data.spectralType;
    document.getElementById('starRaDec')!.textContent = data.raDec;
    document.getElementById('starAzAlt')!.textContent = data.azAlt;

    star.scale.set(0.5, 0.5, 0.5);

    const zoomDuration = 3000; // Zoom duration in milliseconds
    const zoomStartPosition = this.camera.position.clone();
    const zoomEndPosition = star.position.clone().add(new THREE.Vector3(0, 0, 10));
    const zoomStartTime = Date.now();

    const animateZoom = () => {
      const now = Date.now();
      const elapsedTime = now - zoomStartTime;
      const t = Math.min(1, elapsedTime / zoomDuration);

      this.camera.position.lerpVectors(zoomStartPosition, zoomEndPosition, t);
      this.camera.lookAt(star.position);

      if (t < 1) {
        requestAnimationFrame(animateZoom);
      } else {
        this.addYellowMarks(star);
        this.addGlow(star.position);
      }
    };

    animateZoom();
  }

  stopAtStar(star:any) {
    document.getElementById('card')!.style.display = 'block';

    const id = this.stars.indexOf(star);
    const details = this.generateRandomStarDetails();
    document.getElementById('starId')!.textContent = id.toString();
    document.getElementById('starName')!.textContent = details.name;
    document.getElementById('starDate')!.textContent = details.date;
    document.getElementById('starRegistryNumber')!.textContent = details.registryNumber;
    document.getElementById('starRegisteredBy')!.textContent = details.registeredBy;
    document.getElementById('starDistance')!.textContent = details.distance;
    document.getElementById('starSpectralType')!.textContent = details.spectralType;
    document.getElementById('starRaDec')!.textContent = details.raDec;
    document.getElementById('starAzAlt')!.textContent = details.azAlt;

    star.scale.set(0.5, 0.5, 0.5);
    this.camera.position.copy(star.position).add(new THREE.Vector3(0, 0, 10));
    this.camera.lookAt(star.position);

    this.addYellowMarks(star);
    this.addGlow(star.position);
  }

  generateRandomStarDetails() {
    const starNames = ['Sirius', 'Alpha Centauri', 'Betelgeuse', 'Vega', 'Arcturus', 'Canopus', 'Alpha Crucis', 'Capella'];
    const randomName = starNames[Math.floor(Math.random() * starNames.length)];
    const randomDate = 'December 24, 2017';
    const randomRegistryNumber = '13375-8293-1154068';
    const randomRegisteredBy = 'anystarregistration.com';
    const randomDistance = Math.random() * 1000 + ' light years';
    const randomSpectralType = ['O', 'B', 'A', 'F', 'G', 'K', 'M'][Math.floor(Math.random() * 7)] + Math.floor(Math.random() * 9) + 'III';
    const randomRaDec = Math.floor(Math.random() * 24) + 'h ' + Math.floor(Math.random() * 60) + 'm ' + Math.random().toFixed(4) + 's +' + Math.floor(Math.random() * 90) + '° ' + Math.floor(Math.random() * 60) + "' " + Math.random().toFixed(1) + '"';
    const randomAzAlt = Math.floor(Math.random() * 360) + '° ' + Math.floor(Math.random() * 60) + "' " + Math.floor(Math.random() * 60) + '"';

    return {
      name: randomName,
      date: randomDate,
      registryNumber: randomRegistryNumber,
      registeredBy: randomRegisteredBy,
      distance: randomDistance,
      spectralType: randomSpectralType,
      raDec: randomRaDec,
      azAlt: randomAzAlt
    };
  }

  addGlow(position:any) {
    const glowGeometry = new THREE.SphereGeometry(2, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.2 });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.copy(position);
    this.scene.add(glow);

    const haloGeometry = new THREE.RingGeometry(2, 3, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.1 });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.position.copy(position);
    this.scene.add(halo);
  }

  addYellowMarks(star:any) {
    const yellowMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    const distance = 0.5;
    const lineLength = 0.8;
    const angles = [0, Math.PI / 2, Math.PI, -Math.PI / 2];
    angles.forEach((angle, index) => {
      const endX = star.position.x + (distance + lineLength) * Math.cos(angle);
      const endY = star.position.y + (distance + lineLength) * Math.sin(angle);
      const endPoint = new THREE.Vector3(endX, endY, star.position.z);

      const startX = star.position.x + distance * Math.cos(angle);
      const startY = star.position.y + distance * Math.sin(angle);
      const startPoint = new THREE.Vector3(startX, startY, star.position.z);

      this.addLine(startPoint, endPoint, yellowMaterial);
    });
  }

  addLine(start:any, end:any, material:any) {
    const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
    const line = new THREE.Line(geometry, material);
    this.scene.add(line);
    this.yellowLines.push(line);
  }

  clearMarks() {
    this.yellowLines.forEach(mark => {
      this.scene.remove(mark);
    });
    this.yellowLines = [];
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
  }
}


