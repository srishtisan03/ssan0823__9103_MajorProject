## Animated Wheels of Fortune (Audio Animation)

**Creative Coding (Individual Submission):** Wheels of Fortune (p5.js)

**Introduction:**

This is my individual variation of the group-created "Wheels of Fortune" animation in p5.js. My animation utilizes **audio** to dynamically generate radiating lines that respond visually to the sound's level and frequency content.

**Instructions:**

1. Click the "Play/Pause" button to start/Pause the animation.
2. The animation will react visually to the audio playing in your browser or computer.
3. Adjust the volume of the audio to observe how the lines and circles react to different sound levels.

**Individual Approach:**

The core concept of our group's representation of "Wheels of Fortune" image remains unchanged. However, I added code to handle audio input, data analysis, and animation based on audio properties. 

**Animation Details:**

In contrast to the original project, I chose audio to drive the animation. This allows the lines to visually respond to the music playing, creating a more interactive experience. Additionally, I implemented size changes in both the radiating lines and glowing circles. This adds another layer of dynamism.

* Louder volumes generally correspond to larger lines and circles.
* Higher frequencies might result in faster-growing lines.

**Technical Explanation:**

The core functionality leverages the p5.soundFile object to load and play an audio file. The `fft` object performs a Fast Fourier Transform to analyze the audio's frequency spectrum. Line properties are dynamically adjusted based on the retrieved audio level and frequency data.

**Inspiration**

The use of audio to drive the animation and the concept of radiating lines were inspired by the Audio-Reactive Visualization by Inconvergent (Processing): [https://www.generativehut.com/post/using-processing-for-music-visualization](https://www.generativehut.com/post/using-processing-for-music-visualization). This interactive visualization creates dynamic lines that respond to music in a similar way to my animation.


**Conclusion:**

This variation demonstrates how audio data can be used to create dynamic and responsive animations. It offers a unique visual experience compared to other group members' approaches.
