import layouts from "../layouts/productos.json";


export const pedirProductos = () => {
        return new Promise ((resolve, reject) => {
            resolve(layouts)
        })
    }


export const pedirItemPorId = (id) => {
    return new Promise ((resolve, reject) => {

        const item = layouts.find((el) => el.id === id);

        if (item){
            resolve(item)
        }else {
            reject({
                error:"No se encotró el producto"
            })
        }

    })
};