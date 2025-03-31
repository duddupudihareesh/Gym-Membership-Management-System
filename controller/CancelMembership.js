const fs = require('fs')
const path = require('path')


const CancelMembership = (req, res) => {

    const filePath = path.join(__dirname, '../public/data.json')
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const { email } = req.body

    const memberIndex = data.findIndex(member => member.email === email)

    if (memberIndex === -1) {
        return res.status(404).json({ message: 'Member not found' })
    }

    if (data[memberIndex].status === 'inactive') {
        return res.status(400).json({ message: 'Membership already cancelled' })
    }
    data[memberIndex].status = 'inactive'

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

    return res.status(200).json({ message: 'Membership cancelled successfully', member: data[memberIndex] })
}

module.exports = CancelMembership