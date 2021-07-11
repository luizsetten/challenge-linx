
/* Event listener for newsletter form */
document.querySelector("#newsletter-form").addEventListener("submit", event => {
  event.preventDefault()

  console.log("Send email");
  window.location.href = './pages/email.html';
})

/* Event listener for share with friend form */
document.querySelector("#share-with-friend").addEventListener("submit", event => {
  event.preventDefault()

  console.log("Share with friend")
})

/* Event listener for button "Seus produtos" */
document.querySelector("#go-linx-button").addEventListener("click", () => {
  window.location.href = "https://www.linx.com.br" 
})

/* Event listener for button "Conheça a Linx" */
document.querySelector("#go-to-products").addEventListener("click", () => {
  const products = document.querySelector(".products")
  products.scrollIntoView({
    behavior: "smooth"
  })
})

/* Event listener for button "Compartilhe" */
document.querySelector("#go-to-newsletter").addEventListener("click", () => {
  const products = document.querySelector(".newsletter-container")
  products.scrollIntoView({
    behavior: "smooth"
  })
})

/* Event listener for button "Compartilhe" */
document.querySelector("#share-button").addEventListener("click", () => {
  const products = document.querySelector("#share-with-friend")
  products.scrollIntoView({
    behavior: "smooth"
  })
})
