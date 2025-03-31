const fs = require('fs')
const path = require('path')


const allActiveMembers = (req,res) => {

    const filePath = path.join(__dirname, '../public/data.json')
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const activeMembers = data.filter(member => member.status === 'active')

    res.status(200).json({ message: 'Active members retrieved successfully', members: activeMembers })
}

module.exports = allActiveMembers