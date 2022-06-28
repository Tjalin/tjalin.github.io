import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()


// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Dragon
const spaceTexture = new THREE.TextureLoader().load('dragon.png');
scene.background = spaceTexture;

let tl = gsap.timeline()

    // Frame
gltfLoader.load('real_frame.gltf', (frame) => {
    
    scene.add(frame.scene)
    
    frame.scene.scale.set(0.4, 0.4, 0.4)
    frame.scene.rotation.set(0, -1, 0)
    frame.scene.position.set(0.7, -0.7, -3)

    tl.to(frame.scene.rotation, { y: 4.7, duration: 1 })
    tl.to(frame.scene.position, { x: 0.40, duration: 0.5 })
    tl.to(frame.scene.position, { z: -1.2, duration: 0.5 })
    tl.to(frame.scene.scale, { x: 0.3, duration: 0.5 })
    tl.to(frame.scene.rotation, { y: 4.5, duration: 1 })
    

    /* gui.add(right_frame.scene.position, 'x').min(-9).max(9)
    gui.add(right_frame.scene.position, 'y').min(-9).max(9)
    gui.add(right_frame.scene.position, 'z').min(-9).max(9) */
})

const pointLight_0 = new THREE.PointLight(0xffffff, 1)
pointLight_0.position.x = -1
pointLight_0.position.y = 1
pointLight_0.position.z = 0
pointLight_0.intensity = 0.2
scene.add(pointLight_0)
/*  const pointLightHelper_w = new THREE.PointLightHelper(pointLight_0, 1)
scene.add(pointLightHelper_w)  */
    
    //Icon-vscode
    const vscodeTexture = new THREE.TextureLoader().load('vscode_logo.png');
    const vscodeMap = new THREE.TextureLoader().load('vscode_map.png');
    
    const vscode_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: vscodeTexture,
        normalMap: vscodeMap,
      })
    );
    scene.add(vscode_logo);
    vscode_logo.metalness = 0,466
    vscode_logo.roughness = 0,351
    vscode_logo.position.set(-4, 2,64)
    

        //Icon-vs-code-text    
const vscode_text = new THREE.TextureLoader().load('vs.JPG');
const vscode_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: vscode_text }));

    scene.add(vscode_logo_text);
    vscode_logo_text.rotation.y = 1.5
    vscode_logo_text.position.set(-4, 1,64)
   
        //Icon-html
    const htmlTexture = new THREE.TextureLoader().load('html.png');
    const htmlMap = new THREE.TextureLoader().load('html_map.png');
    
    const html_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: htmlTexture,
        normalMap: htmlMap,
      })
    );
    scene.add(html_logo);
    html_logo.metalness = 0,466
    html_logo.roughness = 0,351
    html_logo.position.set(-4, 2,66)
   

        //Icon-html-text
const html_text = new THREE.TextureLoader().load('html.JPG');
const html_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: html_text }));

    scene.add(html_logo_text);
    html_logo_text.rotation.y = 1
    html_logo_text.position.set(-4, 1,66)
    


            //Icon-css
    const cssTexture = new THREE.TextureLoader().load('css.png');
    const cssMap = new THREE.TextureLoader().load('css_map.png');
    
    const css_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: cssTexture,
        normalMap: cssMap,
      })
    );
    scene.add(css_logo);
    css_logo.metalness = 0,466
    css_logo.roughness = 0,351
    css_logo.position.set(-4, 2,68)
    

        //Icon-css-text
const css_text = new THREE.TextureLoader().load('css.JPG');
const css_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: css_text }));

    scene.add(css_logo_text);
    css_logo_text.rotation.y = 1
    css_logo_text.position.set(-4, 1,68)
    

                //Icon-JS
    const jsTexture = new THREE.TextureLoader().load('javascript_logo.png');
    const jsMap = new THREE.TextureLoader().load('js_map.png');
    
    const js_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: jsTexture,
        normalMap: jsMap,
      })
    );
    scene.add(js_logo);
    js_logo.metalness = 0,466
    js_logo.roughness = 0,351
    js_logo.position.set(-4, 2,62)
   

        //Icon-JS-text
const js_text = new THREE.TextureLoader().load('javascript.JPG');
const js_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: js_text }));

    scene.add(js_logo_text);
    js_logo_text.rotation.y = 1
    js_logo_text.position.set(-4, 1,62)
    


                    //Icon-node.js
    const nodejsTexture = new THREE.TextureLoader().load('nodejs.png');
    const nodejsMap = new THREE.TextureLoader().load('nodejs_map.png');
    
    const nodejs_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: nodejsTexture,
        normalMap: nodejsMap,
      })
    );
    scene.add(nodejs_logo);
    nodejs_logo.metalness = 0,466
    nodejs_logo.roughness = 0,351
    nodejs_logo.position.set(-4, 2,60)
    

        //Icon-node.js-text
