import { LightningElement, api } from 'lwc';

export default class Container extends LightningElement {
    @api
    items = [
        {
            image : "https://static.parade.com/wp-content/uploads/2018/12/free-christmas-coffee-ftr.jpg",
            alt : "Gingerbread Latte",
            desc : "Our signature blend espresso with a secret blend of gengerbread spices perfect for that cold winter weather",
            name : "Gingerbread Latte"
        },
        {
            image : "https://static.parade.com/wp-content/uploads/2018/12/free-christmas-coffee-ftr.jpg",
            alt : "Gingerbread Latte",
            desc : "Our signature blend espresso with a secret blend of gengerbread spices perfect for that cold winter weather",
            name : "Gingerbread Latte"
        },
        {
            image : "https://static.parade.com/wp-content/uploads/2018/12/free-christmas-coffee-ftr.jpg",
            alt : "Gingerbread Latte",
            desc : "Our signature blend espresso with a secret blend of gengerbread spices perfect for that cold winter weather",
            name : "Gingerbread Latte"
        }
    ]
}