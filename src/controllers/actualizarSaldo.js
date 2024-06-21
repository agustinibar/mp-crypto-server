const { doc, getDoc, updateDoc } = require("firebase/firestore");
const { db } = require('../firebase/config');

const actualizarSaldoUsuario = async (userId, amount) => {
    try {
      const userRef = doc(db, "users", userId);
      const userDoc = await getDoc(userRef);
  
      if (userDoc.exists()) {
        const currentSaldo = userDoc.data().saldo || 0;
        await updateDoc(userRef, {
          saldo: currentSaldo + amount
        });
      } else {
        console.log("No se encontro un documento!");
      }
    } catch (error) {
      console.error("Ocurrio un error al actualizar saldo: ", error);
    }
  };

  module.exports = { actualizarSaldoUsuario }