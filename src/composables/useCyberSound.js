import { ref } from "vue";

export function useCyberSound() {
  const soundsEnabled = ref(true);
  const audioContext = ref(null);
  const sounds = ref({});

  const initAudio = () => {
    if (!audioContext.value && typeof window !== "undefined") {
      try {
        const AudioContextClass =
          window.AudioContext || window.webkitAudioContext;
        audioContext.value = new AudioContextClass();

        // Precargar sonidos (beeps sintéticos)
        sounds.value = {
          hover: createBeep(880, 0.05, "sine"),
          click: createBeep(440, 0.1, "triangle"),
          success: createBeep(660, 0.15, "square"),
          error: createBeep(220, 0.2, "sawtooth"),
        };
      } catch (e) {
        console.warn("Web Audio API no soportada");
        soundsEnabled.value = false;
      }
    }
    return audioContext.value;
  };

  const createBeep = (frequency, duration, type = "sine") => {
    return { frequency, duration, type };
  };

  const playSound = (soundName) => {
    if (!soundsEnabled.value || !audioContext.value || !sounds.value[soundName])
      return;

    try {
      if (audioContext.value.state === "suspended") {
        audioContext.value.resume();
      }

      const sound = sounds.value[soundName];
      const oscillator = audioContext.value.createOscillator();
      const gainNode = audioContext.value.createGain();

      oscillator.type = sound.type;
      oscillator.frequency.value = sound.frequency;
      gainNode.gain.value = 0.1;

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.value.destination);

      oscillator.start();
      oscillator.stop(audioContext.value.currentTime + sound.duration);
    } catch (e) {
      console.warn("Error reproduciendo sonido:", e);
    }
  };

  const playHover = () => playSound("hover");
  const playClick = () => playSound("click");
  const playSuccess = () => playSound("success");
  const playError = () => playSound("error");

  // Inicializar al primer uso (requiere interacción del usuario)
  const enableSounds = () => {
    if (audioContext.value?.state === "suspended") {
      audioContext.value.resume();
    }
  };

  return {
    playHover,
    playClick,
    playSuccess,
    playError,
    enableSounds,
    soundsEnabled,
    initAudio,
  };
}