const nodejs_text = new THREE.TextureLoader().load('nodejs.JPG');
const nodejs_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: nodejs_text }));

    scene.add(nodejs_logo_text);
    nodejs_logo_text.rotation.y = 1
    nodejs_logo_text.position.set(-4, 1,60)
    

                        //Icon-react
    const reactTexture = new THREE.TextureLoader().load('react.png');
    const reactMap = new THREE.TextureLoader().load('react_map.png');
    
    const react_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: reactTexture,
        normalMap: reactMap,
      })
    );
    scene.add(react_logo);
    react_logo.metalness = 0,466
    react_logo.roughness = 0,351
    react_logo.position.set(-4, -1,60)
   

        //Icon-react-text
const react_text = new THREE.TextureLoader().load('react.JPG');
const react_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: react_text }));

    scene.add(react_logo_text);
    react_logo_text.rotation.y = 1
    react_logo_text.position.set(-4, -2,60)
    

                            //Icon-angular
    const angularTexture = new THREE.TextureLoader().load('angular.png');
    const angularMap = new THREE.TextureLoader().load('angular_map.png');
    
    const angular_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: angularTexture,
        normalMap: angularMap,
      })
    );
    scene.add(angular_logo);
    angular_logo.metalness = 0,466
    angular_logo.roughness = 0,351
    angular_logo.position.set(-4, -1, 62)
    

        //Icon-angular-text
const angular_text = new THREE.TextureLoader().load('angular.JPG');
const angular_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: angular_text }));

    scene.add(angular_logo_text);
    angular_logo_text.rotation.y = 1
    angular_logo_text.position.set(-4, -2, 62)
    

                                //Icon-vue

    const vueTexture = new THREE.TextureLoader().load('vue.png');
    const vueMap = new THREE.TextureLoader().load('vue_map.png');
    
    const vue_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: vueTexture,
        normalMap: vueMap,
      })
    );
    scene.add(vue_logo);
    vue_logo.metalness = 0,466
    vue_logo.roughness = 0,351
    vue_logo.position.set(-4, -1, 64)
    

        //Icon-vue-text
const vue_text = new THREE.TextureLoader().load('vue.JPG');
const vue_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: vue_text }));

    scene.add(vue_logo_text);
    vue_logo_text.rotation.y = 1
    vue_logo_text.position.set(-4, -2, 64)
    
                                    //Icon-threejs

    const threejsTexture = new THREE.TextureLoader().load('threejs.png');
    const threejsMap = new THREE.TextureLoader().load('threejs_map.png');
    
    const threejs_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: threejsTexture,
        normalMap: threejsMap,
      })
    );
    scene.add(threejs_logo);
    threejs_logo.metalness = 0,466
    threejs_logo.roughness = 0,351
    threejs_logo.position.set(-4, -1, 66)
    



        //Icon-vue-text
const threejs_text = new THREE.TextureLoader().load('threejs.JPG');
const threejs_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: threejs_text }));

    scene.add(threejs_logo_text);
    threejs_logo_text.rotation.y = 1
    threejs_logo_text.position.set(-4, -2, 66)
    

// Torus

