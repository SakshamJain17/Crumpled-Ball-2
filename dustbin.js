class Dustbin extends BaseClass {
  constructor(x, y, width,height, angle) {
    
    super(x,y,width,height);
   this.image = loadImage("dustbin.png")
   this.image.scale = 0.5;

  }
   
};
