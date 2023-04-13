function getFibonacci(n){
    let a = 1, b = 1, j = 0;
  
    if (n < 1 || n>10 || typeof n !== "number")
        return "not allowed";
   else{

    const sir = [];
    sir[j] = a;
    j += 1;
    for (let i = 1; i < n; i++) {
        sir[j] = b;
        j += 1;
        let c = a + b;
        a = b;
        b = c;
    }
    return sir;
}

}
