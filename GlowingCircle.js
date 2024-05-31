class GlowingCircle {
    //Constructor for glowing circle
    constructor(x, y, radius, glowColor = [255, 255, 255, 150], shadowBlur = 20) {
        this.x = x; // Center x-coordinate
        this.y = y; // Center y-coordinate
        this.radius = radius; // Radius of the circle
        this.glowColor = glowColor; // Glow effect color
        this.shadowBlur = shadowBlur; // Intensity of the glow effect
    }

    /**
     * Display the circle with a glowing effect.
     * Applies a shadow to create a glow around the circle and then resets the drawing context.
     */

    display(colors) {
        let currentColor = colors || this.glowColor;

        // Get audio data (adjust as needed)
    let amplitude = fft.getEnergy(20, 20000); // Get overall energy

    // Map audio data to a new radius (adjust mapping function and range)
    let mappedRadius = map(amplitude, 0, 255, this.radius/2, this.radius * 2);

        // Apply the glow effect using canvas shadow properties 
        drawingContext.shadowBlur = this.shadowBlur; 

        // Configure the shadow color with modified opacity
        drawingContext.shadowColor = `rgba(${this.glowColor[0]}, ${this.glowColor[1]}, 
            ${this.glowColor[2]}, ${this.glowColor[3] / 200})`; 

        fill(255); // White fill for the circle
        noStroke(); // Do not draw a stroke around the circle
        ellipse(this.x, this.y, mappedRadius * 2, mappedRadius * 2);

        // Reset shadow to avoid affecting other elements
        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = 'rgba(0, 0, 0, 0)';
    }
}
