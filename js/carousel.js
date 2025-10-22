
let carouselArr = [
  { image: "img/imagem_1.jpg", title: "Esta é a nova Ranger Ford 2022. Verifique novidades", url: "lancamento.html" },
  { image: "img/imagem_2.jpg", title: "Ford a nossa história", url: "lancamento.html" },
  { image: "img/imagem_3.jpg", title: "Nova Ford Bronco Sport 2022", url: "lancamento.html" }
];

class Carousel {
  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }

  static Start(arr) {
    if (arr && arr.length > 0) {
      Carousel._arr = arr;
      Carousel._sequence = 0;
      Carousel._size = arr.length;
      Carousel._show(0);
      
      Carousel._interval = setInterval(Carousel.Next, 2000);
      
      document.getElementById("carousel-next").addEventListener("click", Carousel.Next);
      document.getElementById("carousel-prev").addEventListener("click", Carousel.Prev);

    } else {
      throw "Method Start needs an array.";
    }
  }

  static Next() {
    clearInterval(Carousel._interval); 
    
    Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    Carousel._show(Carousel._sequence);
    
    Carousel._interval = setInterval(Carousel.Next, 2000);
  }

  static Prev() {
    clearInterval(Carousel._interval);
    
    Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
    Carousel._show(Carousel._sequence);
    
    Carousel._interval = setInterval(Carousel.Next, 2000);
  }

  static _show(index) {
    const item = Carousel._arr[index];
    const carouselDiv = document.getElementById("carousel");
    const titleDiv = document.getElementById("carousel-title");
    
    carouselDiv.innerHTML = `<a href="${item.url}"><img src="${item.image}" alt="${item.title}"></a>`;
    titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;
  }
}
