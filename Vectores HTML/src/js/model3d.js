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

function createCollectible(){
    var min = -15;
    var max = 15;
    for(var i=1; i<5; i++){
        const geometry = new THREE.SphereGeometry( 1, 16, 10 ); 
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
        const sphere = new THREE.Mesh( geometry, material ); 
        scene.add( sphere );
        sphere.position.set(Math.floor(Math.random() * (max - min +1) + min)
                                       ,1
                                       ,Math.random() * (max - min +1) + min)
    }
}

function gameState(Case){
    switch(Case){
        case "game":
            break;
        case "win":
            break;
        case "lose":
        document.getElementById("loseScreen").style.display = "block";
    }
}

function createPlayerCollision(){
    const geometry = new THREE.BoxGeometry( 5, 10, 7 ); 
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} ); 
    const cube = new THREE.Mesh( geometry, material ); 
    cube.position.y = 6
    scene.add( cube );
}

