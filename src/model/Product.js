
class Product {
    constructor(member_id, product_name, product_intro, categories, quantity, price){
        this.product_id = '';
        this.member_id = member_id;
        this.product_name = product_name;
        this.product_intro = product_intro;
        this.categories = categories;
        this.quantity = quantity;
        this.price = price;
        this.upload_date = '';
    }

    toProduct(productObj){
        return Product(
            productObj.member_id,
            productObj.product_name,
            productObj.product_intro,
            productObj.categories,
            productObj.quantity,
            productObj.price
        );
    }
}

export default Product;