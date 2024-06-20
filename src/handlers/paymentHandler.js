//     items:[
//         {
//             title:req.body.tittle,
//             unit_price:Number(req.body.price),
//             quantity:Number(req.body.quantity)
//         }
//     ]
// }
const {MercadoPagoConfig, Preference} = require('mercadopago');

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-990485322663201-061813-37f376d0101df8a4a88cfe462b2a54bc-1863667496'})

const preference = new Preference(client);

const createPayment = async(req, res)=>{
    try {
        preference.create({
            body:{
                items: [
                              {
                                title: req.body.description,
                                unit_price:req.body.price,
                                quantity: Number(req.body.quantity),
                              },
                            ],
                            back_urls: {
                                success:`http://localhost:5173/wallet`,
                                failure: `http://localhost:5173/wallet`,
                            },
                            auto_return: "approved"
                          }
                        }).then(function (response) {
                                res.json({id : response.body.id})
                              })
                        .catch(console.log);
                    } catch (error) {
                        console.log(error)
                    }
                }
                
                module.exports = {
                    createPayment
                }
// export const createPayment = async(req, res)=>{
//     let preference = {
//        
    
//       mercadopago.preferences
//   .create(preference)
//   .then(function (response) {
//     res.json({id : response.body.id})
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// };


// try {
//   const result = await mercadopago.preferences.create({
//       items:[
//           {
//               title: "Rent DreamLodge",
//               unit_price: Number(req.body.price),
//               currency_id: "ARS",
//               quantity: 1,
//           },
//       ],
//       back_urls: {
//           success:"https://dreamlodgeprueba.web.app/nice",
//           failure:"https://dreamlodgeprueba.web.app/failure"
//       },
//       auto_return: "approved"
//   })

//   // console.log(result)
//   res.send(result.body)
    
// } catch (error) {
//     console.log(error)
//     return res.status(404).send(error)
// }
////////////////////////////////////////////////////////////
// export const listenWebHook = async(req, res)=>{
//     const payment = req.query;
//     try {
//         if(payment.type === "payment"){
//             const data = await mercadopago.payment.findById(payment['data.id'])
//             console.log(data)
//             const registerPurchase = async()=>{
//                 const netAmount =  data.transaction_details.net_received_amount;
//                 const userId =  data.metadata.user_id;
//                 const propertyId =  data.metadata.property_id;
//               try {
//                 const purchasesCollectionRef = collection(db, 'purchases');
                

//                 await addDoc(purchasesCollectionRef, {
//                     userId: userId,
//                     propertyId:propertyId ,
//                     totalAmount: netAmount,
//                     timestamp: serverTimestamp()
//                 })
//               } catch (error) {
//                 console.error(error)
//               }
//             }
//             await registerPurchase()
//         };
//         res.status(204)
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({message: error.message})
//     }
    
// };
/////////////////////////////////////////////////////////////////
// const registerPurchases = async (userId, propertyId) => {
//   try {
//     // Referencia a la colección "purchases"
//     const purchasesCollectionRef = collection(db, 'purchases');

//     // Agregar un nuevo documento con la información de la compra
//     await addDoc(purchasesCollectionRef, {
//       userId: userId,
//       propertyId: propertyId,
//       purchaseDate: serverTimestamp(), // Marca de tiempo del servidor
//     });

//     // console.log('Compra registrada exitosamente');
//   } catch (error) {
//     //console.error('Error al registrar la compra:', error);
//   }}