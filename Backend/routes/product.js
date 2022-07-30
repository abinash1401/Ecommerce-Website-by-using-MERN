const { response } = require('express');
const express = require('express');
const { dbConn } = require('../config/db');
const router = express.Router();
const {Product} = require('../models/product')


router.post("/product",async(req,res)=>{
    try{
        const{product_name,product_image,product_price,product_description} = req.body;
        if(product_name == '' && error == ''){
            error = 'Please enter product name!!',
            res.status(400).json({
                message:error
            });
        }

        if(product_price == '' && error == ''){
            error = 'Please enter product price!!',
            res.status(400).json({
                message:error
            });
        }
        
        if(product_image == '' && error == ''){
            error = 'Please enter product price!!',
            res.status(400).json({
                message:error
            });
        }

        if(product_description == '' && error == ''){
            error = 'Please enter product description!!',
            res.status(400).json({
                message:error
            });
        }

        const productobj ={
             product_name,
             product_image,
             product_price,
             product_description
         }

        const product = new Product(productobj);
        await product.save()
        res.status(201).json({
            Summary: "Product added successfully"
            // {
            //     mess:"Product added successfully",
            //     Display : product
            // } 
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})

router.get("/product",async(req,res)=>{
    try{
        const products = await Product.find();
        return res.status(200).json({ 
            message: "Products fetched successfully",
            products
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})

router.put("/product/:id",async(req,res)=>{
    try{
        const id = req.params.id
        console.log(id)
        const{product_name, product_price, product_image,product_description} = req.body
        await Product.findByIdAndUpdate(id,{product_name,product_image,product_price,product_description})
        return res.status(200).json({
            message: "Product updated successfully",
        })
    }
    catch(err){
        return res.status(500).json({
            message: "No such product found"
        }) 
    }
})

router.delete("/product/:id", async(req,res)=>{
    try{
        const id = req.params.id
        const pro_id = await Product.findOne({_id : id})
        if(!pro_id){
            return res.status(500).json({
                message : "No such product found"
            })
        }
        await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "Product deleted successfully"
        })
    }
    catch(err){ 
        return res.status(500).json({
            message: err.message
        })
    }
})
module.exports = router;


