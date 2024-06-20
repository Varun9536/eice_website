import formModel from "../models/formModel.js"


export const userdata = async (req, res) => {

    try {
        
        let { name, email, number, message } = req.body

        if(!name || !(email || number) || !message)
            {
                return res.status(400).json({result : "unsuccessful" , message : "please provide details properly"})
            }

        let data = await formModel.create({ user_name: name, email: email, contact_no: number, message: message })

        return res.status(200).json({ result: "successful", output: data, message: "data saved successfully" })

    } catch (error) {

        console.log(error, "error")
        return res.status(500).json({ result: "unsuccessful", message: "internal server error"})
    }

}


