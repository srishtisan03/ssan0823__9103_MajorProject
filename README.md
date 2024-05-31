## Animated Wheels of Fortune (Audio Animation)

**Group Project:** Wheels of Fortune (p5.js)

**Introduction:**

This is my individual variation of the group-created "Wheels of Fortune" animation in p5.js. My animation utilizes **audio** to dynamically generate radiating lines that respond visually to the sound's level and frequency content.

**Instructions:**

1. Click the "Play/Pause" button to start/Pause the animation.
2. The animation will react visually to the audio playing in your browser or computer.
3. Adjust the volume of the audio to observe how the lines react to different sound levels.

**Technical Explanation:**

The core functionality leverages the p5.soundFile object to load and play an audio file. The `fft` object performs a Fast Fourier Transform to analyze the audio's frequency spectrum. Line properties are dynamically adjusted based on the retrieved audio level and frequency data.

**Changes to Group Code:**

The core functionality of the original "Wheels of Fortune" image remains unchanged. Additional code was implemented to handle audio input, data analysis, and animation based on audio properties.

**Conclusion:**

This variation demonstrates how audio data can be used to create dynamic and responsive animations. It offers a unique visual experience compared to other group members' approaches.
