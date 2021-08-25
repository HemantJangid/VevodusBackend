"use strict";

import productServices from "../services/productServices.js";

const productController = {
    getAllProducts: (req, res) => {
        productServices.getAllProductsService().then((data) => {
            res.status(200).send({
                message: 'Products fetched successfully!',
                products: data
            })
        }).catch((err) => {
            res.status(400).send({
                message: 'An error occured',
                err: err
            })
        })
    },
    getProductById: (req, res) => {
        productServices.getProductByIdService(req).then((data) => {
            res.status(200).send({
                message: 'Product fetched successfully!',
                product: data
            })
        }).catch((err) => {
            res.status(400).send({
                message: 'An error occured',
                err: err
            })
        })
    },
    updateProductById: (req, res) => {
        productServices.updateProductByIdService(req).then((data) => {
            res.status(200).send({
                message: 'Product updated successfully!',
                product: req.body
            })
        }).catch((err) => {
            res.status(400).send({
                message: 'An error occured',
                err: err
            })
        })
    },
    addProduct: (req, res) => {
        productServices.addProductService(req).then((data) => {
            res.status(200).send({
                message: 'Product added successfully!',
                product: req.body
            })
        }).catch((err) => {
            res.status(400).send({
                message: 'An error occured',
                err: err
            })
        })
    }
}

export default productController;