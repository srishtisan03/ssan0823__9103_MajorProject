class RadiatingLines {
    constructor(x, y, length, numLines, glowColor = [134, 169, 228, 150], strokeWeight = 1) {  // Default glow color set
        this.x = x;
        this.y = y;
        this.length = length;
        this.numLines = numLines;
        this.glowColor = glowColor;
        this.strokeWeight = strokeWeight;
    }
  
    display() {
        push();
        translate(this.x, this.y);

        // Apply shadow for glow effect
        drawingContext.shadowBlur = 30;
        drawingContext.shadowColor = `rgba(${this.glowColor[0]}, ${this.glowColor[1]}, ${this.glowColor[2]}, ${this.glowColor[3] / 255})`;

        stroke(255);
        strokeWeight(this.strokeWeight);
        strokeCap(ROUND);

        // Get energy levels for mid and treble frequencies
    
        let midEnergy = fft.getEnergy('mid');
        let trebleEnergy = fft.getEnergy('treble');
      
        
        for (let i = 0; i < this.numLines; i++) {
            let angle = TWO_PI / this.numLines * i;

              // Map mid or treble energy to line length 
         
          let mappedLength = map(midEnergy, 0, 300, this.length / 2, this.length); 
          //let mappedLength = map(trebleEnergy, 0, 255, this.length / 4, this.length); 

          let x2 = mappedLength * cos(angle);
          let y2 = mappedLength * sin(angle);
            line(0, 0, x2, y2);
        }

        pop();

        // Reset shadow to avoid affecting other elements
        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = 'rgba(0, 0, 0, 0)';
    }
}
