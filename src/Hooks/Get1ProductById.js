import { useEffect, useState } from 'react';
import { database } from '../firebaseConfig';
import { ref, onValue } from 'firebase/database';


const useGet1ProductById = (id) => { 
    const [product, setProduct] = useState({}); 

    useEffect(() => {
        const productRef = ref(database, `products/${id}`);
        onValue(productRef, (snapshot) => {
            const data = snapshot.val();
            setProduct(data);
        });
    }, [id]);
    return product;
};
export default useGet1ProductById