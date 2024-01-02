new Vue({
  el: '#app',
  data: {
    language: localStorage.getItem('language') || 'ar',
    languages: {
      en: {
        name: "Nadeen Mohammed",
        desc: "Graphic Designer",
        about: 'About',
        portfolio: 'Portfolio',
        myServices: 'My Services',
        contact: 'Contact',
        bio: "I am Nadeen Mohammed, a freelance graphic designer with exceptional skills that go beyond traditional design. I have a unique ability to express identity and spirit through logo and brand design, creating distinctive visual elements that leave a lasting impression, With the diversity in my work, I consider myself a multi-talented design artist. With each project, I embark on a creative journey telling a unique story, always emphasizing the delivery of the highest quality and excellence in every creation I undertake.",
        services: [
          "Brand & Logo Designe",
          "Poster & Flyer design",
          "Infographic Design",
          "Social Media Design",
          "Advertising Designs",
          "ٌٌٌRestaurant Menu Design",
          "ui & ux Design",
          "Personal Cards Design",
        ]

      },
      ar: {
        name: "نادين محمد",
        desc: "مصممة جرافيك محترفة",
        about: 'من أنا؟',
        portfolio: 'أعمالي',
        myServices: 'خدماتي',
        contact: 'تواصل معي',
        bio: 'أنا نادين محمد، مصممة جرافيك تمتلك مهارات فائقة تتجاوز حدود التصميم التقليدي. لدي قدرة فائقة على التعبير عن الهوية والروح من خلال تصميم الشعارات والعلامات التجارية، حيث أبني عناصر بصرية فريدة لترك انطباع دائم، بفضل التنوع في أعمالي، أعتبر نفسي فنانة تصميم متعددة المواهب. مع كل مشروع، أنطلق في رحلة إبداعية تحكي قصة فريدة، وأؤكد دائمًا على تقديم أعلى مستويات الجودة والتميز في كل إبداع أقوم به',
        services: [
          "تصميم الشعارات الهويات البصرية",
          "تصميم البوسترات والفلايرات",
          "تصميم انفوجافيك",
          "تصميم اعلانات السوشيال ميديا",
          "تصميم الإعلانات التجارية",
          "تصميم قوائم المطاعم والكفتيريات",
          "تصميم واجهات المستخدم ui/ux",
          "تصميم البطاقات الشخصصية",
        ]
      },
    },
    content: 'default',
    images: [
      './assets/img/1.jpeg',
      './assets/img/2.jpeg',
      './assets/img/3.jpeg',
      './assets/img/4.png',
      './assets/img/5.png',
      './assets/img/6.png',
      './assets/img/7.png',
      './assets/img/8.png',
      './assets/img/9.jpeg',
      './assets/img/10.jpeg',
      './assets/img/11.png',
      './assets/img/12.png',
      './assets/img/13.jpeg',
      './assets/img/14.jpeg',
      './assets/img/15.jpeg',
      './assets/img/16.jpeg',
      './assets/img/17.jpeg',
      './assets/img/18.png',
      './assets/img/19.png',
      './assets/img/20.jpeg',
      './assets/img/21.jpeg',
      './assets/img/22.jpeg',
      './assets/img/23.png',
      './assets/img/24.png',
      './assets/img/25.png',
      './assets/img/26.png',
      './assets/img/27.jpeg',
    ],
    contact: [
      { title: 'facebook', account: 'nadeen', icon: 'fab fa-facebook-f', link: '#!' },
      { title: 'twitter', account: 'nadeen', icon: 'fab fa-twitter', link: '#!' },
      { title: 'instagram', account: 'nadeen', icon: 'fab fa-instagram', link: '#!' },
      { title: 'linkedin', account: 'nadeen', icon: 'fab fa-linkedin', link: '#!' },
      { title: 'behance', account: 'nadeen', icon: 'fab fa-behance', link: '#!' },
      { title: 'youtube', account: 'nadeen', icon: 'fab fa-youtube', link: '#!' },
      { title: 'email', account: 'nadeen@gmail.com', icon: 'fa fa-mail-bulk', link: '#!' },
      { title: 'whatsapp', account: '+966 432 333 212', icon: 'fab fa-whatsapp', link: '#!' },
      { title: 'phone', account: '+966 432 333 212', icon: 'fa fa-mobile-alt', link: '#!' },
    ],
    currentNumber: 1,
    timer: null,
  },
  computed: {
    text: function () {
      return this.languages[this.language];
    },
    currentImage: function () {
      return this.images[Math.abs(this.currentNumber) % this.images.length];
    }
  },
  methods: {
    getLanguage: function () {
      if (localStorage.getItem('language') == null)
        this.setLanguage('en')
      return false;

    },
    setLanguage: function (lang) {
      localStorage.setItem('language', lang);
      this.language = lang;
    },
    setContent: function (content) {
      this.content = content;
      document.getElementById('show').scrollIntoView();
    },
    startRotation: function () {
      this.timer = setInterval(this.next, 3000);
    },
    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function () {
      this.currentNumber += 1
    },
    prev: function () {
      this.currentNumber -= 1
    }

  },
  mounted: function () {
    this.startRotation();
  },
  beforeMount: function () {
    this.getLanguage;
  },
}

)
