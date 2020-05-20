module.exports = class Animal{
    constructor (baw) {
         this.baw = baw;
    }
    say (){
        console.log(this.baw);
    }
}