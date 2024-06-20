import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from '../firebase/firebase'
export function useGetData(collectionName, id = null) {

    const [resource, setResource] = useState({})
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setLoading(true)

            if (id) {
                const docSnapshot = doc(db, collectionName, id);
                const data = await getDoc(docSnapshot);
                setResource(data.data())
            } else {
                const docSnapshot = collection(db, collectionName);
                const dataSet = await getDocs(docSnapshot);
                let temp = []
                dataSet.forEach(data => {
                    const res = data.data()
                    temp.push({ id: data.id, ...res })
                })
                setResource({ data: temp })
            }
            setLoading(false)
        })()
    }, [collection, id])
    return [resource, isLoading]
}