const geometry = new THREE.TorusGeometry(6, 2, 14, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

 //Projekt_1

    const video_1 = document.getElementById("vid-1");
    const vidTexture_1 = new THREE.VideoTexture(video_1);

    vidTexture_1.minFilter = THREE.LinearFilter;
    vidTexture_1.magFilter = THREE.LinearFilter;
    
    const projekt_1 = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 1, 1,),
      new THREE.MeshStandardMaterial({
        map: vidTexture_1,
        side: THREE.FrontSide,
        toneMapped: false,
      })
    );
    scene.add(projekt_1);
    
    projekt_1.position.x = -1
    projekt_1.position.y = .2
    projekt_1.position.z = 20

    const pr_1 = document.getElementById('Proj-1')

 //Projekt_2

 const video_2 = document.getElementById("vid-2");
 const vidTexture_2 = new THREE.VideoTexture(video_2);

 vidTexture_2.minFilter = THREE.LinearFilter;
 vidTexture_2.magFilter = THREE.LinearFilter;
 
 const projekt_2 = new THREE.Mesh(
   new THREE.PlaneGeometry(2, 1, 1,),
   new THREE.MeshStandardMaterial({
     map: vidTexture_2,
     side: THREE.FrontSide,
     toneMapped: false,
   })
 );
 scene.add(projekt_2);
 
 projekt_2.position.x = -1
 projekt_2.position.y = .2
 projekt_2.position.z = 24

 const pr_2 = document.getElementById('Proj-2')
  
 //Projekt_3

 const video_3 = document.getElementById("vid-3");
 const vidTexture_3 = new THREE.VideoTexture(video_3);

 vidTexture_3.minFilter = THREE.LinearFilter;
 vidTexture_3.magFilter = THREE.LinearFilter;
 
 const projekt_3 = new THREE.Mesh(
   new THREE.PlaneGeometry(2, 1, 1,),
   new THREE.MeshStandardMaterial({
     map: vidTexture_3,
     side: THREE.FrontSide,
     toneMapped: false,
   })
 );
 scene.add(projekt_3);
 
 projekt_3.position.x = -1
 projekt_3.position.y = .2
 projekt_3.position.z = 28

 const pr_3 = document.getElementById('Proj-3')

 //Projekt_4

 const video_4 = document.getElementById("vid-4");
 const vidTexture_4 = new THREE.VideoTexture(video_4);

 vidTexture_4.minFilter = THREE.LinearFilter;
 vidTexture_4.magFilter = THREE.LinearFilter;
 
 const projekt_4 = new THREE.Mesh(
   new THREE.PlaneGeometry(2, 1, 1,),
   new THREE.MeshStandardMaterial({
     map: vidTexture_4,
     side: THREE.FrontSide,
     toneMapped: false,
   })
 );
 scene.add(projekt_4);
 
 projekt_4.position.x = -1
 projekt_4.position.y = .2
 projekt_4.position.z = 32

 const pr_4 = document.getElementById('Proj-4')

  //Projekt_5

  const video_5 = document.getElementById("vid-5");
  const vidTexture_5 = new THREE.VideoTexture(video_5);
 
  vidTexture_5.minFilter = THREE.LinearFilter;
  vidTexture_5.magFilter = THREE.LinearFilter;
  
  const projekt_5 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 1, 1,),
    new THREE.MeshStandardMaterial({
      map: vidTexture_5,
      side: THREE.FrontSide,
      toneMapped: false,
    })
  );
  scene.add(projekt_5);
  
  projekt_5.position.x = -1
  projekt_5.position.y = .2
  projekt_5.position.z = 36
 
 const pr_5 = document.getElementById('Proj-5')

  //Projekt_6

  const video_6 = document.getElementById("vid-6");
  const vidTexture_6 = new THREE.VideoTexture(video_6);
 
  vidTexture_6.minFilter = THREE.LinearFilter;
  vidTexture_6.magFilter = THREE.LinearFilter;
  
  const projekt_6 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 1, 1,),
    new THREE.MeshStandardMaterial({
      map: vidTexture_6,
      side: THREE.FrontSide,
      toneMapped: false,
    })
  );
  scene.add(projekt_6);
  
  projekt_6.position.x = -1
  projekt_6.position.y = .2
  projekt_6.position.z = 40
  
 
 const pr_6 = document.getElementById('Proj-6')

  //Projekt_7

  const video_7 = document.getElementById("vid-7");
  const vidTexture_7 = new THREE.VideoTexture(video_7);
 
  vidTexture_7.minFilter = THREE.LinearFilter;
  vidTexture_7.magFilter = THREE.LinearFilter;
  
  const projekt_7 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 1, 1,),
    new THREE.MeshStandardMaterial({
      map: vidTexture_7,
      side: THREE.FrontSide,
      toneMapped: false,
    })
  );
  scene.add(projekt_7);
  
  projekt_7.position.x = -1
  projekt_7.position.y = .2
  projekt_7.position.z = 44
 
 const pr_7 = document.getElementById('Proj-7')

   //Projekt_8

   const video_8 = document.getElementById("vid-8");
   const vidTexture_8 = new THREE.VideoTexture(video_8);
  
   vidTexture_8.minFilter = THREE.LinearFilter;
   vidTexture_8.magFilter = THREE.LinearFilter;
   
   const projekt_8 = new THREE.Mesh(
     new THREE.PlaneGeometry(2, 1, 1,),
     new THREE.MeshStandardMaterial({
       map: vidTexture_8,
       side: THREE.FrontSide,
       toneMapped: false,
     })
   );
   scene.add(projekt_8);
   
   projekt_8.position.x = -1
   projekt_8.position.y = .2
   projekt_8.position.z = 48
  
  const pr_8 = document.getElementById('Proj-8')

   //Projekt_9

   const video_9 = document.getElementById("vid-9");
   const vidTexture_9 = new THREE.VideoTexture(video_9);
  
   vidTexture_9.minFilter = THREE.LinearFilter;
   vidTexture_9.magFilter = THREE.LinearFilter;
   
   const projekt_9 = new THREE.Mesh(
     new THREE.PlaneGeometry(2, 1, 1,),
     new THREE.MeshStandardMaterial({
       map: vidTexture_9,
       side: THREE.FrontSide,
       toneMapped: false,
     })
   );
   scene.add(projekt_9);
   
   projekt_9.position.x = -1
   projekt_9.position.y = .2
   projekt_9.position.z = 52
  
  const pr_9 = document.getElementById('Proj-9')  

   //Projekt_10

   const video_10 = document.getElementById("vid-10");
   const vidTexture_10 = new THREE.VideoTexture(video_10);
  
   vidTexture_10.minFilter = THREE.LinearFilter;
   vidTexture_10.magFilter = THREE.LinearFilter;
   
   const projekt_10 = new THREE.Mesh(
     new THREE.PlaneGeometry(2, 1, 1,),
     new THREE.MeshStandardMaterial({
       map: vidTexture_10,
       side: THREE.FrontSide,
       toneMapped: false,
     })
   );
   scene.add(projekt_10);
   
   projekt_10.position.x = -1
   projekt_10.position.y = .2
   projekt_10.position.z = 56
  
  const pr_10 = document.getElementById('Proj-10')  

