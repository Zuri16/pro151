AFRAME.registerComponent("car",{
    schema: {
        image:{ type:"string", default:"./car/scene.gltf"},
    },

    init: function(){
        this.el.setAttribute("gltf-model", this.data.image)
        const position={x:0, y:0, z:-3}
        const rotation={x:0, y:90, z:0}
        this.el.setAttribute("position", position)
        this.el.setAttribute("rotation", rotation)
    }
})