
/* Event listener for newsletter form */
document.querySelector("#newsletter-form").addEventListener("submit", event => {
  event.preventDefault();

  console.log("Send email");
})


/* Event listener for share with friend form */
document.querySelector("#share-with-friend").addEventListener("submit", event => {
  event.preventDefault();

  console.log("Share with friend");
})

/* mask handler */
function fMask(objeto,mask) {
  obj=objeto
  masker=mask
  setTimeout("fMaskEx()",1)
}

/* mask execution */
function fMaskEx() {
  obj.value=masker(obj.value)
}

/* mask function for CPF model */
function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
}

/* Fetch API */
async function getProducts() {
  /* Show products */
  function show(products) {
    let output = ''

    for(let product of products) {
      output += `
      <div class="product-container">
        <div class="product-image">
          <img src="${product.image}" alt="Imagem de ${product.name}" srcset="">
        </div>
        <span class="product-name">${product.name}</span>
        <p class="product-description">${product.description}</p>
        <span class="price-from">De: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.oldPrice)}</span>
        <span class="price-to">Por: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
        <span class="price-parceled">ou ${product.installments.count}x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.installments.value)}</span>

        <button class="buy-button">Comprar</button>
      </div>
    `
    }

    document.querySelector('.products').innerHTML = output
  }

  try {
    const response = await fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    const data = await response.json()

    console.log(data)

    show(data.products)
  } catch (error) {
    console.log(error)
    alert("Houve um erro ao carregar os produtos");
  }
}

getProducts();