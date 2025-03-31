const fs = require('fs')
const path = require('path')


const ModifyMembership = (req, res) => {

    const filePath = path.join(__dirname, '../public/data.json')
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const { email, startDate } = req.body

    const memberIndex = data.findIndex(member => member.email === email)

    if (memberIndex === -1) {
        return res.status(404).json({ message: 'Member not found' })
    }

    data[memberIndex].startDate = startDate

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    

    return res.status(200).json({ message: 'Membership details updated successfully', member: data[memberIndex] })
}

module.exports = ModifyMembership