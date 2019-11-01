function Tag(text, position, origin, color, textAlign, fontname, fontsize){

    this.text = typeof text !== 'undefined' ? text : '';
    this.position = typeof position !== 'undefined' ? position : trig.zero;
    this.origin = typeof origin !== 'undefined' ? origin : trig.zero;
    this.color = typeof color !== 'undefined' ? color : Color.black;
    this.textAlign = typeof textAlign !== 'undefined' ? textAlign : "top";
    this.fontname = typeof fontname !== 'undefined' ? fontname : "Courier New";
    this.fontsize = typeof fontsize !== 'undefined' ? fontsize : "20px";
}

Tag.prototype.draw = function(){

    Canvas2D.drawText(
        this.text, 
        this.position,
        this.origin,
        this.color,
        this.textAlign,
        this.fontname,
        this.fontsize
    );

}