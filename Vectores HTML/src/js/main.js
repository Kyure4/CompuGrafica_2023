var scene = null,
    camera = null, 
    renderer = null,
    SPEED = 0.01,
    cube = null,
    controls = null,
    light = null;    

const size = 10;
const divisions = 10;

function createThreejs(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00FF);
    camera = new THREE.PerspectiveCamera( 75, //Field of view
                                          window.innerWidth / window.innerHeight, //Aspect ratio 16:9
                                          0.1, //Near
                                          1000 ); //Far
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById("app")});
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0,0,10)
   // controls.update();

    //Grid helpers
    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );

    //Axes helpers
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );

    createLights("SpotLight");
    createLights("AmbientLight");
    loadObjMtl("../models/OBJ_MTL/personaje/", "smurfcat.mtl", "smurfcat.obj");
    createPlayerCollision();
    createCollectible();
    animate();
}


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

/*function CreateGeometry(floors) {
    let floorNumbers = document.getElementById("Floors").value;
    let floorColor = document.getElementById("colorpicker").value;
    for(var i=0; i<floorNumbers; i++ ){
        const geometry = new THREE.CubeGeometry(2, 1.5, 2);
        //const material = new THREE.MeshBasicMaterial( {color : floorColor,
        //                                             opacity: 0.5,
        //                                             transparent : true,
        //                                             wireframe : true});
        //material.color.setHex( floorColor );

        const material = new THREE.MeshStandardMaterial( {color : floorColor,
                                                        roughness : 1,
                                                        matalness : 0.5});
        cube = new THREE.Mesh( geometry, material );
      

        //Outline Shader
        var geo = new THREE.EdgesGeometry( cube.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0x000000 } );
        var wireframe = new THREE.LineSegments( geo, mat );

        cube.add(wireframe);
        scene.add(cube);
        cube.position.y = (1.5) * (i+0.5);
        cube.position.x = builds * 2.5
    }
    builds += 1;
    camera.position.z = 5;
}*/

function animate() {
	requestAnimationFrame( animate );
    // rotateCube();
	renderer.render( scene, camera );
}

function createLights(typeLights){
   switch(typeLights){
    case "PointLight":
        light = new THREE.PointLight( 0xffffff, 4, 100 );
        light.position.set( 0, 50, 10 );
        scene.add(light);

        const sphereSize = 1;
        const pointLightHelper = new THREE.PointLightHelper(light, sphereSize );
        scene.add(pointLightHelper);
    break;

    case "SpotLight": 
        spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( 0, 1000, -200 );
        spotLight.map = new THREE.TextureLoader().load;
    break;

    case "AmbientLight":
        light = new THREE.AmbientLight( 0xffffff );
        scene.add( light );
    break;
   }
}

