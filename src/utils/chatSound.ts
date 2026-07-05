let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
    if (typeof window === "undefined") return null;

    const AudioContextClass = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;

    if (!audioContext) {
        audioContext = new AudioContextClass();
    }
    if (audioContext.state === "suspended") {
        void audioContext.resume();
    }
    return audioContext;
};

const SWEEP_DURATION = 0.32;
const SWEEP_LOW = 420;
const SWEEP_HIGH = 1100;
const SWEEP_VOLUME = 0.45;

// `attackTime` controls how long the volume takes to reach full - a rising
// sweep's loudest moment naturally lands on its *low*, soft-sounding
// frequency (attack is quick, the high end only arrives once it's already
// fading out). A falling sweep is the opposite: its loudest moment would
// otherwise land right on the high, piercing frequency. A slower attack
// pushes that peak volume later, past the harsh part of the sweep.
const playSweep = (startFrequency: number, endFrequency: number, volume: number, attackTime: number): void => {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(startFrequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(endFrequency, now + SWEEP_DURATION);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(volume, now + attackTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + SWEEP_DURATION);

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + SWEEP_DURATION);
};

// Rising sweep - reads as a "whoosh" being sent off.
export const playSendSound = (): void => playSweep(SWEEP_LOW, SWEEP_HIGH, SWEEP_VOLUME, 0.02);

// Falling sweep, same shape/duration/volume as send, but with a softer peak
// (avoids the harsh 1100Hz ceiling) and a slower attack so the loud moment
// lands after the pitch has already dropped a bit.
export const playReceiveSound = (): void => playSweep(950, SWEEP_LOW, SWEEP_VOLUME, 0.08);
