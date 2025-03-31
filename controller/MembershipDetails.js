const fs = require('fs')
const path = require('path')

const MembershipDetails = (req, res) => {

    const filePath = path.join(__dirname, '../public/data.json')
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const { email } = req.body

    const member = data.find(member => member.email === email)

    if (!member) {
        return res.status(404).json({ message: 'Member not found' })
    }

    return res.status(200).json({ message: 'Membership details retrieved successfully', member })
}

module.exports = MembershipDetails