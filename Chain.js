class Chain {
 constructor(bodyA, bodyB){

var option = {
    bodyA: bodyA,
    bodyB: bodyB,
  stiffness: 0.04,
  length: 5
}
    this.chain = Constraint.create(option);
World.add(world, this.chain);
 }



display(){
var A = this.chain.bodyA.position;
var B = this.chain.bodyB.position;

line(A.x, A.y, B.x, B.y)
}




}