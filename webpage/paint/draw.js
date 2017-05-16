class Draw{
    constructor(cobj,option){
        this.cobj=cobj;
        this.color=option.color;
        this.width=option.width;
        this.style=option.style;
    }

    init(){
        this.cobj.strokeStyle=this.color;
        this.cobj.fillStyle=this.color;
        this.cobj.lineWidth=this.width;
    }

    rect(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.rect(ox,oy,mx-ox,my-oy);
        this.cobj[this.style]();

    }

    line(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox,oy);
        this.cobj.lineTo(mx,my);
        this.cobj[this.style]();
    }

    ellipse(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox+(mx-ox)/2,oy);
        this.cobj.quadraticCurveTo(mx,oy,mx,oy+(my-oy)/2);
        this.cobj.quadraticCurveTo(mx,my,ox+(mx-ox)/2,my);
        this.cobj.quadraticCurveTo(ox,my,ox,oy+(my-oy)/2);
        this.cobj.quadraticCurveTo(ox,oy,ox+(mx-ox)/2,oy);
        this.cobj[this.style]();
    }
    circlein(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        var r=Math.abs(mx-ox)<Math.abs(my-oy)?Math.abs(mx-ox)/2:Math.abs(my-oy)/2;
        this.cobj.arc(ox+(mx>ox?r:-r),oy+(my>oy?r:-r),r,0,2*Math.PI);
        this.cobj[this.style]();
    }
    circleout(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
        this.cobj.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,2*Math.PI);
        this.cobj[this.style]();
    }
    circlecenter(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
        this.cobj.arc(ox,oy,r,0,2*Math.PI);
        this.cobj[this.style]();
    }

    poly(ox,oy,mx,my,si){
        this.init();

        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        var angle=Math.PI/si;
        var x=Math.cos(angle)*r;
        var y=Math.sin(angle)*r;

        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        for(var i=0;i<si;i++){
            this.cobj.lineTo(x,-y);
            this.cobj.rotate(-angle*2);
        }
        this.cobj.restore();
        this.cobj[this.style]();
    }

    pen(ox,oy,mx,my){
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    eraser(ox,oy,mx,my){

        this.cobj.clearRect(mx,my,10,10);

    }
}