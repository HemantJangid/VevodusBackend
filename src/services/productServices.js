"use strict";

import dynamoHelper from "../utility/dynamoDbHelper.js";

const productServices = {
    getAllProductsService: () => {
        return new Promise((resolve, reject) => {
            dynamoHelper.getAllRecords('Products').then(data => {
                resolve(data);
                return;
            }).catch(err => {
                reject(err);
                return;
            })
        })
    },
    getProductByIdService: (req) => {
        return new Promise((resolve, reject) => {
            let params = {
                TableName: 'Products',
                Key: {
                    "productId": req.params.id
                }
            }
            dynamoHelper.getRecord(params).then((data) => {
                resolve(data);
                return;
            }).catch((err) => {
                reject(err);
                return;
            })
        })
    },
    updateProductByIdService: (req) => {
        return new Promise((resolve, reject) => {
            let params = {
                TableName: 'Products',
                ReturnValues: 'UPDATED_NEW',
                Key: {
                    productId: req.params.id,
                },
                UpdateExpression: "set",
                ExpressionAttributeValues: {},
            };
            let data = req.body;

            const fieldsToUpdate = Object.keys(data);

            for (let i = 0; i < fieldsToUpdate.length; i++) {
                params.UpdateExpression += ` ${fieldsToUpdate[i]}=:${fieldsToUpdate[
                  i
                ].toLowerCase()}${i !== fieldsToUpdate.length - 1 ? "," : ""}`;
                params.ExpressionAttributeValues[`:${fieldsToUpdate[i].toLowerCase()}`] =
                    data[fieldsToUpdate[i]];
            }

            dynamoHelper.updateRecord(params).then((data) => {
                resolve(data);
                return;
            }).catch((err) => {
                reject(err);
                return;
            })
        })
    },
    addProductService: (req) => {
        return new Promise((resolve, reject) => {
            let params = {
                TableName: 'Products',
                Item: req.body
            }
            dynamoHelper.putRecord(params).then((data) => {
                resolve(data);
                return;
            }).catch((err) => {
                reject(err);
                return;
            })
        })
    }
}

export default productServices;