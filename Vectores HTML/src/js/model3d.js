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