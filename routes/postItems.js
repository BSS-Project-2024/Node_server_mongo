const Item = require('../models/Item')

const postItems = async (req, res) => {
  try {
    // Create a new item using the data from the request body
    console.log(req.body)
    const { predicted_list, web_url } = req.body
    const url = new URL(web_url)
    const domain = url.hostname

    const fileName = url.pathname.split('/').pop()

    if (predicted_list.length == 0) {
      return res.status(200).json('No dark pattern Inserted')
    }
    const data = predicted_list.map((darkPattern) => {
      return {
        text: darkPattern.text,
        web_url,
        domain: domain || fileName,
      }
    })
    console.log(data)

    const output = []
    for (const item of data) {
      try {
        const presentData = await Item.findOne({
          web_url: web_url,
          text: item.text,
        })
        if (presentData) {
        } else {
          const newItem = new Item(item)
          const savedItem = await newItem.save()
          output.push(savedItem)
        }
      } catch (err) {
        console.log(`Failed to insert item: ${item.text}`, err)
      }
    }

    res.status(201).json(output)
  } catch (err) {
    // Handle any errors during the saving process
    console.log(err)
    res
      .status(400)
      .json({ error: 'Failed to insert item', details: err.message })
  }
}

module.exports = postItems