// Lights

const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 10
pointLight.position.y = 0.6
pointLight.position.z = 70
pointLight.intensity = .9
scene.add(pointLight)

/*  const pointLightHelper_w = new THREE.PointLightHelper(pointLight, 1)
scene.add(pointLightHelper_w)  */

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));
  
    star.position.set(x, y, z);
    scene.add(star);
  }


  Array(200).fill().forEach(addStar);
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0.5
camera.position.z = 1

/* gui.add(camera.position, 'z').min(-9).max(9)
gui.add(camera.position, 'x').min(-9).max(9)
gui.add(camera.position, 'y').min(-9).max(9)
gui.add(camera.rotation, 'y').min(-9).max(9) */
scene.add(camera)

// Controls
/* const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true */



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Scroll Animation

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
  
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  /*   console.log(camera.position.x) */
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();


  const mouse = new THREE.Vector2()
  const raycaster = new THREE.Raycaster()

document.addEventListener('click', (event) => {
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
   
    /* console.log(event.y) */
})


    
   
/**
 * Animate
 */
 document.addEventListener('mousemove', onDocumentMouseMove)


 let mouseX = 0
 let mouseY = 0
 
 let targetX = 9
 let targetY = 0

 const windowX = window.innerWidth /2;
const windowY = window.innerHeight /2;

 function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowX)
    mouseY = (event.clientY - windowY)
}

let objs = []

scene.traverse((object) => {
    if (object == projekt_1 || object == projekt_2 || object == projekt_3 || object == projekt_4 || object == projekt_5 || object == projekt_6 || object == projekt_7 || object == projekt_8 || object == projekt_9 || object == projekt_10)
     objs.push(object)
      /* console.log(objs) */ 
})


const clock = new THREE.Clock()

