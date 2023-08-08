const category = require("../Models/category.model");

const getcategoryervice = async (query) => {
    const { search, ...more } = query;

    let searchFind;
    console.log(search);
    if (search) {
        console.log(searchFind);
        const result = await category.find({ $text: { $search: search } });

        return result;
    }
    const result = await category.find(more);
    return result;
};
const postcategoryervice = async (data) => {
    const result = await category.create(data);
    console.log(result);
    return result;
};

const deletecategoryervice = async (query) => {
    const result = await category.remove(query);
    console.log(result);
    return result;
};
const updatecategoryervice = async (query, data) => {
    const result = await category.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = {
    getcategoryervice,
    postcategoryervice,
    deletecategoryervice,
    updatecategoryervice,
};