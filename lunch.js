function whosPaying(names) {
    names = ["Henrique", "Luiz", "Emanuel"]
    const n = Math.floor(Math.random() * (names.length))

    console.log(names[n] + " is paying!");
}


whosPaying()