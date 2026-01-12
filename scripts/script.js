new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "1",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/1.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/background_music/batman_vs_superman/1.mp3",
          favorited: false
        },
        {
          name: "2",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/2.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/background_music/batman_vs_superman/2.mp3",
          favorited: false
        },
        {
          name: "3",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/3.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/background_music/batman_vs_superman/3.mp3",
          favorited: false
        },
        {
          name: "4",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/4.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/background_music/batman_vs_superman/4.mp3",
          favorited: false
        },
        {
          name: "5",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/5.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/background_music/batman_vs_superman/5.mp3",
          favorited: false
        },
        {
          name: "6",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/6.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/background_music/batman_vs_superman/6.mp3",
          favorited: false
        },
        {
          name: "7",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/7.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/background_music/batman_vs_superman/7.mp3",
          favorited: false
        },
        {
          name: "8",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/8.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/background_music/batman_vs_superman/8.mp3",
          favorited: false
        },
        {
          name: "9",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/9.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/background_music/batman_vs_superman/9.mp3",
          favorited: false
        },
        {
          name: "A",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/10.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/A.mp3",
          favorited: false
        },
        {
          name: "B",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/11.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/B.mp3",
          favorited: false
        },
        {
          name: "Batman vs Superman Their War Here",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/12.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Batman vs Superman Their War Here.mp3",
          favorited: false
        },
        {
          name: "Brain",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/13.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Brain.mp3",
          favorited: false
        },
        {
          name: "Bruce Wayne",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/14.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Bruce Wayne.mp3",
          favorited: false
        },
        {
          name: "C",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/15.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/C.mp3",
          favorited: false
        },
        {
          name: "D",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/16.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/D.mp3",
          favorited: false
        },
        {
          name: "Dream",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/17.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Dream.mp3",
          favorited: false
        },
        {
          name: "Dream.",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/18.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Dream..mp3",
          favorited: false
        },
        {
          name: "E",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/19.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/E.mp3",
          favorited: false
        },
        {
          name: "Evolution",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/20.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Evolution.mp3",
          favorited: false
        },
        {
          name: "F",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/1.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/F.mp3",
          favorited: false
        },
        {
          name: "Freedom To Fail",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/2.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Freedom To Fail.mp3",
          favorited: false
        },
        {
          name: "Harvey Dent",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/3.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Harvey Dent.mp3",
          favorited: false
        },
        {
          name: "Joker",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/4.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Joker.mp3",
          favorited: false
        },
        {
          name: "Joker.",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/5.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Joker..mp3",
          favorited: false
        },
        {
          name: "Joker..",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/6.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Joker...mp3",
          favorited: false
        },
        {
          name: "Joker...",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/7.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Joker....mp3",
          favorited: false
        },
        {
          name: "Keep Your Commitments",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/8.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Keep Your Commitments.mp3",
          favorited: false
        },
        {
          name: "Lex Luthor",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/9.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Lex Luthor.mp3",
          favorited: false
        },
        {
          name: "Lex Luthor.",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/10.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Lex Luthor..mp3",
          favorited: false
        },
        {
          name: "Lex Luthor..",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/11.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Lex Luthor...mp3",
          favorited: false
        },
        {
          name: "Lex Luthor's",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/12.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Lex Luthor's.mp3",
          favorited: false
        },
        {
          name: "Opportunities",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/13.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Opportunities.mp3",
          favorited: false
        },
        {
          name: "Steve Rogers",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/14.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Steve Rogers.mp3",
          favorited: false
        },
        {
          name: "Target",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/15.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Target.mp3",
          favorited: false
        },
        {
          name: "Thones",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/16.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Thones.mp3",
          favorited: false
        },
        {
          name: "Ultron",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/17.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Ultron.mp3",
          favorited: false
        },
        {
          name: "Ultron.",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/18.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Ultron..mp3",
          favorited: false
        },
                {
          name: "Ultron..",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/19.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Ultron...mp3",
          favorited: false
        },
        {
          name: "Zindagi",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/20.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Zindagi.mp3",
          favorited: false
        },
        {
          name: "Zola",
          artist: "Sabir",
          cover: "https://raw.githubusercontent.com/sabiransari1/music-player/main/img/21.jpg",
          source: "https://raw.githubusercontent.com/sabiransari1/music-player/main/music/dialogues/Zola.mp3",
          favorited: false
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
