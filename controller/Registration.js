const fs = require('fs')
const path = require('path')
const {v4: uuidv4} = require('uuid')

const Registration = (req, res) => {
    const { name, email, phone, startDate } = req.body

    if (!name || !email || !phone || !startDate) {
        return res.status(400).json({ message: 'Please fill all the fields' })
    }

    const filePath = path.join(__dirname, '../public/data.json')
    console.log(filePath);
    

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const newMember = {
        id: uuidv4(),
        name,
        email,
        phone,
        startDate,
        status: 'active'
    }

    data.push(newMember)

    fs.writeFileSync(filePath, JSON.stringify(data,null, 2))

    res.status(201).json({ message: 'Membership registered successfully', member: newMember })
}

module.exports = Registration