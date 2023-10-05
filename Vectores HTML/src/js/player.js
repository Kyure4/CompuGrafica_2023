var playerMesh = null,
    playerCollider = null,
    input = {left:0, right:0, up:0, down:0},
    rotSpeed = 0.05,
    speed = 0.5;

 function createPlayerCollision(){
    const geometry = new THREE.BoxGeometry( 5, 10, 7 ); 
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} ); 
    const cube = new THREE.Mesh( geometry, material ); 
    cube.position.y = 6
    scene.add( cube );
    }

function loadObjMtl(path, nameMTL, nameOBJ) {

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setResourcePath(path);
    mtlLoader.setPath(path);
    mtlLoader.load(nameMTL, function (material) {
        material.preload();
    
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath(path);
    objLoader.setMaterials(material);
    objLoader.load(nameOBJ, function (object) {
        scene.add(object);
    });
    });
}

document.addEventListener('keydown', (e)=>{
    console.log("Undio: "+ e.key);
    switch(e.key) {
        case "d":  // Right
            input.right = 1;
          break;
        case "a": // Left
            input.left = 1;
          break;
        case "w": // Up
            input.up = 1;
          break;
        case "s": // Down
            input.down = 1;
          break;
      }
      
});

document.addEventListener('keyup', (e)=>{
    switch(e.key) {
        case "d":  // Right
            input.right = 0;
          break;
        case "a": // Left
            input.left = 0;
          break;
        case "w": // Up
            input.up = 0;
          break;
        case "s": // Down
            input.down = 0;
          break; 
      }
});