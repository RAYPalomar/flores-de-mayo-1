/**
 * Synthesizes peaceful church bells & acoustic harp arpeggio
 * for the traditional processional hymn "Dios Te Salve" using Web Audio API.
 */
class SoundscapePlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle bell chime tone
  private playBellNote(freq: number, duration: number, gainValue = 0.12) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Fundamental
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // Overtones for rich metallic church bell quality
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2.76, now); // Bell minor third harmonic

    gain.gain.setValueAtTime(gainValue, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    gain2.gain.setValueAtTime(gainValue * 0.4, now);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + (duration * 0.7));

    osc.connect(gain);
    osc2.connect(gain2);
    gain.connect(this.ctx.destination);
    gain2.connect(this.ctx.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration);
    osc2.stop(now + duration);
  }

  public startChimes() {
    this.initCtx();
    this.isPlaying = true;

    // "Dios Te Salve" pentatonic cadence notes: F4, A4, C5, D5, F5
    const notes = [349.23, 440.0, 523.25, 587.33, 698.46, 523.25, 440.0];
    let noteIdx = 0;

    const playNext = () => {
      if (!this.isPlaying) return;
      const currentNote = notes[noteIdx % notes.length];
      this.playBellNote(currentNote, 3.5, 0.08);
      noteIdx++;
      
      // Gentle pacing every 2.4 seconds
      this.timer = window.setTimeout(playNext, 2400);
    };

    playNext();
  }

  public stopChimes() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stopChimes();
      return false;
    } else {
      this.startChimes();
      return true;
    }
  }

  public playSingleChime(freq = 523.25) {
    if (!this.isPlaying) return;
    this.initCtx();
    this.playBellNote(freq, 2.2, 0.05);
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const soundscape = new SoundscapePlayer();
