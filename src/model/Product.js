
class Product {
    constructor(product_id, member_id, product_name, product_intro, categories, quantity, price,upload_date){
        this.product_id = product_id;
        this.member_id = member_id;
        this.product_name = product_name;
        this.product_intro = product_intro;
        this.categories = categories;
        this.quantity = quantity;
        this.price = price;
        this.upload_date = upload_date;
    }
}

export default Product;