const Item = require('../models/Item');

const getItems = async (req, res) => {
    // try {
    //     // Define an aggregation pipeline to group items by domain and combine text values into an array
    //     const pipeline = [
    //         {
    //             // Group by domain and combine text values into an array
    //             $group: {
    //                 _id: '$domain', // Group by the 'domain' field
    //                 texts: { $push: '$text' }, // Combine text values into one array
    //             },
    //         },
    //         {
    //             // Project the results to include the domain and texts array, excluding other fields
    //             $project: {
    //                 _id: 0, // Exclude the MongoDB _id field from the result
    //                 domain: '$_id', // Rename _id to domain
    //                 texts: 1, // Include the texts array
    //             },
    //         },
    //     ];

    //     // Execute the aggregation pipeline
    //     const groupedData = await Item.aggregate(pipeline);

    //     // Send the grouped data as a JSON response
    //     res.json(groupedData);
    // } catch (err) {
    //     // Handle any errors during the retrieval process
    //     res.status(500).json({ error: 'Failed to retrieve items' });
    // }


    try {
        // Query the database and exclude the '_id' and '__v' fields using 'select' method
        const items = await Item.find().select('-_id -__v');
        
        // Send the query results as a JSON response
        res.json(items);
    } catch (err) {
        // Handle any errors during the retrieval process
        res.status(500).json({ error: 'Failed to retrieve items' });
    }
};

module.exports = getItems;
