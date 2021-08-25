/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-south-1",
  endpoint: "http://dynamodb.ap-south-1.amazonaws.com",
  accessKeyId: "AKIAV3KNKFMUXOTROBJH",
  secretAccessKey: "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",
});

const dynamoHelper = {
  getAllRecords: (tableName) => {
    return new Promise((resolve, reject) => {
      let params = {
        TableName: tableName,
        Select: "ALL_ATTRIBUTES",
      };
      dynamoHelper
        .scanRecord(params)
        .then((data) => {
          resolve(data);
          return;
        })
        .catch((err) => {
          reject(err);
          return;
        });
    });
  },
  getRecord: (params) => {
    let dyanamo = new AWS.DynamoDB.DocumentClient();
    return new Promise((resolve, reject) => {
      dyanamo.get(params, (err, data) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(data);
          return;
        }
      });
    });
  },
  updateRecord: (params) => {
    let dyanamo = new AWS.DynamoDB.DocumentClient();
    return new Promise((resolve, reject) => {
      dyanamo.update(params, (err, data) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(data);
          return;
        }
      });
    });
  },
  scanRecord: (scanParams) => {
    let dyanamo = new AWS.DynamoDB.DocumentClient();
    return new Promise((resolve, reject) => {
      dyanamo.scan(scanParams, (err, data) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(data);
          return;
        }
      });
    });
  },
  putRecord: (params) => {
    let dyanamo = new AWS.DynamoDB.DocumentClient();
    return new Promise((resolve, reject) => {
      dyanamo.put(params, (err, data) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve({
            message: "Data Saved Successfully",
            status: "success",
          });
          return;
        }
      });
    });
  },
  deleteRecord: (deleteParams) => {
    let dyanamo = new AWS.DynamoDB.DocumentClient();
    return new Promise((resolve, reject) => {
      dyanamo.delete(deleteParams, (err, data) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve({
            message: "Data Deleted successfully",
            status: "success",
          });
          return;
        }
      });
    });
  },
};

export default dynamoHelper;