const tick = () =>
{
    
    targetX = mouseX * .001
    targetY = mouseY * .001
    
    const elapsedTime = clock.getElapsedTime()
    
    vscode_logo.rotation.y += .5 * (targetX - vscode_logo.rotation.y)
    vscode_logo.rotation.x += .5 * (targetY - vscode_logo.rotation.x)
    vscode_logo.position.z += .5 * (targetY - vscode_logo.rotation.x)
    
    html_logo.rotation.y += .5 * (targetX - html_logo.rotation.y)
    html_logo.rotation.x += .5 * (targetY - html_logo.rotation.x)
    html_logo.position.z += .5 * (targetY - html_logo.rotation.x)

    css_logo.rotation.y += .5 * (targetX - css_logo.rotation.y)
    css_logo.rotation.x += .5 * (targetY - css_logo.rotation.x)
    css_logo.position.z += .5 * (targetY - css_logo.rotation.x)

    js_logo.rotation.y += .5 * (targetX - js_logo.rotation.y)
    js_logo.rotation.x += .5 * (targetY - js_logo.rotation.x)
    js_logo.position.z += .5 * (targetY - js_logo.rotation.x)

    nodejs_logo.rotation.y += .5 * (targetX - nodejs_logo.rotation.y)
    nodejs_logo.rotation.x += .5 * (targetY - nodejs_logo.rotation.x)
    nodejs_logo.position.z += .5 * (targetY - nodejs_logo.rotation.x)

    react_logo.rotation.y += .5 * (targetX - react_logo.rotation.y)
    react_logo.rotation.x += .5 * (targetY - react_logo.rotation.x)
    react_logo.position.z += .5 * (targetY - react_logo.rotation.x)

    angular_logo.rotation.y += .5 * (targetX - angular_logo.rotation.y)
    angular_logo.rotation.x += .5 * (targetY - angular_logo.rotation.x)
    angular_logo.position.z += .5 * (targetY - angular_logo.rotation.x)

    vue_logo.rotation.y += .5 * (targetX - vue_logo.rotation.y)
    vue_logo.rotation.x += .5 * (targetY - vue_logo.rotation.x)
    vue_logo.position.z += .5 * (targetY - vue_logo.rotation.x)

    threejs_logo.rotation.y += .5 * (targetX - threejs_logo.rotation.y)
    threejs_logo.rotation.x += .5 * (targetY - threejs_logo.rotation.x)
    threejs_logo.position.z += .5 * (targetY - threejs_logo.rotation.x)

    vidTexture_1.needsUpdate = true;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    renderer.render(scene, camera)
    
       //Raycaster

    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(objs)

    for(const intersect of intersects) {
        gsap.to(intersect.object.scale, {x: 2.2, y: 2.2})
        gsap.to(intersect.object.rotation, {y: .6})
        if(camera.position.x > 0.87 ) {
            gsap.to(intersect.object.rotation, {y: 1.2})
        }
        
    }
    
    for (const object of objs) {
        if (!intersects.find(intersect => intersect.object === object)) {
            gsap.to(object.scale, {x: 1, y: 1})
            gsap.to(object.rotation, {y: .4})
        
        }
        
    }
//Project 1
    if (projekt_1.rotation.y > .5) {
        pr_1.style.visibility = 'visible';
        
    } 
    if (projekt_1.rotation.y < .5 || camera.position.x > 0.47) {
        pr_1.style.visibility = 'hidden';
    }
//Project 2
    if (projekt_2.rotation.y > .5) {
        pr_2.style.visibility = 'visible';
    } 
    if (projekt_2.rotation.y < .5 || camera.position.x > 0.56) {
        pr_2.style.visibility = 'hidden';
    }
//Project 3
if (projekt_3.rotation.y > .5) {
    pr_3.style.visibility = 'visible';
} 
if (projekt_3.rotation.y < .5 || camera.position.x > 0.63) {
    pr_3.style.visibility = 'hidden';
}
//Project 4
if (projekt_4.rotation.y > .5) {
    pr_4.style.visibility = 'visible';
} 
if (projekt_4.rotation.y < .5 || camera.position.x > 0.71) {
    pr_4.style.visibility = 'hidden';
}
//Project 5
if (projekt_5.rotation.y > .5) {
    pr_5.style.visibility = 'visible';
} 
if (projekt_5.rotation.y < .5 || camera.position.x > 0.79) {
    pr_5.style.visibility = 'hidden';
}
//Project 6
if (projekt_6.rotation.y > .5) {
    pr_6.style.visibility = 'visible';
} 
if (projekt_6.rotation.y < .5 || camera.position.x > 0.87) {
    pr_6.style.visibility = 'hidden';
}
//Project 7
if (projekt_7.rotation.y > .5) {
    pr_7.style.visibility = 'visible';
} 
if (projekt_7.rotation.y < .5 || camera.position.x > 0.95) {
    pr_7.style.visibility = 'hidden';
}
//Project 8
if (projekt_8.rotation.y > .5) {
    pr_8.style.visibility = 'visible';
} 
if (projekt_8.rotation.y < .5 || camera.position.x > 1.03) {
    pr_8.style.visibility = 'hidden';
}
//Project 9
if (projekt_9.rotation.y > .5) {
    pr_9.style.visibility = 'visible';
} 
if (projekt_9.rotation.y < .5 || camera.position.x > 1.11) {
    pr_9.style.visibility = 'hidden';
}
//Project 10
if (projekt_10.rotation.y > .5) {
    pr_10.style.visibility = 'visible';
} 
if (projekt_10.rotation.y < .5 ) {
    pr_10.style.visibility = 'hidden';
}
         

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()