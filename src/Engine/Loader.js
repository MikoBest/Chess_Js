function loadTexture(name){
  const image = new Image(30,30)
  image.src = `/assets/${name}`
  
  return image
}