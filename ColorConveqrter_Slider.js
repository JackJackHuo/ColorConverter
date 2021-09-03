const R = document.querySelector("#rInput")
const G = document.querySelector("#gInput")
const B = document.querySelector("#bInput")
const rgbInputs = document.querySelectorAll('.rgbInput input')
const rColor = document.querySelector("#rColor")
const gColor = document.querySelector("#gColor")
const bColor = document.querySelector("#bColor")
const HEX = document.querySelector("#hexInput")
const hexColor = document.querySelector("#hexColor")
const hexInput = document.querySelector('#hexInput')
const converter = document.querySelector(".converter")

function convert2Hex(){
  let R2Hex = Number(R.value).toString(16)
  let G2Hex = Number(G.value).toString(16)
  let B2Hex = Number(B.value).toString(16)

  if (R2Hex.length < 2) {
    R2Hex = R2Hex.unshift('0')
  }
  if (G2Hex.length < 2) {
    G2Hex = G2Hex.unshift('0')
  }
  if (B2Hex.length < 2) {
    B2Hex = B2Hex.unshift('0')
  }
  return R2Hex + G2Hex + B2Hex
}

String.prototype.unshift = function(string){
  let arr = [this]
  arr.unshift(string)
  return arr.join('')
}
converter.addEventListener('click', convertClicked = event => {
  console.log(event.target.value)
  const inputs = [...rgbInputs]
  if (inputs.some(input => isNaN(+input.value)
  )) {
    rgbInputs.forEach(input => input.value = '')
    return alert('please type number')
  }
  if (inputs.some(input => +input.value > 255 || input.value === ''
  )) {
    rgbInputs.forEach(input => input.value = '')
    return alert('please type number 0 ~ 255')
  }

  hexInput.value = `#${convert2Hex()}`
  rColor.setAttribute('style', `background-color:rgb(${R.value} , 0 , 0)`)
  rColor.textContent = R.value
  gColor.setAttribute('style', `background-color:rgb(0 , ${G.value} , 0)`)
  gColor.textContent = G.value
  bColor.setAttribute('style', `background-color:rgb(0 , 0 , ${B.value})`)
  bColor.textContent = B.value
  converter.setAttribute('style', `background-color:#${convert2Hex()}`)
})

