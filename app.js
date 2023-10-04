const wrapper = document.querySelector(".sliderWrapper");
/* Chọn hết tất cả thẻ có class là menuItem. */

const menuItems = document.querySelectorAll(".menuItem");

/* Thêm event handler cho từng thẻ. */


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/crater.png",
      },
      {
        code: "green",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
]


function changeProduct(products, index) {
    let image = document.getElementsByClassName("image");
    image[0].src = `${products[index].colors[0].img}`;
    let content = document.getElementsByClassName("content");
    content[0].innerHTML =`${products[index].title}`;
    let price = document.getElementsByClassName("productPrice");
    price[0].innerHTML = `$${products[index].price}`;

    /* Lấy thông tin bảng màu của từng mặt hàng cụ thể. Phần này được tối ưu rất hay ở CSS dòng 326 -> 348. */
    const colors = document.getElementsByClassName("color");
    colors[0].id = `${products[index].colors[0].code}`;
    colors[1].id = `${products[index].colors[1].code}`;
}

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    /* Mặc định thì transform: translateX(0vh) sẽ là vị trí gốc ban đầu. */
    wrapper.style.transform = `translateX(${-(100*index) + "vw"})`;

    /* Đoạn code này không liên quan tới phần thay đổi trục x của wrapper bên trên, chúng ta gọi hàm changeProduct với mục đích sẽ thay đổi hình ảnh, giá, thông tin sản phẩm, màu sắc, size của phần section#products phía dưới sau cho tương ứng với kiểu giày được chọn bên trên. */
    changeProduct(products, index);
  })
})

const colors = document.querySelectorAll('.color');
colors.forEach((element, index) => {
  element.addEventListener('click', () => {
    /* Lấy mã màu mà user muốn chọn. */
    const elementID = element.getAttribute("id");
    /* Lấy tên của sản phẩm hiện tại. */
    const productName = document.getElementsByClassName("content");


    /* nếu sản phẩm hiện tại có tên giống như title của phần tử products thứ i -> Thì so sánh màu hiện tại của sản phẩm với mày mà user muốn xem. */
    for (let i = 0; i < products.length; i++) {
      if(products[i].title == productName[0].innerHTML)
      {
        /* Thay đổi hình ảnh. */
        const image = document.getElementsByClassName("image");
        if(products[i].colors[0].code != elementID)
        {
          console.log(elementID);
          image[0].setAttribute('src', `${products[i].colors[1].img}`)
        }else if(products[i].colors[1].code != elementID)   {
          image[0].setAttribute('src',`${products[i].colors[0].img}`);
        }
        break;
      }
    }
  })
})

const buyBtn = document.querySelector('.BuyButton');
buyBtn.addEventListener('click', () => {
  document.querySelector('.payment').style.display = 'flex';
})

window.addEventListener('keydown', () => {
  if(event.key == 'Escape')
  document.querySelector('.payment').style.display = 'none';
})

const closeElement = document.querySelector('.close');
closeElement.addEventListener('click', () => {
  document.querySelector('.payment').style.display = 'none'
})


const links = document.querySelectorAll(".footerLink");
links.forEach((link, index) => {
  link.addEventListener('click', () => {
    wrapper.style.transform = `translateX(${-(100*index) + "vw"})`;
    changeProduct(products, index);
  })
})