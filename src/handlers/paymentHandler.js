
const { MercadoPagoConfig, Preference } = require('mercadopago');

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-990485322663201-061813-37f376d0101df8a4a88cfe462b2a54bc-1863667496' });


const createPayment = async (req, res)=>{
     try {
        const body = {
            items:[
                {
                    tittle: req.body.description,
                    unit_price: req.body.price,
                    quantity: 1,
                    currency_id: "ARS",
                }
            ],
            back_urls: {
                success: "http://localhost:5173/wallet",
                failure: "https://www.instagram.com/",
                pending: "https://www.instagram.com/",
            },
            auto_return: "approved"
        };

        const preference = new Preference(client);
        const result = await preference.create({body:body})
        res.json({
            id: result.id,
        })
     } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia",
        })
     }
}

module.exports = { createPayment }
// const createPayment = async (req, res) => {
//     try {
//         const { description, price } = req.body;

//         if (!description || !price) {
//             return res.status(400).json({ error: 'Description and price are required' });
//         }

//         const preferenceData = {
//             items: [
//                 {
//                     title: description,
//                     unit_price: Number(price),
//                     quantity: 1,
//                     currency_id: "ARS",
//                 },
//             ],
//             back_urls: {
//                 success: `http://localhost:5173/wallet`,
//                 failure: `http://localhost:5173/wallet`,
//             },
//             auto_return: "approved"
//         };

//         const response = await preference.create({ body: preferenceData });

//         if (response && response.body && response.body.id) {
//             res.json({ id: response.body.id });
//         } else {
//             console.log('Invalid response from MercadoPago:', response);
//             res.status(500).json({ error: 'Failed to create payment preference' });
//         }
//     } catch (error) {
//         console.error('Error creating payment preference:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// module.exports = {
//     createPayment
// };
