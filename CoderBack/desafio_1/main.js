class ProductManager {
    
    constructor() {
        this.product = []      
    }

    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock) {
        for (let i = 0; i < this.product.length; i++){
            if (this.product[i].code === code) {
                console.log (`el codigo ${code} esta repetido`);
                
            }
        }


        ProductManager.id++
        this.product.push({title, description, price, thumbnail, code, stock, id:ProductManager.id });
    }

    getProduct(){
        return this.product;
    }

    getProductById(id){
        if(!this.product.find((producto) => producto.id === id)){
            console.log("not found")
        }else{
            console.log(this.product.find((producto) => producto.id === id))
        }
    }
}

const product = new ProductManager

//agregar productros
product.addProduct("Ford", "vehiculo", 1000, "imagen1", "abc123", 5);
product.addProduct("Honda", "vehiculo", 1200, "imagen2", "abc124", 5);

console.log(product.getProduct());

//llamar producto por id
product.getProductById(2)

//verificar si el code está repetido
product.addProduct("Honda", "vehiculo", 1200, "imagen2", "abc124", 5);
