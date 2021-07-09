AFRAME.registerComponent('move',{
    schema:{
        movey:{type:'number',default:1}
    },
    tick:function(){
        var pos = this.el.getAttribute('position')
        this.data.movey=this.data.movey+0.01
        pos.y=this.data.movey
        this.el.setAttribute('position',{
            x:pos.x,
            y:pos.y,
            z:pos.z
        })
    }
})
AFRAME.registerComponent('camera-zoom-out',{
    schema:{
        movez:{
            type:'number', default:10
        }
    },
    tick:function(){
        var pos = this.el.getAttribute('position')
        this.data.movez=this.data.movez+0.01
        pos.z=this.data.movez
        this.el.setAttribute('position',{
            x:pos.x,
            y:pos.y,
            z:pos.z
        })
    }
})

AFRAME.registerComponent('fall-down',{
    schema:{
        movey:{
            type:'number', default:0
        }
    },
    tick:function(){
        
        window.addEventListener('click',e=>{
            this.data.movey=this.data.movey-0.001
        })
        var pos = this.el.getAttribute('position') 
        pos.y=pos.y+this.data.movey
        this.el.setAttribute('position',{
            x:pos.x,
            y:pos.y,
            z:pos.z
        })
    }
})