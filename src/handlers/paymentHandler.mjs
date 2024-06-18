// import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
// import { db } from '../../../src/config/firebase.js'

import mercadopago from 'mercadopago';
import 'dotenv/config';
 
mercadopago.configure({
    access_token:"APP_USR-990485322663201-061813-37f376d0101df8a4a88cfe462b2a54bc-1863667496",
})

export const createPayment = async(req, res)=>{
    let preference = {
        items: [
          {
            title: req.body.description,
            unit_price: Number(req.body.price),
            quantity: Number(req.body.quantity),
          },
        ],
        back_urls: {
            success:`https://api.whatsapp.com/send?phone=543487729882&text=He%20pedido%20${encodeURIComponent(req.body.description)},%20por%20donde%20podria%20buscar%20los%20productos%3F`,
            failure: `https://api.whatsapp.com/send?phone=543487729882&text=He%20querido%20comprar%20${encodeURIComponent(req.body.description)}%20pero%20el%20pago%20ha%20fallado,%20podrían%20ayudarme%3F`,
        },
        auto_return: "approved"
      };
    
      mercadopago.preferences
  .create(preference)
  .then(function (response) {
    res.json({id : response.body.id})
  })
  .catch(function (error) {
    console.log(error);
  });
};
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