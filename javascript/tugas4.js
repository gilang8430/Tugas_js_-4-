function nilai(){
  var x = 171;
  var y = 160;
  var z = 155;

  if (x>170) {
    console.log("badan paling tertinggi ");
  }else if (x>165) {
    console.log("badan tidak terlalu tinggi");
  }else {
    console.log("tidak ada");
  }

  if (y<170) {
    console.log("badan paling tertinggi");
  }else if (y>165) {
    console.log("badan lumayan tinggi");
  }else if (y<165) {
    console.log("badan sedang");
  }else {
    console.log("badan sangat kecil");
  }

  if (z>170) {
    console.log("badan sangat tinggi");
  }else if (z>160) {
    console.log("badan lumayan tinggi");
  }else if (z<160) {
    console.log("badan terlalu kecil");
  }else {
    console.log("badan sangat kecil sekali");
  }
}

nilai()
