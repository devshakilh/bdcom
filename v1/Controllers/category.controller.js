const express = require("express");
const {
    getcategoryervice,
    postcategoryervice,
    deletecategoryervice,
    updatecategoryervice,
} = require("../Services/category.service");

const getcategoryController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);

        const { search, skip, page, ...more } = query
        console.log(more);

        const products = await getcategoryervice(query);
        // console.log(products);
        if (products.length === 0) {
            return res.status(200).json({
                message: "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};
const postcategoryController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const products = await postcategoryervice(data);
        console.log(products);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deletecategoryController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const products = await deletecategoryervice(query);
        console.log(products);
        if (products.acknowledged && !products.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (products.acknowledged && products.deletedCount) {

            return res.status(200).json({
                status: "Successful",
                message: "Data deleted successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        res.json(error);
    }
};
const updatecategoryController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const products = await updatecategoryervice(query, data);
        console.log(products);
        if (products.acknowledged && !products.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        }
        else if (products.matchedCount && products.modifiedCount) {

            return res.status(200).json({
                status: "Successful",
                message: "Data update successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    getcategoryController,
    postcategoryController,
    deletecategoryController,
    updatecategoryController,
};