---
title: 'Broadcast Audio Processing Settings in Liquidsoap'
date: '2015-10-25'
---

Liquidsoap is a great tool, yet the built-in audio processing is terrible. Based upon Aigars script, I made a modified version that provides an acceptable sound for internet radio. Bear in mind, this is far from the performance of a hardware processor but this is good enough for internet radio.

You can find it here : <https://github.com/mkpascal/mk_liquidsoap_processing>.

This processing chain is using ladspa plugins, make sure to compile/install them with liquidsoap. Feel free to submit issues/pull requests on the repository.

Here is the list of plugins I'm using:
<ul><li>SC4</li>
<li>Tap Limiter</li>
<li>Tap Equalizer</li>
<li>Tap Deesser</li>
<li>Gate</li>
<li>Matrix Spatialiser</li></ul>

First, we start the processing with a gate to remove unwanted low level audio. We move then to the pre-processing stage using normalize as an AGC and a low-ratio compressor to level up the audio.

We enhance the stereo after the pre-processing sound to have a constant stereo image. We boost some bass frequencies because we're going to lose low-end response after multi-band stages.

We process the audio into 5 bands of heavy compression/limiting, then, we finish with 2 bands of light compression/limiting.

Before we finish the chain, we use a de-esser to remove extra high frequencies that might have been over-processed after multi-band stages.

Finally, we apply a final limiter to safely remove overshoot.
