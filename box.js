AFRAME.registerComponent('movebox',{
    schema:{
        movex:{type:'number',default:0  }
    }
    ,
    tick:function(){
        window.addEventListener('click',e=>{
            this.data.movex=this.data.movex+0.01
        })
                var pos=this.el.getAttribute('position')
                pos.x=this.data.movex
                pos.y=this.data.movex
                pos.z=this.data.movex
                this.el.setAttribute('position',{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
    }
}
)

AFRAME.registerComponent('rotatebox',{
    schema:{
        movex:{type:'number',default:1  }
    }
    ,
    tick:function(){
            this.data.movex=this.data.movex+5
                var pos=this.el.getAttribute('rotation')
                pos.x=this.data.movex
                pos.y=this.data.movex
                pos.z=this.data.movex
                this.el.setAttribute('rotation',{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
    }
}
)