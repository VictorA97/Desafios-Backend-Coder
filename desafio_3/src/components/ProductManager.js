import {promises as fs} from "fs"
import { json } from "stream/consumers";

export default class ProducManager {
    constructor(){
        this.patch = "./productos.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title, description, price, imagen, code, stock) =>{

        ProducManager.id++
        
        let newProduct = {
            title,
            description,
            price,
            imagen,
            code,
            stock,
            id: ProducManager.id
        };

        this.products.push(newProduct);


        await fs.writeFile(this.patch, JSON.stringify(this.products));
    };

    readProducts = async () =>{
        let respuesta = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    };

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
       return console.log (respuesta2)     
    };

    getProductsById = async (id) =>{
       let respuesta3 = await this.readProducts()
       let filter = respuesta3.find(products => products.id === id)

       console.log(filter)
    };

    deleteProductById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productFilter));
    };

    updateProducts = async ({id, ...producto}) => {
        await this.deleteProductById(id);
        let productOld = await this.readProducts()
        let productsModif = [{id, ...producto}, ... productOld];
        await fs.writeFile(this.patch, JSON.stringify(productsModif));
    };

}

//const productos = new ProducManager();

              //agregar productos 
/* productos.addProduct("Titulo1", "Description1",1000, "imagen1", "abc123", 5);
productos.addProduct("Titulo2", "Description2",2000, "imagen2", "abc124", 10);
productos.addProduct("Titulo3", "Description3",3000, "imagen3", "abc125", 14);
productos.addProduct("Titulo4", "Description4",4000, "imagen4", "abc126", 51);
productos.addProduct("Titulo5", "Description5",5000, "imagen5", "abc127", 4);
productos.addProduct("Titulo6", "Description6",6000, "imagen6", "abc128", 7);
productos.addProduct("Titulo7", "Description7",7000, "imagen7", "abc129", 8);
productos.addProduct("Titulo8", "Description8",8000, "imagen8", "abc133", 91);
productos.addProduct("Titulo9", "Description9",9000, "imagen9", "abc143", 12);
productos.addProduct("Titulo10", "Description10",10000, "imagen10", "abc153", 52);
*/


               //obtener productos
//productos.getProducts();


                 //buscar producto por ID
//productos.getProductsById(2);


                // Eliminar Producto
//productos.deleteProductById(2);


                //Modificar Productos
/*productos.updateProducts({title: 'Titulo1',
    description: 'Description1',
    price: 3000,
    imagen: 'imagen1',
    code: 'abc123',
    stock: 5,
    id: 1
})
*/

